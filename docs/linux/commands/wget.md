# wget

文件下载

**类型**：外部命令

## 语法

```bash
wget [options] URL
```

## 常用选项 / 用法

| 常用 | 说明 |
| --- | --- |
| `-O file` | 指定输出文件名 |
| `-c` | 断点续传 |

## 示例

```bash
wget https://example.com/file.tgz
wget -c -O app.tgz https://example.com/app.tgz
```
