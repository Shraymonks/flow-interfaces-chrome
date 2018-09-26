type chrome$FontName = {
  displayName: string,
  fontId: string
};

type chrome$ScriptCode = 'Afak' | 'Arab' | 'Armi' | 'Armn' | 'Avst' | 'Bali' | 'Bamu' | 'Bass' | 'Batk' | 'Beng' | 'Blis' | 'Bopo' | 'Brah' | 'Brai' | 'Bugi' | 'Buhd' | 'Cakm' | 'Cans' | 'Cari' | 'Cham' | 'Cher' | 'Cirt' | 'Copt' | 'Cprt' | 'Cyrl' | 'Cyrs' | 'Deva' | 'Dsrt' | 'Dupl' | 'Egyd' | 'Egyh' | 'Egyp' | 'Elba' | 'Ethi' | 'Geor' | 'Geok' | 'Glag' | 'Goth' | 'Gran' | 'Grek' | 'Gujr' | 'Guru' | 'Hang' | 'Hani' | 'Hano' | 'Hans' | 'Hant' | 'Hebr' | 'Hluw' | 'Hmng' | 'Hung' | 'Inds' | 'Ital' | 'Java' | 'Jpan' | 'Jurc' | 'Kali' | 'Khar' | 'Khmr' | 'Khoj' | 'Knda' | 'Kpel' | 'Kthi' | 'Lana' | 'Laoo' | 'Latf' | 'Latg' | 'Latn' | 'Lepc' | 'Limb' | 'Lina' | 'Linb' | 'Lisu' | 'Loma' | 'Lyci' | 'Lydi' | 'Mand' | 'Mani' | 'Maya' | 'Mend' | 'Merc' | 'Mero' | 'Mlym' | 'Moon' | 'Mong' | 'Mroo' | 'Mtei' | 'Mymr' | 'Narb' | 'Nbat' | 'Nkgb' | 'Nkoo' | 'Nshu' | 'Ogam' | 'Olck' | 'Orkh' | 'Orya' | 'Osma' | 'Palm' | 'Perm' | 'Phag' | 'Phli' | 'Phlp' | 'Phlv' | 'Phnx' | 'Plrd' | 'Prti' | 'Rjng' | 'Roro' | 'Runr' | 'Samr' | 'Sara' | 'Sarb' | 'Saur' | 'Sgnw' | 'Shaw' | 'Shrd' | 'Sind' | 'Sinh' | 'Sora' | 'Sund' | 'Sylo' | 'Syrc' | 'Syre' | 'Syrj' | 'Syrn' | 'Tagb' | 'Takr' | 'Tale' | 'Talu' | 'Taml' | 'Tang' | 'Tavt' | 'Telu' | 'Teng' | 'Tfng' | 'Tglg' | 'Thaa' | 'Thai' | 'Tibt' | 'Tirh' | 'Ugar' | 'Vaii' | 'Visp' | 'Wara' | 'Wole' | 'Xpeo' | 'Xsux' | 'Yiii' | 'Zmth' | 'Zsym' | 'Zyyy';

type chrome$GenericFamily = 'cursive' | 'fantasy' | 'fixed' | 'sansserif' | 'serif' | 'standard';

type chrome$fontSettings = {
  clearDefaultFixedFontSize(details?: Object, callback?: () => void): void,
  clearDefaultFontSize(details?: Object, callback?: () => void): void,
  clearFont(details: {
    genericFamily: chrome$GenericFamily,
    script?: chrome$ScriptCode
  }, callback?: () => void): void,
  clearMinimumFontSize(details?: Object, callback?: () => void): void,
  getDefaultFixedFontSize(details?: Object, callback?: (details: {
    levelOfControl: chrome$LevelOfControl,
    pixelSize: number
  }) => void): void,
  getDefaultFontSize(details?: Object, callback?: (details: {
    levelOfControl: chrome$LevelOfControl,
    pixelSize: number
  }) => void): void,
  getFont(details: {
    genericFamily: chrome$GenericFamily,
    script?: chrome$ScriptCode
  }, callback?: (details: {
    fontId: string,
    levelOfControl: chrome$LevelOfControl
  }) => void): void,
  getFontList(callback: (results: Array<chrome$FontName>) => void): void,
  getMinimumFontSize(details?: Object, callback?: (details: {
    levelOfControl: chrome$LevelOfControl,
    pixelSize: number
  }) => void): void,
  setDefaultFixedFontSize(details: {pixelSize: number}, callback?: () => void): void,
  setDefaultFontSize(details: {pixelSize: number}, callback?: () => void): void,
  setFont(details: {
    fontId: string,
    genericFamily: chrome$GenericFamily,
    script?: chrome$ScriptCode
  }, callback?: () => void): void,
  setMinimumFontSize(details: {pixelSize: number}, callback?: () => void): void,

  onDefaultFixedFontSizeChanged: {
    ...chrome$Event,
    addListener(callback: (details: {
      levelOfControl: chrome$LevelOfControl,
      pixelSize: number
    }) => void): void
  },
  onDefaultFontSizeChanged: {
    ...chrome$Event,
    addListener(callback: (details: {
      levelOfControl: chrome$LevelOfControl,
      pixelSize: number
    }) => void): void
  },
  onFontChanged: {
    ...chrome$Event,
    addListener(callback: (details: {
      fontId: string,
      genericFamily: chrome$GenericFamily,
      levelOfControl: chrome$LevelOfControl,
      script?: chrome$ScriptCode
    }) => void): void
  },
  onMinimumFontSizeChanged: {
    ...chrome$Event,
    addListener(callback: (details: {
      levelOfControl: chrome$LevelOfControl,
      pixelSize: number
    }) => void): void
  }
};
