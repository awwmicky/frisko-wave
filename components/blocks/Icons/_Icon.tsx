import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineRight,
	AiOutlineStar,
	AiFillStar,
  AiOutlineShopping,
} from 'react-icons/ai'

import {
  VscClose,
} from 'react-icons/vsc'

import {
	BsSoundwave,
	BsBagCheckFill,
	BsBagXFill,
} from 'react-icons/bs'

export const BrandLogo = () => <BsSoundwave size={20} strokeWidth={0.25} />
export const Plus = () => <AiOutlinePlus />
export const Minus = () => <AiOutlineMinus />
export const Remove = () => <VscClose size={20} />
export const LeftArrow = () => <AiOutlineLeft size={14} />
export const RightArrow = () => <AiOutlineRight size={14} color="gray" />
export const StarEmpty = () => <AiOutlineStar color="red" />
export const StarFilled = () => <AiFillStar color="red" />
export const Shopping = () => <AiOutlineShopping size={20} />
export const CheckoutSuccess = () => <BsBagCheckFill size={40} color="green" />
export const CheckoutCancelled = () => <BsBagXFill size={40} color="red" />
