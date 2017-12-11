type chrome$LanguageCode = string;

type chrome$i18n = {
  getAcceptLanguages(callback: (Array<chrome$LanguageCode>) => void): void,
  getMessage(messageName: string, ...substitutions?: Array<*>): ?string,
  getUILanguage(): string,
  detectLanguage(text: string, callback: (result: {
    isReliable: boolean,
    languages: {
      language: chrome$LanguageCode,
      percentage: number,
    },
  }) => void): void,
};
