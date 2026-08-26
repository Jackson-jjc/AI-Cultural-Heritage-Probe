const t = (value) => typeof value === 'string' ? value : value[language];

const landingCopy = {
  zh: {
    studyType:'研究参与网站', eyebrow:'文化遗产中的人工智能', titleA1:'AI 应该在', titleA2:'博物馆里', titleB1:'做什么，', titleB2:'停在哪里？',
    intro:'请选择研究者指定的一个情景。你会先独立判断，再查看一份近未来 AI 提案，并把它改成你能够接受的版本。',
    start:'选择研究情景', time:'约 16–20 分钟 · 无标准答案 · 可中途继续',
    guideTitle:'你将一步步完成什么？', guideIntro:'每一页只处理一个任务；你的回答会自动保存在当前设备。',
    guide1Title:'进入情景', guide1Body:'阅读一件藏品、一个工作现场或一项访客需求。',
    guide2Title:'先独立判断', guide2Body:'在看到提案前，记录你的第一反应和理由。',
    guide3Title:'检查并重构', guide3Body:'保留、质疑或删除提案内容，并补上边界与责任。',
    guide4Title:'再次判断与反思', guide4Body:'说明什么改变了，再思考实施后果、责任、维护和非 AI 方案。',
    resumeLabel:'已保存的进度', resumeTitle:'继续上次未完成的情景', resume:'继续填写',
    scenariosTitle:'选择你的研究情景', scenariosIntro:'如果研究者指定了编号，请只进入对应情景。每位参与者通常完成一个主要情景。',
    open:'开始这个情景', duration:'约 16–20 分钟', saveTitle:'自动保存', saveBody:'填写期间保存在当前浏览器；完成后由你确认提交到学校 OneDrive。',
    answerTitle:'没有标准答案', answerBody:'使用、限制、暂缓或拒绝 AI 都是有效回答。'
  },
  en: {
    studyType:'Research participation website', eyebrow:'Artificial intelligence in cultural heritage', titleA1:'What should AI do ', titleA2:'in museums', titleB1:'— and where ', titleB2:'should it stop?',
    intro:'Choose the situation assigned by the researcher. You will make an independent judgement, reveal a near-future AI proposal, then reshape it into a version you could accept.',
    start:'Choose your situation', time:'About 16–20 minutes · No correct answer · Resume later',
    guideTitle:'What will you do, step by step?', guideIntro:'Each page has one task. Your answers are saved automatically on this device.',
    guide1Title:'Enter the situation', guide1Body:'Read about an object, a workplace, or a visitor need.',
    guide2Title:'Judge independently', guide2Body:'Record your first reaction and reason before seeing the proposal.',
    guide3Title:'Inspect and reshape', guide3Body:'Keep, question or remove elements, then add boundaries and responsibilities.',
    guide4Title:'Judge and reflect', guide4Body:'Explain what changed, then consider consequences, responsibility, maintenance and non-AI options.',
    resumeLabel:'Saved progress', resumeTitle:'Continue an unfinished situation', resume:'Continue',
    scenariosTitle:'Choose your research situation', scenariosIntro:'If the researcher gave you a number, open only that situation. Each participant normally completes one main situation.',
    open:'Start this situation', duration:'About 16–20 minutes', saveTitle:'Automatic saving', saveBody:'Answers stay in this browser while you work; you confirm submission to the University OneDrive at the end.',
    answerTitle:'No correct answer', answerBody:'Using, limiting, deferring or rejecting AI are all valid responses.'
  }
};

