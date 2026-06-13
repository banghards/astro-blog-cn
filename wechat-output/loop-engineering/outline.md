# 提纲

## 选题

Loop Engineering 把 coding agent 协作从“人类逐轮 prompt”升级成“系统自动发现任务、分发任务、验证结果、记录状态并继续下一轮”。

## 结构

1. 引入：从 prompt agent 到设计 prompt agent 的系统。
2. 定义：loop 是递归目标和持续运行的小控制系统。
3. 五块积木：自动化、worktree、skill、connector、sub-agent，加外部记忆。
4. 自动化：loop 的心跳。
5. worktree：并行隔离。
6. skill：避免每轮从零理解项目。
7. connector：让 loop 接入真实工作环境。
8. sub-agent：maker 和 checker 分离。
9. 风险：验证、理解债、认知放弃。
10. 结论：Build the loop, stay the engineer.

## 配图

1. 封面：人从 prompt 操作者变成 loop 设计者。
2. 五块积木：自动化、worktree、skill、connector、sub-agent、记忆。
3. 自动化与 worktree：定时发现任务并隔离执行。
4. sub-agent 验证：实现者和检查者分开。
