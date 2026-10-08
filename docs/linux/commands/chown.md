# chown

修改所有者 / 所属组

**类型**：外部命令

::: danger
操作不可轻易撤销，执行前确认路径与参数。
:::

## 语法

```bash
chown [owner][:group] path
```

## 常用选项 / 用法

| 选项 | 说明 |
| --- | --- |
| `-R` | 递归 |

## 示例

```bash
sudo chown user:group file
sudo chown -R www-data:www-data /var/www
```

## 注意

递归修改前确认范围。
