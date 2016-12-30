// ==UserScript==
// @name         flickr-keyboard-shortcuts-disabler
// @description  Disable the keyboard shortcuts on the Flickr website
// @author       Bram Kok (bramkok.com)
// @version      0.8
// @run-at       document-end
// @require      https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.6.15/browser-polyfill.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.6.15/browser.min.js
// @include      *flickr.com*
// @homepage     https://github.com/bramkok/flickr-keyboard-shortcuts-disabler
// @supportURL   https://github.com/bramkok/flickr-keyboard-shortcuts-disabler/issues
// ==/UserScript==

/* jshint ignore:start */
var inline_src = (<><![CDATA[
/* jshint ignore:end */
/* jshint esnext: true */

// All keyboard shortcuts used by Flickr are disabled by default
// To re-enable shortcut keys change the value in each shortcut's
// property from `true` to `false`
const shortcutKeys = {
  favorite: {
    key: 'f',
    keyCode: 70,
    disabled: true
  },
  comment: {
    key: 'c',
    keyCode: 67,
    disabled: true
  },
  search: {
    key: 's',
    keyCode: 83,
    disabled: true
  },
  photoNavigationLeft: {
    key: '<-',
    keyCode: 37,
    disabled: true
  },
  photoNavigationRight: {
    key: '->',
    keyCode: 39,
    disabled: true
  },
  thumbnailNavigationLeft: {
    key: '<',
    keyCode: 188,
    disabled: true
  },
  thumbnailNavigationRight: {
    key: '>',
    keyCode: 190,
    disabled: true
  },
  zoom: {
    key: 'z',
    keyCode: 90,
    disabled: true
  },
  backToContext: {
    key: 'b',
    keyCode: 66,
    disabled: true
  },
  addToGroup: {
    key: 'g',
    keyCode: 71,
    disabled: true
  },
  addToAlbum: {
    key: 'a',
    keyCode: 65,
    disabled: true
  },
  addTag: {
    key: 't',
    keyCode: 84,
    disabled: true
  },
  addAPerson: {
    key: 'p',
    keyCode: 80,
    disabled: true
  }
};

// Check if key exists and has to be disabled
const isKeyDisabled = keyCode => {
  for (const shortcutKey in shortcutKeys) {
    for (const prop in shortcutKeys[shortcutKey]) {
      if (shortcutKeys[shortcutKey].keyCode === keyCode) {
        if (shortcutKeys[shortcutKey].disabled) {
          return true;
        } else {
          return false;
        }
      }
    }
  }
};

// Add EventListener to `keydown` keyboard event
document.addEventListener('keydown', e => {
  if (isKeyDisabled(e.keyCode)) {
    e.cancelBubble = true;
    e.stopImmediatePropagation();
  }
  return false;
});

/* jshint ignore:start */
]]></>).toString();
var c = babel.transform(inline_src);
eval(c.code);
/* jshint ignore:end */
