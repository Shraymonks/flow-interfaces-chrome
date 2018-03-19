type chrome$AccountInfo = string;

type chrome$identity = {
  getAccounts(callback: (accounts: Array<chrome$AccountInfo>) => void): void,
  getAuthToken(details: {
    interactive?: boolean,
    account?: chrome$AccountInfo,
    scopes?: Array<string>
  }, callback?: (token: ?string) => void): void,
  getProfileUserInfo(callback: (userInfo: { email: ?string, id: ?string }) => void): void,
  removeCachedAuthToken(details: {
    token: string
  }, callback?: () => void): void,
  launchWebAuthFlow(details: {
    url: string,
    interactive?: boolean
  }, callback: (responseUrl: ?string) => void): void,
  getRedirectURL(path?: string): string,
  onSignInChanged: chrome$Event & {
    addListener(callback: (account: chrome$AccountInfo, signedIn: boolean) => void): void
  }
};
