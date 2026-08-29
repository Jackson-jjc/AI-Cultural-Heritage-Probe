const t = (value) => typeof value === 'string' ? value : value[language];

const landingCopy = {
  zh: {
    studyType:'研究参与网站', eyebrow:'文化遗产中的人工智能', titleA1:'AI 在博物馆中', titleA2:'可能适合做什么，', titleB1:'又可能', titleB2:'不适合做什么？',
    heroCredit:'《草莓小偷》纺织品，William Morris，1883 年',
    intro:'请选择研究者指定的一个情景。你会扮演一个具体角色，先根据少量背景作出第一反应，再查看一份近未来 AI 提案，并把它改成你认为更合适的版本。',
    start:'选择研究情景', time:'约 16–20 分钟 · 无标准答案 · 可中途继续',
    guideTitle:'你将一步步完成什么？', guideIntro:'每一页只处理一个任务；你的回答会自动保存在当前设备。',
    guide1Title:'进入角色和情景', guide1Body:'先看你在这个情景中的身份、藏品或工作背景，以及博物馆正在考虑的问题。',
    guide2Title:'先说第一反应', guide2Body:'在看到完整提案前，选择你现在最接近的想法，并简单写出原因。',
    guide3Title:'检查并修改提案', guide3Body:'指出哪些部分可以保留、哪些需要担心或删除，并写出你会怎样改。',
    guide4Title:'再做一次选择', guide4Body:'看修改后的想法是否变化，再说明责任、维护、后果和不用 AI 的可能性。',
    resumeLabel:'已保存的进度', resumeTitle:'继续上次未完成的情景', resume:'继续填写',
    scenariosTitle:'选择你的研究情景', scenariosIntro:'如果研究者指定了编号，请只进入对应情景。每位参与者通常完成一个主要情景。',
    open:'开始这个情景', duration:'约 16–20 分钟', saveTitle:'自动保存', saveBody:'填写期间保存在当前浏览器；完成后由你确认提交到学校 OneDrive。',
    answerTitle:'没有标准答案', answerBody:'使用、限制、暂缓或拒绝 AI 都是有效回答。'
  },
  en: {
    studyType:'Research participation website', eyebrow:'Artificial intelligence in cultural heritage', titleA1:'Where might AI fit ', titleA2:'in museums', titleB1:'— and where might ', titleB2:'it not?',
    heroCredit:'Strawberry Thief, William Morris, 1883',
    intro:'Choose the situation assigned by the researcher. You will take on a specific role, give your first reaction from a short context, review a near-future AI proposal, then change it into a version that makes better sense to you.',
    start:'Choose your situation', time:'About 16–20 minutes · No correct answer · Resume later',
    guideTitle:'What will you do, step by step?', guideIntro:'Each page has one task. Your answers are saved automatically on this device.',
    guide1Title:'Enter a role and situation', guide1Body:'Read who you are in the situation, the object or workplace context, and the museum problem under discussion.',
    guide2Title:'Give your first reaction', guide2Body:'Before seeing the full proposal, choose the answer closest to your current view and briefly explain why.',
    guide3Title:'Review and change the proposal', guide3Body:'Mark what can stay, what worries you and what should be removed, then write how you would change it.',
    guide4Title:'Choose again', guide4Body:'Say whether your view changed, then consider responsibility, maintenance, consequences and non-AI alternatives.',
    resumeLabel:'Saved progress', resumeTitle:'Continue an unfinished situation', resume:'Continue',
    scenariosTitle:'Choose your research situation', scenariosIntro:'If the researcher gave you a number, open only that situation. Each participant normally completes one main situation.',
    open:'Start this situation', duration:'About 16–20 minutes', saveTitle:'Automatic saving', saveBody:'Answers stay in this browser while you work; you confirm submission to the University OneDrive at the end.',
    answerTitle:'No correct answer', answerBody:'Using, limiting, deferring or rejecting AI are all valid responses.'
  }
};

