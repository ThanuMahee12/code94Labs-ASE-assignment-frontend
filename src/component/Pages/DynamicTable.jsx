import React, { memo } from 'react'
import { FaPencilAlt, FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function DynamicTable({headers,rows}) {
    return (
       <table className='table w-full text-center'>
        <thead>
{headers?.map((head,index)=>(<th className={`text-[#001EB9] ${head.width}`} key={index}>{head.title}</th>))}

        </thead>
        <tbody>
            {rows?.map((product,index)=>(
                <tr key={index} className='border-b-2 border-gray-100 py-3'>
                <td className='text-gray-500'>{product?.sku}</td>
                <td><img src={product?.image}/></td>
                <td>{product?.name}</td>
                <td>{product?.quantity}</td>
                <td>
                    <div>
                        <button>Delete</button>
                        <Link><FaPencilAlt/></Link>
                        <button><FaStar/></button>
                    </div>
                </td>
                </tr>
            ))}
        </tbody>
       </table> 
    )
}

export default memo(DynamicTable)
