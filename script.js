const boardSpaces = [
  { no: 0, name: "START 現金流日", action: "結算薪水 + 被動收入 - 固定支出" },
  { no: 1, name: "資產市場", action: "翻 2 張資產卡，可買 1 張" },
  { no: 2, name: "事件卡", action: "抽 1 張事件卡" },
  { no: 3, name: "學習充電", action: "可支付 2,000，工作備胎 +1" },
  { no: 4, name: "機會卡", action: "抽 1 張機會卡" },
  { no: 5, name: "資產市場", action: "翻 2 張資產卡，可買 1 張" },
  { no: 6, name: "公益行動", action: "家庭備胎 +1，或支付 1,000 讓家庭與財務各 +1" },
  { no: 7, name: "健康日", action: "健康備胎 +1" },
  { no: 8, name: "現金流日", action: "結算薪水 + 被動收入 - 固定支出" },
  { no: 9, name: "開源合作", action: "現金 +2,000；工作備胎 4+ 時改為 +3,000" },
  { no: 10, name: "家庭時光", action: "家庭備胎 +1" },
  { no: 11, name: "關鍵抉擇", action: "抽 1 張關鍵抉擇卡" },
  { no: 12, name: "資產市場", action: "翻 2 張資產卡，可買 1 張" },
  { no: 13, name: "事件卡", action: "抽 1 張事件卡" },
  { no: 14, name: "旅行放鬆", action: "可支付 2,000，健康 +1、家庭 +1" },
  { no: 15, name: "休息充電", action: "任選一個備胎 +1" },
  { no: 16, name: "現金流日", action: "結算薪水 + 被動收入 - 固定支出" },
  { no: 17, name: "資產市場", action: "翻 2 張資產卡，可買 1 張" },
  { no: 18, name: "學習充電", action: "可支付 2,000，工作備胎 +1" },
  { no: 19, name: "機會卡", action: "抽 1 張機會卡" },
  { no: 20, name: "家庭時光", action: "家庭備胎 +1" },
  { no: 21, name: "健康日", action: "健康備胎 +1" },
  { no: 22, name: "事件卡", action: "抽 1 張事件卡" },
  { no: 23, name: "關鍵抉擇", action: "抽 1 張關鍵抉擇卡" },
  { no: 24, name: "現金流日", action: "結算薪水 + 被動收入 - 固定支出" },
  { no: 25, name: "儲蓄存摺", action: "可存 2,000 到儲蓄，財務備胎 +1" },
  { no: 26, name: "旅行放鬆", action: "可支付 2,000，健康 +1、家庭 +1" },
  { no: 27, name: "資產市場", action: "翻 2 張資產卡，可買 1 張" },
  { no: 28, name: "事件卡", action: "抽 1 張事件卡" },
  { no: 29, name: "休息充電", action: "任選一個備胎 +1" },
];

const deckMeta = {
  all: { label: "全部", className: "all" },
  favor: {
    label: "人情卡",
    countLabel: "1 種卡面／20 張",
    className: "favor",
    description: "玩家救援他人爆胎後取得，之後可用來免付修補費，未使用則結束加分。",
  },
  event: {
    label: "事件卡",
    countLabel: "30 張",
    className: "event",
    description: "人生突發狀況，可能帶來支出、備胎變動、資產風險或爆胎危機。",
  },
  opportunity: {
    label: "機會卡",
    countLabel: "20 張",
    className: "opportunity",
    description: "讓玩家取得現金、加薪、資產折扣、被動收入或備胎補強。",
  },
  asset: {
    label: "資產卡",
    countLabel: "18 張",
    className: "asset",
    description: "停在資產市場時翻牌購買，用來累積被動收入，也可能帶來固定支出與風險。",
  },
  decision: {
    label: "關鍵抉擇卡",
    countLabel: "12 張",
    className: "decision",
    description: "玩家必須在 A / B 之間選擇，練習用當下狀態做取捨。",
  },
};

const eventWhen = "停在事件卡格並抽到這張時立即執行，用完放到事件棄牌區。";
const opportunityWhen = "停在機會卡格並抽到這張時執行；若卡片寫保留，就放在自己面前等時機使用。";
const assetWhen = "停在資產市場時翻到這張，可以選擇購買；買下後放在自己面前並更新紀錄表。";
const decisionWhen = "停在關鍵抉擇格抽到這張時，必須在 A 與 B 中選一個執行。";

