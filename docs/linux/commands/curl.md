# curl

HTTP 请求、接口调试与下载

**类型**：外部命令

## 语法

```bash
curl [options] URL
```

## 常用选项 / 用法

| 常用 | 说明 |
| --- | --- |
| `-I` | 只看响应头 |
| `-o file` | 保存到文件 |
| `-L` | 跟随重定向 |

## 示例

```bash
curl -I https://example.com
curl -o page.html https://example.com
```
