# cp

复制文件 / 目录

**类型**：外部命令

## 语法

```bash
cp [options] src dst
```

## 常用选项 / 用法

| 选项 | 说明 |
| --- | --- |
| `-r` | 复制目录 |
| `-a` | 尽量保留属性（GNU） |

## 示例

```bash
cp a.txt b.txt
cp -r src_dir/ dst_dir/
```

## 注意

覆盖前先确认目标路径。
