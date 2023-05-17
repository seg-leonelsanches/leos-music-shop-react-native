# Leo's Music Store for React Native

This is an App that simulates Leo's Music Store in React Native, integrating React Native with Segment. 

## Getting Started

To get started with React Native and Segment, you should perform the following steps:

- Install [Expo](https://docs.expo.dev/get-started/installation/)
- Initialize a React Native Application (preferrably in TypeScript)
- Install [Segment for React Native](https://github.com/segmentio/analytics-react-native)

    ```bash
    yarn add @segment/analytics-react-native @segment/sovran-react-native @react-native-async-storage/async-storage
    ```

- Generate native project with prebuild. This is **required** by Segment library:

    ```bash
    npx expo run:ios
    ```

    Or

    ```bash
    npx expo run:android
    ```

    Depending on your react-native version, you'll need to eject Expo instead. Nowadays this is considered deprecated, but depending on the version used that can be a solution. 
