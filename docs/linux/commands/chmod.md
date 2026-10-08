# chmod

修改 rwx 权限

**类型**：外部命令

::: danger
操作不可轻易撤销，执行前确认路径与参数。
:::

## 语法

```bash
chmod mode path
```

## 常用选项 / 用法

| 模式 | 说明 |
| --- | --- |
| `755` | rwxr-xr-x 常见目录/脚本 |
| `644` | rw-r--r-- 常见文件 |
| `u+x` | 给所有者加执行 |

## 示例

```bash
chmod u+x script.sh
chmod 644 file.txt
chmod -R u+rwX dir/
```

## 注意

错误的递归 chmod 可导致权限过大或服务不可读。
