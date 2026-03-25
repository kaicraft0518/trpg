/**
 * skills-config.js
 * 技能カテゴリの定義ファイル（6版・7版両対応）
 */

// ── 6版 ──────────────────────────────────────────
export const SKILL_CATEGORIES_6 = {
  '探索': ['目星','聞き耳','図書館','追跡','ナビゲート','写真術','隠す','隠れる'],
  '対人': ['説得','言いくるめ','信用','値切り','心理学','母国語','威圧','魅惑','尋問'],
  '戦闘': ['回避','こぶし','キック','頭突き','組み付き','投擲','拳銃','ライフル','ショットガン','サブマシンガン','マシンガン','刀剣','斧','鞭','チェーンソー','ドリル','手榴弾','弓','杖'],
  '知識': ['歴史','クトゥルフ神話','医学','法律','オカルト','人類学','考古学','天文学','生物学','地質学','物理学','化学','薬学','電子工学','コンピューター','経済学','博物学'],
  '行動': ['跳躍','水泳','登攀','忍び歩き','走る','乗馬','潜水'],
  '技術': ['機械修理','電気修理','操縦','鍵開け','爆発物','応急手当','製作','変装'],
  '芸術': ['芸術','他言語','催眠','精神分析','運転'],
};

export const CAT_ORDER_6 = ['探索','対人','戦闘','知識','行動','技術','芸術','その他'];

export const CAT_ICON_6 = {
  '探索': '🔍', '対人': '🗣️', '戦闘': '⚔️', '知識': '🧠',
  '行動': '🏃', '技術': '🔧', '芸術': '🎨', 'その他': '📦',
};

// ── 7版 ──────────────────────────────────────────
export const SKILL_CATEGORIES_7 = {
  '戦闘': [
    '回避',
    '近接戦闘',
    '投擲',
    '射撃',
  ],
  '探索': [
    '応急手当','鍵開け','手さばき','聞き耳','隠密',
    '精神分析','追跡','登攀','図書館','目星','鑑定',
  ],
  '行動': [
    '運転',
    '機械修理','重機械操作','乗馬','水泳','製作','操縦',
    '跳躍','電気修理','ナビゲート','変装',
  ],
  '交渉': [
    '言いくるめ','信用','説得',
    '母国語',
    '威圧','魅惑',
    '言語',
  ],
  '知識': [
    '医学','オカルト','クトゥルフ神話',
    '芸術',
    '経理','考古学','コンピューター',
    '科学',
    '心理学','人類学','電子工学','自然','法律','歴史',
    'サバイバル',
  ],
};

export const CAT_ORDER_7 = ['戦闘','探索','行動','交渉','知識','その他'];

export const CAT_ICON_7 = {
  '戦闘': '⚔️', '探索': '🔍', '行動': '🏃', '交渉': '🗣️',
  '知識': '🧠', 'その他': '📦',
};

// ── 版に応じた取得関数 ────────────────────────────
export function getSkillCategories(edition) {
  return edition === '7' ? SKILL_CATEGORIES_7 : SKILL_CATEGORIES_6;
}
export function getCatOrder(edition) {
  return edition === '7' ? CAT_ORDER_7 : CAT_ORDER_6;
}
export function getCatIcon(edition) {
  return edition === '7' ? CAT_ICON_7 : CAT_ICON_6;
}

/**
 * 技能名からカテゴリを返す
 * @param {string} name - 技能名
 * @param {string} edition - '6' | '7'
 */
export function getSkillCategory(name, edition = '6') {
  const cats = getSkillCategories(edition);
  for (const [cat, list] of Object.entries(cats)) {
    if (list.some(s => name === s || name.startsWith(s))) return cat;
  }
  return 'その他';
}

// 後方互換（edition未指定時は6版）
export const SKILL_CATEGORIES = SKILL_CATEGORIES_6;
export const CAT_ORDER = CAT_ORDER_6;
export const CAT_ICON = CAT_ICON_6;
