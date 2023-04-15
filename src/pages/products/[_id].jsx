import Layout from '@/components/Layout/Layout'
import React, { useState } from 'react'
import {ShareIcon} from '@heroicons/react/24/solid'

const data = [
  {
    id: 1,
    title: "Eighteen Tee",
    price: 40,
    sizes: [{name: 'XS',full:'Extra-Small'},{name: 'S',full:'Small'},{name: 'M',full:'Medium'},{name: 'L',full:'Large'},],
    colors: [{name: 'white', class: 'bg-neutral-300'},{name: 'black', class: 'bg-neutral-800'},{name: 'green', class: 'bg-lime-900'},{name: 'red', class: 'bg-amber-800'}],
    image: 'https://cdn.shopify.com/s/files/1/0713/1693/0869/products/EighteenT-Shirt_WHITE__FRONT.jpg?v=1679484481'
  },
]


function ProductDetail() {

  const [selectedColor, setselectedColor] = useState(data[0].colors[0])
  const [selectedSize, setselectedSize] = useState(data[0].sizes[0])
  return (
    <Layout>

        <div className="py-20 px-2 lg:px-10">
            

            <div className="lg:flex lg:space-x-2">

                <div className='lg:w-2/6'>
                <img className='bg-neutral-200' src={data[0].image} alt="" />
                </div>

                <div className='lg:w-2/6'>
                    <img className='bg-neutral-200' src={data[0].image} alt="" />
                </div>
                

                <div className='lg:w-2/6 lg:pl-8 mt-8 lg:mt-0'>
                    <h1 className="text-3xl font-bold text-neutral-950 uppercase">{data[0].title}</h1>
                    <div className="mt-4">
                      <div className="text-neutral-950 text-xl font-medium">£ {data[0].price}</div>
                    </div>
                    <div className="mt-4">
                      <p className="text-neutral-700 leading-relaxed tracking-wide text-sm lg:text-base">
                        Join the witches of the Coven and their cause to raise the Old Gods back to their thrones with the Coven Hoodie.
                      </p>
                    </div>

                    <div className="inline-flex items-center mt-8 border border-neutral-400 w-auto rounded-sm">
                      {
                        data[0].sizes.map(size =>
                          <div onClick={() => setselectedSize(size)} className={`cursor-pointer tt text-sm w-12 h-10 border-r border-neutral-400 flex justify-center items-center ${selectedSize.full === size.full ? 'bg-neutral-800 text-neutral-50' : 'bg-white text-neutral-800'}`}>{size.name}</div>  
                        )
                      }
                    </div>

                    <div className="mt-10 flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        {
                          data[0].colors.map(color =>
                            <div onClick={() => setselectedColor(color)} className={`${color.class} w-6 h-6 rounded-full tt ${selectedColor.name === color.name && " ring-2 ring-neutral-800 ring-offset-2" }`}></div>
                          )
                        }
                      </div>
                      <div className="text-neutral-600 text-sm uppercase tracking-wide">{selectedColor.name}</div>
                    </div>
                    <div className="mt-10 flex items-center space-x-5">
                      <div className="text-neutral-700">
                        <ShareIcon className='w-6 h-6'/>
                      </div>
                      <button className="bg-neutral-800 hover:bg-neutral-700 transition-all transition-300 text-neutral-100 py-3 rounded-full uppercase text-sm font-semibold w-full">£ 40  -  Add to bag</button>
                    </div>
                </div>
            </div>
        </div>

    </Layout>
  )
}

export default ProductDetail


