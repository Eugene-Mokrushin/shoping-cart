import { useShoppingCart } from '../context/ShoppingCartContext'
import { formarCurrency } from '../utilities/formatCurrency'

type StoreItemProps = {
    id: number,
    name: string,
    price: number,
    imgUrl: string
}

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
    const { getItemQuantity, increaseCartQuantity, descreaseCartQuantity, removeFromCart } = useShoppingCart()
    const quantity = getItemQuantity(id)
    return (
        <div className="shadow-md h-full bg-white rounded-lg">
            <img src={imgUrl} alt="product image" className='h-52 rounded-t-lg object-cover w-full' />
            <div className="flex flex-col">
                <div className="flex justify-between items-baseline mb-4 pt-4 px-4 ">
                    <span className='text-2xl font-semibold'>{name}</span>
                    <span className='ml-2 text-gray-600 text-lg font-semibold'>{formarCurrency(price)}</span>
                </div>
            </div>
            <div className="mt-auto px-4 rounded-b-lg">
                {quantity === 0 ? (
                    <div className="w-full bg-blue-600 mb-4 text-white text-center py-2 rounded-md select-none hover:cursor-pointer" onClick={() => increaseCartQuantity(id)}>+ Add To Cart</div>
                ) : (
                    <div className='flex items-center flex-col gap-2'>
                        <div className="flex items-center justify-center gap-2">
                            <button className="bg-blue-600 w-8 h-8 grid content-center align-middle text-white text-center py-2 rounded-md select-none hover:cursor-pointer active:bg-blue-800 transition-all" onClick={() => descreaseCartQuantity(id)}>-</button>
                            <div className='flex items-center'><span className='text-2xl mr-2'>{quantity}</span> in cart</div>
                            <button className="bg-blue-600 w-8 h-8 grid content-center align-middle text-white text-center py-2 rounded-md select-none hover:cursor-pointer active:bg-blue-800 transition-all" onClick={() => increaseCartQuantity(id)}>+</button>
                        </div>
                        <button className='bg-dangerRed text-white px-2 py-1 rounded-lg mb-4' onClick={() => removeFromCart(id)}>Remove</button>
                    </div>
                )}
            </div>
        </div>
    )
}
