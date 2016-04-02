type chrome$instanceID = {
  deleteID(callback: () => void): void,
  deleteToken(
    deleteTokenParams: {
      authorizedEntitiy: string,
      scope: string
    },
    callback: () => void
  ): void,
  getCreationTime(callback: (creationTime: number) => void): void,
  getID(callback: (instanceID: string) => void): void,
  getToken(
    getTokenParams: {
      authorizedEntitiy: string,
      options?: {[key: string]: string},
      scope: string
    },
    callback: (token: string) => void
  ): void,

  onTokenRefresh: chrome$Event
}