const ui = {
  briefing:{zh:'开始之前',en:'Before you begin'}, situation:{zh:'进入情景',en:'Enter the situation'},
  initial:{zh:'第一次判断',en:'Initial judgement'}, proposal:{zh:'研究提案',en:'Research proposal'},
  reshape:{zh:'重构提案',en:'Reshape the proposal'}, final:{zh:'再次判断',en:'Revised judgement'}, reflection:{zh:'最后反思',en:'Final reflection'}, complete:{zh:'完成',en:'Complete'},
  back:{zh:'返回',en:'Back'}, next:{zh:'继续',en:'Continue'}, begin:{zh:'开始这个情景',en:'Begin this situation'},
  continueInitial:{zh:'作出第一次判断',en:'Make an initial judgement'}, reveal:{zh:'查看研究提案',en:'Reveal the research proposal'},
  reshapeNext:{zh:'把提案改成可接受的版本',en:'Reshape it into an acceptable version'}, finalNext:{zh:'作出再次判断',en:'Make a revised judgement'},
  reflectionNext:{zh:'完成最后反思',en:'Complete the final reflection'}, finish:{zh:'完成并查看结果',en:'Finish and review'}, participant:{zh:'匿名参与者编号',en:'Anonymous participant ID'},
  saved:{zh:'已自动保存在当前设备',en:'Saved automatically on this device'}, step:{zh:'步骤',en:'Step'}, of:{zh:'共',en:'of'},
  pageTask:{zh:'本页任务',en:'Your task on this page'}, help:{zh:'需要帮助？',en:'Need help?'},
  helpBody:{zh:'先按你的真实判断作答。你不需要熟悉 AI，也不需要猜研究者想听什么。标有 * 的题目必须完成。',en:'Answer from your own point of view. You do not need AI expertise or to guess what the researcher expects. Questions marked * are required.'},
  prototype:{zh:'填写期间，回答只保存在当前设备；只有在最后点击“提交匿名回答”后，才会发送到学校 OneDrive。',en:'While you work, answers stay on this device. They are sent to the University OneDrive only after you select “Submit anonymous response” at the end.'},
  noCorrect:{zh:'没有标准答案。使用、限制、暂缓或拒绝 AI，都是有价值的回答。',en:'There is no correct answer. Using, limiting, deferring or rejecting AI are all valuable responses.'},
  consent:{zh:'我已阅读研究者提供的参与者信息说明，并已完成知情同意流程。',en:'I have read the participant information supplied by the researcher and completed the consent process.'},
  consentNote:{zh:'本网页不能替代已批准的信息说明、同意书、隐私说明或录音许可。',en:'This webpage does not replace the approved information sheet, consent form, privacy notice or recording permission.'},
  aiWhat:{zh:'这里的 AI 是什么？',en:'What does AI mean here?'},
  aiWhatBody:{zh:'能够从数据中识别模式、生成文字或图像、提出建议的计算系统。它可以写得很流畅，但不等于它知道事实、拥有许可或能够承担责任。',en:'Computational systems that identify patterns, generate text or images, or make suggestions. Fluent output does not mean the system knows the truth, has permission, or can take responsibility.'},
  aiCan:{zh:'博物馆可能用它做什么？',en:'What might museums use it for?'},
  aiCanBody:{zh:'翻译和简明文字、数字展签、路线支持、馆藏标注、检索，以及整理不同材料。本研究中的具体系统仍是近未来构想。',en:'Translation and plain language, digital labels, route support, collection tagging, search, and organising different materials. The specific systems in this study remain near-future proposals.'},
  aiChoose:{zh:'怎样判断是否适合？',en:'How might its use be judged?'},
  aiChooseBody:{zh:'请同时考虑真实需求、来源和证据、许可、人工审核、出错后的纠正、长期维护，以及不用 AI 的替代做法。',en:'Consider the real need, sources and evidence, permission, human review, correction after errors, long-term maintenance, and non-AI alternatives.'},
  proposed:{zh:'研究用近未来提案｜现实中尚未实施',en:'Near-future research proposal | Not implemented'},
  proposalInstruction:{zh:'请逐项标记：保留、担心、删除或质疑。稍后你可以直接补写和改造。',en:'Mark each element you wish to keep, question, remove or flag as a concern. You can rewrite and add to it next.'},
  keep:{zh:'保留',en:'Keep'}, concern:{zh:'担心',en:'Concern'}, remove:{zh:'删除',en:'Remove'}, question:{zh:'？质疑',en:'? Question'},
  unmarked:{zh:'尚未标记',en:'Not marked'}, changeThis:{zh:'你会怎样修改这一部分？',en:'How would you change this part?'},
  addMissing:{zh:'这份提案还缺少什么？',en:'What is missing from the proposal?'},
  stopPrompt:{zh:'AI 必须在哪一步停止、说明“我不知道”，或者交给人处理？',en:'Where must AI stop, say “I do not know”, or hand the task to a person?'},
  comparison:{zh:'与最初相比，你的想法怎样变化？',en:'Compared with your first answer, what changed?'},
  changed:{zh:'改变了选择',en:'I changed my choice'}, clearer:{zh:'选择没变，但理由更具体了',en:'Same choice, clearer reason'}, unchanged:{zh:'没有变化',en:'No change'},
  evidenceUsed:{zh:'你实际依据了页面上的哪一项信息作出决定？',en:'Which information on the page did you actually use to make your decision?'},
  transparentNotActionable:{zh:'有没有哪项信息看起来很透明，但仍不能帮助你采取行动？为什么？',en:'Did anything appear transparent but still fail to help you act? Why?'},
  anythingElse:{zh:'还有什么是这份提案没有问到的？（可选）',en:'Is there anything this proposal failed to ask? (optional)'},
  reflectionTitle:{zh:'把你的判断带到真实实施中',en:'Take your judgement into real implementation'},
  reflectionDeck:{zh:'请每题写 1–3 句话。这里关注的不是你是否支持 AI，而是实施后果、责任、维护条件和替代做法。',en:'Write 1–3 sentences for each question. The focus is not whether you support AI, but consequences, responsibility, maintenance conditions and alternatives.'},
  downstreamQuestion:{zh:'如果博物馆明年真的实施你刚刚接受或修改后的方案，接下来可能发生什么？请写出一个可能的结果。',en:'If the museum introduced the version you accepted or reshaped next year, what might happen next? Describe one possible outcome.'},
  accountabilityQuestion:{zh:'这项 AI 使用在上线前应该由谁审核？出现错误后，谁负责发现、纠正并通知受影响的人？',en:'Who should review this AI use before launch? If an error occurs, who should find it, correct it and inform affected people?'},
  maintenanceQuestion:{zh:'长期运行时，它最可能在哪一步出错、积压或变得难以维护？为什么？',en:'Over time, where is it most likely to fail, create a backlog or become difficult to maintain? Why?'},
  nonAIQuestion:{zh:'有没有不用 AI 也能解决这个问题的方法？在什么条件下，这种做法会更合适？',en:'Could this problem be addressed without AI? Under what conditions would that approach be more appropriate?'},
  required:{zh:'请完成本页中的必答项后再继续。',en:'Please complete the required items before continuing.'},
  markRequired:{zh:'请至少标记提案中的一个部分。',en:'Please mark at least one part of the proposal.'},
  consentRequired:{zh:'请先确认你已经完成知情同意流程。',en:'Please confirm that you have completed the consent process.'},
  initialChoiceRequired:{zh:'请选择一个初步判断。',en:'Choose an initial judgement.'}, confidenceRequired:{zh:'请选择信心程度。',en:'Choose a confidence level.'}, reasonRequired:{zh:'请说明选择的主要理由。',en:'Give the main reason for your choice.'},
  stopRequired:{zh:'请说明 AI 必须在哪里停止或交给人处理。',en:'Explain where AI must stop or hand over to a person.'}, taskRequired:{zh:'请完成这个情景的重构任务。',en:'Complete the situation-specific reshaping task.'},
  revisedRequired:{zh:'请选择再次判断的结果。',en:'Choose your revised judgement.'}, comparisonRequired:{zh:'请选择你的想法是否发生变化。',en:'Indicate whether your thinking changed.'}, evidenceRequired:{zh:'请写出你实际使用的一项信息。',en:'Name one piece of information you actually used.'}, actionableRequired:{zh:'请回答“透明但不可操作”的问题。',en:'Answer the question about transparency without actionability.'},
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
  completeBody:{zh:'请先查看你的判断路径，然后点击“提交匿名回答”。只有点击提交后，研究者才能收到这份数据。',en:'Review your judgement path, then select “Submit anonymous response”. The researcher receives your data only after you submit.'},
  summary:{zh:'你的判断路径',en:'Your judgement path'}, restart:{zh:'返回情景首页',en:'Return to scenario index'},
  confidence:{zh:'你对这个判断有多大信心？',en:'How confident are you in this judgement?'},
  uncertain:{zh:'很不确定',en:'Very uncertain'}, certain:{zh:'很确定',en:'Very certain'},
  reason:{zh:'你这样选择的主要理由是什么？',en:'What is your main reason?'}, missing:{zh:'你还需要知道哪一条信息，才能更好地判断？',en:'What one thing do you still need to know before deciding?'},
  objectReal:{zh:'真实藏品资料',en:'Real object record'}, fictional:{zh:'研究构造',en:'Research-created'},
};

