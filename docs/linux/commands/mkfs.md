# mkfs

格式化文件系统

**类型**：外部命令

::: danger
操作不可轻易撤销，执行前确认路径与参数。
:::

## 语法

```bash
sudo mkfs.ext4 /dev/sdXn
```

## 示例

```bash
sudo mkfs.ext4 /dev/sdb1
```

## 注意

会清空目标分区数据。
