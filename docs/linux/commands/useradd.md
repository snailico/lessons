# useradd / userdel

添加 / 删除系统用户

**类型**：外部命令

::: danger
操作不可轻易撤销，执行前确认路径与参数。
:::

## 语法

```bash
sudo useradd [options] name
sudo userdel [options] name
```

## 常用选项 / 用法

| 常用 | 说明 |
| --- | --- |
| `useradd -m name` | 创建并建家目录 |
| `userdel -r name` | 删除并移除家目录 |

## 示例

```bash
sudo useradd -m alice
sudo userdel -r alice
```

## 注意

生产环境改账户需审批与备份。
