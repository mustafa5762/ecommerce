import Link from 'next/link'
import React from 'react'

function ProductCard({product}) {
  return (
    <Link href={`/products/${product.id}`}>
    <div className=''>
        <div className='bg-gray-300'>
          <img src={product.image} className='w-full object-contain' alt="" />
        </div>
        <div className="mt-2 lg:mt-4 ml-1 lg:ml-2">
          <div className="font-semibold text-neutral-800 text-xs lg:text-sm tracking-wide">{product.title}</div>
          <div className="mt-1 text-xs lg:text-sm text-neutral-600 font-medium">£ {product.price}</div>
          <div className="flex items-center space-x-2.5 mt-4">
            <div className="w-4 h-4 bg-neutral-200 rounded-full"></div>
            <div className="w-4 h-4 bg-neutral-800 rounded-full"></div>
            <div className="w-4 h-4 bg-lime-900 rounded-full ring-1 ring-neutral-800 ring-offset-2"></div>
            <div className="w-4 h-4 bg-amber-800 rounded-full"></div>
          </div>
        </div>
    </div>
    </Link>
  )
}

export default ProductCard