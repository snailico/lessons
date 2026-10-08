# grep

文本搜索与正则匹配

**类型**：外部命令

## 语法

```bash
grep [options] PATTERN [file...]
```

## 常用选项 / 用法

| 选项 | 说明 |
| --- | --- |
| `-i` | 忽略大小写 |
| `-n` | 显示行号 |
| `-v` | 反向过滤 |
| `-r` | 递归目录 |

## 示例

```bash
grep -n 'ERROR' app.log
grep -rv 'DEBUG' .
```

## 注意

退出码：0 有匹配，1 无匹配，≥2 错误。
