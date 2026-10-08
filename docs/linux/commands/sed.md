# sed

流编辑：行级替换、删除、打印

**类型**：外部命令

## 语法

```bash
sed [options] 'script' [file]
```

## 常用选项 / 用法

| 用法 | 说明 |
| --- | --- |
| `s/old/new/g` | 全局替换 |
| `-n '1,5p'` | 打印 1–5 行 |
| `-i` | 就地修改（慎用） |

## 示例

```bash
sed -n '1,5p' file.txt
sed -E 's/[0-9]+/#/g' data.txt
```

## 注意

就地修改前先备份或先预览到 stdout。
