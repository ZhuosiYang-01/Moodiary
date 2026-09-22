/*
 * 78 张塔罗牌抽卡数据。基础牌名、牌义和图片文件名来自：
 * https://github.com/look-fate/tarot-lab (MIT License)
+ * 情绪分析、自我关怀建议与反思问题为本项目补充，仅用于自我觉察，不构成心理诊断。
+ */
window.TAROT_CARDS = [
  {
    "id": "01",
    "name": "The Fool 愚人",
    "image": "SimpleTarotPng/Fool.jpg",
    "upright": "新的开始，新的旅程，自由，纯真，无限潜力，冒险，理想主义，自发性",
    "reversed": "鲁莽，粗心，心烦意乱，幼稚，愚蠢，容易上当受骗，古板，沉闷",
    "emotionAnalysis": "你可能正站在新开始前，兴奋与不安同时出现。",
    "careSuggestion": "允许自己先试一小步，并为冲动设置一个温柔的安全边界。",
    "reflectionQuestion": "如果不要求一次做对，你最想先尝试什么？"
  },
  {
    "id": "02",
    "name": "The Magician 魔术师",
    "image": "SimpleTarotPng/Magician.jpg",
    "upright": "意志力，欲望，足智多谋，强大的技巧与能力，注意力，积极行动，愿望实现",
    "reversed": "操纵，狡猾，诡计，幻觉，欺骗，才能被浪费或用到错误的方向",
    "emotionAnalysis": "你拥有行动的能量，但也可能因想掌控结果而紧绷。",
    "careSuggestion": "列出手边已有的三种资源，今天只用其中一种完成最小行动。",
    "reflectionQuestion": "你已经具备哪一种常被自己忽略的能力？"
  },
  {
    "id": "03",
    "name": "The High Priestess 女祭司",
    "image": "SimpleTarotPng/High_Priestess.jpg",
    "upright": "直觉，神秘，灵性，更高的力量，更高的智慧，内心的声音，平衡，调和",
    "reversed": "被压抑的直觉，隐藏的动机，肤浅，混乱，认知失调",
    "emotionAnalysis": "情绪正在提醒你放慢速度，听见尚未说出口的感受。",
    "careSuggestion": "安静呼吸三分钟，再写下身体最明显的感觉，不急着解释。",
    "reflectionQuestion": "此刻你的直觉正轻声告诉你什么？"
  },
  {
    "id": "04",
    "name": "The Empress 女皇",
    "image": "SimpleTarotPng/Empress.jpg",
    "upright": "神圣的女性，充足的活力，感官的享受，生育能力，孕育，创造力，美，丰富，自然",
    "reversed": "不安全感，霸道，过强的控制欲，疏忽，缺乏成长，缺乏感受能力",
    "emotionAnalysis": "你需要滋养、接纳与被好好照顾，也可能付出太多而忘了自己。",
    "careSuggestion": "做一件让身体舒服的小事，并把照顾别人前的一点时间留给自己。",
    "reflectionQuestion": "今天怎样照顾自己，会让你感到真正被善待？"
  },
  {
    "id": "05",
    "name": "The Emperor 皇帝",
    "image": "SimpleTarotPng/Emperor.jpg",
    "upright": "世俗力量，自律，稳定，实用，权威，控制，纪律",
    "reversed": "暴君，霸道，死板，固执，缺乏纪律，缺乏自律，缺乏掌控，鲁莽",
    "emotionAnalysis": "你渴望秩序和安全，失控感可能让你变得紧绷。",
    "careSuggestion": "把困扰分成可控与不可控，只为一件可控小事安排具体时间。",
    "reflectionQuestion": "什么边界能让你更安心，而不是更僵硬？"
  },
  {
    "id": "06",
    "name": "The Hierophant 教皇",
    "image": "SimpleTarotPng/Hierophant.jpg",
    "upright": "传统，社会规范，教育，知识，信仰",
    "reversed": "叛逆，打破常规，不循规蹈矩，新方法，无知",
    "emotionAnalysis": "你可能在规则、期待与真实感受之间拉扯。",
    "careSuggestion": "向可信任的人请教，同时保留不同意见，写下你自己的判断。",
    "reflectionQuestion": "哪些原则支持着你，哪些只是习惯性的应该？"
  },
  {
    "id": "07",
    "name": "The Lovers 恋人",
    "image": "SimpleTarotPng/Lovers.jpg",
    "upright": "被祝福的爱，平衡、调和的关系，浪漫，暗示可以开展新的关系或关系的新阶段。",
    "reversed": "不和谐、不平衡的关系，关系的停滞，冲突，分离，错误选择，优柔寡断",
    "emotionAnalysis": "你正在面对连接、价值或选择带来的情绪波动。",
    "careSuggestion": "先确认自己最重视的价值，再用诚实但温和的话表达需要。",
    "reflectionQuestion": "这个选择怎样才更忠于真实的你？"
  },
  {
    "id": "08",
    "name": "The Chariot 战车",
    "image": "SimpleTarotPng/Chariot.jpg",
    "upright": "训练有素的心智，前进的力量，守护初心，控制相互对抗的力量，协调冲突，成功",
    "reversed": "未解决的冲突，矛盾，情绪的失衡，受到阻碍，忘记初心，忘记要守护的东西。",
    "emotionAnalysis": "你很想向前，但内在不同方向的力量可能正在争夺方向盘。",
    "careSuggestion": "暂停一分钟，确定唯一优先事项，把精力集中在下一步。",
    "reflectionQuestion": "你想前进，是出于热爱，还是害怕停下？"
  },
  {
    "id": "09",
    "name": "Strength 力量",
    "image": "SimpleTarotPng/Strength.jpg",
    "upright": "内心平静而柔和的力量，理智的力量，爱的力量，勇气，信心，同情心，自信",
    "reversed": "软弱，恐惧，无力感，缺乏自信",
    "emotionAnalysis": "你正在练习与强烈情绪共处，真正的力量来自温柔而非压制。",
    "careSuggestion": "给情绪命名，用缓慢呼气安抚身体，再决定是否行动。",
    "reflectionQuestion": "如果温柔也是力量，你会怎样对待此刻的自己？"
  },
  {
    "id": "10",
    "name": "The Hermit 隐士",
    "image": "SimpleTarotPng/Hermit.jpg",
    "upright": "独处，内省，沉思，寻找自我，寻找智慧",
    "reversed": "缺乏省思，迷失方向，孤独，回归社会",
    "emotionAnalysis": "你可能需要独处整理内心，也要留意把自己隔离太久。",
    "careSuggestion": "安排一段无屏幕的安静时间，之后给一个信任的人发条消息。",
    "reflectionQuestion": "独处正在帮你看清什么？"
  },
  {
    "id": "11",
    "name": "The Wheel of Fortune 命运之轮",
    "image": "SimpleTarotPng/Wheel_of_Fortune.jpg",
    "upright": "改变，新的开始，命运，时来运转，意外事件",
    "reversed": "时机未到，坏运气，当前的课题还未完成，重复",
    "emotionAnalysis": "变化让你感到期待或失去掌控，情绪正随环境起伏。",
    "careSuggestion": "承认变化存在，固定一个可重复的小习惯作为今天的锚点。",
    "reflectionQuestion": "在无法控制的变化里，你仍能选择什么？"
  },
  {
    "id": "12",
    "name": "Justice 正义",
    "image": "SimpleTarotPng/Justice.jpg",
    "upright": "正义，公正，诚实，平衡，法律，真理，承担责任，付出将有公正的回报",
    "reversed": "不公正，不诚实，腐败，不平衡，逃避责任",
    "emotionAnalysis": "你在衡量公平、责任或后果，可能对自己过于苛刻。",
    "careSuggestion": "分别写下事实、感受和猜测，再以对朋友的标准审视自己。",
    "reflectionQuestion": "什么才是既诚实又不惩罚自己的决定？"
  },
  {
    "id": "13",
    "name": "The Hanged Man 倒吊人",
    "image": "SimpleTarotPng/Hanged_Man.jpg",
    "upright": "换个角度看问题，静心省思，等待，牺牲，顺从命运安排，平静从容",
    "reversed": "停滞不前，不感兴趣，视角受限，钻牛角尖",
    "emotionAnalysis": "停滞感可能令人焦虑，但暂缓也在邀请你换一个视角。",
    "careSuggestion": "今天不强迫结论，尝试从第三方角度写下另一种解释。",
    "reflectionQuestion": "如果暂停不是失败，它可能在保护什么？"
  },
  {
    "id": "14",
    "name": "Death 死亡",
    "image": "SimpleTarotPng/Death.jpg",
    "upright": "结局，新生，放手，顺从于改变",
    "reversed": "畏惧改变，抵制变化，不肯放手，停滞不前，衰败",
    "emotionAnalysis": "某种结束或转变正在发生，悲伤与不确定都很自然。",
    "careSuggestion": "为失去的事物做一个小小告别仪式，再清理出一点新空间。",
    "reflectionQuestion": "你愿意放下什么，让新的可能进来？"
  },
  {
    "id": "15",
    "name": "Temperance 节制",
    "image": "SimpleTarotPng/Temperance.jpg",
    "upright": "平衡，和平，耐心，节制，平静，安宁，和谐，调和，沟通",
    "reversed": "偏执，极端，不节制，不和谐，鲁莽，草率",
    "emotionAnalysis": "你需要从两种极端之间找回节奏与平衡。",
    "careSuggestion": "把目标调低一档，在工作、休息与连接之间各留一点位置。",
    "reflectionQuestion": "今天怎样算是刚刚好，而不是做到最多？"
  },
  {
    "id": "16",
    "name": "The Devil 魔鬼",
    "image": "SimpleTarotPng/Devil.jpg",
    "upright": "欲望的枷锁，不纯粹、被束缚的关系，窒息或无力感，成瘾，痴迷",
    "reversed": "独立，自由，释放，夺回掌控权，理性战胜欲望",
    "emotionAnalysis": "你可能被欲望、恐惧或重复模式困住，并因此自责。",
    "careSuggestion": "不批判地识别触发点，延迟十分钟再回应冲动，并寻求支持。",
    "reflectionQuestion": "哪条看似牢固的锁链，其实可以被松开？"
  },
  {
    "id": "17",
    "name": "The Tower 高塔",
    "image": "SimpleTarotPng/Tower.jpg",
    "upright": "突然的、无可避免的改变，破坏性、爆发性的事件，灾难，混乱",
    "reversed": "可能表示抗拒改变，拒绝放开你所压抑的东西，但这可能会带来更大的爆发。改变迟早要发生",
    "emotionAnalysis": "突发变化撼动了安全感，震惊、愤怒或混乱都可能出现。",
    "careSuggestion": "先照顾身体和现实安全，减少重大决定，向可靠的人说明情况。",
    "reflectionQuestion": "当旧结构松动后，什么真实需要被重新建立？"
  },
  {
    "id": "18",
    "name": "The Star 星星",
    "image": "SimpleTarotPng/Star.jpg",
    "upright": "希望，灵感，宁静，和平，疗愈，创造力，生命力",
    "reversed": "失去潜意识的能量，失去保持内在平和和信心的能力，失去创造力和灵感，失去希望",
    "emotionAnalysis": "希望正在恢复，即使你还没有完全走出疲惫。",
    "careSuggestion": "记录一件微小的好事，并做一个能补充能量的温和行动。",
    "reflectionQuestion": "什么微光值得你继续靠近？"
  },
  {
    "id": "19",
    "name": "The Moon 月亮",
    "image": "SimpleTarotPng/Moon.jpg",
    "upright": "恐惧，不安，疯狂，错觉，不确定性，混乱。指导你通过梦或是想象探索你的潜意识，正视你的恐惧和不安。",
    "reversed": "拒绝对潜意识的探索，对事件的认识停留在表面。隐藏的事物逐渐浮现，因而恐惧、不安的情绪有所减弱。",
    "emotionAnalysis": "模糊与未知放大了担忧，你可能难以分清直觉和焦虑。",
    "careSuggestion": "暂缓下结论，核对事实，睡前减少刺激并做五感落地练习。",
    "reflectionQuestion": "哪些是已知事实，哪些只是恐惧编出的故事？"
  },
  {
    "id": "20",
    "name": "The Sun 太阳",
    "image": "SimpleTarotPng/Sun.jpg",
    "upright": "光明，幸福，成功，乐观，活力，欢乐，纯真，满足",
    "reversed": "过度热情，悲观，不切实际的期望，自负，较小的成功，或成功了仍不满足。可能是乌云暂时遮住了阳光，仍有一些恐惧、怀疑和困难尚未克服。",
    "emotionAnalysis": "愉悦、清晰和生命力正在显现，也值得被完整接住。",
    "careSuggestion": "把这份好心情分享给一个人，并记录是什么滋养了你。",
    "reflectionQuestion": "你愿意怎样允许自己享受此刻？"
  },
  {
    "id": "21",
    "name": "Judgement 审判",
    "image": "SimpleTarotPng/Judgement.jpg",
    "upright": "自我评判，觉醒，更新，清算，清晰的判断力。审判指示你将过去经验做出结论，以此作为超越它的步骤。",
    "reversed": "抗拒人生的转变，抗拒命运的召唤。可能做出错误的决定或错过重要的讯息，需多加防范。",
    "emotionAnalysis": "你正在回看过去并准备回应内心召唤，可能夹杂遗憾。",
    "careSuggestion": "区分反省与责备，写下一项可弥补的行动，然后让其余部分休息。",
    "reflectionQuestion": "如果不再由过去定义你，你想作出什么回应？"
  },
  {
    "id": "22",
    "name": "The World 世界",
    "image": "SimpleTarotPng/World.jpg",
    "upright": "完成，完满，和谐，发自内心的快乐满足和持久的成功。可能暗示旅行。",
    "reversed": "不完满，空虚，不持久的成功，旅行",
    "emotionAnalysis": "一个阶段趋于完整，满足之外也可能有告别后的空落。",
    "careSuggestion": "庆祝已经完成的部分，总结收获，再为下一阶段留出过渡时间。",
    "reflectionQuestion": "这段经历让你成为了怎样的人？"
  },
  {
    "id": "23",
    "name": "Ace of Wands 权杖一",
    "image": "SimpleTarotPng/Wands01.jpg",
    "upright": "灵感，创意，新计划，新激情，热情，活力",
    "reversed": "延缓，阻碍，缺乏激情，缺乏活力，犹豫不决，灵感枯竭",
    "emotionAnalysis": "新的情绪能量正在萌芽，这张牌把注意力带向行动与热情；你可能同时体验到躁动或倦怠。",
    "careSuggestion": "先活动身体五分钟，再选一件最有生命力的小事。不要求马上解决所有问题，先观察情绪是否有一点变化。",
    "reflectionQuestion": "今天最值得回应的新需要是什么？"
  },
  {
    "id": "24",
    "name": "Two of Wands 权杖二",
    "image": "SimpleTarotPng/Wands02.jpg",
    "upright": "制定计划，迈出第一步，做出决定，离开舒适区，承担风险",
    "reversed": "糟糕的计划，过度分析，不采取行动，谨慎行事，规避风险",
    "emotionAnalysis": "你可能在两种需要之间权衡，这张牌把注意力带向行动与热情；你可能同时体验到躁动或倦怠。",
    "careSuggestion": "先活动身体五分钟，再选一件最有生命力的小事。不要求马上解决所有问题，先观察情绪是否有一点变化。",
    "reflectionQuestion": "哪一种选择更贴近你此刻的真实容量？"
  },
  {
    "id": "25",
    "name": "Three of Wands 权杖三",
    "image": "SimpleTarotPng/Wands03.jpg",
    "upright": "前进的势头，信心，扩张，增长，远见，向前看，新的阶段，将计划付诸实践",
    "reversed": "限制，局限，缺乏进展，障碍，延误，沮丧，反思",
    "emotionAnalysis": "连接、协作或成长带来新的感受，这张牌把注意力带向行动与热情；你可能同时体验到躁动或倦怠。",
    "careSuggestion": "先活动身体五分钟，再选一件最有生命力的小事。不要求马上解决所有问题，先观察情绪是否有一点变化。",
    "reflectionQuestion": "你可以邀请谁与你一起承担或庆祝？"
  },
  {
    "id": "26",
    "name": "Four of Wands 权杖四",
    "image": "SimpleTarotPng/Wands04.jpg",
    "upright": "社群，家庭，庆祝活动，团聚，聚会，稳定，归属感",
    "reversed": "缺乏支持，不稳定，不受欢迎，短暂性，缺乏根基，家庭冲突",
    "emotionAnalysis": "稳定带来保护，也可能渐渐变成停滞，这张牌把注意力带向行动与热情；你可能同时体验到躁动或倦怠。",
    "careSuggestion": "先活动身体五分钟，再选一件最有生命力的小事。不要求马上解决所有问题，先观察情绪是否有一点变化。",
    "reflectionQuestion": "你现在需要守住什么，又可以松开什么？"
  },
  {
    "id": "27",
    "name": "Five of Wands 权杖五",
    "image": "SimpleTarotPng/Wands05.jpg",
    "upright": "冲突，竞争，争论，侵略性，紧张，对手，自我冲突",
    "reversed": "结束冲突，合作，协议，休战，避免冲突；也可能是不公平的竞争（欺诈、作弊等）",
    "emotionAnalysis": "冲突、失落或不足感可能比较突出，这张牌把注意力带向行动与热情；你可能同时体验到躁动或倦怠。",
    "careSuggestion": "先活动身体五分钟，再选一件最有生命力的小事。不要求马上解决所有问题，先观察情绪是否有一点变化。",
    "reflectionQuestion": "此刻最需要被承认的损失或委屈是什么？"
  },
  {
    "id": "28",
    "name": "Six of Wands 权杖六",
    "image": "SimpleTarotPng/Wands06.jpg",
    "upright": "自信，成功，胜利，凯旋，好消息，好的进展，认可，赞美",
    "reversed": "失败，缺乏认可，缺乏成就感，过度骄傲自满",
    "emotionAnalysis": "情绪开始流动，支持与修复正在靠近，这张牌把注意力带向行动与热情；你可能同时体验到躁动或倦怠。",
    "careSuggestion": "先活动身体五分钟，再选一件最有生命力的小事。不要求马上解决所有问题，先观察情绪是否有一点变化。",
    "reflectionQuestion": "你愿意接受或给予哪一种具体支持？"
  },
  {
    "id": "29",
    "name": "Seven of Wands 权杖七",
    "image": "SimpleTarotPng/Wands07.jpg",
    "upright": "面临挑战，遭到反对，冲突对立的局面，自卫反击",
    "reversed": "陷入焦虑，优柔寡断，没用勇气面对挑战，不利的局势，放弃，承认失败",
    "emotionAnalysis": "选择、坚持或防御让内心有些拥挤，这张牌把注意力带向行动与热情；你可能同时体验到躁动或倦怠。",
    "careSuggestion": "先活动身体五分钟，再选一件最有生命力的小事。不要求马上解决所有问题，先观察情绪是否有一点变化。",
    "reflectionQuestion": "哪些选项是真需要，哪些只是害怕错过？"
  },
  {
    "id": "30",
    "name": "Eight of Wands 权杖八",
    "image": "SimpleTarotPng/Wands08.jpg",
    "upright": "迅速，自由，旅行，自由流动、不受约束的能量",
    "reversed": "进展过于迅速而失控，准备不充分；欲速则不达，进展受阻，延误，等待",
    "emotionAnalysis": "节奏加快，或旧模式正在限制你，这张牌把注意力带向行动与热情；你可能同时体验到躁动或倦怠。",
    "careSuggestion": "先活动身体五分钟，再选一件最有生命力的小事。不要求马上解决所有问题，先观察情绪是否有一点变化。",
    "reflectionQuestion": "哪一个重复动作可以调整得更轻松一点？"
  },
  {
    "id": "31",
    "name": "Nine of Wands 权杖九",
    "image": "SimpleTarotPng/Wands09.jpg",
    "upright": "最后一搏，坚持，勇气，韧性，毅力，接近成功，疲劳",
    "reversed": "固执，死板，防御，拒绝妥协，放弃",
    "emotionAnalysis": "你接近阶段结果，也更容易感到疲惫或警觉，这张牌把注意力带向行动与热情；你可能同时体验到躁动或倦怠。",
    "careSuggestion": "先活动身体五分钟，再选一件最有生命力的小事。不要求马上解决所有问题，先观察情绪是否有一点变化。",
    "reflectionQuestion": "在继续之前，怎样休息能真正补回能量？"
  },
  {
    "id": "32",
    "name": "Ten of Wands 权杖十",
    "image": "SimpleTarotPng/Wands10.jpg",
    "upright": "负担，责任，职责，压力，义务，精疲力竭，挣扎，奋斗",
    "reversed": "承担过多的责任，压力过大，崩溃",
    "emotionAnalysis": "情绪累积到需要整理与交接的时刻，这张牌把注意力带向行动与热情；你可能同时体验到躁动或倦怠。",
    "careSuggestion": "先活动身体五分钟，再选一件最有生命力的小事。不要求马上解决所有问题，先观察情绪是否有一点变化。",
    "reflectionQuestion": "有什么责任可以放下、拆小或请人分担？"
  },
  {
    "id": "33",
    "name": "Page of Wands 权杖侍卫",
    "image": "SimpleTarotPng/Wands11.jpg",
    "upright": "冒险，兴奋，新鲜的想法，开朗，热情，活泼，天真，坦率，精力充沛，无所畏惧，性格外向",
    "reversed": "三分钟热度，顽皮，缺乏想法，懒惰，无聊",
    "emotionAnalysis": "好奇而敏感的一面正在带来消息，这张牌把注意力带向行动与热情；你可能同时体验到躁动或倦怠。",
    "careSuggestion": "先活动身体五分钟，再选一件最有生命力的小事。不要求马上解决所有问题，先观察情绪是否有一点变化。",
    "reflectionQuestion": "如果像初学者一样看待它，你会发现什么？"
  },
  {
    "id": "34",
    "name": "Knight of Wands 权杖骑士",
    "image": "SimpleTarotPng/Wands12.jpg",
    "upright": "勇敢的，迷人的，英雄气概的，自由的精神，性格火热、充满活力的行动派",
    "reversed": "傲慢的，鲁莽的，没有耐心的，缺乏自我控制，消极，易怒，霸道",
    "emotionAnalysis": "一股强烈动力正推动你快速回应，这张牌把注意力带向行动与热情；你可能同时体验到躁动或倦怠。",
    "careSuggestion": "先活动身体五分钟，再选一件最有生命力的小事。不要求马上解决所有问题，先观察情绪是否有一点变化。",
    "reflectionQuestion": "行动前慢十秒，你真正想抵达哪里？"
  },
  {
    "id": "35",
    "name": "Queen of Wands 权杖王后",
    "image": "SimpleTarotPng/Wands13.jpg",
    "upright": "自信，热情，坚定，有魅力，阳光开朗，乐观，富有灵感，直觉灵敏，强大的内心，丰收，财运，",
    "reversed": "专横，善妒，欺软怕硬，不够自信，控制欲，内心力量的匮乏",
    "emotionAnalysis": "你有能力容纳感受并照顾内在需要，这张牌把注意力带向行动与热情；你可能同时体验到躁动或倦怠。",
    "careSuggestion": "先活动身体五分钟，再选一件最有生命力的小事。不要求马上解决所有问题，先观察情绪是否有一点变化。",
    "reflectionQuestion": "怎样关怀自己，同时不替所有人负责？"
  },
  {
    "id": "36",
    "name": "King of Wands 权杖国王",
    "image": "SimpleTarotPng/Wands14.jpg",
    "upright": "领导力，远见，大局观，控制，大胆的决定，野心，干劲，创造力",
    "reversed": "一个可能是暴虐也可能萎靡的人，但终究是因为自己内心能量不足，无法掌控身边的事物。",
    "emotionAnalysis": "你正在学习稳定地引导情绪与行动，这张牌把注意力带向行动与热情；你可能同时体验到躁动或倦怠。",
    "careSuggestion": "先活动身体五分钟，再选一件最有生命力的小事。不要求马上解决所有问题，先观察情绪是否有一点变化。",
    "reflectionQuestion": "成熟而温和的你，会怎样处理此刻？"
  },
  {
    "id": "37",
    "name": "Ace of Cups 圣杯一",
    "image": "SimpleTarotPng/Cups01.jpg",
    "upright": "情感上的满足，新情感的开端，创造力，灵性，直觉，收获快乐、爱和喜悦",
    "reversed": "冷漠，空虚，情感挫折，创造力受阻，感觉不到被爱，心情阴郁",
    "emotionAnalysis": "新的情绪能量正在萌芽，这张牌把注意力带向关系与感受；你可能同时体验到敏感或依恋。",
    "careSuggestion": "先承认感受，再用一句清楚的话表达需要。不要求马上解决所有问题，先观察情绪是否有一点变化。",
    "reflectionQuestion": "今天最值得回应的新需要是什么？"
  },
  {
    "id": "38",
    "name": "Two of Cups 圣杯二",
    "image": "SimpleTarotPng/Cups02.jpg",
    "upright": "团结，伙伴关系，恋爱，相互吸引，联系，联合，相互尊重",
    "reversed": "关系中不和谐的因素，不平等的关系，沟通不畅，分离、分手",
    "emotionAnalysis": "你可能在两种需要之间权衡，这张牌把注意力带向关系与感受；你可能同时体验到敏感或依恋。",
    "careSuggestion": "先承认感受，再用一句清楚的话表达需要。不要求马上解决所有问题，先观察情绪是否有一点变化。",
    "reflectionQuestion": "哪一种选择更贴近你此刻的真实容量？"
  },
  {
    "id": "39",
    "name": "Three of Cups 圣杯三",
    "image": "SimpleTarotPng/Cups03.jpg",
    "upright": "友谊，团聚，聚会，庆祝活动",
    "reversed": "流言蜚语，丑闻，孤立，孤独，不和谐、不稳定的团队，合作失败，友谊破裂",
    "emotionAnalysis": "连接、协作或成长带来新的感受，这张牌把注意力带向关系与感受；你可能同时体验到敏感或依恋。",
    "careSuggestion": "先承认感受，再用一句清楚的话表达需要。不要求马上解决所有问题，先观察情绪是否有一点变化。",
    "reflectionQuestion": "你可以邀请谁与你一起承担或庆祝？"
  },
  {
    "id": "40",
    "name": "Four of Cups 圣杯四",
    "image": "SimpleTarotPng/Cups04.jpg",
    "upright": "冷漠，沉思，失去连结，忧郁，无聊，拒绝，漠不关心，失落",
    "reversed": "清醒，觉察，接受，重燃热情",
    "emotionAnalysis": "稳定带来保护，也可能渐渐变成停滞，这张牌把注意力带向关系与感受；你可能同时体验到敏感或依恋。",
    "careSuggestion": "先承认感受，再用一句清楚的话表达需要。不要求马上解决所有问题，先观察情绪是否有一点变化。",
    "reflectionQuestion": "你现在需要守住什么，又可以松开什么？"
  },
  {
    "id": "41",
    "name": "Five of Cups 圣杯五",
    "image": "SimpleTarotPng/Cups05.jpg",
    "upright": "悲伤、失落、失望。但提醒我们意识到身后仍有退路（支持、希望）。",
    "reversed": "当事人意识到自己仍保有的部分，从悲伤中走出来投入新的生活；重拾信心，看见积极的方面；知足常乐",
    "emotionAnalysis": "冲突、失落或不足感可能比较突出，这张牌把注意力带向关系与感受；你可能同时体验到敏感或依恋。",
    "careSuggestion": "先承认感受，再用一句清楚的话表达需要。不要求马上解决所有问题，先观察情绪是否有一点变化。",
    "reflectionQuestion": "此刻最需要被承认的损失或委屈是什么？"
  },
  {
    "id": "42",
    "name": "Six of Cups 圣杯六",
    "image": "SimpleTarotPng/Cups06.jpg",
    "upright": "童年，怀旧，回忆，思乡，照顾、安全和保障",
    "reversed": "沉溺于过去，不安，被抛弃、被忽视，向前看，离家，独立",
    "emotionAnalysis": "情绪开始流动，支持与修复正在靠近，这张牌把注意力带向关系与感受；你可能同时体验到敏感或依恋。",
    "careSuggestion": "先承认感受，再用一句清楚的话表达需要。不要求马上解决所有问题，先观察情绪是否有一点变化。",
    "reflectionQuestion": "你愿意接受或给予哪一种具体支持？"
  },
  {
    "id": "43",
    "name": "Seven of Cups 圣杯七",
    "image": "SimpleTarotPng/Cups07.jpg",
    "upright": "幻象，梦境，不切实际的幻想，许多选择，迷茫",
    "reversed": "缺乏目标，混乱，分心；云开雾散，看清内心，做出选择，梦想成真",
    "emotionAnalysis": "选择、坚持或防御让内心有些拥挤，这张牌把注意力带向关系与感受；你可能同时体验到敏感或依恋。",
    "careSuggestion": "先承认感受，再用一句清楚的话表达需要。不要求马上解决所有问题，先观察情绪是否有一点变化。",
    "reflectionQuestion": "哪些选项是真需要，哪些只是害怕错过？"
  },
  {
    "id": "44",
    "name": "Eight of Cups 圣杯八",
    "image": "SimpleTarotPng/Cups08.jpg",
    "upright": "抛弃，放手，跳脱出旧有的功绩（或束缚），追寻更高的境界",
    "reversed": "停滞不前，单调乏味，拒绝突破，拒绝离开现有的环境",
    "emotionAnalysis": "节奏加快，或旧模式正在限制你，这张牌把注意力带向关系与感受；你可能同时体验到敏感或依恋。",
    "careSuggestion": "先承认感受，再用一句清楚的话表达需要。不要求马上解决所有问题，先观察情绪是否有一点变化。",
    "reflectionQuestion": "哪一个重复动作可以调整得更轻松一点？"
  },
  {
    "id": "45",
    "name": "Nine of Cups 圣杯九",
    "image": "SimpleTarotPng/Cups09.jpg",
    "upright": "荣耀，成功，梦想成真，成就感，满足，享乐，幸福圆满",
    "reversed": "不快乐，缺乏成就感，失望；可能期望通过世俗的享乐或成功来弥补内心的空虚或是爱的缺失，然而并不会成功。",
    "emotionAnalysis": "你接近阶段结果，也更容易感到疲惫或警觉，这张牌把注意力带向关系与感受；你可能同时体验到敏感或依恋。",
    "careSuggestion": "先承认感受，再用一句清楚的话表达需要。不要求马上解决所有问题，先观察情绪是否有一点变化。",
    "reflectionQuestion": "在继续之前，怎样休息能真正补回能量？"
  },
  {
    "id": "46",
    "name": "Ten of Cups 圣杯十",
    "image": "SimpleTarotPng/Cups10.jpg",
    "upright": "幸福，归家，团圆，家庭和睦",
    "reversed": "家庭不和，关系不和；或是个人脱离团体、离群索居、拒绝他人的爱",
    "emotionAnalysis": "情绪累积到需要整理与交接的时刻，这张牌把注意力带向关系与感受；你可能同时体验到敏感或依恋。",
    "careSuggestion": "先承认感受，再用一句清楚的话表达需要。不要求马上解决所有问题，先观察情绪是否有一点变化。",
    "reflectionQuestion": "有什么责任可以放下、拆小或请人分担？"
  },
  {
    "id": "47",
    "name": "Page of Cups 圣杯侍卫",
    "image": "SimpleTarotPng/Cups11.jpg",
    "upright": "理想主义，情感细腻，好奇，想象力丰富，天真、纯真、童真",
    "reversed": "情感脆弱，不成熟，天马行空而不切实际；因缺乏安全感而过度提防，拒绝他人善意",
    "emotionAnalysis": "好奇而敏感的一面正在带来消息，这张牌把注意力带向关系与感受；你可能同时体验到敏感或依恋。",
    "careSuggestion": "先承认感受，再用一句清楚的话表达需要。不要求马上解决所有问题，先观察情绪是否有一点变化。",
    "reflectionQuestion": "如果像初学者一样看待它，你会发现什么？"
  },
  {
    "id": "48",
    "name": "Knight of Cups 圣杯骑士",
    "image": "SimpleTarotPng/Cups12.jpg",
    "upright": "理想主义者，迷人，艺术，优雅，梦想家，浪漫",
    "reversed": "失望，发脾气，情绪化，虚荣，花心，不切实际",
    "emotionAnalysis": "一股强烈动力正推动你快速回应，这张牌把注意力带向关系与感受；你可能同时体验到敏感或依恋。",
    "careSuggestion": "先承认感受，再用一句清楚的话表达需要。不要求马上解决所有问题，先观察情绪是否有一点变化。",
    "reflectionQuestion": "行动前慢十秒，你真正想抵达哪里？"
  },
  {
    "id": "49",
    "name": "Queen of Cups 圣杯王后",
    "image": "SimpleTarotPng/Cups13.jpg",
    "upright": "怜悯，温暖，仁慈，敏感细腻，直觉，疗愈",
    "reversed": "不安全感，付出太多，过度敏感，情绪化，脆弱，依赖，殉道者",
    "emotionAnalysis": "你有能力容纳感受并照顾内在需要，这张牌把注意力带向关系与感受；你可能同时体验到敏感或依恋。",
    "careSuggestion": "先承认感受，再用一句清楚的话表达需要。不要求马上解决所有问题，先观察情绪是否有一点变化。",
    "reflectionQuestion": "怎样关怀自己，同时不替所有人负责？"
  },
  {
    "id": "50",
    "name": "King of Cups 圣杯国王",
    "image": "SimpleTarotPng/Cups14.jpg",
    "upright": "慈爱，温和体贴，宽容，慷慨，奉献，情感成熟，智慧，富有耐心",
    "reversed": "不知所措，焦虑，冷漠，压抑，退缩，控制欲强，自私",
    "emotionAnalysis": "你正在学习稳定地引导情绪与行动，这张牌把注意力带向关系与感受；你可能同时体验到敏感或依恋。",
    "careSuggestion": "先承认感受，再用一句清楚的话表达需要。不要求马上解决所有问题，先观察情绪是否有一点变化。",
    "reflectionQuestion": "成熟而温和的你，会怎样处理此刻？"
  },
  {
    "id": "51",
    "name": "Ace of Swords 宝剑一",
    "image": "SimpleTarotPng/Swords01.jpg",
    "upright": "广阔的视野，力量，专注，决心，真理，突破",
    "reversed": "敌意，争吵，伤害，破坏，野蛮，混乱",
    "emotionAnalysis": "新的情绪能量正在萌芽，这张牌把注意力带向思绪与沟通；你可能同时体验到焦虑或内耗。",
    "careSuggestion": "把事实和猜测分开写，并做六次缓慢呼气。不要求马上解决所有问题，先观察情绪是否有一点变化。",
    "reflectionQuestion": "今天最值得回应的新需要是什么？"
  },
  {
    "id": "52",
    "name": "Two of Swords 宝剑二",
    "image": "SimpleTarotPng/Swords02.jpg",
    "upright": "僵局，困难的选择，逃避，抗拒，被蒙蔽",
    "reversed": "犹豫不决，焦虑不安，信息太多，没有正确的选择；打破僵局，真相大白",
    "emotionAnalysis": "你可能在两种需要之间权衡，这张牌把注意力带向思绪与沟通；你可能同时体验到焦虑或内耗。",
    "careSuggestion": "把事实和猜测分开写，并做六次缓慢呼气。不要求马上解决所有问题，先观察情绪是否有一点变化。",
    "reflectionQuestion": "哪一种选择更贴近你此刻的真实容量？"
  },
  {
    "id": "53",
    "name": "Three of Swords 宝剑三",
    "image": "SimpleTarotPng/Swords03.jpg",
    "upright": "心碎，分离，悲伤，孤立，损失，创伤，泪水",
    "reversed": "愈合，宽恕，恢复，和解；压抑的情绪，封闭自己",
    "emotionAnalysis": "连接、协作或成长带来新的感受，这张牌把注意力带向思绪与沟通；你可能同时体验到焦虑或内耗。",
    "careSuggestion": "把事实和猜测分开写，并做六次缓慢呼气。不要求马上解决所有问题，先观察情绪是否有一点变化。",
    "reflectionQuestion": "你可以邀请谁与你一起承担或庆祝？"
  },
  {
    "id": "54",
    "name": "Four of Swords 宝剑四",
    "image": "SimpleTarotPng/Swords04.jpg",
    "upright": "休养，放松，和平，避难所，自我保护，恢复活力",
    "reversed": "恢复，觉醒，重新投入生活，积极入世；倦怠，不安",
    "emotionAnalysis": "稳定带来保护，也可能渐渐变成停滞，这张牌把注意力带向思绪与沟通；你可能同时体验到焦虑或内耗。",
    "careSuggestion": "把事实和猜测分开写，并做六次缓慢呼气。不要求马上解决所有问题，先观察情绪是否有一点变化。",
    "reflectionQuestion": "你现在需要守住什么，又可以松开什么？"
  },
  {
    "id": "55",
    "name": "Five of Swords 宝剑五",
    "image": "SimpleTarotPng/Swords05.jpg",
    "upright": "争论，纠纷，攻击，欺凌，恐吓，冲突，敌意，自私",
    "reversed": "和解，妥协，报复，失败，遗憾，悔恨，及时止损",
    "emotionAnalysis": "冲突、失落或不足感可能比较突出，这张牌把注意力带向思绪与沟通；你可能同时体验到焦虑或内耗。",
    "careSuggestion": "把事实和猜测分开写，并做六次缓慢呼气。不要求马上解决所有问题，先观察情绪是否有一点变化。",
    "reflectionQuestion": "此刻最需要被承认的损失或委屈是什么？"
  },
  {
    "id": "56",
    "name": "Six of Swords 宝剑六",
    "image": "SimpleTarotPng/Swords06.jpg",
    "upright": "继续向前，离去，离开舒适圈，接受教训",
    "reversed": "沉溺于过去，不愿改变，逃避问题，被困住",
    "emotionAnalysis": "情绪开始流动，支持与修复正在靠近，这张牌把注意力带向思绪与沟通；你可能同时体验到焦虑或内耗。",
    "careSuggestion": "把事实和猜测分开写，并做六次缓慢呼气。不要求马上解决所有问题，先观察情绪是否有一点变化。",
    "reflectionQuestion": "你愿意接受或给予哪一种具体支持？"
  },
  {
    "id": "57",
    "name": "Seven of Swords 宝剑七",
    "image": "SimpleTarotPng/Swords07.jpg",
    "upright": "谎言，诡计，阴谋，战略，可能失败的计划，阴险，狡猾",
    "reversed": "忏悔，良心发现，合作商讨",
    "emotionAnalysis": "选择、坚持或防御让内心有些拥挤，这张牌把注意力带向思绪与沟通；你可能同时体验到焦虑或内耗。",
    "careSuggestion": "把事实和猜测分开写，并做六次缓慢呼气。不要求马上解决所有问题，先观察情绪是否有一点变化。",
    "reflectionQuestion": "哪些选项是真需要，哪些只是害怕错过？"
  },
  {
    "id": "58",
    "name": "Eight of Swords 宝剑八",
    "image": "SimpleTarotPng/Swords08.jpg",
    "upright": "被困，被限制，被陷害，无助，被蒙蔽，看不到可能的出路",
    "reversed": "自由，释放，觉醒，掌控局面，幸存",
    "emotionAnalysis": "节奏加快，或旧模式正在限制你，这张牌把注意力带向思绪与沟通；你可能同时体验到焦虑或内耗。",
    "careSuggestion": "把事实和猜测分开写，并做六次缓慢呼气。不要求马上解决所有问题，先观察情绪是否有一点变化。",
    "reflectionQuestion": "哪一个重复动作可以调整得更轻松一点？"
  },
  {
    "id": "59",
    "name": "Nine of Swords 宝剑九",
    "image": "SimpleTarotPng/Swords09.jpg",
    "upright": "恐惧，焦虑，消极，崩溃，绝望，噩梦",
    "reversed": "噩梦结束，恢复精神，重拾信心，学会应对恐惧",
    "emotionAnalysis": "你接近阶段结果，也更容易感到疲惫或警觉，这张牌把注意力带向思绪与沟通；你可能同时体验到焦虑或内耗。",
    "careSuggestion": "把事实和猜测分开写，并做六次缓慢呼气。不要求马上解决所有问题，先观察情绪是否有一点变化。",
    "reflectionQuestion": "在继续之前，怎样休息能真正补回能量？"
  },
  {
    "id": "60",
    "name": "Ten of Swords 宝剑十",
    "image": "SimpleTarotPng/Swords10.jpg",
    "upright": "毁灭，失败，苦涩，崩溃，受害，背叛",
    "reversed": "幸存，改善，痊愈，吸取经验教训",
    "emotionAnalysis": "情绪累积到需要整理与交接的时刻，这张牌把注意力带向思绪与沟通；你可能同时体验到焦虑或内耗。",
    "careSuggestion": "把事实和猜测分开写，并做六次缓慢呼气。不要求马上解决所有问题，先观察情绪是否有一点变化。",
    "reflectionQuestion": "有什么责任可以放下、拆小或请人分担？"
  },
  {
    "id": "61",
    "name": "Page of Swords 宝剑侍卫",
    "image": "SimpleTarotPng/Swords11.jpg",
    "upright": "好奇，机智，思维敏捷，健谈，善于沟通，灵感，警觉",
    "reversed": "散漫，愤世嫉俗，讽刺，流言蜚语，侮辱，粗鲁，缺乏规划",
    "emotionAnalysis": "好奇而敏感的一面正在带来消息，这张牌把注意力带向思绪与沟通；你可能同时体验到焦虑或内耗。",
    "careSuggestion": "把事实和猜测分开写，并做六次缓慢呼气。不要求马上解决所有问题，先观察情绪是否有一点变化。",
    "reflectionQuestion": "如果像初学者一样看待它，你会发现什么？"
  },
  {
    "id": "62",
    "name": "Knight of Swords 宝剑骑士",
    "image": "SimpleTarotPng/Swords12.jpg",
    "upright": "自信，直接，急性子，聪明，大胆，专注，完美主义，雄心勃勃",
    "reversed": "粗鲁，蛮横，欺凌，侵略性，牙尖嘴利，恶毒，无情，傲慢",
    "emotionAnalysis": "一股强烈动力正推动你快速回应，这张牌把注意力带向思绪与沟通；你可能同时体验到焦虑或内耗。",
    "careSuggestion": "把事实和猜测分开写，并做六次缓慢呼气。不要求马上解决所有问题，先观察情绪是否有一点变化。",
    "reflectionQuestion": "行动前慢十秒，你真正想抵达哪里？"
  },
  {
    "id": "63",
    "name": "Queen of Swords 宝剑王后",
    "image": "SimpleTarotPng/Swords13.jpg",
    "upright": "诚实，独立，有原则，公平，冷静理智，批评建议，客观，敏锐，洞察力，决断力",
    "reversed": "悲观，苛刻，痛苦，铁石心肠，讥讽，残忍，孤独，分离",
    "emotionAnalysis": "你有能力容纳感受并照顾内在需要，这张牌把注意力带向思绪与沟通；你可能同时体验到焦虑或内耗。",
    "careSuggestion": "把事实和猜测分开写，并做六次缓慢呼气。不要求马上解决所有问题，先观察情绪是否有一点变化。",
    "reflectionQuestion": "怎样关怀自己，同时不替所有人负责？"
  },
  {
    "id": "64",
    "name": "King of Swords 宝剑国王",
    "image": "SimpleTarotPng/Swords14.jpg",
    "upright": "理智，权威，纪律，律法，诚信，道德，严肃，严格",
    "reversed": "不理智，独裁，压迫，不人道，控制，冷酷，不诚实",
    "emotionAnalysis": "你正在学习稳定地引导情绪与行动，这张牌把注意力带向思绪与沟通；你可能同时体验到焦虑或内耗。",
    "careSuggestion": "把事实和猜测分开写，并做六次缓慢呼气。不要求马上解决所有问题，先观察情绪是否有一点变化。",
    "reflectionQuestion": "成熟而温和的你，会怎样处理此刻？"
  },
  {
    "id": "65",
    "name": "Ace of Pentacles 星币一",
    "image": "SimpleTarotPng/Pents01.jpg",
    "upright": "新机会，资源，财富，丰富，繁荣，安全，稳定",
    "reversed": "错失机会，稀缺，匮乏，不稳定，吝啬，投资失败，亏空，支出",
    "emotionAnalysis": "新的情绪能量正在萌芽，这张牌把注意力带向安全与现实；你可能同时体验到压力或不踏实。",
    "careSuggestion": "照顾睡眠、饮食和环境，再完成一件具体小任务。不要求马上解决所有问题，先观察情绪是否有一点变化。",
    "reflectionQuestion": "今天最值得回应的新需要是什么？"
  },
  {
    "id": "66",
    "name": "Two of Pentacles 星币二",
    "image": "SimpleTarotPng/Pents02.jpg",
    "upright": "平衡，适应，足智多谋，灵活，娱乐",
    "reversed": "失衡，无组织，不知所措，混乱，古板僵化，不懂变通",
    "emotionAnalysis": "你可能在两种需要之间权衡，这张牌把注意力带向安全与现实；你可能同时体验到压力或不踏实。",
    "careSuggestion": "照顾睡眠、饮食和环境，再完成一件具体小任务。不要求马上解决所有问题，先观察情绪是否有一点变化。",
    "reflectionQuestion": "哪一种选择更贴近你此刻的真实容量？"
  },
  {
    "id": "67",
    "name": "Three of Pentacles 星币三",
    "image": "SimpleTarotPng/Pents03.jpg",
    "upright": "团队合作，共同目标，协作，学徒制，计划，知识和经验",
    "reversed": "缺乏凝聚力，缺乏团队精神，团队不和，经验或能力不足，计划不周",
    "emotionAnalysis": "连接、协作或成长带来新的感受，这张牌把注意力带向安全与现实；你可能同时体验到压力或不踏实。",
    "careSuggestion": "照顾睡眠、饮食和环境，再完成一件具体小任务。不要求马上解决所有问题，先观察情绪是否有一点变化。",
    "reflectionQuestion": "你可以邀请谁与你一起承担或庆祝？"
  },
  {
    "id": "68",
    "name": "Four of Pentacles 星币四",
    "image": "SimpleTarotPng/Pents04.jpg",
    "upright": "占有欲，不安全感，警戒，囤积，吝啬，稳定，安全，储蓄，物欲，财富，节俭，守成",
    "reversed": "慷慨，给予，支出，开放，财务不安全，乱花钱，亏损",
    "emotionAnalysis": "稳定带来保护，也可能渐渐变成停滞，这张牌把注意力带向安全与现实；你可能同时体验到压力或不踏实。",
    "careSuggestion": "照顾睡眠、饮食和环境，再完成一件具体小任务。不要求马上解决所有问题，先观察情绪是否有一点变化。",
    "reflectionQuestion": "你现在需要守住什么，又可以松开什么？"
  },
  {
    "id": "69",
    "name": "Five of Pentacles 星币五",
    "image": "SimpleTarotPng/Pents05.jpg",
    "upright": "困难，损失，被抛弃感，逆境，挣扎，失业，疏远，耻辱，相互扶持",
    "reversed": "混乱，毁灭，绝望；化险为夷，克服逆境",
    "emotionAnalysis": "冲突、失落或不足感可能比较突出，这张牌把注意力带向安全与现实；你可能同时体验到压力或不踏实。",
    "careSuggestion": "照顾睡眠、饮食和环境，再完成一件具体小任务。不要求马上解决所有问题，先观察情绪是否有一点变化。",
    "reflectionQuestion": "此刻最需要被承认的损失或委屈是什么？"
  },
  {
    "id": "70",
    "name": "Six of Pentacles 星币六",
    "image": "SimpleTarotPng/Pents06.jpg",
    "upright": "慷慨，慈善，帮助，支持，分享，感恩",
    "reversed": "吝啬，过于慷慨，有条件的好处，不平等，勒索",
    "emotionAnalysis": "情绪开始流动，支持与修复正在靠近，这张牌把注意力带向安全与现实；你可能同时体验到压力或不踏实。",
    "careSuggestion": "照顾睡眠、饮食和环境，再完成一件具体小任务。不要求马上解决所有问题，先观察情绪是否有一点变化。",
    "reflectionQuestion": "你愿意接受或给予哪一种具体支持？"
  },
  {
    "id": "71",
    "name": "Seven of Pentacles 星币七",
    "image": "SimpleTarotPng/Pents07.jpg",
    "upright": "收获，回报，结果，成长，进步，毅力，耐心，计划，耕耘",
    "reversed": "未完成的工作，拖延，缺少努力，浪费，缺乏成长，挫折，急躁，回报不令人满意，还未到收获的时候",
    "emotionAnalysis": "选择、坚持或防御让内心有些拥挤，这张牌把注意力带向安全与现实；你可能同时体验到压力或不踏实。",
    "careSuggestion": "照顾睡眠、饮食和环境，再完成一件具体小任务。不要求马上解决所有问题，先观察情绪是否有一点变化。",
    "reflectionQuestion": "哪些选项是真需要，哪些只是害怕错过？"
  },
  {
    "id": "72",
    "name": "Eight of Pentacles 星币八",
    "image": "SimpleTarotPng/Pents08.jpg",
    "upright": "技巧，才能，勤奋，专注，高标准，精益求精，勤学苦练，付出",
    "reversed": "低质量，工作仓促，偷工减料，声誉不佳，缺乏动力，平庸，懒惰，水平低下，无前途的工作，过于劳累",
    "emotionAnalysis": "节奏加快，或旧模式正在限制你，这张牌把注意力带向安全与现实；你可能同时体验到压力或不踏实。",
    "careSuggestion": "照顾睡眠、饮食和环境，再完成一件具体小任务。不要求马上解决所有问题，先观察情绪是否有一点变化。",
    "reflectionQuestion": "哪一个重复动作可以调整得更轻松一点？"
  },
  {
    "id": "73",
    "name": "Nine of Pentacles 星币九",
    "image": "SimpleTarotPng/Pents09.jpg",
    "upright": "成功，成就，休闲，物质保障，独立，物质或精神富足，生活充实，付出收到回报，自信",
    "reversed": "戒备心强，生活无度，经济困难，生活来源不稳定，乱花钱，肤浅",
    "emotionAnalysis": "你接近阶段结果，也更容易感到疲惫或警觉，这张牌把注意力带向安全与现实；你可能同时体验到压力或不踏实。",
    "careSuggestion": "照顾睡眠、饮食和环境，再完成一件具体小任务。不要求马上解决所有问题，先观察情绪是否有一点变化。",
    "reflectionQuestion": "在继续之前，怎样休息能真正补回能量？"
  },
  {
    "id": "74",
    "name": "Ten of Pentacles 星币十",
    "image": "SimpleTarotPng/Pents10.jpg",
    "upright": "遗产，根基稳固，家庭，祖先，继承，富裕，稳定，持久的事业",
    "reversed": "家庭纠纷，破产，债务，转瞬即逝的成功，财产纠纷，不稳定，打破传统",
    "emotionAnalysis": "情绪累积到需要整理与交接的时刻，这张牌把注意力带向安全与现实；你可能同时体验到压力或不踏实。",
    "careSuggestion": "照顾睡眠、饮食和环境，再完成一件具体小任务。不要求马上解决所有问题，先观察情绪是否有一点变化。",
    "reflectionQuestion": "有什么责任可以放下、拆小或请人分担？"
  },
  {
    "id": "75",
    "name": "Page of Pentacles 星币侍卫",
    "image": "SimpleTarotPng/Pents11.jpg",
    "upright": "雄心勃勃，勤奋，目标导向，计划性强，始终如一，勤奋好学，脚踏实地，忠诚，可靠，亲近自然",
    "reversed": "愚蠢，不成熟，不负责任，懒惰，心浮气躁，成绩不佳，拖延，错过机会，前景灰暗",
    "emotionAnalysis": "好奇而敏感的一面正在带来消息，这张牌把注意力带向安全与现实；你可能同时体验到压力或不踏实。",
    "careSuggestion": "照顾睡眠、饮食和环境，再完成一件具体小任务。不要求马上解决所有问题，先观察情绪是否有一点变化。",
    "reflectionQuestion": "如果像初学者一样看待它，你会发现什么？"
  },
  {
    "id": "76",
    "name": "Knight of Pentacles 星币骑士",
    "image": "SimpleTarotPng/Pents12.jpg",
    "upright": "实事求是，可靠，高效，坚忍不拔，慢条斯理，勤奋，投入，耐心，保守",
    "reversed": "工作狂，懒惰，沉闷，无聊，被动，小气，不负责任，赌徒，风险投资",
    "emotionAnalysis": "一股强烈动力正推动你快速回应，这张牌把注意力带向安全与现实；你可能同时体验到压力或不踏实。",
    "careSuggestion": "照顾睡眠、饮食和环境，再完成一件具体小任务。不要求马上解决所有问题，先观察情绪是否有一点变化。",
    "reflectionQuestion": "行动前慢十秒，你真正想抵达哪里？"
  },
  {
    "id": "77",
    "name": "Queen of Pentacles 星币王后",
    "image": "SimpleTarotPng/Pents13.jpg",
    "upright": "慷慨、有爱心，养育，恋家，良好的商业意识，理财，实用主义，温柔宽厚，安慰，热情，繁荣",
    "reversed": "自私，嫉妒，缺乏安全感，贪婪，物质(adj.)，严苛，自以为是",
    "emotionAnalysis": "你有能力容纳感受并照顾内在需要，这张牌把注意力带向安全与现实；你可能同时体验到压力或不踏实。",
    "careSuggestion": "照顾睡眠、饮食和环境，再完成一件具体小任务。不要求马上解决所有问题，先观察情绪是否有一点变化。",
    "reflectionQuestion": "怎样关怀自己，同时不替所有人负责？"
  },
  {
    "id": "78",
    "name": "King of Pentacles 星币国王",
    "image": "SimpleTarotPng/Pents14.jpg",
    "upright": "富足，繁荣，安稳，雄心勃勃，持之以恒，勤奋刻苦，事业有成，慷慨，稳重，可靠",
    "reversed": "贪婪，自私，物质(adj.)，大男子主义，理财失败，赌徒，占有欲强",
    "emotionAnalysis": "你正在学习稳定地引导情绪与行动，这张牌把注意力带向安全与现实；你可能同时体验到压力或不踏实。",
    "careSuggestion": "照顾睡眠、饮食和环境，再完成一件具体小任务。不要求马上解决所有问题，先观察情绪是否有一点变化。",
    "reflectionQuestion": "成熟而温和的你，会怎样处理此刻？"
  }
];