const eventCards = [
  {
    number: 1,
    title: "意外小獎金",
    group: "輕微事件",
    impact: ["現金"],
    effects: ["得到一筆小獎金。", "現金 +2,000。"],
    purpose: "直接補現金，讓玩家有更多餘裕支付事件、買資產或避免太快借款。",
  },
  {
    number: 2,
    title: "找到折價券",
    group: "輕微事件",
    impact: ["現金", "財務備胎"],
    effects: ["省下一筆生活費。", "現金 +1,000，財務備胎 +1。"],
    purpose: "同時補錢與財務備胎，是一張讓玩家更安全的日常好事件。",
  },
  {
    number: 3,
    title: "家人支持",
    group: "輕微事件",
    impact: ["家庭備胎", "健康備胎"],
    effects: ["家人鼓勵你繼續努力。", "家庭備胎 +1，健康備胎 +1。"],
    purpose: "補強兩個非金錢備胎，讓玩家面對家庭與健康事件時更不容易爆胎。",
  },
  {
    number: 4,
    title: "工作表現被看見",
    group: "輕微事件",
    impact: ["工作備胎", "薪水"],
    effects: ["主管或客戶注意到你的努力。", "工作備胎 +1。", "如果工作備胎已經是 5，薪水 +500。"],
    purpose: "提升工作穩定度；工作備胎已滿時改成長期薪水加成。",
  },
  {
    number: 5,
    title: "小感冒",
    group: "輕微事件",
    impact: ["健康備胎", "現金"],
    effects: ["身體提醒你要休息。", "健康備胎 -1，支付 1,000。", "健康備胎 4+ 可少付 1,000。"],
    purpose: "提醒玩家健康備胎會影響支出；健康夠高時可直接抵掉這次小損失。",
  },
  {
    number: 6,
    title: "手機維修",
    group: "輕微事件",
    impact: ["現金"],
    effects: ["手機突然壞掉。", "支付 1,500。", "財務備胎 4+ 可少付 1,000。"],
    purpose: "製造小額現金壓力，讓財務備胎的保護效果被玩家看見。",
  },
  {
    number: 7,
    title: "交通罰單",
    group: "輕微事件",
    impact: ["現金"],
    effects: ["不小心違規。", "支付 1,500。", "財務備胎 4+ 可少付 1,000。"],
    purpose: "檢驗玩家是否有足夠現金與財務備胎，避免小事變成借款壓力。",
  },
  {
    number: 8,
    title: "家庭小支出",
    group: "輕微事件",
    impact: ["現金", "家庭備胎"],
    effects: ["家中臨時需要一筆小錢。", "支付 1,500，家庭備胎 +1。", "家庭備胎 4+ 可少付 1,000。"],
    purpose: "用小額支出換家庭備胎，適合讓玩家理解關係投入也會成為保護。",
  },
  {
    number: 9,
    title: "朋友需要幫忙",
    group: "輕微事件",
    impact: ["選擇", "家庭備胎"],
    effects: ["朋友遇到小困難。", "A. 支付 1,000，家庭備胎 +1。", "B. 不幫忙，沒有事情發生。"],
    purpose: "給玩家小型人際選擇：花現金換關係備胎，或保留現金不承擔成本。",
  },
  {
    number: 10,
    title: "稅務整理",
    group: "輕微事件",
    impact: ["現金", "財務備胎"],
    effects: ["你把帳目整理清楚。", "支付 1,000，財務備胎 +1。"],
    purpose: "把整理財務具體化：現在付小錢，換取未來事件的財務保護。",
  },
  {
    number: 11,
    title: "被朋友推薦",
    group: "輕微事件",
    impact: ["機會卡"],
    effects: ["朋友介紹你一個機會。", "抽 1 張機會卡。"],
    purpose: "把事件轉成機會，讓玩家額外觸發一張可能帶來成長或收入的卡。",
  },
  {
    number: 12,
    title: "免費健康提醒",
    group: "輕微事件",
    impact: ["健康備胎"],
    effects: ["你開始注意睡眠和運動。", "健康備胎 +1。"],
    purpose: "沒有金錢成本的健康補強，能降低之後健康事件造成爆胎的機率。",
  },
  {
    number: 13,
    title: "車子維修",
    group: "中等事件",
    impact: ["現金"],
    effects: ["車子突然需要維修。", "支付 3,000。", "財務備胎 4+ 可少付 1,000。"],
    purpose: "中等現金壓力卡，測試玩家現金流和財務備胎是否足夠。",
  },
  {
    number: 14,
    title: "牙齒治療",
    group: "中等事件",
    impact: ["健康備胎", "現金"],
    effects: ["牙齒痛不能拖。", "健康備胎 -1，支付 2,000。", "健康備胎 4+ 可少付 1,000。"],
    purpose: "同時扣健康和現金，讓忽略健康的玩家感受到雙重代價。",
  },
  {
    number: 15,
    title: "公司專案加班",
    group: "中等事件",
    impact: ["健康備胎", "工作備胎"],
    effects: ["最近工作變忙。", "健康備胎 -1，工作備胎 +1。"],
    purpose: "呈現職涯成長的代價：工作變強，但健康備胎會被消耗。",
  },
  {
    number: 16,
    title: "臨時家庭支出",
    group: "中等事件",
    impact: ["家庭備胎", "現金"],
    effects: ["家裡突然有一筆支出。", "家庭備胎 -1，支付 2,500。", "家庭備胎 4+ 可少付 1,000。"],
    purpose: "考驗家庭備胎和現金準備，家庭備胎低的玩家更容易進入警戒。",
  },
  {
    number: 17,
    title: "忘記繳費",
    group: "中等事件",
    impact: ["財務備胎", "現金"],
    effects: ["忘記繳費產生罰金。", "財務備胎 -1，支付 1,500。"],
    purpose: "懲罰財務管理鬆散，讓財務備胎與現金一起承受損失。",
  },
  {
    number: 18,
    title: "工作危機",
    group: "中等事件",
    impact: ["工作備胎", "爆胎"],
    effects: ["公司或案源變得不穩。", "工作備胎 -1。", "如果工作備胎變成 0，立刻爆胎求救。"],
    purpose: "把工作備胎拉進風險核心；工作備胎低時，這張卡可能直接觸發爆胎。",
  },
  {
    number: 19,
    title: "資產小維修",
    group: "中等事件",
    impact: ["資產", "現金"],
    effects: ["如果你有任何資產，支付 1,500。", "如果沒有資產，沒有事情發生。", "財務備胎 4+ 可少付 1,000。"],
    purpose: "提醒玩家資產不是只會賺錢，也會有維護成本；財務備胎可降低衝擊。",
  },
  {
    number: 20,
    title: "市場波動",
    group: "中等事件",
    impact: ["投資資產"],
    effects: ["如果你有投資型資產，選 1 張投資型資產，下次現金流日不計入被動收入。", "如果沒有投資型資產，沒有事情發生。", "投資型資產包含：存股 ETF、保守債券。"],
    purpose: "針對投資型資產的風險卡，讓高投資玩家短暫失去部分被動收入。",
  },
  {
    number: 21,
    title: "設備維修",
    group: "中等事件",
    impact: ["設備資產", "現金"],
    effects: ["如果你有設備型資產，支付 2,000。", "如果沒有設備型資產，沒有事情發生。", "財務備胎 4+ 可少付 1,000。", "設備型資產包含：自動販賣機、小型設備租借、自助洗衣機。"],
    purpose: "針對設備型資產的維修風險，讓被動收入策略需要搭配財務備胎。",
  },
  {
    number: 22,
    title: "空租一季",
    group: "中等事件",
    impact: ["出租資產"],
    effects: ["如果你有出租型資產，選 1 張出租型資產，下次現金流日不計入被動收入，但固定支出仍要付。", "如果沒有出租型資產，沒有事情發生。", "出租型資產包含：出租車位、小型停車格、小型倉庫出租、小套房出租。"],
    purpose: "讓出租資產出現空窗期，收入少了但成本仍在，是進階資產玩家的重要風險。",
  },
  {
    number: 23,
    title: "人際誤會",
    group: "中等事件",
    impact: ["家庭備胎", "合作資產"],
    effects: ["合作或關係出現誤會。", "家庭備胎 -1。", "如果你有合作型資產，額外支付 1,000。", "合作型資產包含：團購小店、親子工作坊、健康便當合作、停車場合作、加盟小店。"],
    purpose: "把關係品質連到合作資產，家庭備胎低或合作資產多的玩家會更有感。",
  },
  {
    number: 24,
    title: "物價上漲",
    group: "中等事件",
    impact: ["固定支出"],
    effects: ["生活成本變高。", "固定支出 +300。", "財務備胎 4+ 可取消這次固定支出增加。"],
    purpose: "讓固定支出上升，長期拖累現金流；財務備胎足夠時可防住這次上漲。",
  },
  {
    number: 25,
    title: "過勞警訊",
    group: "壓力事件",
    impact: ["健康備胎", "爆胎"],
    effects: ["你最近太累，身體發出警訊。", "健康備胎 -2。", "如果健康備胎變成 0，立刻爆胎求救。"],
    purpose: "重扣健康備胎，是健康線崩盤的主要壓力來源。",
  },
  {
    number: 26,
    title: "家庭冷戰",
    group: "壓力事件",
    impact: ["家庭備胎", "爆胎"],
    effects: ["你太忙，家人覺得被忽略。", "家庭備胎 -2。", "如果家庭備胎變成 0，立刻爆胎求救。"],
    purpose: "重扣家庭備胎，讓玩家不能只顧賺錢而忽略關係支持。",
  },
  {
    number: 27,
    title: "職涯震盪",
    group: "壓力事件",
    impact: ["工作備胎", "爆胎"],
    effects: ["工作環境突然改變。", "工作備胎 -2。", "如果工作備胎變成 0，立刻爆胎求救。"],
    purpose: "重扣工作備胎，考驗玩家是否有持續投資能力與工作彈性。",
  },
  {
    number: 28,
    title: "緊急支出",
    group: "壓力事件",
    impact: ["財務備胎", "現金", "爆胎"],
    effects: ["突然出現一筆大支出。", "財務備胎 -2，支付 3,000。", "如果財務備胎變成 0，立刻爆胎求救。"],
    purpose: "同時打財務備胎和現金，是最容易把財務薄弱玩家推向爆胎的壓力卡。",
  },
  {
    number: 29,
    title: "現金流壓力",
    group: "壓力事件",
    impact: ["財務備胎", "現金流", "爆胎"],
    effects: ["如果固定支出大於被動收入，財務備胎 -2。", "否則財務備胎 -1。", "如果財務備胎變成 0，立刻爆胎求救。"],
    purpose: "專門檢查現金流結構，固定支出過高的玩家會受到更重懲罰。",
  },
  {
    number: 30,
    title: "多重壓力週",
    group: "壓力事件",
    impact: ["最低備胎", "爆胎"],
    effects: ["找出你目前最低的備胎，該備胎 -2。", "如果有多個最低，由你自己選一個。", "如果該備胎變成 0，立刻爆胎求救。"],
    purpose: "攻擊玩家最弱的備胎，促使玩家平衡發展而不是只衝單一路線。",
  },
].map((card) => ({
  ...card,
  deck: "event",
  when: eventWhen,
  image: `assets/web/cards/event/${String(card.number).padStart(2, "0")}.webp`,
}));

