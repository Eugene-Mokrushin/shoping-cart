import React, { useState } from 'react'
import { useShoppingCart } from '../context/ShoppingCartContext'
import { CartItem } from './CartItem'
import { formarCurrency } from '../utilities/formatCurrency'
import storeItems from '../data/items.json'
type isOpen = {
    open: boolean
}

export function ShoppingCart({ open }: isOpen) {
    const { closeCart, cartItems } = useShoppingCart()
    const [icoColor, setIcoColor] = useState('#2563eb')
    function changeColorWhite() {
        setIcoColor('#ffffff')
    }
    function changeColorBlue() {
        setIcoColor('#2563eb')
    }
    const totalPrice: number = cartItems.reduce((value, cartItem) => {
        const item = storeItems.find(i => i.id === cartItem.id)
        return value + (item?.price || 0) * cartItem.quantity
    }, 0)

    return (
        <>
            <div className={`w-screen h-screen bg-black absolute top-0 opacity-40 ${open ? "visible" : "hidden"}`} onClick={closeCart}></div>
            <div className={`absolute top-0 w-full h-full max-h-screen overflow-y-auto xl:w-1/4 lg:w-1/3 md:w-1/2 sm:w-3/4 bg-white min-h-screen px-4 ${open ? "xl:left-3/4 lg:left-2/3 md:left-1/2 sm:left-1/4" : 'left-full'} transition-all`}>
                <div className="flex justify-between h-14 items-center">
                    <div className='font-medium text-3xl'>Cart</div>
                    <svg onClick={closeCart} fill={icoColor} onMouseEnter={changeColorWhite} onMouseLeave={changeColorBlue} className='min-w-fit cursor-pointer w-12 h-12 border p-2 border-blue-600 rounded-full hover:bg-blue-600 hover:scale-110 transition-all hover:border-white' height="512px" id="Layer_1" version="1.1" viewBox="0 0 512 512" width="512px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <path d="M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5  c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9  c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z" />
                    </svg>
                </div>
                <div className="flex flex-col gap-3 mt-6">
                    {cartItems.map(item => {
                        return <CartItem key={item.id} {...item} />
                    })}
                </div>
                <div className="text-right mt-2 text-2xl font-medium">Total: {formarCurrency(totalPrice)}</div>
            </div>
        </>
    )
}
