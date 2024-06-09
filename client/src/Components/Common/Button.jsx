const Button=({value,className='',onClick=()=>{},type})=>{
    return (
        <button className={className} onClick={onClick} type={type}>
            {value}
        </button>
    )
}

export default Button