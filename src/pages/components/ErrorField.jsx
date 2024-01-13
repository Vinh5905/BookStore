function ErrorField( {children} ) {
    return (
        <div className="absolute top-full w-full">
            <p className="text-right text-[--primary-color] text-xs mt-1">{children}</p>
        </div>
    )
}

export default ErrorField;