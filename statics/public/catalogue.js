const cataloguePlace = [
  '品川',
  '代官山',
  '涉谷',
  '銀座',
  '上野',
  '東京',
  '東京·地鐵',
  '横浜·日本大通',
  '横浜·山手',
  '横浜·鎌倉'
]

const catalogueFrames = [
    "absorb",
    "catch",
    "enjoy",
    "moment",
    "appreciating"
]

const catalogue = {
  "absorb": ["20171027_152633",'20171027_185310','20171027_190706','20171027_215814','20171028_115523','20171028_115831','20171028_115641','20171030_121348','20171031_101111','20171031_151138','20171031_153504','20171031_154517'],
  "catch": ["20171027_163910",'20171028_115310','20171028_185640','20171028_124749','20171028_120935','20171028_120309','20171030_120316','20171030_134439','20171030_194840','20171030_150547','20171031_141606','WP_20171025_14_29_18_Pro'],
  "enjoy": ['20171030_112025','20171029_122258','20171030_112747','20171029_010620','20171030_165847','20171031_135512','20171031_140315','WP_20171025_13_44_01_Pro'],
  "moment": ['20171031_103451','20171028_114952','20171030_114436','20171030_165440','20171030_161126','20171031_141851'],
  "appreciating": ['20171028_120056','20171030_122810','20171030_165526','20171030_162101','20171031_103743','WP_20171025_14_54_48_Pro', 'WP_20171025_14_14_48_Pro','20171031_160955','20171031_155541']
}

