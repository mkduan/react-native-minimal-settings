# React Native Minimal Settings

A cross-platform Settings component for React Native.

## Features

- Settings Title
- Category Title
- Switch Button Preference

and much more to come!

## Installation

```sh
npm i react-native-minimal-settings
```

## API reference

### `<SettingTitle />`

Container component responsible for rendering the screen header.

#### Example

```js
<SettingTitle
  title = {"Settings"}
  titleBackgroundColor = {'#1f5fa5'}
  titleColor = {'white'}          
/>
```

#### Props

- `title` (required): Title of the header.
- `titleBackgroundColor` (required): Background color of the header .
- `titleColor` (required): Color of the header text.

### `<CategoryTitle />`

Container component responsible for rendering the title of a category.

#### Example

```js
<CategoryTitle
  title = {'General'}
/>
}
```

#### Props

- `title` (required): Title of the category.

### `<SwitchButton />`

Container component responsible for rendering the boolean settings block.

#### Example

```js
<SwitchButton
  title = {'Notifications'}
  toggleSwitch = {this._handleNotification}
  switchValue = {this.state.notificationValue}
  description = {'Receive notifications.'}
  blockIcon = {"md-notifications"}
  iconColor = {"skyblue"}
  isDisabled = {false}
/>
```

#### Props

- `title`: Title of the preference block.
- `toggleSwitch` (required): Callback for when the switch button gets toggled.
- `switchValue` (required): Value of the switch button.
- `description` (required): Description of the function of the switch button.
- `blockIcon`  (required): Icon of the preference block taken from [Expo's vector icon directory] (https://expo.github.io/vector-icons/).
- `iconColor` (required): The color of the icon.
- `isDisabled` (optional): Disables the entire preference block.
