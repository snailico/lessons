# umount

卸载挂载点

**类型**：外部命令

::: danger
操作不可轻易撤销，执行前确认路径与参数。
:::

## 语法

```bash
umount mountpoint
```

## 示例

```bash
sudo umount /mnt/data
```

## 注意

目录正被使用时会失败，先结束占用进程。
