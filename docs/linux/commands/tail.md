# tail

查看文件末尾；可实时跟踪

**类型**：外部命令

## 语法

```bash
tail [-n N] [-f] file
```

## 常用选项 / 用法

| 选项 | 说明 |
| --- | --- |
| `-n 50` | 末 50 行 |
| `-f` | 实时跟踪追加 |

## 示例

```bash
tail -n 50 app.log
tail -f /var/log/syslog
```
