import './fullSizeLoader.css'


const FullSizeLoader = ({value, setValue, deps, rules, size, backgroundOpacity, children, style, label}) => {

    return (
        <div className={`system_fullSizeLoader ${!value && "disabled"}` } style={{background: backgroundOpacity ? `rgba(0,0,0, ${backgroundOpacity})` : null, ...style}}>
            <div style={{ width: size ? size : null, height: size ? size : null }} className='icon'></div>
            {label ? <label>{label}</label> : children && children}
        </div>
    )

}

export default FullSizeLoader