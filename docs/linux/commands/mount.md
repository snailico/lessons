# mount

挂载磁盘 / 文件系统

**类型**：外部命令

::: danger
操作不可轻易撤销，执行前确认路径与参数。
:::

## 语法

```bash
mount [device] mountpoint
mount
```

## 示例

```bash
mount | column -t
sudo mount /dev/sdb1 /mnt/data
```

## 注意

挂错设备有风险；先确认设备与挂载点。