const ui = {
  briefing:{zh:'开始之前',en:'Before you begin'}, situation:{zh:'进入情景',en:'Enter the situation'},
  initial:{zh:'第一次选择',en:'First choice'}, proposal:{zh:'查看 AI 提案',en:'View the AI proposal'},
  reshape:{zh:'修改提案',en:'Change the proposal'}, final:{zh:'再次选择',en:'Second choice'}, reflection:{zh:'最后思考',en:'Final questions'}, complete:{zh:'完成',en:'Complete'},
  back:{zh:'返回',en:'Back'}, next:{zh:'继续',en:'Continue'}, begin:{zh:'开始这个情景',en:'Begin this situation'},
  continueInitial:{zh:'作出第一次选择',en:'Make your first choice'}, reveal:{zh:'查看 AI 提案',en:'View the AI proposal'},
  reshapeNext:{zh:'把提案改成你能接受的版本',en:'Change it into a version you could accept'}, finalNext:{zh:'作出再次选择',en:'Make your second choice'},
  reflectionNext:{zh:'完成最后反思',en:'Complete the final reflection'}, finish:{zh:'完成并查看结果',en:'Finish and review'}, participant:{zh:'匿名参与者编号',en:'Anonymous participant ID'},
  saved:{zh:'已自动保存在当前设备',en:'Saved automatically on this device'}, step:{zh:'步骤',en:'Step'}, of:{zh:'共',en:'of'},
  pageTask:{zh:'本页任务',en:'Your task on this page'}, help:{zh:'需要帮助？',en:'Need help?'},
  roleLabel:{zh:'你在这个情景中的身份',en:'Your role in this situation'},
  examplesTitle:{zh:'帮助你理解这个情景的例子',en:'Examples to help you picture the situation'},
  contextReminder:{zh:'情景提醒',en:'Situation reminder'},
  reminderRole:{zh:'你的身份',en:'Your role'},
  reminderFocus:{zh:'请记住',en:'Keep in mind'},
  helpBody:{zh:'请按你自己的想法作答。这里不是考试，也不是测试你是否懂 AI。你可以支持、限制、暂缓或拒绝 AI；重要的是写出原因、条件和你觉得还缺什么。如果不愿回答某一页，可以在缺项提示出现后选择“跳过本页并继续”。',en:'Answer from your own point of view. This is not a test of AI knowledge. You may support, limit, delay or reject AI; what matters is why, under what conditions, and what still seems missing. If you prefer not to answer a page, use “Skip this page and continue” after the missing-answer prompt appears.'},
  prototype:{zh:'填写期间，回答只保存在当前设备；只有在最后点击“提交匿名回答”后，才会发送到学校 OneDrive。',en:'While you work, answers stay on this device. They are sent to the University OneDrive only after you select “Submit anonymous response” at the end.'},
  noCorrect:{zh:'没有标准答案。使用、限制、暂缓或拒绝 AI，都是有价值的回答。',en:'There is no correct answer. Using, limiting, deferring or rejecting AI are all valuable responses.'},
  ethicsSummary:{zh:'参与者信息摘要',en:'Participant information summary'},
  ethicsReference:{zh:'研究编号：ERGO II 114350',en:'Study reference: ERGO II 114350'},
  ethicsPurpose:{zh:'研究目的：了解人们如何看待博物馆与文化遗产情境中可能的 AI 应用。本研究不会测试正在运行的 AI 系统。',en:'Purpose: to understand how people make sense of possible uses of AI in museum and cultural heritage settings. This study does not test a live AI system.'},
  ethicsActivity:{zh:'参与内容：完成一个情景和一份暂定提案，约 16–20 分钟。没有标准答案，也不需要 AI 专业知识。',en:'What you will do: complete one situation and one provisional proposal in about 16–20 minutes. There are no correct answers, and no AI expertise is required.'},
  ethicsEligibility:{zh:'参与条件与可能影响：参与者须年满 18 岁。本研究风险较低，部分情景会涉及错误信息、来源不确定、文化简化或维护负担；参与者通常不会获得直接个人受益。',en:'Eligibility and possible effects: you must be aged 18 or over. This is a low-risk study, although some situations discuss misinformation, uncertain sources, cultural simplification or maintenance burden. There may be no direct personal benefit.'},
  ethicsChoice:{zh:'参与选择：参与完全自愿。你可以不回答任何问题，也可以随时停止。参与后两周内，可按照研究邀请中提供的方式申请撤回数据；数据匿名化并纳入分析后，可能无法再单独删除。',en:'Your choice: taking part is voluntary. You may leave any question unanswered or stop at any time. You may request data withdrawal within two weeks using the instructions supplied with the study invitation; once data are anonymised and integrated into analysis, individual removal may no longer be possible.'},
  ethicsData:{zh:'数据处理：网页使用研究生成的编号，不要求填写姓名。提交后，回答会进入学校批准的安全存储；匿名研究数据最多可保留十年，个人数据不会上传到开放式 AI 系统进行分析。',en:'Data handling: the website uses a study-generated ID and does not ask for your name. After submission, responses go to University-approved secure storage. Anonymised research data may be retained for up to ten years, and personal data will not be uploaded to open AI systems for analysis.'},
  reviewSummary:{zh:'返回查看参与者信息摘要',en:'Review the participant information summary'},
  consent:{zh:'我已经阅读上方的参与者信息摘要，理解参与完全自愿，并同意参加这项研究。',en:'I have read the participant information summary above, understand that taking part is voluntary, and agree to participate in this research.'},
  consentNote:{zh:'如果有任何内容不清楚，请先使用研究邀请中提供的联系方式咨询研究者。任何可选录音、照片或录像都需要另行同意。',en:'If anything is unclear, contact the researcher using the details supplied with the study invitation before continuing. Any optional audio, photography or video recording requires separate consent.'},
  aiWhat:{zh:'这里的 AI 是什么？',en:'What does AI mean here?'},
  aiWhatBody:{zh:'这里的 AI 指能够根据已有资料生成文字、分类、建议或解释的计算系统。它可能很像搜索工具或写作助手，但它不一定知道事实是否正确，也不能自己取得许可或承担责任。',en:'Here, AI means a computational system that can generate text, classifications, suggestions or explanations from existing material. It may feel like a search tool or writing assistant, but it does not necessarily know what is true, obtain permission, or take responsibility.'},
  aiCan:{zh:'博物馆可能用它做什么？',en:'What might museums use it for?'},
  aiCanBody:{zh:'翻译和简明文字、数字展签、路线支持、馆藏标注、检索，以及整理不同材料。本研究中的具体系统仍是近未来构想。',en:'Translation and plain language, digital labels, route support, collection tagging, search, and organising different materials. The specific systems in this study remain near-future proposals.'},
  aiChoose:{zh:'怎样看它是否合适？',en:'How might we decide whether it fits?'},
  aiChooseBody:{zh:'请想一想：它解决的需要是否真实？信息来源是否可信？谁能审核或纠错？谁长期维护？如果不用 AI，博物馆是否也能用人工、展签、导览或网页解决同样问题？',en:'Think about whether the need is real, whether the source is trustworthy, who can check or correct the output, who maintains it over time, and whether the same problem could be addressed without AI through staff work, labels, tours or web pages.'},
  proposed:{zh:'研究用近未来提案｜现实中尚未实施',en:'Near-future research proposal | Not implemented'},
  proposalInstruction:{zh:'请把下面每一部分当作草案来看，并选择一个标记。下一页会让你写出具体修改。',en:'Treat each part below as a draft and choose one mark for it. On the next page you will write any changes you want.'},
  proposalInstructionHelp:{zh:'“保留”= 这部分现在可以留下；“担心”= 方向可能有用，但有风险或需要条件；“删除”= 这部分不应使用；“质疑”= 你还缺信息，暂时不能判断。你不是在给 AI 打分，而是在决定这份提案哪些部分可以进入真实博物馆工作。',en:'“Keep” = this part can stay as it is. “Concern” = it may be useful but carries a risk or needs conditions. “Remove” = it should not be used. “Question” = you need more information before deciding. You are not rating AI; you are deciding which parts of the proposal could enter real museum work.'},
  keep:{zh:'保留',en:'Keep'}, concern:{zh:'担心',en:'Concern'}, remove:{zh:'删除',en:'Remove'}, question:{zh:'？质疑',en:'? Question'},
  unmarked:{zh:'尚未标记',en:'Not marked'}, changeThis:{zh:'你想怎样修改这一部分？（可选）',en:'How would you change this part? (optional)'},
  changeThisHelp:{zh:'如果你刚才标了“担心”“删除”或“质疑”，请说明原因或写出你会怎样改。例如：加上来源、把肯定语气改成“可能”、要求人工审核、说明谁负责。无需修改时可以留空。',en:'If you marked Concern, Remove or Question, explain why or write how you would change it. For example: add a source, change a certain claim to “may”, require human review, or name who is responsible. Leave this blank if you would not change it.'},
  addMissing:{zh:'提案还缺少什么重要内容？（可选）',en:'What important information or safeguard is still missing? (optional)'},
  addMissingHelp:{zh:'请写“如果要真的使用，还必须知道或安排什么”。可以是资料来源、谁提供/批准内容、谁审核、如何纠错、维护成本、隐私说明，或访客不用 AI 的选择。',en:'Write what would still need to be known or arranged before real use. This could be sources, who provides or approves content, who checks it, how errors are corrected, maintenance cost, a privacy notice, or a way for visitors to avoid AI.'},
  stopPrompt:{zh:'请写出 AI 需要停下来的情况。发生什么时，它不能继续自己处理？',en:'Please write the situations where AI should stop. What would make it unsafe or unsuitable for AI to continue on its own?'},
  stopPromptHelp:{zh:'请尽量用“如果……那么……”来回答。例如：如果资料来源互相矛盾，AI 应显示“不确定”并交给馆员；如果没有公开许可，AI 不应改写或发布；如果内容涉及身份、宗教或社区记忆，应交给相关人员审核。你也可以写“我认为不需要停止”，但请说明原因。',en:'Try to answer in an “If…, then…” form. For example: if sources conflict, AI should show “uncertain” and pass to a curator; if permission is missing, AI should not rewrite or publish; if the content concerns identity, religion or community memory, it should be checked by relevant people. You may also write “I do not think it needs to stop”, but please explain why.'},
  comparison:{zh:'和第一次选择相比，你现在的答案有什么变化？',en:'Compared with your first choice, has your answer changed?'},
  comparisonHelp:{zh:'只比较你的两个选择和理由。三种答案都可以：改变了；选择没变但理由更清楚；或者基本没变。',en:'Only compare your two choices and reasons. All three answers are fine: changed; same choice but clearer reasons; or broadly unchanged.'},
  changed:{zh:'我选择了不同的答案',en:'I selected a different answer'}, clearer:{zh:'答案相同，但理由或条件更具体了',en:'Same answer, but clearer reasons or conditions'}, unchanged:{zh:'答案和主要理由都基本没有变化',en:'My answer and main reasons stayed broadly the same'},
  evidenceUsed:{zh:'页面上哪一条内容最影响你最后的选择？',en:'Which specific detail on the page most influenced your final choice?'},
  evidenceUsedHelp:{zh:'请选择页面上的一条具体内容，并说明它怎样影响你。例子：藏品来源、AI 推测、是否有文献证据、谁审核、许可是否清楚、需要多少人力、是否有非 AI 做法。请不要只写“我相信页面信息”，而是指出是哪一条信息。',en:'Choose one specific detail from the page and say how it affected you. Examples: the object source, an AI inference, whether evidence is cited, who reviews it, whether permission is clear, staff workload, or a non-AI option. Try not to write only “I trust the page”; name the detail that mattered.'},
  transparentNotActionable:{zh:'有没有哪条信息你看懂了，但仍然不知道该如何使用它来决定？',en:'Was there any detail you understood, but still could not use to make a decision?'},
  transparentNotActionableHelp:{zh:'这题不是问“内容有没有趣”。它问的是：某条信息虽然读得懂，但还缺少证据、负责人、许可、成本、审核办法或下一步行动，所以你仍然不能据此决定。如果没有这种情况，请写“没有”。',en:'This is not asking whether the content is interesting. It asks whether a detail was understandable but still missing proof, an owner, permission, cost, a review process or a next action, so you could not use it to decide. If nothing had this problem, write “None”.'},
  anythingElse:{zh:'还有什么重要问题是本情景没有问到的？（可选）',en:'Is there an important issue that this situation did not ask about? (optional)'},
  anythingElseHelp:{zh:'你可以补充任何担忧、假设、受影响的人，或你认为更合适的做法。',en:'You may add a concern, an assumption, an affected person or group, or a different approach you would prefer.'},
  reflectionTitle:{zh:'想象这个方案真正使用以后',en:'Imagine the proposal in use'},
  reflectionDeck:{zh:'请每题写 1–3 句话。可以写正面或负面的结果，也可以认为某个问题不适用；请简单说明理由。',en:'Write 1–3 sentences for each question. Outcomes may be positive or negative. You may also say that a question does not apply, but please explain why.'},
  downstreamQuestion:{zh:'如果博物馆明年采用你选择或修改后的方案，最可能出现的一个结果是什么？',en:'If the museum used the version you chose or changed next year, what is one likely outcome?'},
  downstreamHelp:{zh:'请写一个最可能发生的结果，可以是好处、问题或意外后果。想想谁会受到影响：普通访客、儿童或家庭、相关社区、馆员、研究人员、藏品记录，或博物馆服务。',en:'Write one likely result. It may be a benefit, problem or unexpected effect. Think about who is affected: visitors, children or families, related communities, curators, researchers, collection records or museum services.'},
  accountabilityQuestion:{zh:'在真正使用前，谁需要检查什么？如果出错，谁负责改正？',en:'Before real use, who should check what? If something goes wrong, who should correct it?'},
  accountabilityHelp:{zh:'请写得比“专家”更具体一些。例如：馆员检查事实；社区代表检查许可和表述；教育人员检查语言是否适合目标观众；数字团队检查系统日志；博物馆负责人决定是否公开更正。',en:'Please be more specific than “experts”. For example: a curator checks facts; a community representative checks permission and wording; an educator checks whether the language fits the audience; a digital team checks system logs; a museum manager decides whether to publish a correction.'},
  maintenanceQuestion:{zh:'这个方案长期使用后，什么事情可能会变得难以管理？',en:'What might become difficult to manage if this proposal is used over time?'},
  maintenanceHelp:{zh:'请写一个长期问题，并说明它会在哪里出现。例如：新研究出现后文字过时；许可改变后内容没更新；工作人员没有时间审核；错误标签越积越多；系统费用或设备维护变高。',en:'Write one long-term problem and where it would appear. For example: text becomes outdated after new research; permission changes but content is not updated; staff lack time to review; incorrect tags accumulate; system cost or device maintenance grows.'},
  nonAIQuestion:{zh:'不用 AI，博物馆还能怎样满足同样的需要？',en:'Without AI, how else could the museum meet the same need?'},
  nonAIHelp:{zh:'请写一种具体做法，不要只写“可以，但需要更多人力”。例如：馆员重写展签、增加纸质说明、做导览、请社区成员共同撰写、在网页上增加来源说明。再说明什么时候这种做法比 AI 更合适。',en:'Name one concrete approach; try not to write only “yes, but it needs more staff”. For example: a curator rewrites the label, paper notes are added, a guided tour is offered, community members co-write the text, or the website adds source notes. Then say when this would be more suitable than AI.'},
  required:{zh:'请完成本页中的必答项后再继续。',en:'Please complete the required items before continuing.'},
  skipPage:{zh:'跳过本页并继续',en:'Skip this page and continue'},
  skipNote:{zh:'你可以选择不回答；系统会把本页记录为已跳过。',en:'You may choose not to answer. This page will be recorded as skipped.'},
  markRequired:{zh:'请至少标记提案中的一个部分。',en:'Please mark at least one part of the proposal.'},
  consentRequired:{zh:'请先确认你已经阅读参与者信息摘要并同意参加研究。',en:'Please confirm that you have read the participant information summary and agree to take part.'},
  initialChoiceRequired:{zh:'请选择一个初步答案。',en:'Choose a first answer.'}, confidenceRequired:{zh:'请选择信心程度。',en:'Choose a confidence level.'}, reasonRequired:{zh:'请说明选择的主要理由。',en:'Give the main reason for your choice.'},
  stopRequired:{zh:'请说明在哪些情况下（如果有），AI 需要停止、显示不确定，或交给人处理。',en:'Explain the situations, if any, in which the AI would need to stop, show uncertainty or pass the task to a person.'}, taskRequired:{zh:'请回答这个情景的提案修改任务。',en:'Answer the situation-specific proposal task.'},
  revisedRequired:{zh:'请选择第二次答案。',en:'Choose your second answer.'}, comparisonRequired:{zh:'请选择你的想法是否发生变化。',en:'Indicate whether your thinking changed.'}, evidenceRequired:{zh:'请写出影响你最后选择的一项具体信息。',en:'Name one specific item that influenced your final choice.'}, actionableRequired:{zh:'请说明是否有信息让你仍不知道该如何决定；如果没有，请写“没有”。',en:'Say whether any information left you unsure how to decide. If not, write “None”.'},
  downstreamRequired:{zh:'请写出实施后可能出现的一个结果。',en:'Describe one possible outcome after implementation.'}, accountabilityRequired:{zh:'请说明谁负责审核和纠错。',en:'Explain who should review and correct errors.'}, maintenanceRequired:{zh:'请说明最可能出现的维护问题。',en:'Describe the most likely maintenance problem.'}, nonAIRequired:{zh:'请考虑一种非 AI 做法，以及它何时更合适。',en:'Consider a non-AI approach and when it would be more appropriate.'},
  downloadJson:{zh:'下载匿名回答（JSON）',en:'Download anonymous response (JSON)'},
  downloadCsv:{zh:'下载分析用表格（CSV）',en:'Download analysis file (CSV)'},
  submit:{zh:'提交匿名回答',en:'Submit anonymous response'},
  submitting:{zh:'正在安全提交，请不要关闭页面……',en:'Submitting securely. Please keep this page open…'},
  submitTitle:{zh:'提交到学校存储',en:'Submit to University storage'},
  submitBody:{zh:'点击后，这份匿名回答将保存到南安普顿大学 OneDrive，并向研究者发送一封不含回答正文的通知邮件。',en:'Your anonymous response will be saved to the University of Southampton OneDrive. The researcher receives a notification email without your response text.'},
  submitConfiguredMissing:{zh:'提交连接尚未配置。请下载 JSON 备份并联系研究者。',en:'The submission connection is not configured. Download the JSON backup and contact the researcher.'},
  submitSuccess:{zh:'回答已成功提交到学校 OneDrive。',en:'Your response was submitted successfully to the University OneDrive.'},
  submitSuccessTitle:{zh:'回答已成功提交',en:'Response submitted'},
  submitSuccessNote:{zh:'你现在可以安全关闭页面。下方下载仅用于你希望保留匿名备份时使用。',en:'You may now close this page. The downloads below are optional anonymous backups.'},
  submitFailed:{zh:'暂时无法确认提交成功。你的回答仍保存在这台设备上；请检查网络后重试，或下载 JSON 备份并联系研究者。',en:'We could not confirm submission. Your answers remain on this device. Check your connection and retry, or download the JSON backup and contact the researcher.'},
  submitFailedTitle:{zh:'提交尚未完成',en:'Submission not completed'},
  retry:{zh:'重新提交',en:'Try again'},
  backupTitle:{zh:'备用下载',en:'Backup downloads'},
  backupBody:{zh:'提交失败时，请下载 JSON 并交给研究者；提交成功后无需再次发送。',en:'If submission fails, download the JSON and give it to the researcher. No further action is needed after a successful submission.'},
  receipt:{zh:'提交编号',en:'Submission receipt'},
  completeTitle:{zh:'谢谢，你已经完成这个情景。',en:'Thank you. You have completed this situation.'},
  completeBody:{zh:'请先查看你的选择路径，然后点击“提交匿名回答”。只有点击提交后，研究者才能收到这份数据。',en:'Review your choice path, then select “Submit anonymous response”. The researcher receives your data only after you submit.'},
  summary:{zh:'你的选择路径',en:'Your choice path'}, restart:{zh:'返回情景首页',en:'Return to scenario index'},
  confidence:{zh:'你对刚才的选择有多大把握？',en:'How sure are you about the choice above?'},
  confidenceHelp:{zh:'1 表示“我只是先选一个，还很不确定”；5 表示“按目前信息，我比较确定”。这里问的是你对自己选择的把握，不是你是否信任 AI。',en:'1 means “I am only making a tentative choice”; 5 means “with the information given, I am fairly sure”. This asks about confidence in your own choice, not trust in AI.'},
  uncertain:{zh:'很不确定',en:'Very uncertain'}, certain:{zh:'很确定',en:'Very certain'},
  reason:{zh:'你作出这个选择，最主要的原因是什么？',en:'What was the main reason for your choice?'},
  reasonHelp:{zh:'请写你为什么这样选。可以很短，例如：它能帮助我理解藏品；我担心来源不清；我想知道谁审核；我觉得故事背景比基础信息更重要；或者我觉得不用 AI 也可以。',en:'Write why you chose this. A short answer is fine: it would help me understand the object; I worry the source is unclear; I want to know who checks it; the story context matters more than basic facts; or I think AI is not needed.'},
  missing:{zh:'你还想知道什么，才会更有把握？（可选）',en:'What else would you want to know before feeling more sure? (optional)'},
  missingHelp:{zh:'请写一项你还缺的信息。例子：更多时代背景、藏品来源、谁写了原说明、AI 用了哪些资料、谁审核、成本多少、出错后怎么办。如果没有，可以留空。',en:'Name one missing piece of information. Examples: more historical context, the object’s provenance, who wrote the original text, what sources the AI used, who checks it, cost, or what happens after an error. Leave blank if nothing is missing.'},
  objectReal:{zh:'真实藏品资料',en:'Real object record'}, fictional:{zh:'研究构造',en:'Research-created'},
};

