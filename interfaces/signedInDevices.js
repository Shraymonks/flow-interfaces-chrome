type chrome$DeviceInfo = {
  chromeVersion: string,
  id: string,
  name: string,
  os: 'android' | 'chrome_os' | 'ios' | 'linux' | 'mac' | 'win' | 'unknown',
  type: 'desktop_or_laptop' | 'phone' | 'tablet' | 'unknown'
};

type chrome$signedInDevices = {
  get: (
    ((isLocal: boolean, callback: (devices: Array<chrome$DeviceInfo>) => void) => void) &
    ((callback: (devices: Array<chrome$DeviceInfo>) => void) => void)
  ),

  onDeviceInfoChange: chrome$Event & {
    addListener(callback: (devices: Array<chrome$Event>) => void): void
  }
}