const opportunityCards = [
  {
    number: 1,
    title: "免費講座",
    impact: ["工作備胎"],
    effects: ["工作備胎 +1。"],
    purpose: "不花錢提升工作備胎，讓玩家更接近加薪與工作事件減免。",
  },
  {
    number: 2,
    title: "小型資產推薦",
    impact: ["資產市場"],
    effects: ["立刻翻 2 張資產卡，可以買 1 張。"],
    purpose: "即使沒有停在資產市場，也能額外獲得購買資產的機會。",
  },
  {
    number: 3,
    title: "加薪機會",
    impact: ["薪水", "工作備胎"],
    effects: ["如果工作備胎至少 4，薪水 +1,000。", "否則工作備胎 +1。"],
    purpose: "工作備胎高的人轉成長期薪水收益；備胎未達標的人先補工作能力。",
  },
  {
    number: 4,
    title: "買資產折扣",
    impact: ["資產", "保留卡"],
    effects: ["保留此卡。", "下次購買資產時，成本 -2,000。", "使用後丟棄。"],
    purpose: "降低下一張資產的入手門檻，特別適合留給高成本資產使用。",
  },
  {
    number: 5,
    title: "合作邀請",
    impact: ["被動收入", "現金"],
    effects: ["你可以支付 3,000。", "若支付，被動收入 +600。"],
    purpose: "把現金轉成被動收入，不需要持有資產卡也能增加現金流。",
  },
  {
    number: 6,
    title: "健康挑戰成功",
    impact: ["健康備胎"],
    effects: ["健康備胎 +2。"],
    purpose: "快速補健康，適合健康低落或準備防壓力事件的玩家。",
  },
  {
    number: 7,
    title: "舊物出售",
    impact: ["現金", "財務備胎"],
    effects: ["現金 +2,000，財務備胎 +1。"],
    purpose: "增加現金並改善財務備胎，讓玩家更有能力處理下一次支出。",
  },
  {
    number: 8,
    title: "人脈聚會",
    impact: ["工作備胎", "家庭備胎"],
    effects: ["支付 1,000，工作備胎 +1，家庭備胎 +1。"],
    purpose: "用小額現金同時補工作與家庭，適合需要平衡兩種備胎的玩家。",
  },
  {
    number: 9,
    title: "保險優惠",
    impact: ["固定支出", "事件減免"],
    effects: ["你可以購買保險。", "若購買，固定支出 +500。", "之後每次事件金錢損失少付 1,000。"],
    purpose: "用固定支出換事件減免，適合擔心高額事件或現金流穩定的玩家。",
  },
  {
    number: 10,
    title: "貴人出現",
    impact: ["保留卡", "事件減免"],
    effects: ["保留此卡。", "之後抽到事件卡時，可以丟棄此卡，取消該事件的一半金錢損失。"],
    purpose: "作為一次性救援工具，適合留到車子維修、緊急支出等高金額事件時使用。",
  },
  {
    number: 11,
    title: "副業爆單",
    impact: ["現金", "資產"],
    effects: ["如果你有任何資產，現金 +4,000。", "如果沒有資產，現金 +1,000。"],
    purpose: "獎勵已經開始經營資產的玩家；沒有資產也能拿到小額現金。",
  },
  {
    number: 12,
    title: "理財整理",
    impact: ["財務備胎", "負債"],
    effects: ["財務備胎 +1。", "如果你有負債，可以少還 1,000 元，直接減少 1,000 負債。"],
    purpose: "補財務備胎並協助降低負債，讓玩家的現金流更健康。",
  },
  {
    number: 13,
    title: "技能交換",
    impact: ["工作備胎", "家庭備胎"],
    effects: ["工作備胎 +1，家庭備胎 +1。"],
    purpose: "不花現金補兩個備胎，適合走工作與關係並重的路線。",
  },
  {
    number: 14,
    title: "現金回饋",
    impact: ["現金"],
    effects: ["現金 +1,500。"],
    purpose: "簡單補現金，讓玩家更容易撐過小支出或補足資產成本。",
  },
  {
    number: 15,
    title: "找到好房客",
    impact: ["出租資產", "被動收入", "現金"],
    effects: ["如果你有出租型資產，被動收入 +500。", "如果沒有出租型資產，現金 +1,000。"],
    purpose: "獎勵出租資產路線；沒有出租資產時也給現金安慰獎。",
  },
  {
    number: 16,
    title: "設備升級",
    impact: ["設備資產", "被動收入"],
    effects: ["如果你有設備型資產，可以支付 2,000。", "若支付，被動收入 +700。", "如果沒有設備型資產，沒有事情發生。"],
    purpose: "讓設備資產成長，玩家可用現金換更高的長期被動收入。",
  },
  {
    number: 17,
    title: "被邀請分享",
    impact: ["現金", "工作備胎"],
    effects: ["現金 +2,000，工作備胎 +1。"],
    purpose: "同時增加現金和職涯能見度，對工作路線很有幫助。",
  },
  {
    number: 18,
    title: "好習慣養成",
    impact: ["健康備胎", "財務備胎"],
    effects: ["健康備胎 +1，財務備胎 +1。"],
    purpose: "補最常被壓力事件攻擊的健康與財務，提升整體抗風險能力。",
  },
  {
    number: 19,
    title: "親友支援",
    impact: ["家庭備胎", "現金"],
    effects: ["家庭備胎 +1。", "如果現金低於 3,000，額外現金 +2,000。"],
    purpose: "補家庭備胎，並扶助現金偏低的玩家，避免低現金玩家直接崩盤。",
  },
  {
    number: 20,
    title: "第一桶被動收入",
    impact: ["被動收入", "資產市場", "現金"],
    effects: ["如果你的被動收入是 0，可以立刻翻 2 張初階資產卡，選 1 張以成本 -2,000 購買。", "如果你的被動收入不是 0，現金 +2,000。"],
    purpose: "幫還沒開始投資的玩家跨出第一步；已有被動收入的玩家則得到現金回饋。",
  },
].map((card) => ({
  ...card,
  deck: "opportunity",
  group: "機會卡",
  when: opportunityWhen,
  image: `assets/web/cards/opportunity/${String(card.number).padStart(2, "0")}.webp`,
}));

