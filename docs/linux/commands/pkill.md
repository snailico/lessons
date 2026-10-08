# pkill

按进程名发送信号

**类型**：外部命令

::: danger
操作不可轻易撤销，执行前确认路径与参数。
:::

## 语法

```bash
pkill [options] pattern
```

## 示例

```bash
pkill -f 'node.*server'
```

## 注意

匹配过宽会误杀进程，先 `pgrep -a` 核对。
