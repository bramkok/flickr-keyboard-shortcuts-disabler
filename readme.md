# flickr-keyboard-shortcuts-disabler

> Disable the keyboard shortcuts on the Flickr website

## What/why?

Of course the keyboard shortcuts on Flickr.com are great! They allow for
an intuitive and fast experience and practise of a large group of users for
whom it has become impossible having to picture themselves having to do without
Flickr and the community.

However without any settings or controls the keyboard shortcuts are able to
bring misery to about every type of user.

## Features

* Disable every keyboard shortcut used on the Flickr website
* Disable a subset of keyboard shortcuts
* Improve compatibility with other keyboard browser plugins
* Avoid unwanted interactions caused by erroneous input

## Usage

### 1. Download the Tampermonkey extension for your browser

This script uses Tampermonkey, a free browser extension and the most popular
userscript manager. It's available for Chrome, Microsoft Edge, Safari, Opera
Next, and Firefox.

With this extension you can inject the `userscript` from this project into the
website of Flickr and change the behavior and functionality of the keyboard
shortcuts.

Go to the [Tempermonkey](http://tampermonkey.net) website and download the
extenstion for your browser.

### 2. Copy `flickr-keyboard-shortcuts-disabler.js` to Tampermonkey

Copy the contents from the `flickr-keyboard-shortcuts-disabler.js` file to
the Tampermonkey extension in your browser. See the Tampermonkey website for
more details.

### 3. Adjust the userscript to your needs

As a default the script is written to disable all the keyboard shortcuts that
Flickr uses. You can simply edit the script in order to partially disable the
keyboard shortcuts.

There's is a JSON object called `shortcutKeys` that lists all the shortcut
names and their respective keys, key codes and disabled status. To enable a
shortcut change the boolean value of `true` to `false` and the shortcut will
become functional.

Below is the top of this object with the mentioned properties. The commented
text describes what value needs to be changed. The script itself is also
annotated with comments.

```javascript
const shortcutKeys = {
  favorite: {
    key: 'f',
    keyCode: 70,
    disabled: true // Change this value to 'false' to enable the shortcut
  },
  comment: {
    key: 'c',
    keyCode: 67,
    disabled: true
  }
}
```
