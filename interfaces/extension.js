type chrome$ViewType = 'tab' | 'popup';

type chrome$extension = {
  inIncognitoContext: boolean,
  lastError: ?{message: string},

  getBackgroundPage(): ?any,
  getURL(path: string): string,
  getViews(fetchProperties?: {
    tabId?: number,
    type?: chrome$ViewType,
    windowId?: number,
  }): Array<any>,
  isAllowedFileSchemeAccess(callback: (isAllowedAccess: boolean) => void): void,
  isAllowedIncognitoAccess(callback: (isAllowedAccess: boolean) => void): void,
  setUpdateUrlData(data: string): void,
};
