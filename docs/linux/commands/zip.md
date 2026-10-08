# zip / unzip

Windows 兼容的 zip 压缩 / 解压

**类型**：外部命令

## 语法

```bash
zip -r archive.zip dir
unzip archive.zip
```

## 示例

```bash
zip -r out.zip dirname
unzip out.zip -d dest_dir
unzip -l out.zip | head
```