const scenarioIndex = [
  {id:'S1',audience:{zh:'访客',en:'Visitor'},rolePrompt:{zh:'作为一名博物馆参观者',en:'As a museum visitor'},title:{zh:'一件真实藏品的 AI 简明展签',en:'An AI plain-language label for a real object'},descriptor:{zh:'真实藏品、原始记录与拟议 AI 展签',en:'Real object, collection record and proposed AI label'},image:'public/objects/image1.jpg',color:'#ff5438'},
  {id:'S2',audience:{zh:'博物馆与社区合作人员',en:'Museum & community practitioner'},rolePrompt:{zh:'作为一名与社区合作的博物馆策展人员',en:'As a museum curator working with communities'},title:{zh:'一件仪式用品的多声部展示页',en:'A multi-voice display page for a ceremonial object'},descriptor:{zh:'许可、社区说法与个人记忆',en:'Permission, community wording and personal memory'},image:null,visual:'“ ”',color:'#d9ff4f'},
  {id:'S3',audience:{zh:'馆藏与数字化人员',en:'Collections & digital staff'},rolePrompt:{zh:'作为一名馆藏或数字化工作人员',en:'As a collections or digitisation officer'},title:{zh:'一次 AI 馆藏标签审核试运行',en:'An AI collection-tag review pilot'},descriptor:{zh:'纺织品图像、标签建议与人工审核',en:'Textile images, tag suggestions and human review'},image:'public/objects/image3.jpg',color:'#84a9ff'},
  {id:'S4',audience:{zh:'访客',en:'Visitor'},rolePrompt:{zh:'作为一名地方历史展览参观者',en:'As a local-history exhibition visitor'},title:{zh:'一个小型展览的访客支持选择',en:'Visitor support choices in a small exhibition'},descriptor:{zh:'翻译、简明文字与路线支持',en:'Translation, plain text and route support'},image:null,visual:'A / B / C',color:'#f4b8dc'}
];

