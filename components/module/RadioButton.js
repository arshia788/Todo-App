function RadioButton({status, setStatus, value, title, children,a }) {

    
    return (

        <div className={`flex items-center  gap-x-2 
        w-fit rounded px-4 py-1 text-white`}>

            <span className='mt-1'>
                {children}
            </span>

            <label htmlFor= {value} >
                {title}
            </label>

            <input
            className='mt-1 border-none'
                type='radio'
                id={value}
                value={value}
                checked={status === value }
                onChange={e => setStatus(e.target.value)}/>

        </div>)
}

export default RadioButton