const assetCards = [
  {
    number: 1,
    title: "自動販賣機",
    group: "初階資產",
    impact: ["被動收入", "設備資產"],
    effects: ["成本：5,000", "被動收入：+700", "條件：無"],
    purpose: "低成本入門資產，適合玩家建立第一筆被動收入，也會被設備維修事件影響。",
  },
  {
    number: 2,
    title: "存股 ETF",
    group: "初階資產",
    impact: ["被動收入", "投資資產"],
    effects: ["成本：5,000", "被動收入：+500", "條件：無"],
    purpose: "報酬較保守但門檻低，適合現金不多時先讓被動收入從 0 開始。",
  },
  {
    number: 3,
    title: "網路二手商店",
    group: "初階資產",
    impact: ["被動收入"],
    effects: ["成本：6,000", "被動收入：+800", "條件：無"],
    purpose: "成本略高但收入穩定，是前期很好理解的被動收入資產。",
  },
  {
    number: 4,
    title: "數位素材包",
    group: "初階資產",
    impact: ["被動收入", "工作備胎"],
    effects: ["成本：7,000", "被動收入：+1,000", "條件：工作備胎至少 2"],
    purpose: "需要基本工作能力才能買，鼓勵玩家先補工作備胎再建立收入。",
  },
  {
    number: 5,
    title: "親子工作坊",
    group: "初階資產",
    impact: ["被動收入", "家庭備胎", "合作資產"],
    effects: ["成本：8,000", "被動收入：+1,000", "條件：家庭備胎至少 3", "購買後：家庭備胎 +1"],
    purpose: "用家庭與人際能力換收入，買下後還能補家庭備胎，適合關係路線。",
  },
  {
    number: 6,
    title: "團購小店",
    group: "初階資產",
    impact: ["被動收入", "家庭備胎", "合作資產"],
    effects: ["成本：9,000", "被動收入：+1,300", "條件：家庭備胎至少 3"],
    purpose: "收入比早期資產更高，但仰賴家庭與人際基礎，會受到合作相關事件影響。",
  },
  {
    number: 7,
    title: "小型停車格",
    group: "初階資產",
    impact: ["被動收入", "出租資產"],
    effects: ["成本：9,000", "被動收入：+1,300", "條件：無"],
    purpose: "沒有購買條件的出租型資產，可穩定提升現金流，但會被空租事件影響。",
  },
  {
    number: 8,
    title: "健康便當合作",
    group: "初階資產",
    impact: ["被動收入", "健康備胎", "合作資產"],
    effects: ["成本：10,000", "被動收入：+1,400", "條件：健康備胎至少 3", "購買後：健康備胎 +1"],
    purpose: "把健康備胎轉成收入來源，買下後補健康，適合健康路線玩家。",
  },
  {
    number: 9,
    title: "線上課程",
    group: "初階資產",
    impact: ["被動收入", "工作備胎"],
    effects: ["成本：10,000", "被動收入：+1,500", "條件：工作備胎至少 3"],
    purpose: "工作備胎越高越容易買到，能把職涯能力轉成穩定被動收入。",
  },
  {
    number: 10,
    title: "保守債券",
    group: "初階資產",
    impact: ["被動收入", "財務備胎", "投資資產"],
    effects: ["成本：10,000", "被動收入：+800", "條件：財務備胎至少 2", "特殊：賣出時可拿回 8,000，而不是成本一半。"],
    purpose: "收入較低但流動性佳，遇到大支出時賣出損失較小，適合保守玩家。",
  },
  {
    number: 11,
    title: "出租車位",
    group: "初階資產",
    impact: ["被動收入", "出租資產"],
    effects: ["成本：12,000", "被動收入：+1,800", "條件：無"],
    purpose: "較高收入的出租型資產，能明顯拉高現金流，但空租事件會造成短期停收。",
  },
  {
    number: 12,
    title: "內容小頻道",
    group: "初階資產",
    impact: ["被動收入", "工作備胎"],
    effects: ["成本：12,000", "被動收入：+1,700", "條件：工作備胎至少 3"],
    purpose: "把專業能力轉成內容收入，適合工作備胎穩定後加速累積被動收入。",
  },
  {
    number: 13,
    title: "小型設備租借",
    group: "進階資產",
    impact: ["被動收入", "固定支出", "設備資產"],
    effects: ["成本：10,000", "被動收入：+1,500", "固定支出：+300", "條件：無", "風險：設備維修事件會影響此卡。"],
    purpose: "進階入門資產，收入比初階穩定但會增加固定支出與設備維修風險。",
  },
  {
    number: 14,
    title: "自助洗衣機",
    group: "進階資產",
    impact: ["被動收入", "固定支出", "設備資產"],
    effects: ["成本：12,000", "被動收入：+2,000", "固定支出：+500", "條件：無", "風險：設備維修事件會影響此卡。"],
    purpose: "收入成長明顯，但固定支出也上升，適合現金流能承受維護成本的玩家。",
  },
  {
    number: 15,
    title: "小型倉庫出租",
    group: "進階資產",
    impact: ["被動收入", "固定支出", "出租資產"],
    effects: ["成本：15,000", "被動收入：+2,500", "固定支出：+500", "條件：財務備胎至少 3", "風險：空租事件會影響此卡。"],
    purpose: "需要財務備胎門檻的出租資產，收益高，但空租時仍要承擔固定支出。",
  },
  {
    number: 16,
    title: "停車場合作",
    group: "進階資產",
    impact: ["被動收入", "固定支出", "家庭備胎", "合作資產"],
    effects: ["成本：16,000", "被動收入：+3,000", "固定支出：+1,000", "條件：家庭備胎至少 3", "風險：人際誤會事件會影響此卡。"],
    purpose: "高收入合作資產，考驗家庭與人際備胎；關係風險會讓成本提高。",
  },
  {
    number: 17,
    title: "小套房出租",
    group: "進階資產",
    impact: ["被動收入", "固定支出", "出租資產"],
    effects: ["成本：18,000", "被動收入：+4,000", "固定支出：+2,000", "條件：財務備胎至少 3", "風險：空租事件會影響此卡。"],
    purpose: "高收益高支出的出租資產，現金流很好看，但空租時壓力很大。",
  },
  {
    number: 18,
    title: "加盟小店",
    group: "進階資產",
    impact: ["被動收入", "固定支出", "合作資產", "設備資產"],
    effects: ["成本：20,000", "被動收入：+5,000", "固定支出：+3,000", "條件：財務備胎至少 3", "風險：人際誤會、物價上漲、設備維修都可能影響此卡。"],
    purpose: "最高收益資產之一，但固定支出和事件風險都高，適合現金流與備胎都成熟的玩家。",
  },
].map((card) => ({
  ...card,
  deck: "asset",
  when: assetWhen,
  image: `assets/web/cards/asset/${String(card.number).padStart(2, "0")}.webp`,
}));

