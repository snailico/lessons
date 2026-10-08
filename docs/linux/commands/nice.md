# nice / renice

调整进程调度优先级

**类型**：外部命令

## 语法

```bash
nice [-n N] command
renice N -p PID
```

## 常用选项 / 用法

| 概念 | 说明 |
| --- | --- |
| nice 值越大 | 优先级越低（更“礼让”） |
| `nice -n 10 cmd` | 以较低优先级启动 |
| `renice` | 调整已运行进程 |

## 示例

```bash
nice -n 10 ./build.sh
sudo renice 5 -p 1234
```
