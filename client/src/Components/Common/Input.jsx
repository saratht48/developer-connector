const Input=({value,name,onChange=()=>{},placeholder='',type='',className='',onFocus=()=>{}})=>{
    return(
        <input value={value} name={name} onChange={onChange} placeholder={placeholder} type={type} className={className} onFocus={onFocus}/>
    )
}
export default Input