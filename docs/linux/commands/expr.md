# expr

整数运算、字符串截取（老式外部工具）

**类型**：外部命令

## 语法

```bash
expr expression
```

## 示例

```bash
expr 3 + 4
# 7
expr length hello
```

## 注意

优先使用 bash 内置算术 `$(( ))` 与参数展开。
