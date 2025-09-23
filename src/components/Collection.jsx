import React, { useContext } from 'react'
import { ShopContext } from '../context/shopContext'

const {products} = useContext(ShopContext)

const Collection = () => {
  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
            {/* filter options in this part */}
            <div className='min-w-60'>
                <p className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS</p>
            </div>
    </div>
  )
}

export default Collection