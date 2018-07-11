# Truffle Vue + Vee + Bluma

This is a truffle box which is based on [vue-box](https://truffleframework.com/boxes/vue-box)

The main differences are,
1. Change default ethereum client to Ganache
1. Add bulma style library,
2. Add vee-validator and usage example in vue component.

Vee-Validator and Bulma will save a lot of time during working on front-end.

Ganache can help developers to view every transactions.

## Installation

1. Install Truffle globally.
    ```javascript
    yarn install -g truffle
    ```

    and Install [Ganache](https://github.com/trufflesuite/ganache/releases)

2. Download the box. This also takes care of installing the necessary dependencies.
    ```javascript
    truffle unbox standup75/vue-box
    ```

3. Run the development console.
    ```javascript
    truffle develop
    ```

4. Compile and migrate the smart contracts. Note inside the development console we don't preface commands with `truffle`.
    ```javascript
    compile
    migrate
    ```


5. Run the local server.
    ```javascript
    // Serves the front-end on http://localhost:3000
    yarn serve
    ```

6. Truffle can run tests written in Solidity or JavaScript against your smart contracts. Note the command varies slightly if you're in or outside of the development console.
    ```javascript
    truffle test
    ```

8. To build the application for production, use the build command. A production build will be in the build_webpack folder.
    ```javascript
    yarn build
    ```
