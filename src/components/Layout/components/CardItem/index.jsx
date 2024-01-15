const Item = (props) => {
    return (
        <div className="relative flex flex-col items-center">
            <div className="relative w-60 h-72 p-9 shadow-xl border group/parent transition-all">
                <img src={props.src}
                    className=" object-cover w-full h-full transition-all group-hover/parent:scale-75 group-hover/parent:opacity-10"></img>
                <button className="transition-all hover:bg-violet-500 invisible group-hover/parent:visible translate-y-10 z-10 group-hover/parent:-translate-y-20 absolute w-[80%] -ml-3 p-2 bg-TextColor3 text-sm text-white font-normal tracking-widest">ADD TO CART</button>
            </div>
            <div className="flex flex-col items-center z-10 w-full bg-white">
                <p className="text-base text-HeaderColor font-semibold my-2 w-44 text-center line-clamp-1">{props.name}</p>
                <div className="flex flex-row items-center mb-2">
                    <p className="text-sm text-TextColor2 font-normal">Quantity: </p>
                    <p className="text-sm text-TextColor2 font-normal ml-2">{props.quantity}</p>
                </div>
                <p className="text-xl text-TextColor3 font-bold">${props.price}</p>
            </div>
        </div>
    )
}
export default Item;