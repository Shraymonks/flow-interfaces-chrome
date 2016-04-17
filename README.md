# flow-interfaces-chrome
[Flow](http://flowtype.org/) interface declarations for the [Chrome extensions API](https://developer.chrome.com/extensions/api_index). Provides type declarations for the `chrome` variable and Chrome object types.

## Usage

### NPM
```sh
npm install --save-dev flow-interfaces-chrome
```

### Flow Config
Add the interfaces to your `.flowconfig`:
```
[libs]
node_modules/flow-interfaces-chrome/interfaces/
```

## Types
Detailed object types described in the [Chrome extension docs](https://developer.chrome.com/extensions/api_index) are also available.

These types are prefixed with `chrome$`, e.g. `chrome$Event`.
