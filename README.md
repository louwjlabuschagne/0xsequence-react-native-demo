# Sequence.xyz React Native Demo

[Sequence](https://docs.sequence.xyz/) provides users with a seamless web3 wallet to access Ethereum-compatible networks, and a powerful web3 infrastructure stack for developers that makes it easy to build web3 apps and games. However, currently there isn't a React Native demo app available to demonstrate how to integrate Sequence into a mobile app. This project aims to provide a simple React Native demo app that shows how to integrate Sequence into a mobile app.

## Prerequisites

- [Node.js v18](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)

## Getting Started

```bash
yarn install
```

## Running the app

```bash
yarn start
```

It's recommended that you sign into Expo as the crypto libraries related to `ethers.js` won't work on the Expo Go app. You can sign into Expo by running the following command:

```bash
npx expo login
```

## Bundler Polyfill Issues - React Native Metro

The setup follows instructions by [web3auth](https://web3auth.io/) in [this](https://web3auth.io/docs/troubleshooting/metro-issues) blog to resolve issues between `ethers.js` and the Metro bundler. The `metro.config.js` file is used to resolve the issues with Metro bundler with polfills made in `globals.js`.
