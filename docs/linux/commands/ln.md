# ln

创建硬链接或软链接

**类型**：外部命令

## 语法

```bash
ln [-s] target link_name
```

## 常用选项 / 用法

| 选项 | 说明 |
| --- | --- |
| `-s` | 创建符号（软）链接 |

## 示例

```bash
ln -s /usr/bin/python3 py
ln file.txt file_hard
```

## 注意

软链接可跨文件系统；硬链接仅限普通文件且同文件系统。
