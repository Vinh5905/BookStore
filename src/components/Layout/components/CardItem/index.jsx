const Item = (props) => {
    return (
        <div className="relative flex flex-col items-center">
            <div className="relative w-60 h-72 p-9 shadow-xl border group/parent transition-all">
                <img src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className=" object-cover w-full h-full transition-all group-hover/parent:scale-75 group-hover/parent:opacity-10"></img>
                <button className="transition-all hover:bg-violet-500 invisible group-hover/parent:visible translate-y-10 z-10 group-hover/parent:-translate-y-20 absolute w-[80%] -ml-3 p-2 bg-TextColor3 text-sm text-white font-normal tracking-widest">ADD TO CART</button>
            </div>
            <div className="flex flex-col items-center z-10 w-full bg-white">
                <p className="text-base text-HeaderColor font-semibold my-2">Simple way of piece life</p>
                <p className="text-sm text-TextColor2 font-normal mb-2">Armor Ramsey</p>
                <p className="text-xl text-TextColor3 font-bold">$40.00</p>
            </div>
        </div>
    )
}
export default Item;