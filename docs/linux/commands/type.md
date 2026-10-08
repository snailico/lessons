# type

查看命令是内置还是外部程序

**类型**：Shell 内置

## 语法

```bash
type name
```

## 示例

```bash
type cd
# cd is a shell builtin
type ls
# ls is /bin/ls  或 hashed
```

## 注意

用来区分内置 / 外部；也可用 `which` 查外部路径。
