type chrome$LanguageCode = string;

type chrome$DetectedLanguage = {
  language: chrome$LanguageCode,
  percentage: number,
};

type chrome$LanguageDetectionResult = {
  isReliable: boolean,
  languages: Array<chrome$DetectedLanguage>,
};

type chrome$i18n = {
  getAcceptLanguages(callback: (languages: Array<chrome$LanguageCode>) => void): void,
  getMessage: (messageName: string, substitutions?: string | Array<string>) => string,
  getUILanguage(): string,
  detectLanguage(text: string, callback: (result: chrome$LanguageDetectionResult) => void): void,
};
