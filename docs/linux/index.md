# Linux 指令笔记

按工作场景分类的 Linux 常用命令手册：高频优先，区分内置 / 外部命令。每条说明页可从 [指令总览](./commands/) 表格跳转。

## 怎么读

1. 防火墙：[使用说明](./firewall) → [iptables](./iptables) / [firewalld](./firewalld)
2. 打开 [指令总览](./commands/) — 12 类场景 + 命令简介（点击命令名进详情）
3. 需要理解 Tool 与命令关系时看 [总览与权限模型](/linux/overview)、[Tool 对照表](/linux/mapping)

## 十二类速览

| # | 分类 | 入口 |
| --- | --- | --- |
| 1 | 文件与目录操作 | [pwd](./commands/pwd) / [ls](./commands/ls) … |
| 2 | 文本内容处理 | [grep](./commands/grep) / [less](./commands/less) … |
| 3 | 系统状态查看 | [top](./commands/top) / [df](./commands/df) … |
| 4 | 进程管理 | [ps](./commands/ps) / [kill](./commands/kill) … |
| 5 | 网络工具 | [ss](./commands/ss) / [curl](./commands/curl) … |
| 6 | 用户与权限 | [id](./commands/id) / [sudo](./commands/sudo) … |
| 7 | 压缩与解压 | [tar](./commands/tar) … |
| 8 | 软件包管理 | [apt](./commands/apt) / [dnf](./commands/dnf) … |
| 9 | Shell 任务控制 | [jobs](./commands/jobs) / [管道重定向](./commands/redirect) … |
| 10 | 磁盘挂载分区 | [mount](./commands/mount) … |
| 11 | 定时任务 | [crontab](./commands/crontab) |
| 12 | 帮助与辅助 | [man](./commands/man) / [type](./commands/type) |

::: tip
日常运维优先：文件目录 + `less`/`tail`/`grep` + 进程查看 + `curl`/`wget`。
:::
