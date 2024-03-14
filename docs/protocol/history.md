---
sidebar_position: 3
title: History
---

# Our Journey

## Bitcoin Genesis and Classic Era: 2008-2022

In 2008, a pseudonymous [Satoshi Nakamoto](https://en.wikipedia.org/wiki/Satoshi_Nakamoto) introduced [Bitcoin](https://bitcoin.org) to the world: the first and most durable, decentralized blockchain in existence. The network was originally conceived as a [peer-to-peer electronic cash system](https://bitcoin.org/bitcoin.pdf), enabling direct online payments without intermediaries and delivering the world's first digital currency that relied on no central authority.

Over the years, Bitcoin's robust security and resilience — backed by the [proof-of-work](https://academy.binance.com/en/articles/proof-of-work-explained) consensus mechanism — set the stage worldwide for a new era in finance. As adoption grew globally at a remarkable rate, Bitcoin's capabilities were greatly improved in terms of scalability and transaction speed with upgrades like [Segregated Witness](https://investopedia.com/terms/s/segwit-segregated-witness.asp) (2017), the [Lightning Network](https://investopedia.com/terms/l/lightning-network.asp) (2018), and [Taproot](https://investopedia.com/bitcoin-taproot-upgrade-5210039) (2021). Nonetheless, despite these advancements and due to technical constraints, Bitcoin could only serve primarily as a medium of exchange and a store of value (_"digital gold"_) until quite recently in 2022.

<!-- <details>
<summary>👈 Click here to explore the foundational lines from Bitcoin's initial _`main.cpp`_ file, version `0.1.0`.</summary>

```jsx
#include "headers.h"
#include "db.h"
#include "net.h"
#include "init.h"
#include <iostream>
#include <fstream>

using namespace std;

// DB_ENV* dbenv;
unsigned int nWalletDBUpdated;

//////////////////////////////////////////////////////////////////////////////
//
// Shutdown
//

void Shutdown(void* parg)
{
    static CCriticalSection cs_Shutdown;
    {
        LOCK(cs_Shutdown);
        printf("Shutdown : In progress...\n");
        static bool fTaken;
        if (fTaken) return;
        fTaken = true;
    }
    ...
    // Note: This is just the beginning portion of the shutdown function and the entire file.
}
```
</details> -->

## The Dawn of Inscriptions: 2023

In 2023, the Bitcoin ecosystem embraced a revolutionary concept: [Bitcoin inscriptions](https://unchained.com/blog/bitcoin-inscriptions-ordinals). This game-changing innovation elevated Bitcoin from merely a store of value (SoV) to a fully functional and programmable financial ecosystem (known as [BTCFi](https://www.ignasdefi.com/p/ordinals-and-btc-defi-start-here)), capable of supporting applications across many fields from [decentralized finance](https://www.coinbase.com/learn/crypto-basics/what-is-defi) to [real-world asset](https://www.binance.com/en/research/analysis/real-world-assets-state-of-the-market) tokenization, digital art, and _beyond._

By embedding data directly into Bitcoin's transactions, inscriptions have unlocked a new layer of utility on the Bitcoin network itself, in addition to the massively popular [$BTC](https://coinmarketcap.com/currencies/bitcoin) token. This leap forward not only diversifies Bitcoin's use cases but also strengthens its position as a foundational pillar in the broader blockchain space, showcasing its potential to be as versatile and programmable as other modern protocols.

You may wonder, how do these inscriptions work? Imagine you could take a tiny piece of Bitcoin — not just any piece, but a very specific one — and mark it with a digital sticker. These stickers could be anything: a picture, a piece of text, a snippet of a song, or even a small program. This is exactly what inscriptions allow you to do. They let users attach a wide array of digital information directly onto Bitcoin’s smallest units, called [satoshis](https://investopedia.com/terms/s/satoshi.asp), similar to how you might stick a unique label onto individual pages of a book.

And how do we make sure each of these "book pages" are unique? This is where [ordinals](https://unchained.com/blog/bitcoin-inscriptions-ordinals) come into play. Ordinals are like giving every single satoshi, or book page, a serial number. Just like how every dollar bill has a unique number, every satoshi gets its own identifier, making it distinguishable from all others no matter who they belong to. This numbering system makes it possible to track, trade, and collect any satoshi, especially those with special stickers (inscriptions) attached to them.

:::tip Why are inscriptions and Ordinals so important?

Ordinals allow us to identify and track each satoshi, while inscriptions let us attach meaningful data to them. Together, they transform these satoshis from mere fractions of a Bitcoin into unique, programmable digital artifacts. This novel use introduces a whole new dimension to the Bitcoin network, leveraging its security and decentralization to support a flourishing ecosystem without altering Bitcoin’s foundational principles.

:::

## Today: Enabling the Bitcoin On-Chain Economy

Looking ahead, [Beyond](https://beyond.tech) is leading the way into a new paradigm, driving the transition from a _classic era_ of limited utility towards a [Bitcoin-powered on-chain global economy](/protocol/vision).

Beyond's mission is clear: to establish Bitcoin as the most reliable and secure gateway to decentralized finance (DeFi) [at a global scale](https://defillama.com/chains). The beginning of 2024 marked a significant milestone with the introduction of [Bitcoin ETF listings](https://justetf.com/en/how-to/invest-in-bitcoin.html) and a surge in institutional interest, highlighting Bitcoin's unmatched potential to foster a decentralized, interoperable, and compliant financial ecosystem.

This evolution from a digital store of value to a holistic on-chain economy deeply excites our team and community, as we build a future where financial innovation, inclusivity, decentralization, and security go hand in hand.
