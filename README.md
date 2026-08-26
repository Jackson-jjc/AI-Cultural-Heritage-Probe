# AI Cultural Heritage Probe — web prototype

这是一个无框架、可直接部署的中英双语网页 probe。入口文件是 `index.html`。

## 当前填写流程

1. 中性说明：AI 是什么、博物馆可能怎样使用，以及如何作出判断；
2. 阅读网页内的参与者信息摘要，并确认自愿参与；
3. 进入一个指定情景；
4. 在看到详细提案前作出第一次判断；
5. 揭示研究构造的近未来提案；
6. 对提案逐项选择“保留／担心／删除／质疑”；
7. 补写缺少内容，设置 AI 停止或交给人的条件，并完成情景专属重构；
8. 再次判断，并回答“实际依据了什么”和“透明但不可行动的信息”；
9. 完成最后反思：实施后果、审核与纠错责任、维护风险和非 AI 替代方案；
10. 由参与者确认提交到南安普顿大学 OneDrive；
11. 可选下载匿名 JSON 或 CSV 备份。

填写期间，回答保存在参与者设备的浏览器中；只有参与者在完成页点击“提交匿名回答”后，数据才会通过 Power Automate 写入学校 OneDrive。参与者退出、刷新或重新打开同一个定向链接时，网站会继续未完成或尚未提交的情景；首页也会显示“继续填写”。

## 四个定向链接

- `index.html?scenario=S1`
- `index.html?scenario=S2`
- `index.html?scenario=S3`
- `index.html?scenario=S4`

正式招募时可按参与者群体分别发送对应链接，避免普通访客误答 S2/S3 的专业工作流问题。

## Power Automate 与学校 OneDrive

提交接口地址由 `submission-config.js` 提供，格式参见：

```js
window.PROBE_CONFIG = {
  powerAutomateUrl: ''
};
```

Power Automate 的流程顺序为：HTTP 请求触发器 → OneDrive for Business 创建独立 JSON 文件 → Outlook 通知 → HTTP 200 响应。提交成功必须以流程返回 200 为准；失败时回答保留在浏览器中，并提供 JSON 下载备用。

本地辅助文件 `power-automate-url.local.txt` 不进入源代码仓库。GitHub Pages 部署需要包含 `submission-config.js`；由于浏览器必须直接访问匿名 HTTP 触发器，该地址无法在公开的静态网站中真正隐藏。正式收集应使用不公开索引的定向链接、流程输入校验和运行监控，并定期检查异常提交。

当前 114350 材料把 Part A 写为研究者在场的线下 probe，把 Part B 写为线上访谈／从业者回访，并未覆盖参与者异步独立完成情景网页。正式远程收集前，需要把获批的参与者信息说明、知情同意与隐私说明接入流程，并先取得 ERGO amendment 或 ethics team 对该线上路径的书面确认。

## 无人指导填写支持

- 首页先解释四步任务和预计用时；
- 填写页持续显示“第几步／当前任务／已保存”；
- 第一次判断保存后才揭示研究提案；
- 缺失回答时先给出具体提示，同时允许参与者依照 PIS 跳过本页；JSON 会在 `skippedPages` 中记录被跳过的步骤；
- 中英文切换不会丢失已填内容；
- 提交中禁止重复点击，失败可重试，成功后显示匿名提交编号；
- 桌面和手机均支持，无横向滚动。

加入最后反思后，预计完成时间约为 16–20 分钟。

## 封面图像

封面使用 V&A 馆藏《Strawberry Thief》纺织品（William Morris，1883，museum no. T.586-1919）。图像通过 V&A Collections IIIF image API 获取，网页保留馆藏编号、版权标识和官方馆藏页链接。S1 的真实藏品图仍保持为 The Met Open Access 钱包藏品，不受封面替换影响。
