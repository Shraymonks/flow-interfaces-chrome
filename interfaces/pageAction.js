type chrome$ImageDataType = ImageData;

type chrome$pageAction = {
  getPopup(details: {tabId: number}, callback: (result: string) => void): void,
  getTitle(details: {tabId: number}, callback: (result: string) => void): void,
  hide(tabId: number): void,
  setIcon(details: {
    imageData?: chrome$ImageDataType | {[size: string]: chrome$ImageDataType},
    path?: string | {[size: string]: string},
    tabId: number
  }, callback?: () => void): void,
  setPopup(details: {
    popup: string,
    tabId: number
  }): void,
  setTitle(details: {
    tabId: number,
    title: string
  }): void,
  show(tabId: number): void,

  onClicked: chrome$Event & {
    addListener(callback: (tab: chrome$Tab) => void): void
  }
};
