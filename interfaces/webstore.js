type chrome$InstallStage = 'downloading' | 'installing';

type chrome$ErrorCode = (
  'aborted' |
  'blacklisted' |
  'blockedByPolicy' |
  'iconError' |
  'installInProgress' |
  'invalidId' |
  'invalidManifest' |
  'invalidWebstoreResponse' |
  'launchFeatureDisabled' |
  'launchInProgress' |
  'launchUnsupportedExtensionType' |
  'missingDependencies' |
  'notPermitted' |
  'otherError' |
  'requirementViolations' |
  'userCanceled' |
  'webstoreRequestError'
);

type chrome$webstore = {
  install(
    url?: string,
    successCallback: () => void,
    failureCallback: (error: string, errorCode?: chrome$ErrorCode) => void
  ): void,

  onDownloadProgress: chrome$Event & {
    addListener(callback: (percentDownloaded: number) => void): void
  },
  onInstallStageChanged: chrome$Event & {
    addListener(callback: (stage: chrome$InstallStage) => void): void
  }
};
