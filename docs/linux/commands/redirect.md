# 管道与重定向

Shell 语法：管道与输入输出重定向（非独立程序）

**类型**：Shell 内置

## 语法

```bash
cmd1 | cmd2
cmd > file
cmd >> file
cmd &
cmd 2>&1
```

## 常用选项 / 用法

| 语法 | 说明 |
| --- | --- |
| `\|&` 末尾 `&` | 放到后台运行 |
| `\|` | 前命令 stdout 传给后命令 |
| `>` | 覆盖写入文件 |
| `>>` | 追加写入 |
| `2>&1` | stderr 并入 stdout |

## 示例

```bash
ps aux | grep nginx
echo hello > out.txt
echo more >> out.txt
sleep 60 &
```

## 注意

重定向会覆盖文件时务必确认路径。
