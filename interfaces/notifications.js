type chrome$TemplateType = 'basic' | 'image' | 'list' | 'progress';

type chrome$PermissionLevel = 'denied' | 'granted';

type chrome$NotificationButton = {
  iconUrl?: string,
  title: string,
};

type chrome$NotificationItem = {
  message: string,
  title: string,
};

type chrome$NotificationOptions = {
  appIconMaskUrl?: string,
  buttons?: Array<chrome$NotificationButton>,
  contextMessage?: string,
  eventTime?: number,
  iconUrl?: string,
  imageUrl?: string,
  isClickable?: boolean,
  items?: Array<chrome$NotificationItem>,
  message?: string,
  priority?: number,
  progress?: number,
  requireInteraction?: boolean,
  title?: string,
  type?: chrome$TemplateType,
};

type chrome$notifications = {
  clear(notificationId: string, callback?: (wasCleared: boolean) => void): void,
  create(
    notificationIdOrOptions: string | chrome$NotificationOptions,
    optionsOrCallback?: chrome$NotificationOptions | (notificationId: string) => void,
    callback?: (notificationId: string) => void
  ): void,
  getAll(callback: (notifications: Object) => void): void,
  getPermissionLevel(callback: (level: chrome$PermissionLevel) => void): void,
  update(notificationId: string, options: chrome$NotificationOptions, callback?: (wasUpdated: boolean) => void): void,

  onButtonClicked: chrome$Event & {
    addListener(callback: (notificationId: string, buttonIndex: number) => void): void,
  },
  onClicked: chrome$Event & {
    addListener(callback: (notificationId: string) => void): void,
  },
  onClosed: chrome$Event & {
    addListener(callback: (notificationId: string, byUser: boolean) => void): void,
  },
  onPermissionLevelChanged: chrome$Event & {
    addListener(callback: (level: chrome$PermissionLevel) => void): void,
  },
  onShowSettings: chrome$Event & {
    addListener(callback: () => void): void,
  },
};
