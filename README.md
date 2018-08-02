# Decentralized Exam Evaluation And Certification Issue System

This is a DApp, for some reason, I did not publish it to ethereum test net or public net.

1. Automatically evaluate the answers,
2. Get results and issue the certification.
3. The certification is located in a block.



## How to
- install `truffle ganache vuejs` and their pre requisites
- open `ganache`
- `truffle compile` to compile the contracts
- `truffle networks --clean` to clean the old contracts
- `truffle migrate` to migrate and deploy contract to local private network
- use `yarn serve` to run the dapp (metamask required)

![screen shot of commands order](https://raw.githubusercontent.com/tim-hub/picgo-pictures-sample2/master/public/imagesScreen%20Shot%202018-08-02%20at%209.53.56%20PM.png)

## Stacks
- Truffle
- - web3
- Ethereum Blockchain
- Vue
- - vue-router
- - bulma

I use a truffle box, [Yet-Another-Truffle-Vue-Box](https://github.com/tim-hub/Yet-Another-Truffle-Vue-Box) which is altered by myself and based on vue-box to develop this DApp.

Bulma is used in vue front-end project for the layour and style.

## Ideas
- one way to avoid users keep taking exam again and again to get higher score is to increase the fee automatically, like * 2, or ^ 2.
- add a print button in certification page.