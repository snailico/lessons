# firewalld

动态防火墙管理器（RHEL / CentOS / Rocky / Fedora 等常用）。通过 **zone（区域）** 组织规则，运行时用 `firewall-cmd` 配置，支持「临时」与「永久」两套。

**类型**：系统服务 + 外部命令（需 root）

## 核心概念

| 概念 | 说明 |
| --- | --- |
| zone | 信任级别集合，如 `public`、`home`、`trusted`、`drop` |
| 运行时规则 | 立即生效，重启/reload 可能丢失（除非同时加永久） |
| 永久规则 | `--permanent` 写入配置，需 `--reload` 才应用到运行时 |
| service | 预定义端口集合，如 `ssh`、`http`、`https` |

默认 zone 多为 `public`。网卡会绑定到某个 zone。

## 服务启停

```bash
sudo systemctl status firewalld
sudo systemctl start firewalld
sudo systemctl enable firewalld
sudo systemctl stop firewalld    # 停用前确认有其它防护或临时排障
```

## 查看状态

```bash
# 是否运行
sudo firewall-cmd --state

# 默认 zone、活动 zone
sudo firewall-cmd --get-default-zone
sudo firewall-cmd --get-active-zones

# 当前 zone 已放行的 service / port
sudo firewall-cmd --list-all
sudo firewall-cmd --zone=public --list-all

# 预定义服务名
sudo firewall-cmd --get-services
```

## 放行端口 / 服务

```bash
# 临时放行（立即生效，reload 后可能丢失）
sudo firewall-cmd --add-service=http
sudo firewall-cmd --add-port=8080/tcp

# 永久放行 + 重载生效
sudo firewall-cmd --permanent --add-service=https
sudo firewall-cmd --permanent --add-port=8080/tcp
sudo firewall-cmd --reload

# 放行 SSH（改规则前先确认已放行）
sudo firewall-cmd --permanent --add-service=ssh
sudo firewall-cmd --reload
```

| 常用 | 说明 |
| --- | --- |
| `--add-service=name` | 按服务名放行 |
| `--remove-service=name` | 移除服务 |
| `--add-port=N/tcp\|udp` | 按端口放行 |
| `--remove-port=N/tcp\|udp` | 移除端口 |
| `--permanent` | 写入永久配置 |
| `--reload` | 重载永久规则到运行时 |
| `--runtime-to-permanent` | 把当前运行时规则存成永久 |

## 区域与网卡

```bash
# 设置默认 zone
sudo firewall-cmd --set-default-zone=public

# 将网卡绑到 zone（示例）
sudo firewall-cmd --permanent --zone=home --change-interface=eth0
sudo firewall-cmd --reload
```

## 富规则（rich rule）示例

```bash
# 仅允许某网段访问 22
sudo firewall-cmd --permanent --add-rich-rule='
  rule family="ipv4"
  source address="192.168.1.0/24"
  port port="22" protocol="tcp" accept'

# 拒绝某 IP
sudo firewall-cmd --permanent --add-rich-rule='
  rule family="ipv4"
  source address="203.0.113.10"
  reject'

sudo firewall-cmd --reload
```

## 临时排障

```bash
# Panic：丢弃所有流量（慎用，含 SSH）
# sudo firewall-cmd --panic-on
# sudo firewall-cmd --panic-off

# 列出全部 zone 的详细配置
sudo firewall-cmd --list-all-zones | less
```

::: danger
`--panic-on` 会切断几乎所有连接。远程环境不要使用。改 zone / 删 ssh 服务前，保留可用会话并确认已放行管理端口。
:::

## 与 iptables 的关系

firewalld 会管理底层 netfilter 规则。运行 firewalld 时，日常请用本文的 `firewall-cmd`，不要直接 [iptables](./iptables) 手改（易被 reload 冲掉）。

查底层（仅调试）：

```bash
sudo iptables -L -n -v
# 或较新系统
sudo nft list ruleset | less
```

总览：[防火墙使用说明](./firewall)。
