type chrome$ChromeSettingScope = (
  'regular' |
  'regular_only' |
  'incognito_persistent' |
  'incognito_session_only'
);

type chrome$LevelOfControl = (
  'not_controllable' |
  'controlled_by_other_extensions' |
  'controllable_by_this_extension' |
  'controlled_by_this_extension'
);

type chrome$ChromeSetting = {
  clear(details: {
    scope?: chrome$ChromeSettingScope
  }, callback?: () => void): void,
  get(
    details: {incognito?: boolean},
    callback: (details: {
      incognitoSpecific?: boolean,
      levelOfControl: chrome$LevelOfControl,
      value: any
    }
  ) => void): void,
  set(details: {
    scope?: chrome$ChromeSettingScope,
    value: any
  }, callback?: () => void): void,

  onChange: chrome$Event & {
    addListener(callback: (details: {
      incognitoSpecific?: boolean,
      levelOfControl: chrome$LevelOfControl,
      value: any
    }) => void): void
  }
};
