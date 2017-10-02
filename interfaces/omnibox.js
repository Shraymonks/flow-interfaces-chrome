type chrome$OmniboxEvent<T> = {
  ...chrome$Event,
  addListener: T => void,
};

type chrome$Suggestion = {
  description: string,
};

type chrome$SuggestResult = {
  ...chrome$Suggestion,
  content: string,
};

type chrome$OnInputEnteredDisposition =
  | 'currentTab'
  | 'newForegroundTab'
  | 'newBackgroundTab';

type chrome$omnibox = {
  onInputChanged: chrome$OmniboxEvent<
    (
      text: string,
      suggest: (suggestions: Array<chrome$SuggestResult>) => void,
    ) => void,
  >,
  onInputStarted: chrome$OmniboxEvent<() => void>,
  onInputCancelled: chrome$OmniboxEvent<() => void>,
  onInputEntered: chrome$OmniboxEvent<
    (text: string, disposition: chrome$OnInputEnteredDisposition) => void,
  >,
  setDefaultSuggestion: (suggestion: chrome$Suggestion) => void,
};
