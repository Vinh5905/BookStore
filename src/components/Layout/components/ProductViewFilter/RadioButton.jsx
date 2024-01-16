
function Radio({ HandleClick, value, title, name })
{
    return (
    <label className="flex flex-row items-center my-3">
        <input onChange={HandleClick} type="radio" value={value} name={name} />
        <span className="mr-1"></span>{title}
    </label>   
    )
}
export default Radio;