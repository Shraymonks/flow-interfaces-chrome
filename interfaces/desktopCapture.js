type DesktopCaptureSourceType = 'screen' | 'tab' | 'window';

type chrome$desktopCapture = {
  cancelChooseDesktopMedia(desktopMediaRequestId: number): void,
  chooseDesktopMedia: (
    ((sources: Array<DesktopCaptureSourceType>, targetTab: chrome$Tab, callback: (streamId: string) => void) => void) &
    ((sources: Array<DesktopCaptureSourceType>, callback: (streamId: string) => void) => void)
  )
};