const scenarioIndex = [
  {id:'S1',audience:{zh:'访客视角',en:'Visitor perspective'},title:{zh:'这张 AI 展签，你会打开吗？',en:'Would you open this AI label?'},descriptor:{zh:'一件真实藏品与一张拟议展签',en:'A real object and a proposed label'},image:'public/objects/image1.jpg',color:'#ff5438'},
  {id:'S2',audience:{zh:'社区与遗产工作者',en:'Community & heritage practitioners'},title:{zh:'不同的声音，应该怎样呈现？',en:'How should different accounts be presented?'},descriptor:{zh:'一件暂缓展示的仪式用品',en:'A ceremonial object withheld from display'},image:null,visual:'“ ”',color:'#d9ff4f'},
  {id:'S3',audience:{zh:'馆藏与数字化人员',en:'Collections & digital staff'},title:{zh:'AI 建议的标签，谁来审核？',en:'Who reviews AI-suggested tags?'},descriptor:{zh:'一个馆藏标注试运行',en:'A collection-tagging pilot'},image:'public/objects/image3.jpg',color:'#84a9ff'},
  {id:'S4',audience:{zh:'访客视角',en:'Visitor perspective'},title:{zh:'有限预算，先改善什么？',en:'With a limited budget, what comes first?'},descriptor:{zh:'三种访客支持方向',en:'Three visitor-support directions'},image:null,visual:'A / B / C',color:'#f4b8dc'}
];

