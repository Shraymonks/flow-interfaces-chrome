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
type chrome$Scope = 'regular' | 'incognito_session_only';

class chrome$contentSettingsTemplate<contentSettingsType> {
  clear: (details: {
    scope?: chrome$Scope,
  }, callback?: () => void) => void;

  get: (details: {
    primaryUrl: string,
    secondaryUrl?: string,
    resourceIdentifier?: chrome$ResourceIdentifier,
    incognito?: boolean,
  }, callback: (details: { setting: contentSettingsType }) => void) => void;

  set: (details: {
    primaryPattern: string,
    secondaryPattern?: string,
    resourceIdentifier?: chrome$ResourceIdentifier,
    setting: contentSettingsType,
    scope?: any,
  }, callback?: () => void) => void;

  getResourceIdentifiers: (callback: (resourceIdentifiers?: Array<chrome$ResourceIdentifier>) => void) => void;
};

type cookiesContentSettingType = { cookies: chrome$contentSettingsTemplate<chrome$CookiesContentSetting> };
type imagesContentSettingType = { images: chrome$contentSettingsTemplate<chrome$ImagesContentSetting> };
type javascriptContentSettingType = { javascript: chrome$contentSettingsTemplate<chrome$JavascriptContentSetting> };
type locationContentSettingType = { location: chrome$contentSettingsTemplate<chrome$LocationContentSetting> };
type pluginsContentSettingType = { plugins: chrome$contentSettingsTemplate<chrome$PluginsContentSetting> };
type popupsContentSettingType = { popups: chrome$contentSettingsTemplate<chrome$PopupsContentSetting> };
type notificationsContentSettingType = { notifications: chrome$contentSettingsTemplate<chrome$NotificationsContentSetting> };
type fullscreenContentSettingType = { fullscreen: chrome$contentSettingsTemplate<chrome$FullscreenContentSetting> };
type mouselockContentSettingType = { mouselock: chrome$contentSettingsTemplate<chrome$MouselockContentSetting> };
type microphoneContentSettingType = { microphone: chrome$contentSettingsTemplate<chrome$MicrophoneContentSetting> };
type cameraContentSettingType = { camera: chrome$contentSettingsTemplate<chrome$CameraContentSetting> };
type unsandboxedPluginsContentSettingType = { unsandboxedPlugins: chrome$contentSettingsTemplate<chrome$PpapiBrokerContentSetting> };
type automaticDownloadsContentSettingType = { automaticDownloads: chrome$contentSettingsTemplate<chrome$MultipleAutomaticDownloadsContentSetting> };

type chrome$contentSettings = 
  cookiesContentSettingType &
  imagesContentSettingType &
  javascriptContentSettingType &
  locationContentSettingType &
  pluginsContentSettingType &
  popupsContentSettingType &
  notificationsContentSettingType &
  fullscreenContentSettingType &
  mouselockContentSettingType &
  microphoneContentSettingType &
  cameraContentSettingType &
  unsandboxedPluginsContentSettingType &
  automaticDownloadsContentSettingType;