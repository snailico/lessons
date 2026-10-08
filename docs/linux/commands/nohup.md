# nohup

脱离终端运行，SSH 断开后仍继续

**类型**：外部命令

## 语法

```bash
nohup command &
```

## 示例

```bash
nohup ./server > server.log 2>&1 &
# 默认还会写 nohup.out（若未重定向）
```
