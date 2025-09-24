import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/shopContext'
import ProductItem from './ProductItem';
import Title from './Title';

const RelatedProduct = ({category,subCategory}) => {

    const{products} = useContext(ShopContext);
    const[relatedProduct, setRelatedProduct] = useState([]);

    useEffect(()=>{
        if(products.length > 0){
            let rp = products.filter((p) => p.category === category);
            rp = products.filter((p) => p.subCategory === subCategory);
            rp = rp.slice(0,4);
            setRelatedProduct(rp);
        }
    },[products])



  return (
        <div className='my-24'>
            <div className='text-center text-3xl py-2'>
               <Title text1={"RELATED"} text2={"PRODUCTS"} />
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:gird-cols-5 gap-4 gap-y-6'>
                {relatedProduct.map((item,index)=>(
                    <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
                ))}
            </div>

        </div>
  )
}

export default RelatedProduct