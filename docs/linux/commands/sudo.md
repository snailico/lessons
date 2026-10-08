# sudo

以管理员权限执行单条命令

**类型**：外部命令

## 语法

```bash
sudo command
```

## 示例

```bash
sudo apt update
sudo -u www-data whoami
```

## 注意

依赖 `/etc/sudoers` 配置；勿随意改配置文件。
