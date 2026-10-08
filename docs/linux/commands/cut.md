# cut

按分隔符切割并提取列

**类型**：外部命令

## 语法

```bash
cut -d DELIM -f FIELDS [file]
```

## 示例

```bash
cut -d: -f1,3 /etc/passwd | head
```