const scenarios = {
  S1: {
    shortTitle:{zh:'AI 简明展签',en:'AI plain-language label'}, accent:'#ff5438', visual:'object',
    title:{zh:'你会使用这张文物的 AI 展签吗？',en:'Would you use this object’s AI label?'},
    deck:{zh:'真实馆藏记录、馆方解释和 AI 推测，你能分清吗？',en:'Can you distinguish the collection record, museum interpretation and AI inference?'},
    objectTitle:{zh:'荷包｜英国｜17 世纪早期',en:'Purse | British | early 17th century'},
    objectMeta:{zh:'丝和金属线绣于帆布｜7.6 × 6.7 cm｜The Met 29.23.19',en:'Silk and metal thread on canvas | 7.6 × 6.7 cm | The Met 29.23.19'},
    objectBody:{zh:'这件精细刺绣的荷包可能对应 16、17 世纪清单中的 sweet bags；它似乎随身佩戴，用来装有香味的草药和香精，以抵御日常生活中的难闻气味。',en:'This elaborately embroidered purse probably corresponds to “sweet bags” listed in sixteenth- and seventeenth-century inventories. It appears to have been worn on the person and to have carried scented herbs and essences against unpleasant everyday smells.'},
    situation:{zh:'你正在浏览 The Met 的这件真实藏品，并选择是否打开“AI 简明展签”。AI 展签承诺用更易懂的文字，并区分馆藏记录、馆方解释和 AI 推测。你也可以继续只看带有“可能”“似乎”等谨慎措辞的原记录。',en:'You are viewing this real object in The Met collection and deciding whether to open an “AI plain-language label”. It promises easier text and separate markings for the collection record, museum interpretation and AI inference. You may instead continue with the original record and its cautious words such as “probably” and “appears”.'},
    institutionHeading:{zh:'你可以选择',en:'You can choose'},
    institution:{zh:'这项近未来服务让访客选择“只看原馆藏记录”或“打开 AI 简明展签”。AI 会把文字写得更易懂，并尝试区分馆藏记录、馆方解释和 AI 推测。',en:'This near-future service lets visitors choose “original collection record only” or “open the AI plain-language label”. AI rewrites the text and tries to distinguish the collection record, museum interpretation and AI inference.'},
    initialQuestion:{zh:'作为参观者，你愿意打开并使用这种 AI 简明展签吗？',en:'As a visitor, would you open and use this AI plain-language label?'},
    initialOptions:[{zh:'愿意使用',en:'Yes, I would use it'},{zh:'愿意使用，但只查看有明确来源的内容',en:'I would use it, but only for content with a clear source'},{zh:'不愿意使用，只看原馆藏记录',en:'No; I would use the original collection record only'},{zh:'还需要更多信息才能决定',en:'I need more information before deciding'}],
    proposalTitle:{zh:'博物馆拟在明年使用的新数字展签',en:'A digital label the museum may introduce next year'},
    proposalNote:{zh:'下面四部分属于同一张展签，不是四个方案。',en:'The four parts below belong to one label; they are not four options.'},
    proposalCards:[
      {title:{zh:'AI 生成的简明说明',en:'Plain-language text written by AI'},body:{zh:'这是一只 17 世纪早期的英国 sweet bag，随身佩戴，用香草和香精遮盖难闻气味；花卉图案也象征祝福。',en:'This is an early seventeenth-century British sweet bag, worn on the person with herbs and essences to cover unpleasant smells; its floral motif also symbolises blessing.'}},
      {title:{zh:'馆藏记录中可以核对的信息',en:'What the collection record confirms'},body:{zh:'荷包；17 世纪早期；英国；丝与金属线绣于帆布；7.6 × 6.7 cm；馆藏编号 29.23.19。',en:'Purse; early 17th century; British; silk and metal thread on canvas; 7.6 × 6.7 cm; object number 29.23.19.'}},
      {title:{zh:'馆方原说明和 AI 推测有什么不同？',en:'How does the museum description differ from the AI inference?'},body:{zh:'馆方保留“可能”“似乎”：它可能对应清单中的 sweet bags，似乎随身佩戴。“花卉象征祝福”没有出现在馆藏记录中。',en:'The museum retains “probably” and “appears”. “Floral motif symbolises blessing” is not in the record.'}},
      {title:{zh:'这张展签仍然无法告诉你',en:'What this label still cannot tell you'},body:{zh:'谁使用过它、触感如何、怎样制作，以及没有被记录下来的知识。',en:'Who used it, how it felt, how it was made, or knowledge that was never recorded.'}}
    ],
    revisedQuestion:{zh:'看过并改写这张拟议展签后，作为参观者你愿意怎样使用它？',en:'After seeing and reshaping the proposed label, how would you use it as a visitor?'},
    revisedOptions:[{zh:'愿意按现在的内容使用',en:'I would use it with the current content'},{zh:'修改或删减 AI 推测后愿意使用',en:'I would use it after AI inferences were revised or removed'},{zh:'只看原馆藏记录，不使用 AI 展签',en:'I would use the original record, not the AI label'},{zh:'还需要更多信息才能决定',en:'I need more information before deciding'}],
    task:{zh:'请重写一句你认为说得太确定、证据不足，或不适合由 AI 表达的藏品说明。',en:'Rewrite one sentence that sounds too certain, lacks evidence, or should not be expressed by AI.'}
  },
  S2: {
    shortTitle:{zh:'多声部与许可',en:'Multiple voices and permission'}, accent:'#d9ff4f', visual:'withheld',
    title:{zh:'不同的声音应该怎样呈现？',en:'How should different accounts be presented?'},
    deck:{zh:'当不同说法不一致时，AI 应该整理、并列，还是不要综合？',en:'When accounts conflict, should AI organise them, place them side by side, or avoid combining them?'},
    situation:{zh:'你正在帮助一家博物馆审核一件仪式用品的数字展示页。馆藏记录、专家研究、相关社区成员的说法和个人记忆，对它的名称、用途和流转经历并不一致。有些知识能否公开也还没有得到明确同意。博物馆正在与相关社区确认这件藏品是否可以公开展示，因此这里暂不显示图片。',en:'You are helping a museum review a digital page for a ceremonial object. Collection records, specialist research, accounts from related communities and personal memories disagree about its name, use and transfer history. Permission to publish some knowledge is still unclear. The museum is confirming whether the object may be shown publicly, so the image is not displayed here.'},
    institutionHeading:{zh:'机构正在讨论',en:'The institution is discussing'},
    institution:{zh:'博物馆考虑让 AI 帮忙整理这些材料。AI 可以生成一段综合说明，也可以只负责排列、比较和检索不同说法，不把它们合成一个答案。',en:'The museum is considering AI to organise these materials. It could write one combined account, or only arrange, compare and retrieve different accounts without merging them.'},
    initialQuestion:{zh:'只看前面的情景，你认为博物馆现在应该怎样做？',en:'Based only on the situation, what should the museum do now?'},
    initialOptions:[{zh:'可以按这个方案使用 AI',en:'Use AI as proposed'},{zh:'可以使用 AI，但要缩小范围',en:'Use AI, but in a smaller role'},{zh:'这个情景目前不应使用 AI',en:'Do not use AI in this situation'},{zh:'现有信息不足，无法判断',en:'I need more information'}],
    proposalTitle:{zh:'博物馆拟在明年使用的数字展示页',en:'A digital page the museum may introduce next year'},
    proposalNote:{zh:'下面四部分属于同一个展示页，不是四个方案。',en:'The four parts below belong to one display page; they are not four options.'},
    proposalCards:[
      {title:{zh:'馆藏记录和专家研究',en:'Collection record and specialist research'},body:{zh:'分别标明记录保管方、作者、证据范围和仍有争议的地方，不把研究写成最后结论。',en:'Show who holds the record, who wrote the research, what evidence it uses and what remains disputed. Do not present research as the final account.'}},
      {title:{zh:'相关社区成员的说法',en:'Account from a related community'},body:{zh:'使用社区认可的名称；另附许可说明，写清能否公开、改写或交给机器处理。',en:'Use the community’s chosen name. State whether the account may be displayed, rewritten or processed by a machine.'}},
      {title:{zh:'个人记忆',en:'Personal memory'},body:{zh:'标出讲述者选择的姓名或身份，并说明这是一段个人经历，不代表所有人。',en:'Use the contributor’s chosen name or identity and state that this is one person’s experience, not the view of every member.'}},
      {title:{zh:'拟定的展示规则和代价',en:'Proposed display rule and cost'},body:{zh:'默认并列呈现；没有许可时不改写；讲述者可以更正、撤回或更新。页面会更长，博物馆也尚未确定由谁长期维护许可变化。',en:'Keep accounts separate by default; do not rewrite without permission; allow correction, withdrawal and update. The page will be longer, and the museum has not decided who will maintain changing permissions.'}}
    ],
    revisedQuestion:{zh:'看过并改写这张拟议展示页后，AI 在这里最合适的角色是什么？',en:'After seeing and reshaping the proposed page, what is the most suitable role for AI here?'},
    revisedOptions:[{zh:'只整理和检索，不改写或综合内容',en:'Organise and retrieve only; do not rewrite or combine'},{zh:'得到明确许可后，可以改写或综合获许可的内容',en:'Rewrite or combine permitted material only with explicit permission'},{zh:'不让 AI 处理这些材料',en:'Do not use AI to process these materials'},{zh:'还需要更多信息或相关人员参与才能决定',en:'I need more information or relevant participants before deciding'}],
    task:{zh:'请标出谁可以提供、批准、修改、撤回和维护不同叙事；AI 可以做什么、不能做什么？',en:'Identify who may provide, approve, change, withdraw and maintain each account. What may AI do, and what must it not do?'}
  },
  S3: {
    shortTitle:{zh:'馆藏标签审核',en:'Collection tag review'}, accent:'#84a9ff', visual:'queue',
    title:{zh:'AI 建议的馆藏标签，谁来审核？',en:'Who should review AI-suggested collection tags?'},
    deck:{zh:'AI 建议进入数据库后，谁负责检查、纠错和长期维护？',en:'After AI suggestions enter the database, who checks, corrects and maintains them?'},
    situation:{zh:'你在一家中型博物馆的馆藏或数字化团队工作。博物馆约有 30,000 张纺织品图像，许多记录不完整。人工标注很慢，但错误的地区、身份或文化标签一旦公开，可能长期影响检索。团队每周只能安排半天审核新的 AI 建议。',en:'You work in the collections or digitisation team of a medium-sized museum. It has about 30,000 textile images, many with incomplete records. Manual tagging is slow, but incorrect regional, identity or cultural labels could shape public search for years. The team can spend only half a day each week reviewing new AI suggestions.'},
    institutionHeading:{zh:'机构正在讨论',en:'The institution is discussing'},
    institution:{zh:'博物馆考虑让图像识别和生成式 AI 建议材料、颜色、图案、年代、地区和相似藏品标签。AI 只提出建议；是否写入公开记录，由人工审核流程决定。',en:'The museum is considering image recognition and generative AI to suggest material, colour, motif, date, region and similar-object tags. AI would only make suggestions; staff would decide what enters the public record.'},
    initialQuestion:{zh:'只看前面的情景，你认为博物馆现在应该怎样做？',en:'Based only on the situation, what should the museum do now?'},
    initialOptions:[{zh:'可以按这个方案使用 AI',en:'Use AI as proposed'},{zh:'可以使用 AI，但要缩小范围',en:'Use AI, but in a smaller role'},{zh:'这个情景目前不应使用 AI',en:'Do not use AI in this situation'},{zh:'现有信息不足，无法判断',en:'I need more information'}],
    proposalTitle:{zh:'AI 标签审核后台（试运行方案）',en:'AI tag review dashboard (pilot proposal)'},
    proposalNote:{zh:'下面四部分属于同一个审核流程，不是四个方案。',en:'The four parts below belong to one review process; they are not four options.'},
    proposalCards:[
      {title:{zh:'待审核：AI 建议的标签',en:'Waiting for review: an AI-suggested tag'},body:{zh:'AI 标签不会覆盖原记录；每条建议都显示模型版本、生成日期和参考依据。',en:'AI tags do not overwrite the original record. Each suggestion shows the model version, date and supporting reference.'}},
      {title:{zh:'先判断风险，再决定怎样审核',en:'Judge the risk before choosing the review level'},body:{zh:'颜色、形状可以抽查；年代、地区、身份、文化含义和敏感用语在公开前需要逐条审核。',en:'Colour and shape may be sampled. Date, region, identity, cultural meaning and sensitive terms need item-by-item review before publication.'}},
      {title:{zh:'审核结果必须留下记录',en:'Keep a record of every review decision'},body:{zh:'接受、修改、拒绝或暂缓，都要记录审核人、日期和理由；有争议的标签可以暂时隐藏，批量修改可以撤回。',en:'Accept, edit, reject or defer records the reviewer, date and reason. Disputed tags can be hidden, and bulk changes can be rolled back.'}},
      {title:{zh:'目前仍未解决的维护问题',en:'A maintenance problem that remains'},body:{zh:'提案要求指定负责人和每周处理量，并在模型更新后复查。但现有人力只有半天，积压仍可能发生；无人负责时应缩小或暂停。',en:'The proposal requires an owner, a weekly limit and re-checks after model updates. Staff still have only half a day, so a backlog may grow. The pilot should narrow or pause when nobody can own the work.'}}
    ],
    revisedQuestion:{zh:'看过并改写审核后台提案后，博物馆应该怎样推进？',en:'After seeing and reshaping the review-dashboard proposal, how should the museum proceed?'},
    revisedOptions:[{zh:'按提案开展风险分级试运行',en:'Run the risk-tiered pilot as proposed'},{zh:'缩小范围或加强审核后再试运行',en:'Run a smaller pilot or require stricter review'},{zh:'目前不应启动这项 AI 试运行',en:'Do not start this AI pilot at present'},{zh:'还需要更多人员、成本或风险信息',en:'I need more staffing, cost or risk information'}],
    task:{zh:'是否有标签可以直接接受？哪些可以抽查、哪些必须逐件检查？出现积压或错误时由谁负责？',en:'May any tags be accepted directly? Which may be sampled, which require item-by-item review, and who owns backlogs or errors?'}
  },
  S4: {
    shortTitle:{zh:'访客支持方案',en:'Visitor support options'}, accent:'#f4b8dc', visual:'route',
    title:{zh:'博物馆应该怎样支持这些访客？',en:'How should the museum support these visitors?'},
    deck:{zh:'先改进现有服务、有限使用 AI，还是继续了解需求？',en:'Should it improve existing services, use AI in a limited way, or learn more about the need?'},
    situation:{zh:'你正在参观一家小型地方历史展览。参观结束时，博物馆请你选择下一步最应优先改进的访客支持。大多数访客认为展览清楚，但反馈反复提到三个不同问题：① 缺少另一种语言的翻译；② 部分文字不够简明；③ 缺少清楚的短路线和无障碍路线。博物馆的预算只够做一项小改进。',en:'You are visiting a small local-history exhibition. At the end, the museum asks which visitor support it should improve first. Most visitors find the exhibition clear, but feedback repeatedly identifies three problems: no translation into another needed language; some text is not plain enough; and no clear short and accessible route. The museum can fund only one small improvement.'},
    institutionHeading:{zh:'博物馆正在征求你的意见',en:'The museum is asking for your view'},
    institution:{zh:'博物馆准备从三条方向中选一条：直接改进现有材料；提供有限、可选的 AI 服务；或者先了解需求，再做小范围、可撤回的试验。',en:'The museum is choosing among three directions: improve existing materials directly; offer a limited, optional AI service; or learn more about needs before a small reversible pilot.'},
    initialQuestion:{zh:'作为参观者，你希望博物馆优先采取哪种方向？',en:'As a visitor, which direction should the museum prioritise?'},
    initialOptions:[{zh:'先改进现有翻译、文字和路线材料',en:'Improve existing translation, text and route materials'},{zh:'提供有限、可选的 AI 服务',en:'Offer a limited, optional AI service'},{zh:'先继续了解需求，再做小范围试验',en:'Learn more about the needs, then run a small pilot'},{zh:'现有信息不足，无法判断',en:'There is not enough information to decide'}],
    proposalTitle:{zh:'博物馆明年的访客支持方案（草案）',en:'Draft visitor-support plan for next year'},
    proposalNote:{zh:'下面只有三个方案（A–C）；最后一项是比较标准，不是方案 D。',en:'There are three options (A–C); the final item is a comparison checklist, not Option D.'},
    proposalCards:[
      {title:{zh:'方案 A｜不用 AI，直接改进现有材料',en:'Option A | Improve existing materials without AI'},body:{zh:'补充一种纸质翻译、增加简明摘要和清楚的路线标识。长期维护较少，但无法回答临时问题，也不能快速提供多种语言。',en:'Add one paper translation, a plain-language summary and clear route signs. Ongoing maintenance is lower, but it cannot answer new questions or quickly support many languages.'}},
      {title:{zh:'方案 B｜有限、可选地使用 AI',en:'Option B | Use AI in a limited, optional way'},body:{zh:'只使用博物馆审核过的内容；通过二维码或借用设备进入；提供翻译、简明文字和路线。需要测试无障碍访问、说明隐私，并持续更新内容和路线。',en:'Use museum-approved content only; enter by QR code or loan device; provide translation, plain language and routes. This needs accessibility testing, a privacy notice, review and regular content and route updates.'}},
      {title:{zh:'方案 C｜先收集更多证据，再做可撤回试验',en:'Option C | Gather evidence, then run a reversible pilot'},body:{zh:'先了解谁遇到了什么困难、出现得多不多，以及现有服务哪里不够。先试一种语言或一个区域，并提前写明何时继续、修改或停止。',en:'Find out who faces which difficulty, how often it occurs and where current services fail. Pilot one language or area, and set rules for continuing, changing or stopping before the pilot begins.'}},
      {title:{zh:'比较 A–C 时都要问（不是方案 D）',en:'Questions for comparing A–C (not Option D)'},body:{zh:'谁会受益，谁可能被排除？需要多少员工时间？怎样发现错误？访客能否不用它？一年后还有没有人力维护？',en:'Who benefits, and who may be excluded? How much staff time is needed? How will errors be found? Can visitors opt out? Will anyone still maintain it after one year?'}}
    ],
    revisedQuestion:{zh:'比较并改写三个方案后，作为参观者你最希望博物馆先采取哪种做法？',en:'After comparing and reshaping the three options, which should the museum choose first?'},
    revisedOptions:[{zh:'方案 A｜不用 AI，直接改进现有材料',en:'Option A | Improve existing materials without AI'},{zh:'方案 B｜有限、可选地使用 AI',en:'Option B | Use AI in a limited, optional way'},{zh:'方案 C｜先收集更多证据，再做可撤回试验',en:'Option C | Gather evidence, then run a reversible pilot'},{zh:'组合上述做法，或采用其他做法',en:'Combine A–C or take another approach'}],
    task:{zh:'请选择、删除或组合 A–C，并写出停止使用 AI 或终止试点的条件。',en:'Choose, remove or combine A–C, and state the conditions for stopping AI use or ending the pilot.'}
  }
};

