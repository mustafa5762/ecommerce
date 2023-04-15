import Link from 'next/link'
import React from 'react'

function ProductCard({product}) {
  return (
    <Link href={`/products/${product.id}`}>
    <div className=''>
        <div className='bg-gray-300'>
          <img src={product.image} className='w-full object-contain' alt="" />
        </div>
        <div className="mt-4 ml-2">
          <div className="font-semibold text-neutral-800 text-xs lg:text-sm tracking-wide">{product.title}</div>
          <div className="mt-1.5 text-xs lg:text-sm text-neutral-600 font-medium">£ {product.price}</div>
        </div>
    </div>
    </Link>
  )
}

export default ProductCard