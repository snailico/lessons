# du

统计目录占用磁盘大小

**类型**：外部命令

## 语法

```bash
du -sh [path...]
```

## 示例

```bash
du -sh *
du -sh node_modules dist
```

## 注意

GNU 可用 `du -h --max-depth=1`；macOS 常用 `du -d 1 -h`。