const scenarios = {
  S1: {
    shortTitle:{zh:'AI 简明展签',en:'AI plain-language label'}, accent:'#ff5438', visual:'object',
    title:{zh:'一件真实藏品的 AI 简明展签',en:'An AI plain-language label for a real object'},
    deck:{zh:'你会看到一件真实藏品、一段原始馆藏说明，以及一张研究构造的 AI 简明展签。请判断哪些内容有帮助，哪些内容还需要来源、解释或人工审核。',en:'You will see a real object, an original collection description and a research-created AI plain-language label. Decide what is useful, what still needs sources, explanation or human checking.'},
    recap:{zh:'你是一名参观者，正在比较原始馆藏记录和一张拟议的 AI 简明展签。重点不是 AI 好不好，而是这张展签哪些内容能帮助理解，哪些内容需要来源、不确定性说明或人工审核。',en:'You are a visitor comparing the original collection record with a proposed AI plain-language label. The focus is not whether AI is good or bad, but which parts help understanding and which need sources, uncertainty notes or human review.'},
    examples:[{zh:'AI 如果说“花卉象征祝福”，需要说明这是馆藏记录、研究解释，还是推测。',en:'If AI says “the flowers symbolise blessing”, it should show whether this comes from the record, research interpretation or inference.'},{zh:'参观者可能想知道这个荷包在当时怎样使用、谁可能佩戴、它和日常生活有什么关系。',en:'A visitor may want to know how the purse was used, who might have worn it, and how it related to everyday life.'},{zh:'原记录写“可能”或“似乎”时，AI 展签也不应把它改成确定事实。',en:'When the original record says “probably” or “appears”, the AI label should not turn that into a certain fact.'}],
    objectTitle:{zh:'荷包｜英国｜17 世纪早期',en:'Purse | British | early 17th century'},
    objectMeta:{zh:'丝和金属线绣于帆布｜7.6 × 6.7 cm｜The Met 29.23.19',en:'Silk and metal thread on canvas | 7.6 × 6.7 cm | The Met 29.23.19'},
    objectBody:{zh:'这件精细刺绣的荷包可能对应 16、17 世纪清单中的 sweet bags；它似乎随身佩戴，用来装有香味的草药和香精，以抵御日常生活中的难闻气味。',en:'This elaborately embroidered purse probably corresponds to “sweet bags” listed in sixteenth- and seventeenth-century inventories. It appears to have been worn on the person and to have carried scented herbs and essences against unpleasant everyday smells.'},
    situation:{zh:'你正在浏览 The Met 的这件真实藏品。原馆藏说明使用了“可能”“似乎”等谨慎措辞，因为有些信息并不能完全确定。现在页面提供一张“AI 简明展签”，承诺把说明写得更容易读，并标出哪些是馆藏记录中已有的信息、哪些是 AI 根据文本作出的解释或推测。你可以选择打开它，也可以只看原记录。',en:'You are viewing this real object in The Met collection. The original record uses cautious words such as “probably” and “appears”, because some details are not fully certain. The page now offers an “AI plain-language label”. It promises easier wording and marks what comes from the collection record and what is AI interpretation or inference. You can open it, or continue with the original record only.'},
    institutionHeading:{zh:'你可以选择',en:'You can choose'},
    institution:{zh:'这项近未来服务不是已经上线的系统，而是一份研究提案。它让访客在“只看原馆藏记录”和“打开 AI 简明展签”之间选择。AI 会把文字写得更容易读，也可能加入故事化解释；但任何故事、象征意义或生活方式说明，都需要清楚标明来源或不确定性。',en:'This near-future service is not a live system; it is a research proposal. It lets visitors choose between “original collection record only” and “open the AI plain-language label”. AI may make the text easier to read and may add story-like interpretation, but any story, symbolic meaning or lifestyle context needs a clear source or uncertainty note.'},
    initialQuestion:{zh:'作为参观者，你现在愿意打开这张 AI 简明展签吗？',en:'As a visitor, would you open this AI plain-language label?'},
    initialHelp:{zh:'请只根据上一页的信息，选择最接近你第一反应的答案。完整提案会在下一页显示。',en:'Choose the answer closest to your first reaction using only the information on the previous page. You will see the full proposal next.'},
    initialOptions:[{zh:'愿意使用',en:'Yes, I would use it'},{zh:'愿意使用，但只查看有明确来源的内容',en:'I would use it, but only for content with a clear source'},{zh:'不愿意使用，只看原馆藏记录',en:'No; I would use the original collection record only'},{zh:'还需要更多信息才能决定',en:'I need more information before deciding'}],
    proposalTitle:{zh:'博物馆拟在明年使用的新数字展签',en:'A digital label the museum may introduce next year'},
    proposalNote:{zh:'下面四部分属于同一张展签，不是四个方案。',en:'The four parts below belong to one label; they are not four options.'},
    proposalCards:[
      {title:{zh:'AI 生成的简明说明',en:'Plain-language text written by AI'},body:{zh:'这是一只 17 世纪早期的英国 sweet bag，随身佩戴，用香草和香精遮盖难闻气味；花卉图案也象征祝福。',en:'This is an early seventeenth-century British sweet bag, worn on the person with herbs and essences to cover unpleasant smells; its floral motif also symbolises blessing.'}},
      {title:{zh:'馆藏记录中可以核对的信息',en:'What the collection record confirms'},body:{zh:'荷包；17 世纪早期；英国；丝与金属线绣于帆布；7.6 × 6.7 cm；馆藏编号 29.23.19。',en:'Purse; early 17th century; British; silk and metal thread on canvas; 7.6 × 6.7 cm; object number 29.23.19.'}},
      {title:{zh:'哪些是记录，哪些只是推测？',en:'What is recorded, and what is only inferred?'},body:{zh:'原馆藏说明使用“可能”“似乎”，表示信息并不完全确定。AI 展签可以保留这种谨慎表达。“花卉象征祝福”不在馆藏记录中，如果保留，应标明这是解释或推测，并说明依据。',en:'The original record uses “probably” and “appears” to show that some information is not fully certain. The AI label may keep this cautious wording. “Floral motif symbolises blessing” is not in the collection record; if kept, it should be marked as interpretation or inference and linked to a reason.'}},
      {title:{zh:'还有哪些问题没有答案？',en:'What questions remain unanswered?'},body:{zh:'这张展签可以说明基本信息，但仍不能可靠回答：谁真正使用过它、它摸起来如何、具体怎样制作、或者哪些知识从未被记录。把这些未知写出来，可以避免 AI 看起来“什么都知道”。',en:'The label can explain basic information, but it still cannot reliably answer who actually used it, how it felt, exactly how it was made, or what knowledge was never recorded. Stating these unknowns helps avoid making AI look as if it knows everything.'}}
    ],
    revisedQuestion:{zh:'看过并修改提案后，你现在会怎样选择？',en:'After reviewing and changing the proposal, what would you choose now?'},
    revisedHelp:{zh:'请根据你刚才看到的来源、推测、未知内容和修改想法，再选择一次。答案可以和第一次相同，也可以不同。',en:'Choose again after considering the sources, inferences, unknowns and changes you just reviewed. Your answer may be the same as before or different.'},
    revisedOptions:[{zh:'愿意按现在的内容使用',en:'I would use it with the current content'},{zh:'修改或删减 AI 推测后愿意使用',en:'I would use it after AI inferences were revised or removed'},{zh:'只看原馆藏记录，不使用 AI 展签',en:'I would use the original record, not the AI label'},{zh:'还需要更多信息才能决定',en:'I need more information before deciding'}],
    task:{zh:'请从这张展签中选一句话，把它改成你更能接受的版本。',en:'Choose one sentence from this label and rewrite it into a version you could better accept.'},
    taskHelp:{zh:'请尽量改写本页展签里的原句，不要换成另一件藏品。你可以把肯定语气改成“可能/似乎”，加上“根据馆藏记录”，删除没有来源的故事，或写明“目前无法确定”。',en:'Try to rewrite a sentence from this label, not a different object. You might change a certain claim to “may/appears”, add “according to the collection record”, remove an unsourced story, or state “this is not currently known”.'}
  },
  S2: {
    shortTitle:{zh:'多声部与许可',en:'Multiple voices and permission'}, accent:'#d9ff4f', visual:'withheld',
    title:{zh:'一件仪式用品的多声部展示页',en:'A multi-voice display page for a ceremonial object'},
    deck:{zh:'你需要决定：当馆藏记录、专家研究、社区说法和个人记忆不一致时，AI 只能整理材料，还是也可以改写和综合？',en:'You need to decide what AI may do when a collection record, specialist research, community wording and personal memory do not fully agree.'},
    recap:{zh:'你是一名与社区合作的策展人员，正在审核一件仪式用品的数字展示页。不同材料对名称、用途和流转经历说法不完全一致，有些内容也可能需要社区许可。重点是决定 AI 只能整理材料，还是可以改写、翻译或综合。',en:'You are a curator working with communities, reviewing a digital display page for a ceremonial object. Different materials disagree about its name, use and transfer history, and some content may need community permission. The focus is deciding whether AI may only organise material, or may also rewrite, translate or combine it.'},
    examples:[{zh:'旧馆藏记录可能使用一个殖民时期名称，但相关社区现在使用另一个名称。',en:'The old collection record may use a colonial-era name, while the related community now uses another name.'},{zh:'专家研究可能提出一种用途解释，但社区成员认为某些宗教或仪式知识不适合公开。',en:'Specialist research may suggest one use, while community members say some religious or ceremonial knowledge should not be public.'},{zh:'一位讲述者可能提供个人记忆，但这段记忆不能代表所有社区成员，也可能不希望被 AI 改写。',en:'One contributor may share a personal memory, but it does not represent everyone in the community and may not be suitable for AI rewriting.'}],
    situation:{zh:'你正在帮助一家博物馆审核一件仪式用品的数字展示页。关于这件藏品，不同材料说法不完全一致：馆藏记录有一个名称和流转记录；专家研究提出另一种解释；相关社区成员可能使用不同名称；一位讲述者还提供了个人记忆。有些知识可能不能公开，也不一定可以交给机器改写。博物馆正在确认展示许可，所以这里暂不显示图片。',en:'You are helping a museum review a digital page for a ceremonial object. Different materials do not fully agree: the collection record gives one name and transfer history; specialist research offers another interpretation; related community members may use different names; and one contributor has shared a personal memory. Some knowledge may not be public, and may not be suitable for machine rewriting. The museum is still checking display permission, so the image is not shown here.'},
    institutionHeading:{zh:'博物馆正在考虑的问题',en:'The museum question'},
    institution:{zh:'博物馆想知道 AI 是否可以帮忙整理这些材料。一个强版本是：AI 写出一段综合说明。一个弱版本是：AI 只帮忙排列、检索和比较不同说法，不把它们合成一个答案。你的任务是决定哪种边界更合适。',en:'The museum wants to know whether AI could help organise these materials. A strong version would let AI write one combined explanation. A weaker version would let AI arrange, search and compare the different accounts, without merging them into one answer. Your task is to decide which boundary makes sense.'},
    initialQuestion:{zh:'只根据这些信息，你现在会建议博物馆怎样做？',en:'Based only on this information, what would you advise the museum to do now?'},
    initialHelp:{zh:'请选择最接近你第一反应的答案。请想一想：是否已经有许可？谁有权决定说法能否公开？AI 是否只能整理，还是可以改写？完整提案会在下一页显示。',en:'Choose the answer closest to your first reaction. Think about permission, who has the right to decide what can be shown, and whether AI should only organise material or may also rewrite it. The full proposal appears next.'},
    initialOptions:[{zh:'可以让 AI 参与整理这些材料',en:'Use AI to help organise these materials'},{zh:'只让 AI 承担范围更小、限制更明确的工作',en:'Use AI only for a smaller, clearly limited task'},{zh:'目前不要让 AI 处理这些材料',en:'Do not use AI to process these materials at present'},{zh:'需要更多信息才能提出建议',en:'I need more information before recommending an approach'}],
    proposalTitle:{zh:'博物馆拟在明年使用的数字展示页',en:'A digital page the museum may introduce next year'},
    proposalNote:{zh:'下面四部分属于同一个展示页，不是四个方案。',en:'The four parts below belong to one display page; they are not four options.'},
    proposalCards:[
      {title:{zh:'馆藏记录和专家研究',en:'Collection record and specialist research'},body:{zh:'页面会分开显示“馆藏记录说什么”和“专家研究说什么”，并写明作者、证据范围和仍有争议的地方。AI 不应把研究解释写成最后结论。',en:'The page would separately show what the collection record says and what specialist research says. It would name the author, evidence range and remaining disputes. AI should not turn research interpretation into a final conclusion.'}},
      {title:{zh:'相关社区成员的说法',en:'Wording from a related community'},body:{zh:'如果相关社区提供了名称或解释，页面使用他们认可的说法，并写明这段内容是否可以公开、是否可以被改写、是否可以交给 AI 处理。',en:'If a related community provides a name or explanation, the page uses the wording they approve. It also states whether this material may be public, rewritten, or processed by AI.'}},
      {title:{zh:'个人记忆',en:'One person’s memory'},body:{zh:'如果展示个人记忆，页面会说明这是某一位讲述者的经历，不代表所有社区成员。讲述者可以选择显示姓名、身份或匿名。',en:'If a personal memory is displayed, the page states that it is one contributor’s experience, not the view of everyone in the community. The contributor may choose a name, identity or anonymity.'}},
      {title:{zh:'展示规则和未解决工作',en:'Display rule and unresolved work'},body:{zh:'默认把不同说法并列展示；没有许可时不改写；提供者可以更正、撤回或更新内容。问题是：页面会更长，而且博物馆还没有确定谁长期跟进许可变化。',en:'Different accounts are shown side by side by default. Nothing is rewritten without permission. Contributors may correct, withdraw or update material. The problem is that the page becomes longer, and the museum has not decided who will maintain changing permissions.'}}
    ],
    revisedQuestion:{zh:'看过并修改提案后，你认为 AI 在这里可以承担什么工作？',en:'After reviewing and changing the proposal, what role could AI take here?'},
    revisedHelp:{zh:'请根据你刚才看到的许可、改写、并列展示和维护问题，再选择一次。你可以让 AI 的角色更小、更大，或完全不用 AI。',en:'Choose again after considering permission, rewriting, side-by-side display and maintenance. You may make AI’s role smaller, larger, or decide not to use AI.'},
    revisedOptions:[{zh:'只整理和检索，不改写或综合内容',en:'Organise and retrieve only; do not rewrite or combine'},{zh:'得到明确许可后，可以改写或综合获许可的内容',en:'Rewrite or combine permitted material only with explicit permission'},{zh:'不让 AI 处理这些材料',en:'Do not use AI to process these materials'},{zh:'还需要更多信息或相关人员参与才能决定',en:'I need more information or relevant participants before deciding'}],
    task:{zh:'请写出这个展示页的责任分工和 AI 边界。',en:'Write the responsibility plan and AI limits for this display page.'},
    taskHelp:{zh:'请用简单句回答即可：谁提供材料？谁批准公开？谁可以修改或撤回？谁长期维护？AI 可以做什么，例如检索、排序、翻译；AI 不可以做什么，例如未经许可改写、合并成一个权威答案、发布敏感知识。',en:'Simple sentences are enough: who provides material? Who approves publication? Who may edit or withdraw it? Who maintains it over time? What may AI do, such as search, sort or translate? What may AI not do, such as rewrite without permission, merge accounts into one authoritative answer, or publish sensitive knowledge?'}
  },
  S3: {
    shortTitle:{zh:'馆藏标签审核',en:'Collection tag review'}, accent:'#84a9ff', visual:'queue',
    title:{zh:'一次 AI 馆藏标签审核试运行',en:'An AI collection-tag review pilot'},
    deck:{zh:'你需要决定：AI 可以为馆藏记录建议哪些标签？哪些标签必须人工逐件检查？如果积压或错误出现，谁负责？',en:'You need to decide which collection tags AI may suggest, which must be checked item by item, and who is responsible if errors or backlogs appear.'},
    recap:{zh:'你是一名馆藏或数字化工作人员，面对大量纺织品图像和不完整记录。AI 只提出标签建议，不直接修改记录。重点是决定哪些标签风险较低、哪些必须逐件审核，以及审核不过来或出错时怎么办。',en:'You are a collections or digitisation officer facing many textile images and incomplete records. AI only suggests tags; it does not directly change records. The focus is deciding which tags are lower risk, which need item-by-item review, and what happens when review backlogs or errors appear.'},
    examples:[{zh:'AI 可能建议“红色”“丝绸”“花卉图案”，这些可能适合抽查。',en:'AI may suggest “red”, “silk” or “floral motif”, which may be suitable for sampling.'},{zh:'AI 可能建议某个地区、年代、族群身份或文化含义，这类标签公开前风险更高。',en:'AI may suggest a region, date, group identity or cultural meaning; these are higher risk before publication.'},{zh:'每周只有半天审核时间，如果队列越来越长，博物馆可能需要缩小或暂停试运行。',en:'If staff have only half a day each week and the queue keeps growing, the museum may need to narrow or pause the pilot.'}],
    situation:{zh:'你在一家中型博物馆的馆藏或数字化团队工作。博物馆约有 30,000 张纺织品图像，很多记录还不完整。人工标注很慢，所以团队考虑让 AI 建议标签，例如材料、颜色、图案、年代、地区或相似藏品。但如果错误的地区、身份或文化标签被公开，可能会长期影响公众检索和理解。团队每周只有半天时间审核 AI 建议。',en:'You work in the collections or digitisation team of a medium-sized museum. It has about 30,000 textile images, many with incomplete records. Manual tagging is slow, so the team is considering AI-suggested tags, such as material, colour, motif, date, region or similar objects. But if incorrect regional, identity or cultural labels become public, they may shape public search and interpretation for years. The team has only half a day each week to review AI suggestions.'},
    institutionHeading:{zh:'博物馆正在考虑的问题',en:'The museum question'},
    institution:{zh:'AI 不会直接覆盖原记录，只会提出建议。真正的问题是：哪些建议可以快速处理，哪些必须逐件审核，审核不过来时是否应缩小或暂停试运行。',en:'AI would not overwrite the original record; it would only suggest tags. The real question is which suggestions can be handled quickly, which must be reviewed item by item, and whether the pilot should narrow or pause when staff cannot keep up.'},
    initialQuestion:{zh:'只根据这些信息，你现在会建议博物馆怎样做？',en:'Based only on this information, what would you advise the museum to do now?'},
    initialHelp:{zh:'请选择最接近你第一反应的答案。请想一想：哪些标签风险较低？哪些标签可能影响身份、文化或地区解释？每周半天审核是否够用？完整方案会在下一页显示。',en:'Choose the answer closest to your first reaction. Think about which tags are lower risk, which could affect identity, cultural or regional interpretation, and whether half a day of staff review is enough. The full proposal appears next.'},
    initialOptions:[{zh:'可以让 AI 提供馆藏标签建议',en:'Use AI to suggest collection tags'},{zh:'只让 AI 建议范围较小、风险较低的标签',en:'Use AI only for a smaller set of lower-risk tags'},{zh:'目前不要启动 AI 标签试运行',en:'Do not start an AI tagging pilot at present'},{zh:'需要更多信息才能提出建议',en:'I need more information before recommending an approach'}],
    proposalTitle:{zh:'AI 标签审核后台（试运行方案）',en:'AI tag review dashboard (pilot proposal)'},
    proposalNote:{zh:'下面四部分属于同一个审核流程，不是四个方案。',en:'The four parts below belong to one review process; they are not four options.'},
    proposalCards:[
      {title:{zh:'AI 只提出建议，不直接改记录',en:'AI suggests; it does not directly change records'},body:{zh:'每条 AI 建议都会排队等待审核。它会显示模型版本、生成日期和参考依据。原始馆藏记录不会被 AI 自动覆盖。',en:'Each AI suggestion waits in a review queue. It shows the model version, date and supporting reference. The original collection record is not automatically overwritten by AI.'}},
      {title:{zh:'不同标签需要不同审核强度',en:'Different tags need different review levels'},body:{zh:'颜色、形状等低风险标签可以抽查；年代、地区、身份、文化含义和敏感词，在公开前需要逐件审核。',en:'Lower-risk tags such as colour and shape may be sampled. Date, region, identity, cultural meaning and sensitive terms need item-by-item review before publication.'}},
      {title:{zh:'每个决定都留下记录',en:'Every decision leaves a record'},body:{zh:'接受、修改、拒绝或暂缓，都要记录审核人、日期和理由。有争议的标签可以先隐藏；如果批量修改出错，也要能撤回。',en:'Accept, edit, reject or defer decisions all record the reviewer, date and reason. Disputed tags can be hidden first; if a bulk change is wrong, it must be possible to roll it back.'}},
      {title:{zh:'仍然可能出现积压',en:'A backlog may still happen'},body:{zh:'提案要求指定负责人和每周处理上限，并在模型更新后复查。但团队每周只有半天审核时间；如果没人负责，试运行应缩小范围或暂停。',en:'The proposal requires an owner, a weekly limit and re-checks after model updates. But staff still have only half a day each week; if nobody can own the work, the pilot should be narrowed or paused.'}}
    ],
    revisedQuestion:{zh:'看过并修改审核方案后，你现在会建议博物馆怎样推进？',en:'After reviewing and changing the proposal, how would you recommend proceeding?'},
    revisedHelp:{zh:'请根据你刚才看到的标签风险、审核时间、记录留痕和积压问题，再选择一次。答案可以和第一次相同，也可以不同。',en:'Choose again after considering tag risk, review time, decision records and possible backlog. Your answer may be the same as before or different.'},
    revisedOptions:[{zh:'按提案开展风险分级试运行',en:'Run the risk-tiered pilot as proposed'},{zh:'缩小范围或加强审核后再试运行',en:'Run a smaller pilot or require stricter review'},{zh:'目前不应启动这项 AI 试运行',en:'Do not start this AI pilot at present'},{zh:'还需要更多人员、成本或风险信息',en:'I need more staffing, cost or risk information'}],
    task:{zh:'请为 AI 建议的标签写一条审核规则。',en:'Write one review rule for AI-suggested tags.'},
    taskHelp:{zh:'请尽量写成规则句。例如：颜色和形状可以抽查；年代、地区、身份和文化含义必须逐件审核；如果待审核数量超过每周处理量，就暂停新增标签；如果公开标签出错，由馆藏负责人更正并记录原因。',en:'Try to write it as a rule. For example: colour and shape may be sampled; date, region, identity and cultural meaning must be reviewed item by item; if the queue exceeds the weekly limit, stop adding new tags; if a public tag is wrong, the collections lead corrects it and records why.'}
  },
  S4: {
    shortTitle:{zh:'访客支持方案',en:'Visitor support options'}, accent:'#f4b8dc', visual:'route',
    title:{zh:'一个小型展览的访客支持选择',en:'Visitor support choices in a small exhibition'},
    deck:{zh:'你需要在有限预算下选择优先方向：先做一个普通改进，试一个很小的 AI 服务，还是先收集更多证据？',en:'You need to choose a priority under a limited budget: make one ordinary improvement, pilot one small AI service, or gather more evidence first.'},
    recap:{zh:'你是一名地方历史展览参观者。博物馆预算有限，只能先处理翻译、简明文字、短路线/无障碍路线中的一个方向，或先做一次很小的试验。重点是选择第一步，而不是设计一个完整大型 APP。',en:'You are a visitor to a local-history exhibition. The museum has limited budget and can first address only one area: translation, plain text, or short/access route support, or run one small pilot. The focus is choosing a first step, not designing a large all-in-one app.'},
    examples:[{zh:'有访客看得懂展品，但希望文字更短、更像普通说明。',en:'A visitor may understand the exhibition but want shorter, plainer text.'},{zh:'有访客需要另一种语言，纸质翻译、二维码翻译或人工讲解都可能是选择。',en:'A visitor may need another language; paper translation, QR translation or staff explanation could all be options.'},{zh:'有访客只想走一条 20 分钟短路线，或需要更清楚的无障碍路线提示。',en:'A visitor may want a 20-minute short route or clearer accessible-route guidance.'}],
    situation:{zh:'你正在参观一家小型地方历史展览。参观结束时，博物馆请你帮忙选择下一步优先改善哪一项访客支持。大多数访客觉得展览基本清楚，但反馈反复提到三个问题：缺少另一种语言的翻译；有些文字太长或不够简明；缺少清楚的短路线和无障碍路线。博物馆预算有限，不能同时解决三个问题，只能先做一项小改进，或做一次很小、可停止的试验。',en:'You are visiting a small local-history exhibition. At the end, the museum asks you to help choose which visitor-support issue to improve first. Most visitors find the exhibition broadly clear, but feedback repeatedly mentions three problems: no translation into another needed language; some text is too long or not plain enough; and there is no clear short or accessible route. The museum has limited budget. It cannot solve all three at once, so it can make one small improvement or run one small pilot that can be stopped.'},
    institutionHeading:{zh:'博物馆正在征求你的意见',en:'The museum is asking for your view'},
    institution:{zh:'博物馆不是一定要用 AI。它正在比较三种方向：直接改进现有材料；提供一个有限、可选的 AI 服务；或者先弄清楚哪类访客最需要帮助，再决定是否试点。',en:'The museum does not have to use AI. It is comparing three directions: improve existing materials directly; offer one limited and optional AI service; or first learn which visitors most need support before deciding whether to pilot anything.'},
    initialQuestion:{zh:'作为参观者，你希望博物馆先做哪一种？',en:'As a visitor, what would you like the museum to do first?'},
    initialHelp:{zh:'请先根据这三个需求和预算限制选择。不要试图同时解决全部问题；请选出你认为最适合作为第一步的方向。详细方案会在下一页显示。',en:'Choose based on the three needs and the budget limit. Do not try to solve everything at once; choose the direction that seems best as a first step. Detailed options appear next.'},
    initialOptions:[{zh:'选择一项需求，直接做一项非 AI 改进',en:'Choose one need and make one direct non-AI improvement'},{zh:'选择一项需求，提供有限、可选的 AI 服务',en:'Choose one need and offer a limited, optional AI service'},{zh:'先继续了解需求，再做一次小范围试验',en:'Learn more about the needs, then run one small pilot'},{zh:'现有信息不足，无法判断',en:'There is not enough information to decide'}],
    proposalTitle:{zh:'博物馆明年的访客支持方案（草案）',en:'Draft visitor-support plan for next year'},
    proposalNote:{zh:'下面只有三个方案（A–C）；最后一项是比较标准，不是方案 D。',en:'There are three options (A–C); the final item is a comparison checklist, not Option D.'},
    proposalCards:[
      {title:{zh:'方案 A｜不用 AI，先改进一项现有服务',en:'Option A | Improve one existing service without AI'},body:{zh:'从三个问题中选一个先解决：增加一种纸质翻译、写一份简明摘要，或改善短路线/无障碍路线标识。这个方案容易解释和维护，但本次只能先解决一个问题。',en:'Choose one of the three problems first: add one paper translation, write a plain-language summary, or improve short/access route signs. This is easier to explain and maintain, but it addresses only one problem for now.'}},
      {title:{zh:'方案 B｜试一个有限、可选的 AI 服务',en:'Option B | Pilot one limited, optional AI service'},body:{zh:'只选一个功能小范围试用：翻译、简明文字，或路线支持。AI 只能使用博物馆审核过的内容。访客可以选择不用它。试点还需要无障碍测试、隐私说明、人工审核和定期更新。',en:'Pilot only one feature: translation, plain language, or route support. AI may use only museum-approved content. Visitors can choose not to use it. The pilot also needs accessibility testing, a privacy notice, human review and regular updates.'}},
      {title:{zh:'方案 C｜先弄清楚需求，再决定试点',en:'Option C | Learn more before choosing a pilot'},body:{zh:'先了解谁遇到困难、困难出现得多不多、现有服务哪里不够。之后只试一种语言、一个展区或一个访客群体，并提前写清什么时候继续、修改或停止。',en:'First find out who has difficulty, how often it happens and where current services fall short. Then pilot only one language, one gallery area or one visitor group, with rules for when to continue, change or stop.'}},
      {title:{zh:'比较 A–C 时要问的问题（不是方案 D）',en:'Questions for comparing A–C (not Option D)'},body:{zh:'谁会受益？谁可能被排除？需要多少员工时间？怎样发现和改正错误？访客能否不用它？一年后还有没有人维护？',en:'Who benefits? Who might be excluded? How much staff time is needed? How will errors be found and corrected? Can visitors opt out? Will anyone maintain it after one year?'}}
    ],
    revisedQuestion:{zh:'比较并修改三个方案后，你现在希望博物馆先做什么？',en:'After comparing and changing the three options, what would you like the museum to do first?'},
    revisedHelp:{zh:'请根据 A、B、C 的优点、代价和维护要求，再选择一次。你可以选一个方案，也可以组合方案。答案可以和第一次相同，也可以不同。',en:'Choose again after considering the benefits, costs and maintenance needs of A, B and C. You may choose one option or combine them. Your answer may be the same as before or different.'},
    revisedOptions:[{zh:'方案 A｜不用 AI，先直接改进一项服务',en:'Option A | Make one direct improvement without AI'},{zh:'方案 B｜有限、可选地试用一项 AI 服务',en:'Option B | Pilot one limited, optional AI service'},{zh:'方案 C｜先收集更多证据，再做可撤回试验',en:'Option C | Gather evidence, then run a reversible pilot'},{zh:'组合上述做法，或采用其他做法',en:'Combine A–C or take another approach'}],
    task:{zh:'请写出你会建议博物馆先做的访客支持方案。',en:'Write the visitor-support plan you would advise the museum to try first.'},
    taskHelp:{zh:'请写清三件事：第一，先解决哪一个需求；第二，用不用 AI，如果用，只用在哪一个小功能；第三，什么时候暂停、修改或结束试点。例如：先做纸质翻译；或先试一个可选二维码翻译；如果使用率低、错误多、无人维护，就停止。',en:'Please state three things: first, which need to address first; second, whether AI is used, and if so for which small feature only; third, when the museum should pause, change or end the pilot. For example: add a paper translation first; or pilot an optional QR translation; stop if use is low, errors are frequent, or nobody can maintain it.'}
  }
};

