# Layout Structure

## UI FEATURES

- product list
  - carousel slider (H)
- product item
  - product image
    - zoom
    - lightbox
  - product gallery
    - carousel slider (V)
    - if mouse hover/click → then active thumbnail
- image slider
  - thumbnail bar position : v | h
  - infinite sliding
  - show bullet list
  - show thumbnail bar
  - show navigation
  - select thumbnail w/ mouse hover/click
  - select thumbnail w/ arrow keys
  - gap between slides
  - slides per view
- image slider alt
  - autoplay slides
  - pause if mouse hover

---

## ROOT LAYOUT

- head
- header > brand + navbar
- main > children
- footer > github repo, tech used

## NAVBAR

- product-context
  - showCart, setShowCart, totalQuantities
- cart-menu-btn
  - `totalQuantities` notification
  - toggle

---

## HERO BANNER

- left  : smallText, midText, largeText1, floating image
- right : product-item-link, buttonText, description

## FOOTER BANNER

- left  : discount, largetText1, largetText2, saleTime
- mid   : overflown image
- right : smallText, midText, description, buttonText, product-item-link

## FOOTER

- for more info
- technologies used
- conceptual project by Michael Alvarez

---

## PRODUCT CARD

- product-item-link
- image
- category
- name
- price

---

## CART

- sidebar
  - data?.map
    - checkout-item
  - (x >= 1)
    - subtotal
    - handle checkout
