type chrome$NetworkInfo = {
  BSSID?: string,
  GUID?: string,
  HexSSID?: string,
  SSID?: string,
  Security?: 'None' | 'WEB-PSK' | 'WPA-EAP' | 'WPA-PSK',
  Type: 'WiFi'
};

type $networking$AuthResult = 'failed' | 'rejected' | 'succeeded' | 'unhandled';

type chrome$networking = {
  config: {
    finishAuthentication(GUID: string, result: $networking$AuthResult, callback?: () => void): void,
    setNetworkFilter(networks: Array<chrome$NetworkInfo>, callback: () => void): void,

    onCaptivePortalDetected: chrome$Event & {
      addListener(callback: (networkInfo: chrome$NetworkInfo) => void): void
    }
  }
};