const decisionCards = [
  {
    number: 1,
    title: "要不要進修？",
    impact: ["工作備胎", "薪水", "現金"],
    effects: ["A. 支付 4,000，工作備胎 +2，薪水 +1,000。", "B. 不進修，現金 +1,000。"],
    purpose: "A 是用現金換長期工作成長與薪水；B 是短期保留現金。",
  },
  {
    number: 2,
    title: "要不要買保險？",
    impact: ["固定支出", "事件減免", "現金"],
    effects: ["A. 固定支出 +500，獲得保險。", "B. 不買保險，現金 +1,000。"],
    purpose: "A 提高固定支出但降低未來事件風險；B 立即拿現金但不增加保護。",
  },
  {
    number: 3,
    title: "要不要休息？",
    impact: ["健康備胎", "現金"],
    effects: ["A. 健康備胎 +2。", "B. 現金 +2,000，健康備胎 -1。"],
    purpose: "A 補健康防爆胎；B 用健康換現金，健康低時風險很高。",
  },
  {
    number: 4,
    title: "要不要陪家人？",
    impact: ["家庭備胎", "現金"],
    effects: ["A. 家庭備胎 +2。", "B. 現金 +2,000，家庭備胎 -1。"],
    purpose: "A 補關係支持；B 用家庭備胎換現金，可能讓家庭事件更危險。",
  },
  {
    number: 5,
    title: "要不要建立緊急預備金？",
    impact: ["儲蓄", "財務備胎", "現金"],
    effects: ["A. 把 3,000 從現金移到儲蓄，財務備胎 +2。", "B. 不存錢，現金 +1,000。"],
    purpose: "A 把可花現金轉成安全墊；B 拿短期現金但不提升抗風險能力。",
  },
  {
    number: 6,
    title: "要不要做副業？",
    impact: ["被動收入", "健康備胎", "現金"],
    effects: ["A. 支付 4,000，被動收入 +700，健康備胎 -1。", "B. 不做副業，健康備胎 +1。"],
    purpose: "A 用金錢與健康換收入成長；B 先保護健康，適合健康偏低的玩家。",
  },
  {
    number: 7,
    title: "要不要提前還債？",
    impact: ["負債", "固定支出", "現金"],
    effects: ["A. 如果你有負債，可以支付 10,000，負債 -10,000，固定支出 -1,000。", "B. 暫時不還，現金 +1,000。"],
    purpose: "A 降低長期負擔；B 保留短期現金，適合現金不足或無負債時。",
  },
  {
    number: 8,
    title: "要不要冒險投資？",
    impact: ["現金", "財務備胎", "骰子"],
    effects: ["A. 支付 5,000，擲骰：1 到 3 拿回 2,000；4 到 6 拿回 9,000。", "B. 不投資，財務備胎 +1。"],
    purpose: "A 是高波動賭注；B 是穩定補財務備胎，適合保守或現金少的玩家。",
  },
  {
    number: 9,
    title: "要不要接高壓案子？",
    impact: ["現金", "健康備胎", "爆胎"],
    effects: ["A. 現金 +4,000，健康備胎 -2。", "B. 不接案，健康備胎 +1。", "這張卡可能造成爆胎。"],
    purpose: "A 快速拿錢但健康風險很高；B 放棄收入換安全，健康低時尤其重要。",
  },
  {
    number: 10,
    title: "要不要換工作？",
    impact: ["薪水", "工作備胎"],
    effects: ["A. 如果工作備胎至少 4，薪水 +2,000；如果工作備胎不到 4，工作備胎 -1。", "B. 留在原工作，工作備胎 +1。"],
    purpose: "A 需要能力門檻，成功報酬高；B 穩定補工作備胎，適合還沒準備好的玩家。",
  },
  {
    number: 11,
    title: "要不要家庭旅行？",
    impact: ["家庭備胎", "健康備胎", "現金"],
    effects: ["A. 支付 3,000，家庭備胎 +2，健康備胎 +1。", "B. 不旅行，現金 +1,000。"],
    purpose: "A 用現金換家庭與健康；B 拿現金但錯過備胎補強。",
  },
  {
    number: 12,
    title: "要不要減少支出？",
    impact: ["固定支出", "現金"],
    effects: ["A. 支付 1,000，固定支出 -300。", "B. 不整理，現金 +1,000。", "固定支出不能低於 0。"],
    purpose: "A 降低長期支出、改善現金流；B 拿短期現金，適合當下很缺錢時。",
  },
].map((card) => ({
  ...card,
  deck: "decision",
  group: "關鍵抉擇",
  when: decisionWhen,
  image: `assets/web/cards/decision/${String(card.number).padStart(2, "0")}.webp`,
}));

