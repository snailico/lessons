# ps

查看进程快照

**类型**：外部命令

## 语法

```bash
ps [options]
```

## 常用选项 / 用法

| 常用 | 说明 |
| --- | --- |
| `ps -ef` | 全进程完整格式 |
| `ps aux` | BSD 风格常用写法 |

## 示例

```bash
ps -ef | head
ps aux | head
```
