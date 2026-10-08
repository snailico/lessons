# find

按名称、大小、时间等递归查找

**类型**：外部命令

## 语法

```bash
find [path...] [expression]
```

## 常用选项 / 用法

| 表达式 | 说明 |
| --- | --- |
| `-name '*.log'` | 按名 |
| `-type f/d` | 文件/目录 |
| `-mtime -7` | 7 天内修改 |
| `-size +10M` | 大于 10MB |

## 示例

```bash
find . -name '*.log' -type f
find /var/log -mtime -1 -type f
```

## 注意

慎用 `-delete` / `-exec`；查找后先核对再删。
