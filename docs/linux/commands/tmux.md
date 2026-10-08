# tmux / screen

会话持久化：SSH 断开后程序继续跑

**类型**：外部命令

## 语法

```bash
tmux
screen
```

## 常用选项 / 用法

| 工具 | 常用 |
| --- | --- |
| tmux | `tmux` 新建，`tmux a` 附着 |
| screen | `screen`，`screen -r` 恢复 |

## 示例

```bash
tmux
# 断开：Ctrl+b d
tmux ls
tmux a
```

## 注意

需单独安装。推荐优先学 tmux。