const favorCards = [
  {
    deck: "favor",
    number: 1,
    title: "人情卡",
    group: "救援回報",
    impact: ["爆胎修補", "結束分數", "互助"],
    when: "當其他玩家爆胎並向玩家求救時，救援者支付 2,000 後取得 1 張人情卡。",
    effects: [
      "之後自己爆胎時，可以丟棄 1 張人情卡。",
      "不需要支付修補費，也不需要借錢。",
      "直接將爆胎備胎恢復到 1。",
      "遊戲結束時，沒用掉的人情卡每張 +1,000 分。",
      "每次爆胎最多使用 1 張，每位玩家最多持有 2 張。",
    ],
    purpose: "鼓勵玩家互相救援。它是未來爆胎時的免費修補工具，也能在未使用時轉成結束分數。",
    image: "assets/web/cards/favor/favor.webp",
  },
];

const cards = [...favorCards, ...eventCards, ...opportunityCards, ...assetCards, ...decisionCards];
const state = { deck: "all", query: "" };

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderTabs() {
  const tabs = document.querySelector("#deckTabs");
  tabs.innerHTML = Object.entries(deckMeta)
    .map(
      ([key, meta]) => `
        <button
          class="btn deck-tab ${state.deck === key ? "btn-primary" : "btn-light"}"
          type="button"
          data-deck="${key}"
          aria-pressed="${state.deck === key}"
        >
          ${escapeHTML(meta.label)}
        </button>
      `,
    )
    .join("");
}

