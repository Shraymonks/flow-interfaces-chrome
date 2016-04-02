type chrome$Hash = 'MD5_SHA1' | 'SHA1' | 'SHA256' | 'SHA384' | 'SHA512';

type chrome$CertificateInfo = {
  certificate: ArrayBuffer,
  supportedHashes: Array<chrome$Hash>
};

type chrome$SignRequest = {
  certificate: ArrayBuffer,
  digest: ArrayBuffer,
  hash: chrome$Hash
};

type chrome$certificateProvider = {
  onCertificatesRequested: chrome$Event & {
    addListener(callback: (
      reportCallback: (certificates: Array<chrome$CertificateInfo>) => void
    ) => void): void
  },
  onSignDigestRequested: chrome$Event & {
    addListener(callback: (
      request: chrome$SignRequest,
      reportCallback: (signature?: ArrayBuffer) => void
    ) => void): void
  }
};
