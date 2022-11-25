# LOGIC GOALS

`StoreQty → how many the stores hase`

`UserQty → how many the use wants to buy`

---

## Sanity

- [x] get content
  - banner data
  - product list → product item
  - product detail

- [x] get content images
  - apply to NextImage

- [ ] post content
  - TBD

## Stripe

- [ ] checkout to Stripe portal page
  - redirect success : checkout page
  - redirect cancelled : checkout page

## Cart

- [x] cart menu → toggle, show, hide

- [x] cart list → cart item
  - update cart item qty
  - remove cart item

- [x] product carousel
  - add to cart

- [x] product item page
  - add to cart
  - buy now → show cart

- [x] header
  - toggle cart

- [x] cart drawer
  - close cart

- [x] calculate total
  - total qty
  - total price

## Product

- check if item is in stock
  - true : show 'available'
  - false : show 'out of stock'

- [x] home page
  - banner → go to product item page
  - carousel → add to cart

- [x] product page
  - add to cart

- [x] product item page
  - carousel → add to cart
  - update cart item qty
  - btn : add to cart
	- btn : buy now → show cart
