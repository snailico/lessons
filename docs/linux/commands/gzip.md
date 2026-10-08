# gzip / gunzip

*.gz 格式压缩 / 解压

**类型**：外部命令

## 语法

```bash
gzip file
gunzip file.gz
```

## 示例

```bash
gzip big.log          # 得到 big.log.gz（默认删原文件）
gzip -k big.log       # GNU：保留原文件
gunzip big.log.gz
```
