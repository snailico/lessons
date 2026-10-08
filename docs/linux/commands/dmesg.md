# dmesg

内核环形缓冲区日志（硬件/启动排错）

**类型**：外部命令

## 语法

```bash
dmesg [options]
```

## 示例

```bash
dmesg | tail -n 50
dmesg -T | less
```

## 注意

部分系统需 root 才能完整读取。
