---
slug: miniforge
title: miniforge-安装指南
authors: [tamochi]
---

本文介绍如何在树莓派上安装 Miniforge，开启python编程之旅。

<!-- truncate -->
## 下载 Miniforge 安装脚本

```shell
wget https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-Linux-aarch64.sh
```

## 安装 Miniforge

```shell
bash Miniforge3-Linux-aarch64.sh
```

按照提示进行安装，建议将 Miniforge 安装在默认路径下（通常是 `~/miniforge3`）。

## 验证安装

```shell
source ~/.bashrc
```

然后检查 conda 版本：

```shell
conda --version
```

如果显示 conda 版本号，说明安装成功。

## 常用命令

```shell
conda update conda          # 更新 conda
conda create -n myenv python=3.12  # 创建名为 myenv
conda activate myenv       # 激活 myenv 环境
conda deactivate           # 退出当前环境
conda install numpy        # 安装 numpy 包
conda update numpy         # 更新 numpy 包
conda remove -n myenv --all # 删除 myenv 环境
conda env list          # 列出所有环境
conda list              # 列出当前环境中的包
conda env export > environment.yml # 导出当前环境配置
```