function searchableText(card) {
  return [
    deckMeta[card.deck].label,
    card.number,
    card.title,
    card.group,
    card.purpose,
    card.when,
    ...(card.impact || []),
    ...(card.effects || []),
  ]
    .join(" ")
    .toLowerCase();
}

function getFilteredCards() {
  const query = state.query.trim().toLowerCase();
  return cards.filter((card) => {
    const matchDeck = state.deck === "all" || card.deck === state.deck;
    const matchQuery = !query || searchableText(card).includes(query);
    return matchDeck && matchQuery;
  });
}

function renderCards() {
  const container = document.querySelector("#cardDecks");
  const count = document.querySelector("#resultCount");
  const filtered = getFilteredCards();
  count.textContent = `目前顯示 ${filtered.length} 個圖鑑項目`;

  if (!filtered.length) {
    container.innerHTML = `<p class="empty-state">沒有符合的卡牌，請換個關鍵字或分類。</p>`;
    return;
  }

  const deckOrder = ["favor", "event", "opportunity", "asset", "decision"];
  container.innerHTML = deckOrder
    .map((deck) => {
      const deckCards = filtered.filter((card) => card.deck === deck);
      if (!deckCards.length) return "";
      return renderDeckSection(deck, deckCards);
    })
    .join("");
}

