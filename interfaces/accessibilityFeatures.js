type $accessibilityFeatures$Method = {
  clear(
    details: {
      scope?: chrome$ChromeSettingScope
    },
    callback?: () => void
  ): void,
  get(
    details: {incognito?: boolean},
    callback?: (details: {
      incognitoSpecific?: boolean,
      levelOfControl: chrome$LevelOfControl,
      value: any
    }) => void
  ): void,
  set(
    details: {
      scope?: chrome$ChromeSettingScope,
      value: any
    },
    callback?: () => void
  ): void,
};

type chrome$accessibilityFeatures = {
  animationPolicy: $accessibilityFeatures$Method,
  autoclick: $accessibilityFeatures$Method,
  highContrast: $accessibilityFeatures$Method,
  largeCursor: $accessibilityFeatures$Method,
  screenMagnifier: $accessibilityFeatures$Method,
  spokenFeedback: $accessibilityFeatures$Method,
  stickyKeys: $accessibilityFeatures$Method,
  virtualKeyboard: $accessibilityFeatures$Method
};
