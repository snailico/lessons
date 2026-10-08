# nc

端口探测与简单 TCP/UDP 测试（netcat）

**类型**：外部命令

## 语法

```bash
nc [options] host port
```

## 示例

```bash
nc -zv example.com 443
# 探测端口是否开放
```

## 注意

不同系统可能是 `nc` / `ncat` / `netcat`。
