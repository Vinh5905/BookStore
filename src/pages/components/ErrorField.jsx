function ErrorField( {children, direc} ) {
    return (
        <div className={`absolute ${direc ? direc : "top-full"} w-full`}>
            <p className="text-right text-[--primary-color] text-xs mt-1">{children}</p>
        </div>
    )
}

export default ErrorField;