const phases = ['briefing','situation','initial','proposal','reshape','final','reflection','complete'];
const taskPhases = phases.slice(0,-1);
const actions = ['keep','concern','remove','question'];
const STUDY_ID = 'ERGO-II-114350';
const PROBE_VERSION = 'web-1.8';
const DATA_SCHEMA_VERSION = '1.5';
const POWER_AUTOMATE_URL = String(window.PROBE_CONFIG?.powerAutomateUrl || '').trim();
let language = localStorage.getItem('probe-language') || 'en';
let phase = 'landing';
let session = null;
let validationMessage = '';
let pendingSkipTarget = '';

function makeParticipantId() {
  const id = crypto.randomUUID ? crypto.randomUUID().split('-')[0] : Math.random().toString(36).slice(2,10);
  return `P-${id.toUpperCase()}`;
}

function makeSubmissionId() {
  const id = crypto.randomUUID ? crypto.randomUUID().replaceAll('-','').slice(0,12) : Math.random().toString(36).slice(2,14);
  return `SUB-${id.toUpperCase()}`;
}

function hasPendingSession(data) {
  return Boolean(data?.session && !data.session.submittedAt);
}

function renderScenarioGrid() {
  const grid = document.querySelector('#scenario-grid');
  if (!grid) return;
  const copy = landingCopy[language];
  grid.innerHTML = scenarioIndex.map(s => `
    <article class="scenario-card" style="--accent:${s.color}">
      <div class="card-topline"><span>${s.id}</span><span>${t(s.rolePrompt)}</span></div>
      <div class="card-visual">${s.image ? `<img src="${s.image}" alt="">` : `<span class="visual-type" aria-hidden="true">${s.visual}</span>`}</div>
      <div class="card-content"><p>${t(s.descriptor)}</p><h3>${t(s.title)}</h3><span class="card-time">${copy.duration}</span>
        <button type="button" data-scenario="${s.id}" aria-label="${copy.open} ${s.id}">${copy.open}<span aria-hidden="true">→</span></button>
      </div>
    </article>`).join('');
  renderResumePanel();
}

function storedSession(id) {
  try { return JSON.parse(localStorage.getItem(`museum-ai-probe-${id}`)); } catch { return null; }
}

function renderResumePanel() {
  const section = document.querySelector('#resume-section');
  const list = document.querySelector('#resume-list');
  if (!section || !list) return;
  const saved = scenarioIndex.map(item => ({item, data:storedSession(item.id)})).filter(entry => hasPendingSession(entry.data));
  section.hidden = saved.length === 0;
  list.innerHTML = saved.map(({item,data}) => {
    const index = Math.max(0, taskPhases.indexOf(data.phase));
    const status = data.phase === 'complete' ? t(ui.complete) : `${t(ui.step)} ${index+1} ${t(ui.of)} ${taskPhases.length} · ${t(ui[data.phase])}`;
    return `<button type="button" data-resume-scenario="${item.id}"><span><b>${item.id} · ${t(item.title)}</b><small>${status}</small></span><strong>${landingCopy[language].resume} →</strong></button>`;
  }).join('');
}

function setLanguage(next) {
  language = next;
  localStorage.setItem('probe-language', next);
  document.documentElement.lang = next === 'zh' ? 'zh-CN' : 'en';
  document.title = next === 'zh' ? '文化遗产中的 AI｜思辨设计 Probe' : 'AI in Cultural Heritage | Speculative Probe';
  document.querySelector('.wordmark')?.setAttribute('aria-label', next === 'zh' ? '返回首页' : 'Return to homepage');
  document.querySelector('.site-header .language-switch')?.setAttribute('aria-label', next === 'zh' ? '语言选择' : 'Language selection');
  document.querySelectorAll('[data-language]').forEach(button => button.classList.toggle('active', button.dataset.language === next));
  document.querySelectorAll('[data-copy]').forEach(node => { node.textContent = landingCopy[next][node.dataset.copy]; });
  if (session) { session.language = next; saveSession(); renderProbe(); } else renderScenarioGrid();
}

