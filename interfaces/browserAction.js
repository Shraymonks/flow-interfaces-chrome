type chrome$ColorArray = Array<number>;
type chrome$ImageDataType = ImageData;

type chrome$browserAction  = {
  disable(tabId?: number): void,
  enable(tabId?: number): void,
  getBadgeBackgroundColor(details: {tabId?: number}, callback: (result: chrome$ColorArray) => void): void,
  getBadgeText(details: {tabId?: number}, callback: (result: string) => void): void,
  getPopup(details: {tabId?: number}, callback: (result: string) => void): void,
  getTitle(details: {tabId?: number}, callback: (result: string) => void): void,
  setBadgeBackgroundColor(details: {color: string | chrome$ColorArray, tabId?: number}): void,
  setBadgeText(details: {tabId?: number, text: string}): void,
  setIcon(details: {
    imageData?: chrome$ImageDataType | {[key: string]: chrome$ImageDataType},
    path?: string | {[key: string]: string},
    tabId?: number
  }, callback?: () => void): void,
  setPopup(details: {popup: string, tabId?: number}): void,
  setTitle(details: {tabId?: number, title: string}): void,

  onClicked: {
    ...chrome$Event,
    addListener(callback: (tab: chrome$Tab) => void): void
  }
};
