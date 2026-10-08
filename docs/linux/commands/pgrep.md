# pgrep

按进程名获取 PID

**类型**：外部命令

## 语法

```bash
pgrep [options] pattern
```

## 常用选项 / 用法

| 选项 | 说明 |
| --- | --- |
| `-a` | 显示完整命令行 |
| `-f` | 匹配完整命令行 |

## 示例

```bash
pgrep -a sshd
```