function startScenario(id) {
  const previous = storedSession(id);
  if (hasPendingSession(previous)) return resumeScenario(id);
  const data = scenarios[id];
  session = {
    participantId:makeParticipantId(), scenario:id, language, startedAt:new Date().toISOString(), completedAt:'',
    consentConfirmed:false,
    initialChoice:'', initialConfidence:'', initialReason:'', missingInfo:'',
    proposalMarks:data.proposalCards.map(() => ({action:'',note:''})),
    addedContent:'', stopCondition:'', scenarioReconfiguration:'', revisedChoice:'', comparison:'',
    evidenceUsed:'', transparentNotActionable:'', finalComment:'',
    downstreamOutcome:'', accountabilityPlan:'', maintenanceRisk:'', nonAIAlternative:'',
    skippedPages:[],
    submissionId:'', submissionStatus:'idle', submittedAt:'', submissionError:''
  };
  phase = 'briefing';
  validationMessage = '';
  document.querySelector('#app').hidden = true;
  let root = document.querySelector('#probe-root');
  if (!root) { root = document.createElement('div'); root.id = 'probe-root'; document.body.appendChild(root); }
  saveSession(); renderProbe(); window.scrollTo(0,0);
}

function resumeScenario(id) {
  const saved = storedSession(id);
  if (!saved?.session || !scenarios[id]) return startScenario(id);
  session = saved.session;
  session.consentConfirmed = Boolean(session.consentConfirmed);
  ['downstreamOutcome','accountabilityPlan','maintenanceRisk','nonAIAlternative'].forEach(field => {
    if (typeof session[field] !== 'string') session[field] = '';
  });
  if (!Array.isArray(session.skippedPages)) session.skippedPages = [];
  session.submissionId = typeof session.submissionId === 'string' ? session.submissionId : '';
  session.submittedAt = typeof session.submittedAt === 'string' ? session.submittedAt : '';
  session.submissionError = '';
  session.submissionStatus = session.submittedAt ? 'submitted' : 'idle';
  session.language = language;
  phase = phases.includes(saved.phase) ? saved.phase : 'briefing';
  validationMessage = '';
  document.querySelector('#app').hidden = true;
  let root = document.querySelector('#probe-root');
  if (!root) { root = document.createElement('div'); root.id = 'probe-root'; document.body.appendChild(root); }
  saveSession(); renderProbe(); window.scrollTo(0,0);
}

function saveSession() {
  if (session) localStorage.setItem(`museum-ai-probe-${session.scenario}`, JSON.stringify({phase,session}));
}

function exitProbe() {
  session = null; phase = 'landing'; validationMessage = ''; pendingSkipTarget = '';
  document.querySelector('#probe-root')?.remove(); document.querySelector('#app').hidden = false;
  renderScenarioGrid(); window.scrollTo({top:document.querySelector('#scenarios').offsetTop,behavior:'smooth'});
}

function progressMarkup() {
  const visible = taskPhases;
  const active = Math.min(visible.indexOf(phase),visible.length-1);
  return `<div class="progress-shell"><div class="progress-summary"><div><b>${t(ui.step)} ${active+1} ${t(ui.of)} ${visible.length}</b><small>● ${t(ui.saved)}</small></div><span>${t(ui[visible[active]])}</span></div><ol class="probe-progress" aria-label="Progress">${visible.map((key,index) => `<li class="${index < active ? 'done' : ''} ${index === active ? 'active' : ''}"><span>${index < active ? '✓' : String(index+1)}</span><b>${t(ui[key])}</b></li>`).join('')}</ol></div>`;
}

function renderProbe() {
  const root = document.querySelector('#probe-root');
  const s = scenarios[session.scenario];
  root.style.setProperty('--scenario-accent', s.accent);
  root.innerHTML = `
    <header class="probe-header">
      <button class="probe-wordmark" data-exit type="button"><span>AI</span><b>Culture / Probe</b></button>
      <div class="probe-id"><span>${t(ui.participant)}</span><b>${session.participantId}</b><small>● ${t(ui.saved)}</small></div>
      <div class="language-switch probe-language" aria-label="Language selection">
        <button class="${language==='zh'?'active':''}" data-probe-language="zh" type="button">中文</button>
        <button class="${language==='en'?'active':''}" data-probe-language="en" type="button">EN</button>
      </div>
    </header>
    ${phase !== 'complete' ? progressMarkup() : ''}
    <main class="probe-main ${phase==='proposal'||phase==='reshape'?'wide':''}">
      ${validationMessage ? `<div class="validation" role="alert"><p>${validationMessage}</p>${pendingSkipTarget?`<p>${t(ui.skipNote)}</p><button class="validation-skip" data-skip-next="${pendingSkipTarget}" type="button">${t(ui.skipPage)} →</button>`:''}</div>` : ''}
      ${renderPhase(s)}
      ${phase!=='complete'?`<details class="help-panel"><summary>${t(ui.help)}</summary><p>${t(ui.helpBody)}</p></details>`:''}
    </main>`;
}

function renderPhase(s) {
  if (phase === 'briefing') return renderBriefing(s);
  if (phase === 'situation') return renderSituation(s);
  if (phase === 'initial') return renderInitial(s);
  if (phase === 'proposal') return renderProposal(s);
  if (phase === 'reshape') return renderReshape(s);
  if (phase === 'final') return renderFinal(s);
  if (phase === 'reflection') return renderReflection(s);
  return renderComplete(s);
}

function phaseHeading(kicker,title,deck='') {
  return `<div class="phase-heading"><div class="phase-kicker"><span>${t(ui.pageTask)}</span><p>${kicker}</p></div><h1>${title}</h1>${deck?`<div class="phase-deck">${deck}</div>`:''}</div>`;
}

function bottomNav(backLabel,nextLabel,nextAction) {
  return `<nav class="bottom-nav"><button class="secondary-button" data-back type="button">← ${backLabel}</button><button class="next-button" data-next="${nextAction}" type="button">${nextLabel}<span>→</span></button></nav>`;
}

function renderBriefing(s) {
  return `${phaseHeading(`${session.scenario} · ${t(s.shortTitle)}`,t(ui.briefing),t(ui.noCorrect))}
    <section class="ai-primer">
      <article><span>01</span><h2>${t(ui.aiWhat)}</h2><p>${t(ui.aiWhatBody)}</p></article>
      <article><span>02</span><h2>${t(ui.aiCan)}</h2><p>${t(ui.aiCanBody)}</p></article>
      <article><span>03</span><h2>${t(ui.aiChoose)}</h2><p>${t(ui.aiChooseBody)}</p></article>
    </section>
    <section class="ethics-panel" id="participant-information-summary" aria-labelledby="ethics-summary-title">
      <div class="ethics-panel-heading"><span>${t(ui.ethicsReference)}</span><h2 id="ethics-summary-title">${t(ui.ethicsSummary)}</h2></div>
      <ul>
        <li>${t(ui.ethicsPurpose)}</li>
        <li>${t(ui.ethicsActivity)}</li>
        <li>${t(ui.ethicsEligibility)}</li>
        <li>${t(ui.ethicsChoice)}</li>
        <li>${t(ui.ethicsData)}</li>
      </ul>
    </section>
    <section class="consent-panel">
      <a class="consent-summary-link" href="#participant-information-summary">↑ ${t(ui.reviewSummary)}</a>
      <label><input id="consent-complete" type="checkbox" ${session.consentConfirmed?'checked':''}><span>${t(ui.consent)}</span></label>
      <p>${t(ui.consentNote)}</p><p class="prototype-note">${t(ui.prototype)}</p>
    </section>
    ${bottomNav(t(ui.back),t(ui.begin),'situation')}`;
}

function renderVisual(s) {
  if (s.visual === 'object') return `<div class="situation-object"><img src="public/objects/image1.jpg" alt="${t(s.objectTitle)}"><div><span>${t(ui.objectReal)} · The Met Open Access</span><h2>${t(s.objectTitle)}</h2><p class="object-meta">${t(s.objectMeta)}</p><p>${t(s.objectBody)}</p></div></div>`;
  if (s.visual === 'withheld') return `<div class="withheld-visual"><div class="withheld-frame"><span>IMAGE</span><b>NOT SHOWN</b></div><p>${language==='zh'?'博物馆正在与相关社区确认公开展示许可':'The museum is confirming public display permission with the relevant community'}</p></div>`;
  if (s.visual === 'queue') return `<div class="collection-queue">${['image2.jpg','image3.jpg','image4.jpg'].map((image,i)=>`<figure><img src="public/objects/${image}" alt=""><figcaption>The Met OA<br>${['29.23.21','30.8.143','2009.300.2251'][i]}</figcaption></figure>`).join('')}</div>`;
  return `<div class="route-visual" aria-label="Visitor route diagram"><span class="route-node n1">START</span><span class="route-line l1"></span><span class="route-node n2">TEXT</span><span class="route-line l2"></span><span class="route-node n3">LANG</span><span class="route-line l3"></span><span class="route-node n4">ACCESS</span><b>${language==='zh'?'访客路线示意':'VISITOR ROUTE'}</b></div>`;
}

function scenarioExamples(s) {
  return `<section class="situation-examples"><span>${t(ui.examplesTitle)}</span><ol>${s.examples.map(example=>`<li>${t(example)}</li>`).join('')}</ol></section>`;
}

function scenarioReminder(s) {
  const role = scenarioIndex.find(item=>item.id===session.scenario).rolePrompt;
  return `<section class="scenario-reminder" aria-label="${t(ui.contextReminder)}"><div><span>${t(ui.contextReminder)}</span><h2>${t(s.title)}</h2></div><p><b>${t(ui.reminderRole)}:</b> ${t(role)}</p><p><b>${t(ui.reminderFocus)}:</b> ${t(s.recap)}</p></section>`;
}

function renderSituation(s) {
  return `${phaseHeading(`${session.scenario} · ${t(ui.situation)}`,t(s.title),t(s.deck))}
    <section class="role-banner"><span>${t(ui.roleLabel)}</span><b>${t(scenarioIndex.find(item=>item.id===session.scenario).rolePrompt)}</b></section>
    <section class="situation-layout"><div>${renderVisual(s)}</div><div class="situation-copy"><p>${t(s.situation)}</p><aside><span>${t(s.institutionHeading)}</span><p>${t(s.institution)}</p></aside>${scenarioExamples(s)}<div class="fiction-note"><b>${t(ui.fictional)}</b><span>${language==='zh'?'具体 AI 服务、界面和机构决定均为研究构造。':'The specific AI service, interface and institutional decision are research-created.'}</span></div></div></section>
    ${bottomNav(t(ui.back),t(ui.continueInitial),'initial')}`;
}

function optionMarkup(options,name,selected) {
  return `<div class="choice-list">${options.map((option,index)=>`<label><input type="radio" name="${name}" value="${index}" ${String(index)===String(selected)?'checked':''}><span class="choice-index">${String.fromCharCode(65+index)}</span><span>${t(option)}</span></label>`).join('')}</div>`;
}

function confidenceMarkup(selected) {
  return `<fieldset class="confidence"><legend>${t(ui.confidence)}</legend><p class="question-help">${t(ui.confidenceHelp)}</p><div><span>${t(ui.uncertain)}</span>${[1,2,3,4,5].map(v=>`<label><input type="radio" name="confidence" value="${v}" ${String(v)===String(selected)?'checked':''}><span>${v}</span></label>`).join('')}<span>${t(ui.certain)}</span></div></fieldset>`;
}

function renderInitial(s) {
  return `${phaseHeading(`${session.scenario} · ${t(ui.initial)}`,t(s.initialQuestion),t(s.initialHelp))}
    ${scenarioReminder(s)}
    <form class="judgement-form" id="initial-form">
      ${optionMarkup(s.initialOptions,'initialChoice',session.initialChoice)}
      ${confidenceMarkup(session.initialConfidence)}
      <label class="text-field"><span>${t(ui.reason)} <b>*</b></span><small class="question-help">${t(ui.reasonHelp)}</small><textarea name="initialReason" rows="4">${escapeText(session.initialReason)}</textarea></label>
      <label class="text-field"><span>${t(ui.missing)}</span><small class="question-help">${t(ui.missingHelp)}</small><textarea name="missingInfo" rows="3">${escapeText(session.missingInfo)}</textarea></label>
    </form>
    ${bottomNav(t(ui.back),t(ui.reveal),'proposal')}`;
}

