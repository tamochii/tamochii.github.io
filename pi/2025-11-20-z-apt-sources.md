---
slug: pi-aptsources
title: apt-软件源配置
authors: [Chius]
---
在大陆的网络环境下，默认的 APT 软件源可能会导致软件包下载速度较慢，甚至无法连接。为了提升软件包管理的效率，建议将 APT 软件源更换为国内的镜像源。  
我当前的系统版本号是2025-10-01-raspios-trixie-arm64

<!-- truncate -->

## 查看当前软件源配置

debian/ubuntu的默认apt源配置文件是`/etc/apt/sources.list` ，但运行`cat /etc/apt/sources.list`命令后发现文件内容为空，这是因为配置被拆分到 sources.list.d 目录下的各个文件中。  
运行``ls /etc/apt/sources.list.d/``命令可以查看该目录下的文件列表。在raspios-trixie-arm64系统中，软件源配置文件是`raspios.list`和`debian.sources`。

```sourceslist
# debian.sources
Types: deb
URIs: http://deb.debian.org/debian/
Suites: trixie trixie-updates
Components: main contrib non-free non-free-firmware
Signed-By: /usr/share/keyrings/debian-archive-keyring.pgp

Types: deb
URIs: http://deb.debian.org/debian-security/
Suites: trixie-security
Components: main contrib non-free non-free-firmware
Signed-By: /usr/share/keyrings/debian-archive-keyring.pgp
```

```sourceslist
# raspios.list
Types: deb
URIs: http://archive.raspberrypi.com/debian/
Suites: trixie
Components: main
Signed-By: /usr/share/keyrings/raspberrypi-archive-keyring.pgp
```

## 更换为国内镜像源

我选择新增一个sources文件来配置国内镜像源，避免修改原有文件导致的问题。  

```sourceslist
#debian-cn.sources(清华源)
Types: deb
URIs: https://mirrors.tuna.tsinghua.edu.cn/debian/
Suites: trixie trixie-updates
Components: main contrib non-free non-free-firmware
Signed-By: /usr/share/keyrings/debian-archive-keyring.pgp

Types: deb
URIs: https://mirrors.tuna.tsinghua.edu.cn/debian-security/
Suites: trixie-security
Components: main contrib non-free non-free-firmware
Signed-By: /usr/share/keyrings/debian-archive-keyring.pgp
```
