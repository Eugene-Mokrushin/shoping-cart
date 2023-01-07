import React from 'react'
import storeItems from '../data/items.json'
import { StoreItem } from '../components/StoreItem'

export function Store() {
  return (
    <>
      <h1 className='text-3xl font-medium pl-7'>Store</h1>
      <div className="grid w-full gap-3 md:grid-cols-2 sm:grid-cols-1 xl:grid-cols-3">
        {storeItems.map((item) => {
          return (
            <div key={item.id}><StoreItem {...item}/></div>
          )
        })}
      </div>
    </>
  )
}