function renderProposal(s) {
  return `${phaseHeading(`${session.scenario} · ${t(ui.proposed)}`,t(s.proposalTitle),t(s.proposalNote))}
    ${scenarioReminder(s)}
    <div class="reveal-banner"><b>${language==='zh'?'你的第一次选择已经保存。':'Your first choice has been saved.'}</b><span>${language==='zh'?'下面才会显示研究构造的近未来提案。它不是已经投入使用的系统。':'The research-created near-future proposal is shown below. It is not an implemented system.'}</span></div>
    <div class="proposal-instruction"><span>1</span><div><p>${t(ui.proposalInstruction)}</p><small class="question-help">${t(ui.proposalInstructionHelp)}</small></div></div>
    <section class="proposal-grid">${s.proposalCards.map((card,index)=>{
      const mark=session.proposalMarks[index].action;
      return `<article class="proposal-card ${mark?`marked ${mark}`:''}"><div class="proposal-number">${String(index+1).padStart(2,'0')}</div><h2>${t(card.title)}</h2><p>${t(card.body)}</p>
        <div class="mark-actions" aria-label="Mark proposal item">${actions.map(action=>`<button class="${mark===action?'active':''}" data-mark-index="${index}" data-mark-action="${action}" type="button">${t(ui[action])}</button>`).join('')}</div>
      </article>`}).join('')}</section>
    ${bottomNav(t(ui.back),t(ui.reshapeNext),'reshape')}`;
}

function actionLabel(action) { return action ? t(ui[action]) : t(ui.unmarked); }

function renderReshape(s) {
  return `${phaseHeading(`${session.scenario} · ${t(ui.reshape)}`,language==='zh'?'把提案改成你能够接受的版本':'Change the proposal into a version you could accept',language==='zh'?'请根据刚才的标记修改提案。你可以调整谁来决定、AI 可以做什么，以及什么时候需要停止。':'Use your marks and notes to make the proposal workable for you. You can change who decides, what AI may do and when it needs to stop.')}
    ${scenarioReminder(s)}
    <section class="reshape-list">${s.proposalCards.map((card,index)=>{const mark=session.proposalMarks[index];return `<article><div class="reshape-title"><span class="status-chip ${mark.action}">${actionLabel(mark.action)}</span><h2>${t(card.title)}</h2></div><p>${t(card.body)}</p><label class="text-field compact"><span>${t(ui.changeThis)}</span><small class="question-help">${t(ui.changeThisHelp)}</small><textarea rows="3" data-note-index="${index}">${escapeText(mark.note)}</textarea></label></article>`}).join('')}</section>
    <section class="boundary-fields">
      <label class="text-field"><span>+ ${t(ui.addMissing)}</span><small class="question-help">${t(ui.addMissingHelp)}</small><textarea rows="4" data-session-field="addedContent">${escapeText(session.addedContent)}</textarea></label>
      <label class="text-field stop-field"><span>${t(ui.stopPrompt)} <b>*</b></span><small class="question-help">${t(ui.stopPromptHelp)}</small><textarea rows="4" data-session-field="stopCondition">${escapeText(session.stopCondition)}</textarea></label>
      <label class="text-field task-field"><span>${t(s.task)} <b>*</b></span><small class="question-help">${t(s.taskHelp)}</small><textarea rows="5" data-session-field="scenarioReconfiguration">${escapeText(session.scenarioReconfiguration)}</textarea></label>
    </section>
    ${bottomNav(t(ui.back),t(ui.finalNext),'final')}`;
}

function renderFinal(s) {
  const comparisons=[ui.changed,ui.clearer,ui.unchanged];
  return `${phaseHeading(`${session.scenario} · ${t(ui.final)}`,t(s.revisedQuestion),t(s.revisedHelp))}
    ${scenarioReminder(s)}
    <form class="judgement-form" id="final-form">
      ${optionMarkup(s.revisedOptions,'revisedChoice',session.revisedChoice)}
      <fieldset class="comparison"><legend>${t(ui.comparison)}</legend><p class="question-help">${t(ui.comparisonHelp)}</p>${comparisons.map((item,index)=>`<label><input type="radio" name="comparison" value="${index}" ${String(index)===String(session.comparison)?'checked':''}><span>${t(item)}</span></label>`).join('')}</fieldset>
      <label class="text-field"><span>${t(ui.evidenceUsed)} <b>*</b></span><small class="question-help">${t(ui.evidenceUsedHelp)}</small><textarea name="evidenceUsed" rows="4">${escapeText(session.evidenceUsed)}</textarea></label>
      <label class="text-field"><span>${t(ui.transparentNotActionable)} <b>*</b></span><small class="question-help">${t(ui.transparentNotActionableHelp)}</small><textarea name="transparentNotActionable" rows="4">${escapeText(session.transparentNotActionable)}</textarea></label>
      <label class="text-field"><span>${t(ui.anythingElse)}</span><small class="question-help">${t(ui.anythingElseHelp)}</small><textarea name="finalComment" rows="3">${escapeText(session.finalComment)}</textarea></label>
    </form>
    ${bottomNav(t(ui.back),t(ui.reflectionNext),'reflection')}`;
}

function renderReflection(s) {
  const questions = [
    ['01',ui.downstreamQuestion,ui.downstreamHelp,'downstreamOutcome',session.downstreamOutcome],
    ['02',ui.accountabilityQuestion,ui.accountabilityHelp,'accountabilityPlan',session.accountabilityPlan],
    ['03',ui.maintenanceQuestion,ui.maintenanceHelp,'maintenanceRisk',session.maintenanceRisk],
    ['04',ui.nonAIQuestion,ui.nonAIHelp,'nonAIAlternative',session.nonAIAlternative]
  ];
  return `${phaseHeading(`${session.scenario} · ${t(ui.reflection)}`,t(ui.reflectionTitle),t(ui.reflectionDeck))}
    ${scenarioReminder(s)}
    <form class="reflection-form" id="reflection-form">
      ${questions.map(([number,question,help,name,value]) => `<label class="text-field reflection-question"><span><i>${number}</i>${t(question)} <b>*</b></span><small class="question-help">${t(help)}</small><textarea name="${name}" rows="4">${escapeText(value)}</textarea></label>`).join('')}
    </form>
    ${bottomNav(t(ui.back),t(ui.finish),'complete')}`;
}

function renderComplete(s) {
  const initial = s.initialOptions[Number(session.initialChoice)];
  const revised = s.revisedOptions[Number(session.revisedChoice)];
  const submitted = session.submissionStatus === 'submitted' && session.submittedAt;
  const sending = session.submissionStatus === 'sending';
  const failed = session.submissionStatus === 'failed';
  const connected = POWER_AUTOMATE_URL.startsWith('https://');
  const submitLabel = failed ? t(ui.retry) : t(ui.submit);
  const submitPanel = submitted
    ? `<section class="submit-panel submitted" aria-live="polite"><div class="submit-status-icon">✓</div><div><span>${t(ui.submitTitle)}</span><h2>${t(ui.submitSuccess)}</h2><p>${t(ui.submitSuccessNote)}</p><dl><div><dt>${t(ui.receipt)}</dt><dd>${escapeText(session.submissionId)}</dd></div><div><dt>${t(ui.participant)}</dt><dd>${escapeText(session.participantId)}</dd></div></dl></div></section>`
    : `<section class="submit-panel ${failed?'failed':''}" aria-live="polite"><div><span>${t(ui.submitTitle)}</span><h2>${sending?t(ui.submitting):failed?t(ui.submitFailedTitle):connected?t(ui.submitBody):t(ui.submitConfiguredMissing)}</h2>${failed?`<p>${t(ui.submitFailed)}</p>`:''}</div><button class="submit-response" data-submit type="button" ${sending||!connected?'disabled':''}>${sending?t(ui.submitting):submitLabel}<span>${sending?'…':'→'}</span></button></section>`;
  return `<section class="complete-screen">
    <div class="complete-mark">✓</div><p>${session.scenario} · ${session.participantId}</p><h1>${submitted?t(ui.submitSuccessTitle):t(ui.completeTitle)}</h1><div class="complete-deck">${submitted?t(ui.submitSuccessNote):t(ui.completeBody)}</div>
    <div class="journey-summary"><span>${t(ui.summary)}</span><div><article><small>${t(ui.initial)}</small><p>${initial?t(initial):'—'}</p></article><b>→</b><article><small>${t(ui.final)}</small><p>${revised?t(revised):'—'}</p></article></div></div>
    ${submitPanel}
    <div class="backup-heading"><b>${t(ui.backupTitle)}</b><p>${t(ui.backupBody)}</p></div>
    <div class="download-actions"><button data-download="json" type="button">${t(ui.downloadJson)} <span>↓</span></button><button data-download="csv" type="button">${t(ui.downloadCsv)} <span>↓</span></button></div>
    <button class="restart-button" data-exit type="button">← ${t(ui.restart)}</button>
  </section>`;
}

