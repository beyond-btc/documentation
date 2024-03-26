---
sidebar_position: 0
title: Overview
---

# Protocol Overview

Beyond is a decentralized protocol that enables seamless asset bridging between different blockchain ecosystems and Bitcoin's Layer 1 (L1). The architecture combines on-chain and off-chain components to provide a robust and scalable solution for asset transfer, ensuring interoperability with uncompromising security and efficiency.

In simple terms, the asset bridging process involves locking native tokens on the source chain, and minting wrapped tokens on the destination chain. <!--To move the tokens back to the source chain, the bridge first burns the wrapped tokens, and then unlocks the native ones. -->This process is facilitated by a combination of smart contracts, nodes, and indexers, ensuring seamless interoperability and asset transfer across different blockchain ecosystems.

## Key Features

Beyond aims to set a new standard for asset bridging on Bitcoin L1 with:

- **Omnichain Interoperability**: Connected via [LayerZero](https://layerzero.network) to the entire blockchain industry.
- **Bi-Directional Bridging**: Move digital assets such as USDT or ETH `to` and `from` Bitcoin L1.
- **Multi-Standard Support**: Choose your preferred Bitcoin token standard: BRC-20, CBRC-20, Runes...
- **Cross-Standard Conversion**: With Beyond, you can even switch between standards in a single transaction, without leaving Bitcoin!
- **Prime Functionality**: Best-in-class permissionless infrastructure, enabling optimal efficiency over your assets.
- **User-Centric Design**: Tailored user experience with 360° coverage of your needs.
- **Uncompromising Security**: Check our [in-depth explainer](/protocol/security) to learn all the safety measures implemented.

On the community side, some noteworthy links include:
- **[Leaderboard](/protocol/leaderboard)**: An open program to reward Beyond's most active users (details yet to be officially announced).
- **[Blog](https://blog.beyond.tech)**: A communication channel (in addition to [our socials](/community/socials)) for long-form content about Beyond. You can also [subscribe as a newsletter](https://blog.beyond.tech/subscribe) to get email notifications.
- **[Analytics](https://app.beyond.tech/info)**: An interactive dashboard to provide detailed insights into the Beyond ecosystem. If you have a request for additional charts or features, feel free to [share it with our team](/community/socials).

## Supported Chains and Tokens

By integrating with [LayerZero](https://layerzero.network), Beyond extends support to all major assets from the largest blockchains into Bitcoin L1, and vice versa. Our scope includes Ethereum, Binance Smart Chain, Avalanche, Polygon, and many others. For the full list of supported chains, tokens, and contract addresses, please check our [deployments log](/dev/deployments) — or find it directly [in the app](https://app.beyond.tech)!

## Architecture

![Architecture Overview](/img/architecture-overview.png)

### Main Components

- **`Node` and `Indexer`**: Together they facilitate transactions and indexing on all blockchains, ensuring real-time data accuracy and accessibility.
- **`Registry`**: A database consolidating data from various sources (e.g. indexers) into a unified repository with extended business logic.
- **`Source`**: A smart contract that locks and unlocks native tokens on the source chain.
- **`Forge`**: A multisig-controlled entity that mints and burns wrapped tokens on the destination chain.
<!-- - **`Relayer`**: A smart contract on Ethereum that listens for cross-chain events and triggers corresponding actions on the `Forge`. -->

### User Journey Examples

<details>
<!-- <summary>Avalanche ➤ Bitcoin (inbound)</summary> -->
<summary>Avalanche ➤ Bitcoin </summary>
1. User locks AVAX tokens in Beyond's `Source` smart contract on Avalanche, which also triggers a cross-chain event via LayerZero messenger.
2. Beyond's `Forge` mints wAVAX wrapped tokens on Bitcoin, then waits 6+ blocks for immutable confirmation.
3. Bitcoin indexer and `Registry` update with the mint event.
</details>

<details>
<!-- <summary>Bitcoin ➤ Avalanche (inbound)</summary> -->
<summary>Bitcoin ➤ Avalanche </summary>
1. User burns wAVAX wrapped tokens via Bitcoin `Forge`.
2. After 6+ blocks, Bitcoin network immutably confirms the transaction, Bitcoin indexer and `Registry` update with the burn event, while a cross-chain event is triggered via LayerZero messenger.
3. The original AVAX becomes unlocked in Beyond's `Source` smart contract on Avalanche.
</details>

<!-- <details>
<summary>Bitcoin ➤ Ethereum (outbound)</summary>
1. User locks ORDI via Bitcoin `Source`.
2. After 6+ blocks, Bitcoin network immutably confirms the transaction, Bitcoin indexer and `Registry` update with the lock event, while a cross-chain event is triggered via LayerZero messenger.
3. Beyond's `Forge` mints wORDI wrapped tokens on Ethereum, then waits 6+ blocks for immutable confirmation.
</details> -->