const phases = ['briefing','situation','initial','proposal','reshape','final','reflection','complete'];
const taskPhases = phases.slice(0,-1);
const actions = ['keep','concern','remove','question'];
const STUDY_ID = 'ERGO-II-114350';
const PROBE_VERSION = 'web-1.0';
const POWER_AUTOMATE_URL = String(window.PROBE_CONFIG?.powerAutomateUrl || '').trim();
let language = localStorage.getItem('probe-language') || 'zh';
let phase = 'landing';
let session = null;
let validationMessage = '';

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
      <div class="card-topline"><span>${s.id}</span><span>${t(s.audience)}</span></div>
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
  session = null; phase = 'landing'; validationMessage = '';
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
      ${validationMessage ? `<div class="validation" role="alert">${validationMessage}</div>` : ''}
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
    <section class="consent-panel">
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

function renderSituation(s) {
  return `${phaseHeading(`${session.scenario} · ${t(ui.situation)}`,t(s.title),t(s.deck))}
    <section class="situation-layout"><div>${renderVisual(s)}</div><div class="situation-copy"><p>${t(s.situation)}</p><aside><span>${t(s.institutionHeading)}</span><p>${t(s.institution)}</p></aside><div class="fiction-note"><b>${t(ui.fictional)}</b><span>${language==='zh'?'具体 AI 服务、界面和机构决定均为研究构造。':'The specific AI service, interface and institutional decision are research-created.'}</span></div></div></section>
    ${bottomNav(t(ui.back),t(ui.continueInitial),'initial')}`;
}