function renderDeckSection(deck, deckCards) {
  const meta = deckMeta[deck];
  return `
    <section class="deck-section" id="deck-${deck}">
      <div class="deck-heading d-flex flex-wrap align-items-end justify-content-between gap-2 mb-3">
        <div>
          <span class="deck-badge ${meta.className} mb-2">${escapeHTML(meta.label)}</span>
          <h3 class="h4 fw-black mb-1">${escapeHTML(meta.label)}</h3>
          <p class="text-secondary mb-0">${escapeHTML(meta.description || "")}</p>
        </div>
        <strong class="text-secondary">${escapeHTML(meta.countLabel || `${deckCards.length} 張`)}</strong>
      </div>
      <div class="row g-3 row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xxl-5">
        ${deckCards.map(renderCardCover).join("")}
      </div>
    </section>
  `;
}

function renderCardCover(card) {
  const meta = deckMeta[card.deck];
  const subtitle = card.deck === "favor" ? meta.label : `${meta.label} ${String(card.number).padStart(2, "0")}`;

  return `
    <div class="col">
      <button
        class="card card-cover text-start w-100"
        type="button"
        data-card-id="${escapeHTML(getCardId(card))}"
        data-deck="${escapeHTML(card.deck)}"
      >
        <img src="${escapeHTML(card.image)}" alt="${escapeHTML(card.title)}卡面" loading="lazy" />
        <div class="card-body">
          <div class="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-2">
            <span class="deck-badge ${meta.className}">${escapeHTML(subtitle)}</span>
          </div>
          <p class="card-cover-title">${escapeHTML(card.title)}</p>
        </div>
      </button>
    </div>
  `;
}

function sync() {
  renderTabs();
  renderCards();
}

function getCardId(card) {
  return `${card.deck}-${card.number}`;
}

function findCardById(id) {
  return cards.find((card) => getCardId(card) === id);
}

function showCardModal(card) {
  if (!card) return;
  const meta = deckMeta[card.deck];
  const subtitle = card.deck === "favor" ? meta.label : `${meta.label} ${String(card.number).padStart(2, "0")}`;
  const title = `${subtitle}｜${card.title}`;
  const impacts = (card.impact || [])
    .map((item) => `<span class="badge rounded-pill text-bg-light border">${escapeHTML(item)}</span>`)
    .join("");
  const effects = (card.effects || [])
    .map((item) => `<li>${escapeHTML(item)}</li>`)
    .join("");

  document.querySelector("#cardDetailDeck").textContent = `${meta.label} · ${card.group}`;
  document.querySelector("#cardDetailTitle").textContent = card.title;
  document.querySelector("#cardDetailImage").src = card.image;
  document.querySelector("#cardDetailImage").alt = `${card.title}卡面`;
  document.querySelector("#cardDetailImpacts").innerHTML = impacts;
  document.querySelector("#cardDetailPurpose").textContent = card.purpose;
  document.querySelector("#cardDetailWhen").textContent = card.when;
  document.querySelector("#cardDetailEffects").innerHTML = effects;

  const modalElement = document.querySelector("#cardDetailModal");
  if (window.bootstrap?.Modal) {
    window.bootstrap.Modal.getOrCreateInstance(modalElement).show();
    return;
  }

  modalElement.classList.add("show");
  modalElement.style.display = "block";
  modalElement.removeAttribute("aria-hidden");
  modalElement.setAttribute("aria-modal", "true");
}

function setupModalFallback() {
  const modalElement = document.querySelector("#cardDetailModal");
  modalElement.querySelectorAll("[data-bs-dismiss='modal']").forEach((button) => {
    button.addEventListener("click", () => {
      if (window.bootstrap?.Modal) return;
      modalElement.classList.remove("show");
      modalElement.style.display = "none";
      modalElement.setAttribute("aria-hidden", "true");
      modalElement.removeAttribute("aria-modal");
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  sync();
  setupModalFallback();

  document.querySelector("#cardSearch").addEventListener("input", (event) => {
    state.query = event.target.value;
    renderCards();
  });

  document.querySelector("#deckTabs").addEventListener("click", (event) => {
    const button = event.target.closest("button[data-deck]");
    if (!button) return;
    state.deck = button.dataset.deck;
    sync();
  });

  document.querySelector("#cardDecks").addEventListener("click", (event) => {
    const button = event.target.closest("[data-card-id]");
    if (!button) return;
    showCardModal(findCardById(button.dataset.cardId));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape" || window.bootstrap?.Modal) return;
    const modalElement = document.querySelector("#cardDetailModal");
    modalElement.classList.remove("show");
    modalElement.style.display = "none";
    modalElement.setAttribute("aria-hidden", "true");
  });
});
