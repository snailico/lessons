# uniq

去除相邻重复行（常先 sort）

**类型**：外部命令

## 语法

```bash
uniq [options]
```

## 常用选项 / 用法

| 选项 | 说明 |
| --- | --- |
| `-c` | 计数 |

## 示例

```bash
sort names.txt | uniq -c | sort -nr
```
