import Layout from '@/components/Layout/Layout'
import React, { useState } from 'react'
import { useCart } from "react-use-cart";

const data = [
  {
    id: 1,
    title: "Eighteen Tee",
    price: 40,
    sizes: [{name: 'XS',full:'Extra-Small'},{name: 'S',full:'Small'},{name: 'M',full:'Medium'},{name: 'L',full:'Large'},{name: 'XL',full:'Extra-Large'},{name: 'XXL',full:'Double-Extra-Large'}],
    colors: [{name: 'white', class: 'bg-neutral-300'},{name: 'black', class: 'bg-neutral-800'},{name: 'green', class: 'bg-lime-900'},{name: 'red', class: 'bg-amber-800'}],
    image: 'https://cdn.shopify.com/s/files/1/0713/1693/0869/products/EighteenT-Shirt_WHITE__FRONT.jpg?v=1679484481'
  },
]


function ProductDetail() {

  const [selectedColor, setselectedColor] = useState(data[0].colors[0])
  const [selectedSize, setselectedSize] = useState(data[0].sizes[0])

  const { addItem, items, inCart } = useCart();

  const addToCart = () => {
    addItem({
      id: data[0].id,
      title: data[0].title,
      price: data[0].price,
      size: selectedSize,
      color: selectedColor,
      image: data[0].image
    })

    console.log(items)
  }

  return (
    <Layout>

        <div className="py-20 px-3 lg:px-10">
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-0 lg:gap-x-10 gap-y-10 lg:gap-y-0">
              <div>
                <img src={data[0].image} alt="" />
              </div>
              <div>
                <img src={data[0].image} alt="" />
              </div>

              <div>
                <div className="text-sm mb-6 text-stone-500 tracking-wide">New</div>
                <div className="font-bold text-3xl uppercase text-stone-900">manors LOGO T-SHIRT</div>
                <div className="mt-3 text-xl font-semibold text-stone-900">£40</div>

                <p className="text-sm tracking-wide mt-5 text-stone-600 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni labore quisquam numquam! Ut totam quas, suscipit atque itaque provident consequuntur?</p>

                {<div className="mt-6 inline-flex border border-stone-400 bg-white rounded-sm">
                  {data[0].sizes.map(size =>
                    <div onClick={() => setselectedSize(size)} className={`h-9 w-14 tt cursor-pointer flex items-center justify-center overflow-hidden border-r border-stone-400 pt-0.5 text-sm ${selectedSize.full === size.full ? "bg-stone-900 text-white" : "text-slate-800"}`}>{size.name}</div>  
                  )}
                  </div>}

                <div className="flex justify-between items-center mt-8">
                  <div className="flex gap-2">
                    {data[0].colors.map(color => 
                      <div onClick={() => setselectedColor(color)} className={`h-6 w-6 tt rounded-full ${color.class} ${selectedColor.name === color.name && "ring-1 ring-stone-800 ring-offset-1"}`}></div>
                    )}
                  </div>
                  <div className="capitalize text-stone-600 text-sm">{selectedColor.name}</div>
                </div>

                <div className="mt-8">
                  <button onClick={addToCart} className="w-full bg-stone-800 text-white text-sm uppercase py-3 px-8 font-semibold rounded-full hover:bg-stone-900 tt">{inCart(data[0].id) ? "In cart" : "£40 - add to bag"}</button>
                </div>

              </div>
            </div>
        </div>

    </Layout>
  )
}

export default ProductDetail


