type chrome$IPHandlingPolicy = (
  'default' |
  'default_public_and_private_interfaces' |
  'default_public_interface_only' |
  'disable_non_proxied_udp'
);

type chrome$privacy = {
  network: {
    networkPredictionEnabled: chrome$ChromeSetting,
    webRTCIPHandlingPolicy: chrome$ChromeSetting
  },
  services: {
    alternateErrorPagesEnabled: chrome$ChromeSetting,
    autofillEnabled: chrome$ChromeSetting,
    hotwordSearchEnabled: chrome$ChromeSetting,
    passwordSavingEnabled: chrome$ChromeSetting,
    safeBrowsingEnabled: chrome$ChromeSetting,
    safeBrowsingExtendedReportingEnabled: chrome$ChromeSetting,
    searchSuggestEnabled: chrome$ChromeSetting,
    spellingServiceEnabled: chrome$ChromeSetting,
    translationServiceEnabled: chrome$ChromeSetting
  },
  websites: {
    hyperlinkAuditingEnabled: chrome$ChromeSetting,
    protectedContentEnabled: chrome$ChromeSetting,
    referrersEnabled: chrome$ChromeSetting,
    thirdPartCookiesAllowed: chrome$ChromeSetting
  }
};
