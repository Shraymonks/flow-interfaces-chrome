type chrome$Debuggee = {
  extensionId?: string,
  tabId?: number,
  targetId?: string
};

type chrome$TargetInfoType = 'background_page' | 'other' | 'page' | 'worker';

type chrome$DetachReason = 'canceled_by_user' | 'replaced_with_devtools' | 'target_closed';

type chrome$TargetInfo = {
  attached: boolean,
  extensionId?: string,
  faviconUrl?: string,
  id: string,
  tabId?: number,
  title: string,
  type: chrome$TargetInfoType,
  url: string
};

type chrome$debugger = {
  attach(target: chrome$Debuggee, requiredVersion: string, callback?: () => void): void,
  detach(target: chrome$Debuggee, callback?: () => void): void,
  sendCommand(target: chrome$Debuggee, method: string, commandParams?: Object, callback?: (result: Object) => void): void,
  getTargets(callback: (result: Array<chrome$TargetInfo>) => void): void,

  onDetach: {
    ...chrome$Event,
    addListener(callback: (source: chrome$Debuggee, reason: chrome$DetachReason) => void): void
  },
  onEvent: {
    ...chrome$Event,
    addListener(callback: (source: chrome$Debuggee, method: string, params?: Object) => void): void
  }
};
