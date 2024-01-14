import emptyCart from '../../../assets/illustrator/emptyCart.svg'

function EmptyCart() {
    return (
        <div className='w-full flex justify-center'>
            <img src={emptyCart} alt="w-[30rem]" className=""/>
        </div>
    )
}

export default EmptyCart;