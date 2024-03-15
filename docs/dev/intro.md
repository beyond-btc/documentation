---
sidebar_position: 0
title: Introduction
---

# Technical Introduction

Integrating with Beyond is easy and fast. Once live on testnet this summer 2024, a simple SDK will be published here to painlessly integrate your app with Beyond.

<!-- You will also be able to find our [canonical token addresses](/dev/tokens.md — for which we intend to set the 'external token address' standard in Bitcoin and BTCFi — and all our [contract deployments](/dev/contracts.md in this `Developers` section. -->

```typescript title="/beyond/sdk.js"
> ssh gm@beyond.tech -p 3000

> yarn add @beyond/sdk

 __|__|__  _______       ___    ___ ________  ________   ________     
|\   __  \|\  ___ \     |\  \  /  /|\   __  \|\   ___  \|\   ___ \    
\ \  \|\ /\ \   __/|    \ \  \/  / | \  \|\  \ \  \\ \  \ \  \_|\ \   
 \ \   __  \ \  \_|/__   \ \    / / \ \  \\\  \ \  \\ \  \ \  \ \\ \  
  \ \  \|\  \ \  \_|\ \   \/  /  /   \ \  \\\  \ \  \\ \  \ \  \_\\ \ 
   \ \_______\ \_______\__/  / /      \ \_______\ \__\\ \__\ \_______\
    \|_______|\|_______|\___/ /        \|_______|\|__| \|__|\|_______|
       |   |           \|___|/                                        


import { bridge } from '@beyond/sdk';

await bridge.toBitcoin({ from: 'ethereum', token: 'USDT', amount: 1000 });
```
