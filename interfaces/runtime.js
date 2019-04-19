type chrome$Port = {
  disconnect: Function,
  name: string,
  onDisconnect: Object,
  onMessage: Object,
  postMessage: Function,
  sender?: chrome$MessageSender
};

type chrome$MessageSender = {
  frameId?: number,
  id?: string,
  tab?: chrome$Tab,
  tlsChannelId: string,
  url?: string
};

type chrome$PlatformOs = 'android' | 'cros' | 'linux' | 'mac' | 'openbsd' | 'win';

type chrome$PlatformArch = 'arm' | 'x86-32' | 'x86-64';

type chrome$PlatformNaclArch = 'arm' | 'x86-32' | 'x86-64';

type chrome$PlatformInfo = {
  arch: chrome$PlatformArch,
  nacl_arch: chrome$PlatformNaclArch,
  os: chrome$PlatformOs
};

type chrome$RequestUpdateCheckStatus = 'no_update' | 'throttled' | 'update_available';

type chrome$OnInstalledReason = 'chrome_update' | 'install' | 'shared_module_update' | 'update';

type chrome$OnRestartRequiredReason = 'app_update' | 'os_update' | 'periodic';

type chrome$runtime = {
  id: string,
  lastError: {message?: string},

  connect(extensionId?: string, connectInfo?: {
    includeTlsChannelId?: boolean,
    name?: string
  }): chrome$Port,
  connectNative(application: string): chrome$Port,
  getBackgroundPage(callback: (backgroundPage: any) => void): void,
  getManifest(): Object,
  getPackageDirectoryEntry(callback: (directoryEntry: Object) => void): void,
  getPlatformInfo(callback: (platformInfo: chrome$PlatformInfo) => void): void,
  getURL(path: string): string,
  openOptionsPage(callback?: () => void): void,
  reload(): void,
  requestUpdateCheck(callback: (status: chrome$RequestUpdateCheckStatus, details?: {
    version: string
  }) => void): void,
  restart(): void,
  restartAfterDelay(seconds: number, callback?: () => void): void,
  sendMessage: (
    ((
      extensionId: string,
      message: any,
      options?: {includeTlsChannelId?: boolean},
      responseCallback?: (response: any) => void
    ) => void) &
    ((
      message: any,
      options?: {includeTlsChannelId?: boolean},
      responseCallback?: (response: any) => void
    ) => void)
  ),
  sendNativeMessage(
    application: string,
    message: Object,
    responseCallback?: (response: any) => void
  ): void,
  setUninstallURL(url: string, callback?: () => void): void,

  onBrowserUpdateAvailable: chrome$Event,
  onConnect: {
    ...chrome$Event,
    addListener(callback: (port: chrome$Port) => void): void
  },
  onConnectExternal: {
    ...chrome$Event,
    addListener(ccallback: (port: chrome$Port) => void): void
  },
  onInstalled: {
    ...chrome$Event,
    addListener(callback: (details: {
      id?: string,
      previousVersion?: string,
      reason: chrome$OnInstalledReason
    }) => void): void
  },
  onMessage: {
    ...chrome$Event,
    addListener(callback: (
      ((
        message: any,
        sender: chrome$MessageSender,
        sendResponse: () => void
      ) => true | void) |
      ((
        sender: chrome$MessageSender,
        sendResponse: () => void
      ) => true | void)
    )): void
  },
  onMessageExternal: {
    ...chrome$Event,
    addListener(callback: (
      ((
        message: any,
        sender: chrome$MessageSender,
        sendResponse: () => void
      ) => true | void) |
      ((
        sender: chrome$MessageSender,
        sendResponse: () => void
      ) => true | void)
    )): void
  },
  onRestartRequired: {
    ...chrome$Event,
    addListener(callback: (reason: chrome$OnRestartRequiredReason) => void): void
  },
  onStartup: chrome$Event,
  onSuspend: chrome$Event,
  onSuspendCanceled: chrome$Event,
  onUpdateAvailable: {
    ...chrome$Event,
    addListener(callback: (details: {version: string}) => void): void
  }
};
