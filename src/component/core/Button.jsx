import React, { memo } from 'react'

function Button({children,onClick,className='',varient='normal',rounded='full'}) {

    const variantclass=varient==='normal'?"bg-[#001EB9] hover:bg-blue-600 text-white":"border border-2 text-[#001EB9] border-[#001EB9] hover:shadow-md"
    const sizeclass="px-6 py-3"
const roundedclass=rounded==='full'?'rounded-full':'rounded-lg'
    return (
        <button className={`${className} ${roundedclass} ${sizeclass} ${variantclass} font-semibold`}  onClick={onClick}>
{children}
        </button>
    )
}

export default memo(Button)