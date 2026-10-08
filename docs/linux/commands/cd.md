# cd

切换当前工作目录

**类型**：Shell 内置

## 语法

```bash
cd [dir]
cd ..
cd -
cd
```

## 常用选项 / 用法

| 用法 | 说明 |
| --- | --- |
| `cd ..` | 上级目录 |
| `cd -` | 上次目录 |
| `cd` | 进入 `$HOME` |

## 示例

```bash
cd /var/log
cd ../src
cd -
```

## 注意

只影响当前 shell 会话；路径含空格需加引号。
