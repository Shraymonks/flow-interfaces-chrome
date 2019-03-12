type chrome$Scope = 'regular' | 'incognito_session_only';
type chrome$CookiesContentSetting = 'allow' | 'block' | 'session_only';
type chrome$ImagesContentSetting = 'allow' | 'block';
type chrome$JavascriptContentSetting = 'allow' | 'block';
type chrome$LocationContentSetting = 'allow' | 'block' | 'ask';
type chrome$PluginsContentSetting = 'allow' | 'block' | 'detect_important_content';
type chrome$PopupsContentSetting = 'allow' | 'block';
type chrome$NotificationsContentSetting = 'allow' | 'block' | 'ask';
type chrome$FullscreenContentSetting = 'allow';
type chrome$MouselockContentSetting = 'allow';
type chrome$MicrophoneContentSetting = 'allow' | 'block' | 'ask';
type chrome$CameraContentSetting = 'allow' | 'block' | 'ask';
type chrome$PpapiBrokerContentSetting = 'allow' | 'block' | 'ask';
type chrome$MultipleAutomaticDownloadsContentSetting = 'allow' | 'block' | 'ask';

type chrome$ResourceIdentifier = {
  id: string,
  description?: string,
};

type chrome$contentSettings = {
  clear(details: {
    scope?: chrome$Scope,
  }, callback?: () => void): void,
  get(details: {
    primaryUrl: string,
    secondaryUrl?: string,
    resourceIdentifier?: chrome$ResourceIdentifier,
    incognito?: boolean,
  }, callback: (details: { setting: any }) => void): void,
  set(details: {
    primaryPattern: string,
    secondaryPattern?: string,
    resourceIdentifier?: chrome$ResourceIdentifier,
    setting: any,
    scope?: chrome$Scope,
  }, callback?: () => void): void,
  getResourceIdentifiers(callback: (resourceIdentifiers?: Array<chrome$ResourceIdentifier>) => void): void,
};
