# React Native Minimal Settings

A cross-platform Settings component for React Native.

## Features

- Settings Title
- Category Title
- Switch Button Preference
- Dividing Line

and much more to come!

## Demo

<img src="./example/examplegif-resize.gif" width="360">

## Installation

```sh
npm i react-native-minimal-settings
```

## Quick Start

```js
import React from 'react';
import { View } from 'react-native';
import {CategoryTitle, DividingLine, SettingTitle, SwitchButton} from 'react-native-minimal-settings';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
       teslaValue: false,
       pizzaValue: false,
    }
 }

 teslaSwitch = (value) => {
   this.setState({teslaValue: value});
 }

 pizzaSwitch = (value) => {
   //Unfortunately pizza disappointed me so it's disabled
   this.setState({pizzaValue: value});
 }

  render() {
    return (
      <View style={{ flex: 1}}>
        <SettingTitle
          title = {"Settings"}
          titleBackgroundColor = {'#746965'}
          titleColor = {'white'}          
        />
        <CategoryTitle
          title = {'General'}
        />
        <DividingLine
          lineColor = {'rgba(128, 128, 128, 0.5)'}
        />
        <SwitchButton
          title = {'Tesla'}
          toggleSwitch = {this.teslaSwitch}
          switchValue = {this.state.teslaValue}
          description = {"Tesla's is amazing and so is the their Chairman & CEO Elon Musk."}
          blockIcon = {"ios-car"}
          iconColor = {"red"}
        />
        <SwitchButton
          title = {'Pizza'}
          toggleSwitch = {this.pizzaSwitch}
          switchValue = {this.state.pizzaValue}
          description = {'Pizzas are very hit or miss, so having your expectations not met kind of sucks.'}
          blockIcon = {"md-pizza"}
          iconColor = {"skyblue"}
          isDisabled = {true}
        />
      </View>
    );
  }
}
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
```

#### Props

- `title` (required): Title of the category.

#### Props

- `title` (required): Title of the header.
- `titleBackgroundColor` (required): Background color of the header .
- `titleColor` (required): Color of the header text.

### `<DividingLine />`

Component responsible for making a line to divide categories or titles from categories.

#### Example

```js
<DividingLine
  lineColor = {'rgba(128, 128, 128, 0.5)'}
/>
```

#### Props

- `lineColor` (required): Dividing line between categories or between title and category.

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
- `blockIcon`  (required): Icon of the preference block taken from [Expo's vector icon directory](https://expo.github.io/vector-icons/)
- `iconColor` (required): The color of the icon.
- `isDisabled` (optional): Disables the entire preference block.
