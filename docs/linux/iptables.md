# iptables

基于内核 netfilter 的包过滤工具：按 **表（table）** 与 **链（chain）** 匹配报文并执行动作（ACCEPT / DROP / REJECT 等）。

**类型**：外部命令（需 root）

## 核心概念

| 概念 | 说明 |
| --- | --- |
| `filter` 表 | 最常用：决定放行或丢弃（INPUT / FORWARD / OUTPUT） |
| `nat` 表 | 网络地址转换（SNAT / DNAT / MASQUERADE） |
| `mangle` 表 | 修改报文元数据（较少日常用） |
| INPUT | 进入本机的流量 |
| OUTPUT | 本机发出的流量 |
| FORWARD | 经本机转发的流量（路由/网关） |

默认策略（policy）决定「没命中任何规则」时怎么办：`ACCEPT` 或 `DROP`。

## 语法

```bash
iptables [options] [chain] [rule-spec] [-j target]
```

## 查看规则

```bash
# 列出 filter 表全部规则（带行号、解析服务名）
sudo iptables -L -n -v --line-numbers

# 只看 INPUT
sudo iptables -L INPUT -n -v --line-numbers

# 看 nat 表
sudo iptables -t nat -L -n -v --line-numbers
```

| 选项 | 说明 |
| --- | --- |
| `-L` | 列出规则 |
| `-n` | 不反查域名，更快 |
| `-v` | 显示计数与接口等详情 |
| `--line-numbers` | 显示规则序号（方便删除指定行） |
| `-t table` | 指定表，默认 `filter` |

## 常用放行 / 拒绝

```bash
# 放行本机回环
sudo iptables -A INPUT -i lo -j ACCEPT

# 放行已建立/相关连接（很重要，否则回包可能被拦）
sudo iptables -A INPUT -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT
# 老系统也可能写作：-m state --state ESTABLISHED,RELATED

# 放行 SSH（先做这一步再改默认策略！）
sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT

# 放行 HTTP / HTTPS
sudo iptables -A INPUT -p tcp --dport 80 -j ACCEPT
sudo iptables -A INPUT -p tcp --dport 443 -j ACCEPT

# 放行 ICMP（ping）
sudo iptables -A INPUT -p icmp -j ACCEPT

# 拒绝某 IP 访问
sudo iptables -A INPUT -s 203.0.113.10 -j DROP
```

| 匹配 | 说明 |
| --- | --- |
| `-A CHAIN` | 追加到链尾 |
| `-I CHAIN [num]` | 插入到链首或指定行 |
| `-p tcp/udp/icmp` | 协议 |
| `--dport` / `--sport` | 目的 / 源端口 |
| `-s` / `-d` | 源 / 目的地址 |
| `-i` / `-o` | 入 / 出网卡 |
| `-j ACCEPT\|DROP\|REJECT` | 动作 |

## 默认策略与清空

```bash
# 查看策略
sudo iptables -L -n | head

# 将 INPUT 默认改为丢弃（务必先放行 SSH）
sudo iptables -P INPUT DROP
sudo iptables -P FORWARD DROP
sudo iptables -P OUTPUT ACCEPT

# 清空某链规则（危险）
sudo iptables -F INPUT

# 清空全部 filter 规则
sudo iptables -F
```

::: danger
`iptables -F` 或把策略改成 `DROP` 前，确认 SSH 与管理端口已有 ACCEPT 规则，并保留一个可用会话。
:::

## 删除规则

```bash
# 按行号删除（先 --line-numbers 查看）
sudo iptables -D INPUT 3

# 按规则本身删除
sudo iptables -D INPUT -p tcp --dport 80 -j ACCEPT
```

## 持久化

重启后内存规则会丢，需按发行版保存：

```bash
# RHEL / CentOS（iptables-services）
sudo service iptables save
# 或
sudo iptables-save | sudo tee /etc/sysconfig/iptables

# Debian / Ubuntu（iptables-persistent）
sudo apt install iptables-persistent
sudo netfilter-persistent save
# 规则常在 /etc/iptables/rules.v4
```

恢复：

```bash
sudo iptables-restore < /path/to/rules.v4
```

## 与 firewalld 的关系

若系统在跑 [firewalld](./firewalld)，它会接管防火墙；直接改 iptables 可能被覆盖。应二选一，或只用 `firewall-cmd`。