function escapeText(value='') { return String(value).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;'); }

function goBack() {
  const index=phases.indexOf(phase);
  if (index<=0) return exitProbe();
  phase=phases[index-1]; validationMessage=''; pendingSkipTarget=''; saveSession(); renderProbe(); window.scrollTo(0,0);
}

function validateAndGo(target) {
  validationMessage='';
  pendingSkipTarget='';
  if (phase==='briefing') {
    session.consentConfirmed=Boolean(document.querySelector('#consent-complete')?.checked);
    if (!session.consentConfirmed) { validationMessage=t(ui.consentRequired); saveSession(); return renderProbe(); }
  }
  if (phase==='initial') {
    const form=new FormData(document.querySelector('#initial-form'));
    session.initialChoice=form.get('initialChoice') ?? '';
    session.initialConfidence=form.get('confidence') ?? '';
    session.initialReason=String(form.get('initialReason') ?? '').trim();
    session.missingInfo=String(form.get('missingInfo') ?? '').trim();
    const missing=[];
    if (session.initialChoice==='') missing.push(t(ui.initialChoiceRequired));
    if (session.initialConfidence==='') missing.push(t(ui.confidenceRequired));
    if (!session.initialReason) missing.push(t(ui.reasonRequired));
    if (missing.length) { validationMessage=missing.join(' '); pendingSkipTarget=target; saveSession(); return renderProbe(); }
  }
  if (phase==='proposal' && !session.proposalMarks.some(m=>m.action)) { validationMessage=t(ui.markRequired); pendingSkipTarget=target; return renderProbe(); }
  if (phase==='reshape' && (!session.stopCondition.trim() || !session.scenarioReconfiguration.trim())) {
    const missing=[];
    if (!session.stopCondition.trim()) missing.push(t(ui.stopRequired));
    if (!session.scenarioReconfiguration.trim()) missing.push(t(ui.taskRequired));
    validationMessage=missing.join(' '); pendingSkipTarget=target; saveSession(); return renderProbe();
  }
  if (phase==='final') {
    const form=new FormData(document.querySelector('#final-form'));
    session.revisedChoice=form.get('revisedChoice') ?? '';
    session.comparison=form.get('comparison') ?? '';
    session.evidenceUsed=String(form.get('evidenceUsed') ?? '').trim();
    session.transparentNotActionable=String(form.get('transparentNotActionable') ?? '').trim();
    session.finalComment=String(form.get('finalComment') ?? '').trim();
    const missing=[];
    if (session.revisedChoice==='') missing.push(t(ui.revisedRequired));
    if (session.comparison==='') missing.push(t(ui.comparisonRequired));
    if (!session.evidenceUsed) missing.push(t(ui.evidenceRequired));
    if (!session.transparentNotActionable) missing.push(t(ui.actionableRequired));
    if (missing.length) { validationMessage=missing.join(' '); pendingSkipTarget=target; saveSession(); return renderProbe(); }
  }
  if (phase==='reflection') {
    const form=new FormData(document.querySelector('#reflection-form'));
    session.downstreamOutcome=String(form.get('downstreamOutcome') ?? '').trim();
    session.accountabilityPlan=String(form.get('accountabilityPlan') ?? '').trim();
    session.maintenanceRisk=String(form.get('maintenanceRisk') ?? '').trim();
    session.nonAIAlternative=String(form.get('nonAIAlternative') ?? '').trim();
    const missing=[];
    if (!session.downstreamOutcome) missing.push(t(ui.downstreamRequired));
    if (!session.accountabilityPlan) missing.push(t(ui.accountabilityRequired));
    if (!session.maintenanceRisk) missing.push(t(ui.maintenanceRequired));
    if (!session.nonAIAlternative) missing.push(t(ui.nonAIRequired));
    if (missing.length) { validationMessage=missing.join(' '); pendingSkipTarget=target; saveSession(); return renderProbe(); }
    session.completedAt=new Date().toISOString();
  }
  session.skippedPages = session.skippedPages.filter(item => item !== phase);
  phase=target; saveSession(); renderProbe(); window.scrollTo(0,0);
}

function skipAndGo(target) {
  if (phase === 'briefing') return;
  if (!session.skippedPages.includes(phase)) session.skippedPages.push(phase);
  if (target === 'complete') session.completedAt = new Date().toISOString();
  validationMessage = '';
  pendingSkipTarget = '';
  phase = target;
  saveSession();
  renderProbe();
  window.scrollTo(0,0);
}

function buildResponsePayload() {
  const s=scenarios[session.scenario];
  const scenarioMeta=scenarioIndex.find(item=>item.id===session.scenario);
  const comparisonOptions=[ui.changed,ui.clearer,ui.unchanged];
  const initialOption=s.initialOptions[Number(session.initialChoice)];
  const revisedOption=s.revisedOptions[Number(session.revisedChoice)];
  const comparisonOption=comparisonOptions[Number(session.comparison)];
  const bilingual=value=>({zh:value?.zh||'',en:value?.en||''});
  const optionCode=value=>value===''?'':String.fromCharCode(65+Number(value));
  const comparisonCodes=['changed_choice','same_choice_clearer_reason','no_change'];
  if (!session.submissionId) session.submissionId=makeSubmissionId();
  const proposalMarks=session.proposalMarks.map((mark,index)=>({
    proposalId:`${session.scenario}-P${index+1}`,
    proposal:t(s.proposalCards[index].title),
    proposalTitle:bilingual(s.proposalCards[index].title),
    action:mark.action,
    actionCode:mark.action,
    actionText:bilingual(ui[mark.action]),
    note:mark.note
  }));
  const initialAnswer={
    code:optionCode(session.initialChoice),
    storedIndex:session.initialChoice,
    text:bilingual(initialOption)
  };
  const revisedAnswer={
    code:optionCode(session.revisedChoice),
    storedIndex:session.revisedChoice,
    text:bilingual(revisedOption)
  };
  const comparisonAnswer={
    code:comparisonCodes[Number(session.comparison)]||'',
    storedIndex:session.comparison,
    text:bilingual(comparisonOption)
  };
  const questionAnswerPairs=[
    {questionId:'Q01',field:'initialChoice',required:true,prompt:bilingual(s.initialQuestion),guidance:bilingual(s.initialHelp),answer:initialAnswer},
    {questionId:'Q02',field:'initialConfidence',required:true,prompt:bilingual(ui.confidence),guidance:bilingual(ui.confidenceHelp),answer:session.initialConfidence},
    {questionId:'Q03',field:'initialReason',required:true,prompt:bilingual(ui.reason),guidance:bilingual(ui.reasonHelp),answer:session.initialReason},
    {questionId:'Q04',field:'missingInfo',required:false,prompt:bilingual(ui.missing),guidance:bilingual(ui.missingHelp),answer:session.missingInfo},
    {questionId:'Q05',field:'proposalMarks',required:true,prompt:bilingual(ui.proposalInstruction),guidance:bilingual(ui.proposalInstructionHelp),answer:proposalMarks},
    {questionId:'Q06',field:'addedContent',required:false,prompt:bilingual(ui.addMissing),guidance:bilingual(ui.addMissingHelp),answer:session.addedContent},
    {questionId:'Q07',field:'stopCondition',required:true,prompt:bilingual(ui.stopPrompt),guidance:bilingual(ui.stopPromptHelp),answer:session.stopCondition},
    {questionId:'Q08',field:'scenarioReconfiguration',required:true,prompt:bilingual(s.task),guidance:bilingual(s.taskHelp),answer:session.scenarioReconfiguration},
    {questionId:'Q09',field:'revisedChoice',required:true,prompt:bilingual(s.revisedQuestion),guidance:bilingual(s.revisedHelp),answer:revisedAnswer},
    {questionId:'Q10',field:'comparison',required:true,prompt:bilingual(ui.comparison),guidance:bilingual(ui.comparisonHelp),answer:comparisonAnswer},
    {questionId:'Q11',field:'evidenceUsed',required:true,prompt:bilingual(ui.evidenceUsed),guidance:bilingual(ui.evidenceUsedHelp),answer:session.evidenceUsed},
    {questionId:'Q12',field:'transparentNotActionable',required:true,prompt:bilingual(ui.transparentNotActionable),guidance:bilingual(ui.transparentNotActionableHelp),answer:session.transparentNotActionable},
    {questionId:'Q13',field:'finalComment',required:false,prompt:bilingual(ui.anythingElse),guidance:bilingual(ui.anythingElseHelp),answer:session.finalComment},
    {questionId:'Q14',field:'downstreamOutcome',required:true,prompt:bilingual(ui.downstreamQuestion),guidance:bilingual(ui.downstreamHelp),answer:session.downstreamOutcome},
    {questionId:'Q15',field:'accountabilityPlan',required:true,prompt:bilingual(ui.accountabilityQuestion),guidance:bilingual(ui.accountabilityHelp),answer:session.accountabilityPlan},
    {questionId:'Q16',field:'maintenanceRisk',required:true,prompt:bilingual(ui.maintenanceQuestion),guidance:bilingual(ui.maintenanceHelp),answer:session.maintenanceRisk},
    {questionId:'Q17',field:'nonAIAlternative',required:true,prompt:bilingual(ui.nonAIQuestion),guidance:bilingual(ui.nonAIHelp),answer:session.nonAIAlternative}
  ];
  return {
    studyId:STUDY_ID,
    probeVersion:PROBE_VERSION,
    dataSchemaVersion:DATA_SCHEMA_VERSION,
    responseGeneratedAt:new Date().toISOString(),
    submissionId:session.submissionId,
    participantId:session.participantId,
    scenario:session.scenario,
    scenarioTitle:t(s.title),
    participantRole:t(scenarioMeta.rolePrompt),
    scenarioMetadata:{
      scenarioId:session.scenario,
      title:bilingual(s.title),
      shortTitle:bilingual(s.shortTitle),
      audience:bilingual(scenarioMeta.audience),
      participantRole:bilingual(scenarioMeta.rolePrompt)
    },
    language:session.language,
    startedAt:session.startedAt,
    completedAt:session.completedAt,
    consentConfirmed:Boolean(session.consentConfirmed),
    skippedPages:[...session.skippedPages],
    initialChoice:session.initialChoice,
    initialChoiceCode:initialAnswer.code,
    initialConfidence:session.initialConfidence,
    initialReason:session.initialReason,
    missingInfo:session.missingInfo,
    proposalMarks,
    addedContent:session.addedContent,
    stopCondition:session.stopCondition,
    scenarioReconfiguration:session.scenarioReconfiguration,
    revisedChoice:session.revisedChoice,
    revisedChoiceCode:revisedAnswer.code,
    comparison:session.comparison,
    comparisonCode:comparisonAnswer.code,
    evidenceUsed:session.evidenceUsed,
    transparentNotActionable:session.transparentNotActionable,
    finalComment:session.finalComment,
    downstreamOutcome:session.downstreamOutcome,
    accountabilityPlan:session.accountabilityPlan,
    maintenanceRisk:session.maintenanceRisk,
    nonAIAlternative:session.nonAIAlternative,
    initialChoiceText:t(initialOption),
    initialChoiceTextZh:initialOption?.zh||'',
    initialChoiceTextEn:initialOption?.en||'',
    revisedChoiceText:t(revisedOption),
    revisedChoiceTextZh:revisedOption?.zh||'',
    revisedChoiceTextEn:revisedOption?.en||'',
    comparisonText:t(comparisonOption),
    comparisonTextZh:comparisonOption?.zh||'',
    comparisonTextEn:comparisonOption?.en||'',
    questionAnswerPairs
  };
}

async function submitResponse() {
  if (!session || session.submittedAt || session.submissionStatus === 'sending') return;
  if (!POWER_AUTOMATE_URL.startsWith('https://')) {
    session.submissionStatus='failed'; session.submissionError='not-configured'; saveSession(); return renderProbe();
  }
  const payload=buildResponsePayload();
  session.submissionStatus='sending'; session.submissionError=''; saveSession(); renderProbe();
  const controller=new AbortController();
  const timeout=setTimeout(()=>controller.abort(),45000);
  try {
    const response=await fetch(POWER_AUTOMATE_URL,{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(payload),
      credentials:'omit',
      cache:'no-store',
      referrerPolicy:'no-referrer',
      signal:controller.signal
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    session.submissionStatus='submitted';
    session.submittedAt=new Date().toISOString();
    session.submissionError='';
  } catch (error) {
    session.submissionStatus='failed';
    session.submissionError=error?.name==='AbortError'?'timeout':'request-failed';
  } finally {
    clearTimeout(timeout); saveSession(); renderProbe(); window.scrollTo(0,0);
  }
}

function downloadResponse(format) {
  const payload=buildResponsePayload();
  saveSession();
  let content,mime,extension;
  if (format==='json') { content=JSON.stringify(payload,null,2); mime='application/json'; extension='json'; }
  else {
    const flat=Object.fromEntries(Object.entries(payload).map(([key,value])=>[
      key,value!==null&&typeof value==='object'?JSON.stringify(value):value
    ]));
    const keys=Object.keys(flat); const quote=v=>`"${String(v??'').replaceAll('"','""')}"`;
    content='\uFEFF'+keys.map(quote).join(',')+'\n'+keys.map(k=>quote(flat[k])).join(','); mime='text/csv;charset=utf-8'; extension='csv';
  }
  const blob=new Blob([content],{type:mime}); const link=document.createElement('a');
  link.href=URL.createObjectURL(blob); link.download=`${session.participantId}_${session.scenario}.${extension}`; document.body.appendChild(link); link.click(); link.remove(); URL.revokeObjectURL(link.href);
}

document.addEventListener('click', (event) => {
  const languageButton=event.target.closest('[data-language]'); if (languageButton) return setLanguage(languageButton.dataset.language);
  const probeLanguage=event.target.closest('[data-probe-language]'); if (probeLanguage) return setLanguage(probeLanguage.dataset.probeLanguage);
  const scenarioButton=event.target.closest('[data-scenario]'); if (scenarioButton) return startScenario(scenarioButton.dataset.scenario);
  const resumeButton=event.target.closest('[data-resume-scenario]'); if (resumeButton) return resumeScenario(resumeButton.dataset.resumeScenario);
  if (event.target.closest('#choose-scenario')) return document.querySelector('#scenarios').scrollIntoView({behavior:'smooth'});
  if (event.target.closest('[data-exit]')) return exitProbe();
  if (event.target.closest('[data-back]')) return goBack();
  const next=event.target.closest('[data-next]'); if (next) return validateAndGo(next.dataset.next);
  const skipNext=event.target.closest('[data-skip-next]'); if (skipNext) return skipAndGo(skipNext.dataset.skipNext);
  const mark=event.target.closest('[data-mark-index]'); if (mark) {
    const index=Number(mark.dataset.markIndex), action=mark.dataset.markAction;
    session.proposalMarks[index].action=session.proposalMarks[index].action===action?'':action; saveSession(); return renderProbe();
  }
  const download=event.target.closest('[data-download]'); if (download) return downloadResponse(download.dataset.download);
  if (event.target.closest('[data-submit]')) return submitResponse();
});

document.addEventListener('input', (event) => {
  if (!session) return;
  if (event.target.id==='consent-complete') session.consentConfirmed=event.target.checked;
  if (event.target.dataset.noteIndex !== undefined) session.proposalMarks[Number(event.target.dataset.noteIndex)].note=event.target.value;
  if (event.target.dataset.sessionField) session[event.target.dataset.sessionField]=event.target.value;
  const directFields=['initialChoice','initialReason','missingInfo','revisedChoice','comparison','evidenceUsed','transparentNotActionable','finalComment','downstreamOutcome','accountabilityPlan','maintenanceRisk','nonAIAlternative'];
  if (directFields.includes(event.target.name) && (event.target.type!=='radio' || event.target.checked)) session[event.target.name]=event.target.value;
  if (event.target.name==='confidence' && event.target.checked) session.initialConfidence=event.target.value;
  saveSession();
});

document.querySelectorAll('[data-copy]').forEach(node => { node.textContent=landingCopy[language][node.dataset.copy]; });
document.querySelectorAll('[data-language]').forEach(button => button.classList.toggle('active',button.dataset.language===language));
document.documentElement.lang=language==='zh'?'zh-CN':'en';
document.title=language==='zh'?'文化遗产中的 AI｜思辨设计 Probe':'AI in Cultural Heritage | Speculative Probe';
document.querySelector('.wordmark')?.setAttribute('aria-label',language==='zh'?'返回首页':'Return to homepage');
document.querySelector('.site-header .language-switch')?.setAttribute('aria-label',language==='zh'?'语言选择':'Language selection');
renderScenarioGrid();

const directScenario=new URLSearchParams(location.search).get('scenario')?.toUpperCase();
if (scenarios[directScenario]) {
  const saved=storedSession(directScenario);
  if (hasPendingSession(saved)) resumeScenario(directScenario); else startScenario(directScenario);
}
