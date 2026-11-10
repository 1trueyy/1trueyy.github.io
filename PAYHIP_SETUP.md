# TRUEY Digital Music Store — Payhip Launch

## Confirmed architecture
- Public website: https://1trueyy.github.io/
- Website source: https://github.com/1trueyy/1trueyy.github.io
- Digital payment/fulfillment: Payhip + Stripe + PayPal. Enable eligible cards, Apple Pay, Google Pay, Cash App Pay, PayPal, and US Venmo where PayPal actually makes it available; Chime customers pay via Chime debit cards at regular card checkout.
- Domain cost: $0 to use the current GitHub Pages URL
- Payhip Free plan: $0 monthly; Payhip 5% per sale + payment processor fees
- Fans do not need GitHub accounts. They can purchase from a hosted Payhip checkout.

## Set up Payhip
1. Create your Payhip store at https://payhip.com/ with the brand name **Truey / 1096 Entertainment**.
2. In Payhip **Account → Settings → Payment Details**, connect the authorized **Stripe** account AND **PayPal** account. The store owner must approve both sign-ins and verification. In **Stripe Dashboard → Settings → Payment methods**, enable the available card and wallet methods, including Apple Pay, Google Pay, and Cash App Pay if eligible. Check the published Payhip checkout on mobile and desktop: an enabled Stripe method is not guaranteed to show for every buyer. PayPal is a separate checkout method; **Venmo may appear for eligible US buyers, but is not guaranteed by Payhip**. Chime is accepted when a supported Chime debit card is used at card checkout.
3. Add two **Digital Product** listings:
   - **Truey — Fake Killas (Digital Download)**, $1.99 USD.
   - **Truey — Shit Crazy (Digital Download)**, $1.99 USD.
4. Upload the final downloadable audio to each product, preferably a 320-kbps MP3. Add a WAV as a second download if you want fans to receive lossless audio. The master files must be provided by the artist and uploaded to Payhip's private fulfillment, **never to this public GitHub repository**.
5. Use the artist's exact official cover art for each listing. *Fake Killas* is a track on the album *Mr. Rapper* on Apple Music, and this site's current artwork uses the *Mr. Rapper* album artwork. If there is different dedicated cover art intended for the direct-sale edition, use that instead.
6. Review product name, price, checkout and tax settings. Make the listings public only when payment authorization and files are ready.
7. In each Payhip product editor, copy the genuine product URL in the format `https://payhip.com/b/XXXXX`. Direct checkout URLs can also be obtained from Payhip's documented `/buy?link=XXXXX` format.
8. Edit `checkout-config.json`, replacing each `null` with its **matching, verified** Payhip URL:

```json
{
  "products": {
    "fake-killas": null,
    "shit-crazy": null
  }
}
```

**Safety:** No guessed Payhip product keys; don't replace with any general Cash App, Venmo or Chime payment handle. The fan must complete secure checkout and be entitled to a protected download.

## What the existing website automatically does
The site's `script.js` reads `checkout-config.json`. With an empty URL it displays **CHECKOUT COMING SOON**. Once a valid `https://payhip.com/b/...` or `https://payhip.com/buy?link=...` URL is set, the product card becomes a real **BUY DIGITAL DOWNLOAD / $1.99** link.

No webhook, payment secrets, customer data, or music files belong on GitHub Pages. Payhip handles the payment confirmation and file entitlement.

## Customer delivery
Successful buyers go to Payhip's download page and receive an emailed receipt with a download link. Test both paths before promoting the store. Payhip supports a 100%-off test coupon, so you can verify the checkout and fulfillment process without charging someone.

## Payment methods to configure and verify
Connect **Stripe + PayPal** within Payhip. A payment method should appear on the live storefront only if the processor and buyer are eligible. Test on phone and desktop.

| Method | How it is handled |
|---|---|
| Debit / credit cards (Visa, Mastercard, Amex, etc.) | Stripe Payhip card checkout |
| Apple Pay | Stripe if enabled, eligible browser/device/buyer |
| Google Pay | Stripe if enabled, eligible browser/device/buyer |
| Cash App Pay | Stripe if enabled, eligible US buyer |
| PayPal | Connected PayPal via Payhip |
| Venmo | May be offered through PayPal in eligible US checkouts; confirm that it actually shows on Payhip before advertising it as available |
| Chime | Customer's compatible Chime debit card at the standard debit/credit card checkout; not a standalone Chime Payhip gateway |

**Important:** Do not set up manual transfers through Cash App, Venmo, or Chime as a substitute for secure Payhip checkout: those transfers will not automatically authorize or deliver song files. Never store bank/Stripe credentials in GitHub.

Source: [Payhip — Connect Stripe](https://help.payhip.com/article/65-connecting-your-stripe-account), [Payhip — Connect PayPal](https://help.payhip.com/article/64-connecting-your-paypal-account), [Payhip — How Do I Get Paid?](https://help.payhip.com/article/173-how-do-i-get-paid).

## Store management and sales
Payhip's Customers / Orders dashboard shows orders and product sales. These website sales do **not** automatically count as Apple iTunes purchases or Apple Music streams.

## Items still needed from the artist
- Authorized Payhip merchant store
- Final audio files for Fake Killas and Shit Crazy
- Confirmed cover artwork for each digital product
- Payhip product URLs after secure checkout and automatic file fulfillment are configured
