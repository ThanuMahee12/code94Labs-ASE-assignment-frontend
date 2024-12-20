import React, { memo } from 'react'
import DynamicTable from '../component/Pages/DynamicTable'


function MainPage() {
    return (
        <>
      
         <DynamicTable headers={[
          {title:'SKU',width:"w-1/12"},
          {title:'IMAGE',width:"w-2/12"},
          {title:"PROUCT NAME",width:"w-5/12"},
          {title:"Price",width:"w-1/12"},
          {title:" ",width:"w-3/12"}]} rows={[{name:"dfdfd",image:"ddfdf",sku:"dfdfd",quantity:23.43}]}/>
        </>
      
    )
}

export default memo(MainPage)
