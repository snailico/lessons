import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  cleanUrls: true,
  title: "笔记",
  description: "学习笔记",
  lang: "en-US",
  base: "/lessons/",
  lastUpdated: true,

  head: [
    ["meta", { name: "author", content: "" }],
    ["meta", { name: "keywords", content: "" }],
    [
      "script",
      { async: "", src: "https://www.googletagmanager.com/gtag/js?id=TAG_ID" },
    ],
    [
      "script",
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'TAG_ID');`,
    ],
  ],

  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "Vue", link: "/vue/" },
      { text: "Angular", link: "/angular/" },
      { text: "Linux", link: "/linux/" },
      {
        text: "工具",
        items: [
          { text: "Vue", link: "/vue/" },
          { text: "Angular", link: "/angular/" },
          { text: "Linux", link: "/linux/" },
        ],
      },
    ],

    sidebar: {
      "/vue/": [
        {
          text: "Guide",
          items: [
            { text: "Index", link: "/guide/" },
            { text: "One", link: "/guide/one" },
            { text: "Two", link: "/guide/two" },
          ],
        },
      ],
      "/angular/": [
        {
          text: "Guide",
          items: [
            { text: "Index", link: "/guide/" },
            { text: "One", link: "/guide/one" },
            { text: "Two", link: "/guide/two" },
          ],
        },
      ],
      "/linux/": [
        {
          text: "防火墙",
          items: [
            { text: "iptables", link: "/linux/iptables" },
            { text: "firewalld", link: "/linux/firewalld" },
          ],
        },
        {
          text: "系统指令",
          items: [
            {
              text: "总览",
              link: "/linux/commands/",
            },
            {
              text: "文件与目录",
              collapsed: true,
              items: [
                {
                  text: "pwd",
                  link: "/linux/commands/pwd",
                },
                {
                  text: "cd",
                  link: "/linux/commands/cd",
                },
                {
                  text: "ls",
                  link: "/linux/commands/ls",
                },
                {
                  text: "mkdir",
                  link: "/linux/commands/mkdir",
                },
                {
                  text: "rm",
                  link: "/linux/commands/rm",
                },
                {
                  text: "cp",
                  link: "/linux/commands/cp",
                },
                {
                  text: "mv",
                  link: "/linux/commands/mv",
                },
                {
                  text: "touch",
                  link: "/linux/commands/touch",
                },
                {
                  text: "ln",
                  link: "/linux/commands/ln",
                },
                {
                  text: "chown",
                  link: "/linux/commands/chown",
                },
                {
                  text: "chmod",
                  link: "/linux/commands/chmod",
                },
                {
                  text: "stat",
                  link: "/linux/commands/stat",
                },
                {
                  text: "find",
                  link: "/linux/commands/find",
                },
              ],
            },
            {
              text: "文本处理",
              collapsed: true,
              items: [
                {
                  text: "cat",
                  link: "/linux/commands/cat",
                },
                {
                  text: "less",
                  link: "/linux/commands/less",
                },
                {
                  text: "head",
                  link: "/linux/commands/head",
                },
                {
                  text: "tail",
                  link: "/linux/commands/tail",
                },
                {
                  text: "grep",
                  link: "/linux/commands/grep",
                },
                {
                  text: "cut",
                  link: "/linux/commands/cut",
                },
                {
                  text: "sort",
                  link: "/linux/commands/sort",
                },
                {
                  text: "uniq",
                  link: "/linux/commands/uniq",
                },
                {
                  text: "wc",
                  link: "/linux/commands/wc",
                },
                {
                  text: "sed",
                  link: "/linux/commands/sed",
                },
                {
                  text: "awk",
                  link: "/linux/commands/awk",
                },
                {
                  text: "tr",
                  link: "/linux/commands/tr",
                },
                {
                  text: "expr",
                  link: "/linux/commands/expr",
                },
              ],
            },
            {
              text: "系统状态",
              collapsed: true,
              items: [
                {
                  text: "uname",
                  link: "/linux/commands/uname",
                },
                {
                  text: "hostname",
                  link: "/linux/commands/hostname",
                },
                {
                  text: "whoami",
                  link: "/linux/commands/whoami",
                },
                {
                  text: "date",
                  link: "/linux/commands/date",
                },
                {
                  text: "uptime",
                  link: "/linux/commands/uptime",
                },
                {
                  text: "free",
                  link: "/linux/commands/free",
                },
                {
                  text: "top",
                  link: "/linux/commands/top",
                },
                {
                  text: "htop",
                  link: "/linux/commands/htop",
                },
                {
                  text: "df",
                  link: "/linux/commands/df",
                },
                {
                  text: "du",
                  link: "/linux/commands/du",
                },
                {
                  text: "lscpu",
                  link: "/linux/commands/lscpu",
                },
                {
                  text: "dmesg",
                  link: "/linux/commands/dmesg",
                },
              ],
            },
            {
              text: "进程管理",
              collapsed: true,
              items: [
                {
                  text: "ps",
                  link: "/linux/commands/ps",
                },
                {
                  text: "pgrep",
                  link: "/linux/commands/pgrep",
                },
                {
                  text: "kill",
                  link: "/linux/commands/kill",
                },
                {
                  text: "pkill",
                  link: "/linux/commands/pkill",
                },
                {
                  text: "killall",
                  link: "/linux/commands/killall",
                },
                {
                  text: "nice / renice",
                  link: "/linux/commands/nice",
                },
              ],
            },
            {
              text: "网络工具",
              collapsed: true,
              items: [
                {
                  text: "ip addr",
                  link: "/linux/commands/ip",
                },
                {
                  text: "ss",
                  link: "/linux/commands/ss",
                },
                {
                  text: "ping",
                  link: "/linux/commands/ping",
                },
                {
                  text: "curl",
                  link: "/linux/commands/curl",
                },
                {
                  text: "wget",
                  link: "/linux/commands/wget",
                },
                {
                  text: "nc",
                  link: "/linux/commands/nc",
                },
                {
                  text: "traceroute",
                  link: "/linux/commands/traceroute",
                },
              ],
            },
            {
              text: "用户与权限",
              collapsed: true,
              items: [
                {
                  text: "useradd / userdel",
                  link: "/linux/commands/useradd",
                },
                {
                  text: "groupadd / groupdel",
                  link: "/linux/commands/groupadd",
                },
                {
                  text: "passwd",
                  link: "/linux/commands/passwd",
                },
                {
                  text: "su",
                  link: "/linux/commands/su",
                },
                {
                  text: "sudo",
                  link: "/linux/commands/sudo",
                },
                {
                  text: "id",
                  link: "/linux/commands/id",
                },
              ],
            },
            {
              text: "压缩与解压",
              collapsed: true,
              items: [
                {
                  text: "tar",
                  link: "/linux/commands/tar",
                },
                {
                  text: "gzip / gunzip",
                  link: "/linux/commands/gzip",
                },
                {
                  text: "zip / unzip",
                  link: "/linux/commands/zip",
                },
              ],
            },
            {
              text: "软件包管理",
              collapsed: true,
              items: [
                {
                  text: "yum",
                  link: "/linux/commands/yum",
                },
                {
                  text: "dnf",
                  link: "/linux/commands/dnf",
                },
                {
                  text: "apt",
                  link: "/linux/commands/apt",
                },
              ],
            },
            {
              text: "Shell 任务控制",
              collapsed: true,
              items: [
                {
                  text: "管道与重定向",
                  link: "/linux/commands/redirect",
                },
                {
                  text: "jobs",
                  link: "/linux/commands/jobs",
                },
                {
                  text: "fg",
                  link: "/linux/commands/fg",
                },
                {
                  text: "bg",
                  link: "/linux/commands/bg",
                },
                {
                  text: "nohup",
                  link: "/linux/commands/nohup",
                },
                {
                  text: "tmux / screen",
                  link: "/linux/commands/tmux",
                },
              ],
            },
            {
              text: "磁盘挂载分区",
              collapsed: true,
              items: [
                {
                  text: "mount",
                  link: "/linux/commands/mount",
                },
                {
                  text: "umount",
                  link: "/linux/commands/umount",
                },
                {
                  text: "fdisk",
                  link: "/linux/commands/fdisk",
                },
                {
                  text: "mkfs",
                  link: "/linux/commands/mkfs",
                },
              ],
            },
            {
              text: "定时任务",
              collapsed: true,
              items: [
                {
                  text: "crontab",
                  link: "/linux/commands/crontab",
                },
              ],
            },
            {
              text: "帮助与辅助",
              collapsed: true,
              items: [
                {
                  text: "man",
                  link: "/linux/commands/man",
                },
                {
                  text: "bc",
                  link: "/linux/commands/bc",
                },
                {
                  text: "seq",
                  link: "/linux/commands/seq",
                },
                {
                  text: "type",
                  link: "/linux/commands/type",
                },
              ],
            },
          ],
        },
      ],
    },
    outline: {
      level: [2, 3],
      label: "目录",
    },
    lastUpdated: {
      text: "最后更新于",
    },
    footer: {
      message: "本项目仅用于教育学习目的。",
      copyright: "MIT License | Made with VitePress",
    },

    search: {
      provider: "local",
      options: {
        translations: {
          button: { buttonText: "搜索", buttonAriaLabel: "搜索" },
          modal: {
            noResultsText: "没有找到结果",
            resetButtonTitle: "清除搜索",
            footer: {
              selectText: "选择",
              navigateText: "切换",
              closeText: "关闭",
            },
          },
        },
      },
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],

    darkModeSwitchLabel: "深色模式",
    sidebarMenuLabel: "菜单",
    returnToTopLabel: "回到顶部",
  },
});
