# fdisk

磁盘分区操作

**类型**：外部命令

::: danger
操作不可轻易撤销，执行前确认路径与参数。
:::

## 语法

```bash
sudo fdisk -l
sudo fdisk /dev/sdX
```

## 示例

```bash
sudo fdisk -l
```

## 注意

改分区表极高危，操作前备份并确认磁盘名。
