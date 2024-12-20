import React, { memo } from 'react'
import { Link } from 'react-router-dom'

function Button({ children, onClick, to,others, className = '', varient = 'normal', rounded = 'normal' }) {

    const variantclass = varient === 'normal' ? "bg-[#001EB9] disabled:bg-sky-700 hover:bg-blue-700 text-white" : "border border-2 text-[#001EB9] border-[#001EB9] disabled:border-blue-700 hover:shadow-md"
    const sizeclass = "px-6 py-2"
    const roundedclass = rounded === 'full' ? 'rounded-full' : 'rounded-lg'
    return to ? 
    (<Link {...others} className={`${className} ${roundedclass} ${sizeclass} ${variantclass} font-semibold`} to={to}>{children}</Link>) : 
    (<button {...others} className={`${className} ${roundedclass} ${sizeclass} ${variantclass} font-semibold `} onClick={onClick}>
        {children}
    </button>)
}


export default memo(Button)