const catalogueData = {
  '20171027_152633': {
    src: 'photos/20171027_152633',
    photo: '20171027_152633',
    date: '1027',
    rotate: true,
    place: cataloguePlace[6]
  },
  '20171027_163910': {
    src: 'photos/20171027_163910',
    photo: '20171027_163910',
    date: '1027',
    rotate: false,
    place: cataloguePlace[6]
  },
  '20171029_122258': {
    src: 'photos/20171029_122258',
    photo: '20171029_122258',
    date: '1029',
    rotate: false,
    place: cataloguePlace[9]
  },
  '20171028_114952': {
    src: 'photos/20171028_114952',
    photo: '20171028_114952',
    date: '1028',
    rotate: false,
    place: cataloguePlace[5]
  },
  '20171028_120056': {
    src: 'photos/20171028_120056',
    photo: '20171028_120056',
    date: '1028',
    rotate: true,
    place: cataloguePlace[5]
  },
  '20171027_190706': {
    src: 'photos/20171027_190706',
    photo: '20171027_190706',
    date: '1027',
    rotate: false,
    place: cataloguePlace[4]
  },
  '20171027_185310': {
    src: 'photos/20171027_185310',
    photo: '20171027_185310',
    date: '1027',
    rotate: false,
    place: cataloguePlace[4]
  },
  '20171027_215814': {
    src: 'photos/20171027_215814',
    photo: '20171027_215814',
    date: '1027',
    rotate: false,
    place: cataloguePlace[6]
  },
  '20171028_115310': {
    src: 'photos/20171028_115310',
    photo: '20171028_115310',
    date: '1028',
    rotate: false,
    place: cataloguePlace[5]
  },
  '20171028_115523': {
    src: 'photos/20171028_115523',
    photo: '20171028_115523',
    date: '1028',
    rotate: false,
    place: cataloguePlace[5]
  },
  '20171028_115641': {
    src: 'photos/20171028_115641',
    photo: '20171028_115641',
    date: '1028',
    rotate: true,
    place: cataloguePlace[5]
  },
  '20171028_115831': {
    src: 'photos/20171028_115831',
    photo: '20171028_115831',
    date: '1028',
    rotate: true,
    place: cataloguePlace[5]
  },
  '20171028_120309': {
    src: 'photos/20171028_120309',
    photo: '20171028_120309',
    date: '1028',
    rotate: false,
    place: cataloguePlace[5]
  },
  '20171028_120935': {
    src: 'photos/20171028_120935',
    photo: '20171028_120935',
    date: '1028',
    rotate: false,
    place: cataloguePlace[5]
  },
  '20171028_124749': {
    src: 'photos/20171028_124749',
    photo: '20171028_124749',
    date: '1028',
    rotate: false,
    place: cataloguePlace[5]
  },
  '20171028_185640': {
    src: 'photos/20171028_185640',
    photo: '20171028_185640',
    date: '1028',
    rotate: true,
    place: cataloguePlace[7]
  },
  '20171029_010620': {
    src: 'photos/20171029_010620',
    photo: '20171029_010620',
    date: '1029',
    rotate: false,
    place: cataloguePlace[6]
  },
  '20171030_112025': {
    src: 'photos/20171030_112025',
    photo: '20171030_112025',
    date: '1030',
    rotate: true,
    place: cataloguePlace[8]
  },
  '20171030_112747': {
    src: 'photos/20171030_112747',
    photo: '20171030_112747',
    date: '1030',
    rotate: false,
    place: cataloguePlace[8]
  },
  '20171030_114436': {
    src: 'photos/20171030_114436',
    photo: '20171030_114436',
    date: '1030',
    rotate: false,
    place: cataloguePlace[8]
  },
  '20171030_120316': {
    src: 'photos/20171030_120316',
    photo: '20171030_120316',
    date: '1030',
    rotate: false,
    place: cataloguePlace[8]
  },
  '20171030_121348': {
    src: 'photos/20171030_121348',
    photo: '20171030_121348',
    date: '1030',
    rotate: true,
    place: cataloguePlace[8]
  },
  '20171030_122810': {
    src: 'photos/20171030_122810',
    photo: '20171030_122810',
    date: '1030',
    rotate: false,
    place: cataloguePlace[8]
  },
  '20171030_134439': {
    src: 'photos/20171030_134439',
    photo: '20171030_134439',
    date: '1030',
    rotate: false,
    place: cataloguePlace[8]
  },
  '20171030_150547': {
    src: 'photos/20171030_150547',
    photo: '20171030_150547',
    date: '1030',
    rotate: true,
    place: cataloguePlace[7]
  },
  '20171030_161126': {
    src: 'photos/20171030_161126',
    photo: '20171030_161126',
    date: '1030',
    rotate: false,
    place: cataloguePlace[7]
  },
  '20171030_162101': {
    src: 'photos/20171030_162101',
    photo: '20171030_162101',
    date: '1030',
    rotate: false,
    place: cataloguePlace[7]
  },
  '20171030_165440': {
    src: 'photos/20171030_165440',
    photo: '20171030_165440',
    date: '1030',
    rotate: false,
    place: cataloguePlace[7]
  },
  '20171030_165526': {
    src: 'photos/20171030_165526',
    photo: '20171030_165526',
    date: '1030',
    rotate: false,
    place: cataloguePlace[7]
  },
  '20171030_165847': {
    src: 'photos/20171030_165847',
    photo: '20171030_165847',
    date: '1030',
    rotate: false,
    place: cataloguePlace[7]
  },
  '20171030_194840': {
    src: 'photos/20171030_194840',
    photo: '20171030_194840',
    date: '1030',
    rotate: true,
    place: cataloguePlace[9]
  },
  '20171031_101111': {
    src: 'photos/20171031_101111',
    photo: '20171031_101111',
    date: '1031',
    rotate: false,
    place: cataloguePlace[0]
  },
  '20171031_103451': {
    src: 'photos/20171031_103451',
    photo: '20171031_103451',
    date: '1031',
    rotate: true,
    place: cataloguePlace[0]
  },
  '20171031_103743': {
    src: 'photos/20171031_103743',
    photo: '20171031_103743',
    date: '1031',
    rotate: false,
    place: cataloguePlace[0]
  },
  '20171031_135512': {
    src: 'photos/20171031_135512',
    photo: '20171031_135512',
    date: '1031',
    rotate: true,
    place: cataloguePlace[1]
  },
  '20171031_140315': {
    src: 'photos/20171031_140315',
    photo: '20171031_140315',
    date: '1031',
    rotate: false,
    place: cataloguePlace[1]
  },
  '20171031_141606': {
    src: 'photos/20171031_141606',
    photo: '20171031_141606',
    date: '1031',
    rotate: true,
    place: cataloguePlace[1]
  },
  '20171031_141851': {
    src: 'photos/20171031_141851',
    photo: '20171031_141851',
    date: '1031',
    rotate: false,
    place: cataloguePlace[1]
  },
  '20171031_151138': {
    src: 'photos/20171031_151138',
    photo: '20171031_151138',
    date: '1031',
    rotate: true,
    place: cataloguePlace[1]
  },
  '20171031_153504': {
    src: 'photos/20171031_153504',
    photo: '20171031_153504',
    date: '1031',
    rotate: false,
    place: cataloguePlace[1]
  },
  '20171031_154517': {
    src: 'photos/20171031_154517',
    photo: '20171031_154517',
    date: '1031',
    rotate: false,
    place: cataloguePlace[2]
  },
  '20171031_155541': {
    src: 'photos/20171031_155541',
    photo: '20171031_155541',
    date: '1031',
    rotate: false,
    place: cataloguePlace[2]
  },
  '20171031_160955': {
    src: 'photos/20171031_160955',
    photo: '20171031_160955',
    date: '1031',
    rotate: false,
    place: cataloguePlace[2]
  },
  'WP_20171025_13_44_01_Pro': {
    src: 'photos/WP_20171025_13_44_01_Pro',
    photo: 'WP_20171025_13_44_01_Pro',
    date: '1025',
    rotate: true,
    place: cataloguePlace[3]
  },
  'WP_20171025_14_14_48_Pro': {
    src: 'photos/WP_20171025_14_14_48_Pro',
    photo: 'WP_20171025_14_14_48_Pro',
    date: '1025',
    rotate: true,
    place: cataloguePlace[3]
  },
  'WP_20171025_14_29_18_Pro': {
    src: 'photos/WP_20171025_14_29_18_Pro',
    photo: 'WP_20171025_14_29_18_Pro',
    date: '1025',
    rotate: false,
    place: cataloguePlace[3]
  },
  'WP_20171025_14_54_48_Pro': {
    src: 'photos/WP_20171025_14_54_48_Pro',
    photo: 'WP_20171025_14_54_48_Pro',
    date: '1025',
    rotate: false,
    place: cataloguePlace[3]
  }
}
