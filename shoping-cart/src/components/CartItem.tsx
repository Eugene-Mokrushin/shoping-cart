import React, { useState } from 'react'
import { useShoppingCart } from '../context/ShoppingCartContext'
import storeItems from '../data/items.json'
import { formarCurrency } from '../utilities/formatCurrency'

type CartItemProps = {
  id: number,
  quantity: number
}

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart()
  const [icoColor, setIcoColor] = useState('#da3546')
  function changeColorWhite() {
    setIcoColor('#ffffff')
  }
  function changeColorRed() {
    setIcoColor('#da3546')
  }
  const item = storeItems.find(item => item.id === id)
  if (item == null) return null
  return (
    <div className='flex h-28'>
      <img src={item.imgUrl} className="object-cover aspect-video w-2/5" alt="product image" />
      <div className="ml-2 flex flex-col justify-center">
        <div><span className='text-lg'>{item.name}</span><span className='text-gray-400 text-sm'>  x{quantity}</span></div>
        <div className="text-gray-400">{formarCurrency(item.price)}</div>
      </div>
      <div className='flex ml-auto items-center gap-2'>
        <div className='text-lg'>{formarCurrency(item.price * quantity)}</div>
        <svg fill={icoColor} onClick={() => removeFromCart(id)} onMouseEnter={changeColorWhite} onMouseLeave={changeColorRed} className='min-w-fit cursor-pointer w-10 h-10 border p-2 border-dangerRed rounded-lg hover:bg-dangerRed hover:scale-110 transition-all hover:border-white' height="512px" id="Layer_1" version="1.1" viewBox="0 0 512 512" width="512px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <path d="M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5  c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9  c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z" />
        </svg>
      </div>
    </div>
  )
}
