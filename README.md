# Cocktail App

Assuming you are a react native developer and you have xcode and android development environment previously installed and configured.

To run the app just do:

```
npm i
cd ios
pod install
npm run ios

```

It will build the app, run the emulator and run the app in the emulator

If you want to run the android version:

```
npm i
npm run android
```

If you dont have the an adb virtual device created it wont start Virtual Device image.(No connected devices!)

So create one or run the emulator manually before run the app and remember to have metro running if you run it manually.

### Used dependecies

- react, react-native, react-redux, redux : HA! you know it!

- react-native-vector-icons To have a icon library for the search icon, back arrow and the cocktail :p

- @types/react-native-vector-icons this is the typescript types for the library above
- @types/redux-logger redux-logger to log the redux actions
- react-navigation to use the createAppContainer in order to use navigation.
- react-navigation-stack To implement the stack navigation used by the two screens.
- react-native-gesture-handler this one is required by react-navigation-stack to implement the navigation gestures like swip right in the left screen to go back.
- react-native-linear-gradient to implement the gradient background of the design
- redux-thunk to handle the multiple actions asynchronously. (set the criteria, set the loading indicator and fire the request)

### FlatList and big amount of data

The api should receive the limit and the offset in order to paginate the result and implement an infinite scroll of some pagination strategy.