function optionMarkup(options,name,selected) {
  return `<div class="choice-list">${options.map((option,index)=>`<label><input type="radio" name="${name}" value="${index}" ${String(index)===String(selected)?'checked':''}><span class="choice-index">${String.fromCharCode(65+index)}</span><span>${t(option)}</span></label>`).join('')}</div>`;
}

function confidenceMarkup(selected) {
  return `<fieldset class="confidence"><legend>${t(ui.confidence)}</legend><div><span>${t(ui.uncertain)}</span>${[1,2,3,4,5].map(v=>`<label><input type="radio" name="confidence" value="${v}" ${String(v)===String(selected)?'checked':''}><span>${v}</span></label>`).join('')}<span>${t(ui.certain)}</span></div></fieldset>`;
}

function renderInitial(s) {
  return `${phaseHeading(`${session.scenario} · ${t(ui.initial)}`,t(s.initialQuestion))}
    <form class="judgement-form" id="initial-form">
      ${optionMarkup(s.initialOptions,'initialChoice',session.initialChoice)}
      ${confidenceMarkup(session.initialConfidence)}
      <label class="text-field"><span>${t(ui.reason)} <b>*</b></span><textarea name="initialReason" rows="4">${escapeText(session.initialReason)}</textarea></label>
      <label class="text-field"><span>${t(ui.missing)}</span><textarea name="missingInfo" rows="3">${escapeText(session.missingInfo)}</textarea></label>
    </form>
    ${bottomNav(t(ui.back),t(ui.reveal),'proposal')}`;
}

