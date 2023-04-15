import Layout from '@/components/Layout/Layout'
import React, { useState } from 'react'
import {ShareIcon} from '@heroicons/react/24/solid'
import Breadcrumb from '@/components/Breadcrumb'
import Rating from '@/components/Rating'

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

        <div className="py-20 px-3 lg:px-10">
            
            <div className="grid grid-cols-1 lg:grid-cols-3 space-y-10 lg:space-x-10">
              <div>
                <img src={data[0].image} alt="" />
              </div>
              <div>
                <img src={data[0].image} alt="" />
              </div>
              <div>
                <div className="uppercase text-3xl font-bold text-neutral-900">Gray running sneakers</div>
                <div className="mt-3">
                  <div className="text-2xl font-semibold text-neutral-800">£ 59.99</div>
                </div>
                <p className="text-neutral-700 tracking-wide mt-3">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque quas accusamus, amet ipsam illum ad optio est quaerat fuga odit!
                </p>
              </div>
            </div>
        </div>

    </Layout>
  )
}

export default ProductDetail


