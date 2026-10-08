# tar

归档打包；处理 tar.gz / tar.bz2 等

**类型**：外部命令

## 语法

```bash
tar [options] archive [files...]
```

## 常用选项 / 用法

| 组合 | 说明 |
| --- | --- |
| `-zcvf` | gzip 压缩打包 |
| `-zxvf` | gzip 解压 |
| `-jcvf` / `-jxvf` | bzip2 |
| `-tf` | 只列出内容 |

## 示例

```bash
# 压缩
tar -zcvf output.tar.gz dirname

# 解压
tar -zxvf output.tar.gz

# 查看内容
tar -tzf output.tar.gz | head
```