function renderProposal(s) {
  return `${phaseHeading(`${session.scenario} · ${t(ui.proposed)}`,t(s.proposalTitle),t(s.proposalNote))}
    <div class="reveal-banner"><b>${language==='zh'?'你的第一次判断已经保存。':'Your initial judgement has been saved.'}</b><span>${language==='zh'?'下面才会显示研究构造的近未来提案。它不是已经投入使用的系统。':'The research-created near-future proposal is revealed below. It is not an implemented system.'}</span></div>
    <div class="proposal-instruction"><span>1</span><p>${t(ui.proposalInstruction)}</p></div>
    <section class="proposal-grid">${s.proposalCards.map((card,index)=>{
      const mark=session.proposalMarks[index].action;
      return `<article class="proposal-card ${mark?`marked ${mark}`:''}"><div class="proposal-number">${String(index+1).padStart(2,'0')}</div><h2>${t(card.title)}</h2><p>${t(card.body)}</p>
        <div class="mark-actions" aria-label="Mark proposal item">${actions.map(action=>`<button class="${mark===action?'active':''}" data-mark-index="${index}" data-mark-action="${action}" type="button">${t(ui[action])}</button>`).join('')}</div>
      </article>`}).join('')}</section>
    ${bottomNav(t(ui.back),t(ui.reshapeNext),'reshape')}`;
}

function actionLabel(action) { return action ? t(ui[action]) : t(ui.unmarked); }

function renderReshape(s) {
  return `${phaseHeading(`${session.scenario} · ${t(ui.reshape)}`,language==='zh'?'把提案改成你能够接受的版本':'Reshape the proposal into a version you could accept',language==='zh'?'你的圈选不是评分，而是在配置行动、权力、责任和边界。':'Your marks are not ratings; they configure action, power, responsibility and boundaries.')}
    <section class="reshape-list">${s.proposalCards.map((card,index)=>{const mark=session.proposalMarks[index];return `<article><div class="reshape-title"><span class="status-chip ${mark.action}">${actionLabel(mark.action)}</span><h2>${t(card.title)}</h2></div><p>${t(card.body)}</p><label class="text-field compact"><span>${t(ui.changeThis)}</span><textarea rows="3" data-note-index="${index}">${escapeText(mark.note)}</textarea></label></article>`}).join('')}</section>
    <section class="boundary-fields">
      <label class="text-field"><span>+ ${t(ui.addMissing)}</span><textarea rows="4" data-session-field="addedContent">${escapeText(session.addedContent)}</textarea></label>
      <label class="text-field stop-field"><span>${t(ui.stopPrompt)} <b>*</b></span><textarea rows="4" data-session-field="stopCondition">${escapeText(session.stopCondition)}</textarea></label>
      <label class="text-field task-field"><span>${t(s.task)} <b>*</b></span><textarea rows="5" data-session-field="scenarioReconfiguration">${escapeText(session.scenarioReconfiguration)}</textarea></label>
    </section>
    ${bottomNav(t(ui.back),t(ui.finalNext),'final')}`;
}

