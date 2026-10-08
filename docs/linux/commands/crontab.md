# crontab

编辑 / 查看当前用户定时任务

**类型**：外部命令

## 语法

```bash
crontab -e
crontab -l
```

## 常用选项 / 用法

| 选项 | 说明 |
| --- | --- |
| `-e` | 编辑 |
| `-l` | 列出 |
| `-r` | 删除全部（慎用） |

## 示例

```bash
crontab -l
crontab -e
# 例：每分钟
# * * * * * /path/to/job.sh
```

## 注意

写绝对路径；注意环境变量与权限。
