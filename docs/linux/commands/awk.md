# awk

按列解析与简单脚本逻辑的文本处理

**类型**：外部命令

## 语法

```bash
awk 'program' [file]
```

## 示例

```bash
awk -F: '{print $1,$3}' /etc/passwd | head
df -h | awk 'NR==1 || /\/$/{print}'
```

## 注意

擅长「按列 + 条件」；复杂逻辑可写小脚本。