function renderFinal(s) {
  const comparisons=[ui.changed,ui.clearer,ui.unchanged];
  return `${phaseHeading(`${session.scenario} · ${t(ui.final)}`,t(s.revisedQuestion))}
    <form class="judgement-form" id="final-form">
      ${optionMarkup(s.revisedOptions,'revisedChoice',session.revisedChoice)}
      <fieldset class="comparison"><legend>${t(ui.comparison)}</legend>${comparisons.map((item,index)=>`<label><input type="radio" name="comparison" value="${index}" ${String(index)===String(session.comparison)?'checked':''}><span>${t(item)}</span></label>`).join('')}</fieldset>
      <label class="text-field"><span>${t(ui.evidenceUsed)} <b>*</b></span><textarea name="evidenceUsed" rows="4">${escapeText(session.evidenceUsed)}</textarea></label>
      <label class="text-field"><span>${t(ui.transparentNotActionable)} <b>*</b></span><textarea name="transparentNotActionable" rows="4">${escapeText(session.transparentNotActionable)}</textarea></label>
      <label class="text-field"><span>${t(ui.anythingElse)}</span><textarea name="finalComment" rows="3">${escapeText(session.finalComment)}</textarea></label>
    </form>
    ${bottomNav(t(ui.back),t(ui.reflectionNext),'reflection')}`;
}

function renderReflection(s) {
  const questions = [
    ['01',ui.downstreamQuestion,'downstreamOutcome',session.downstreamOutcome],
    ['02',ui.accountabilityQuestion,'accountabilityPlan',session.accountabilityPlan],
    ['03',ui.maintenanceQuestion,'maintenanceRisk',session.maintenanceRisk],
    ['04',ui.nonAIQuestion,'nonAIAlternative',session.nonAIAlternative]
  ];
  return `${phaseHeading(`${session.scenario} · ${t(ui.reflection)}`,t(ui.reflectionTitle),t(ui.reflectionDeck))}
    <form class="reflection-form" id="reflection-form">
      ${questions.map(([number,question,name,value]) => `<label class="text-field reflection-question"><span><i>${number}</i>${t(question)} <b>*</b></span><textarea name="${name}" rows="4">${escapeText(value)}</textarea></label>`).join('')}
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
  phase=phases[index-1]; validationMessage=''; saveSession(); renderProbe(); window.scrollTo(0,0);
}

function validateAndGo(target) {
  validationMessage='';
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
    if (missing.length) { validationMessage=missing.join(' '); saveSession(); return renderProbe(); }
  }
  if (phase==='proposal' && !session.proposalMarks.some(m=>m.action)) { validationMessage=t(ui.markRequired); return renderProbe(); }
  if (phase==='reshape' && (!session.stopCondition.trim() || !session.scenarioReconfiguration.trim())) {
    const missing=[];
    if (!session.stopCondition.trim()) missing.push(t(ui.stopRequired));
    if (!session.scenarioReconfiguration.trim()) missing.push(t(ui.taskRequired));
    validationMessage=missing.join(' '); saveSession(); return renderProbe();
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
    if (missing.length) { validationMessage=missing.join(' '); saveSession(); return renderProbe(); }
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
    if (missing.length) { validationMessage=missing.join(' '); saveSession(); return renderProbe(); }
    session.completedAt=new Date().toISOString();
  }
  phase=target; saveSession(); renderProbe(); window.scrollTo(0,0);
}

function buildResponsePayload() {
  const s=scenarios[session.scenario];
  if (!session.submissionId) session.submissionId=makeSubmissionId();
  return {
    studyId:STUDY_ID,
    probeVersion:PROBE_VERSION,
    submissionId:session.submissionId,
    participantId:session.participantId,
    scenario:session.scenario,
    language:session.language,
    startedAt:session.startedAt,
    completedAt:session.completedAt,
    consentConfirmed:Boolean(session.consentConfirmed),
    initialChoice:session.initialChoice,
    initialConfidence:session.initialConfidence,
    initialReason:session.initialReason,
    missingInfo:session.missingInfo,
    proposalMarks:session.proposalMarks.map((mark,index)=>({proposal:t(s.proposalCards[index].title),action:mark.action,note:mark.note})),
    addedContent:session.addedContent,
    stopCondition:session.stopCondition,
    scenarioReconfiguration:session.scenarioReconfiguration,
    revisedChoice:session.revisedChoice,
    comparison:session.comparison,
    evidenceUsed:session.evidenceUsed,
    transparentNotActionable:session.transparentNotActionable,
    finalComment:session.finalComment,
    downstreamOutcome:session.downstreamOutcome,
    accountabilityPlan:session.accountabilityPlan,
    maintenanceRisk:session.maintenanceRisk,
    nonAIAlternative:session.nonAIAlternative,
    initialChoiceText:t(s.initialOptions[Number(session.initialChoice)]),
    revisedChoiceText:t(s.revisedOptions[Number(session.revisedChoice)]),
    comparisonText:t([ui.changed,ui.clearer,ui.unchanged][Number(session.comparison)])
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
    const flat={...payload,proposalMarks:JSON.stringify(payload.proposalMarks)};
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
renderScenarioGrid();

const directScenario=new URLSearchParams(location.search).get('scenario')?.toUpperCase();
if (scenarios[directScenario]) {
  const saved=storedSession(directScenario);
  if (hasPendingSession(saved)) resumeScenario(directScenario); else startScenario(directScenario);
}
