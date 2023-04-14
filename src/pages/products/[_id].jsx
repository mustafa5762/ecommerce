import Accordian from '@/components/Accordian'
import Breadcrumb from '@/components/Breadcrumb'
import Layout from '@/components/Layout/Layout'
import Rating from '@/components/Rating'
import React from 'react'

const data = [
  {
    id: 1,
    title: "Eighteen Tee",
    price: 40,
    image: 'https://cdn.shopify.com/s/files/1/0713/1693/0869/products/EighteenT-Shirt_WHITE__FRONT.jpg?v=1679484481'
  },
  {
    id: 1,
    title: "Manors Logo T-Shirt",
    price: 40,
    image: 'https://cdn.sanity.io/images/9aznesrq/production/229935689f693603af5e05fa14c467dd700252ca-4000x5000.jpg?w=2400&h=3000&q=80&auto=format'
  },
  {
    id: 1,
    title: "MGA T-Shirt",
    price: 40,
    image: 'https://cdn.sanity.io/images/9aznesrq/production/5c0eb72a5c04dfbf790ea66fd9f5a08d00074ad3-4000x5000.jpg?w=2400&h=3000&q=80&auto=format'
  },
  {
    id: 1,
    title: "The Blazer Supper Club T-Shirt",
    price: 50,
    image: 'https://cdn.sanity.io/images/9aznesrq/production/a403048c362b65e9417daba67664dffe53e702b9-4000x5000.jpg?w=2400&h=3000&q=80&auto=format'
  },
  {
    id: 1,
    title: "Focus T-Shirt",
    price: 50,
    image: 'https://cdn.sanity.io/images/9aznesrq/production/9ef355e8cf43bd1c8d03dd0853a45a44fb61f234-4000x5000.jpg?w=2400&h=3000&q=80&auto=format'
  }
]


function ProductDetail() {
  return (
    <Layout>

        <div className="py-20 px-2 lg:px-14">
            

            <div className="lg:flex lg:space-x-2">

                <div className='lg:w-2/6'>
                <img className='bg-neutral-200' src={data[2].image} alt="" />
                </div>

                <div className='lg:w-2/6'>
                    <img className='bg-neutral-200' src={data[2].image} alt="" />
                </div>
                

                <div className='lg:w-2/6 lg:pl-8 mt-8 lg:mt-0'>
                    <h1 className="text-3xl font-bold text-neutral-800 uppercase">{data[2].title}</h1>
                    <div className="mt-4">
                      <div className="text-neutral-800 text-2xl font-medium">£ {data[1].price}</div>
                    </div>
                    <div className="mt-4">
                      <p className="text-neutral-700 leading-relaxed tracking-wide text-sm lg:text-base">
                        Join the witches of the Coven and their cause to raise the Old Gods back to their thrones with the Coven Hoodie.
                      </p>
                    </div>

                    <div className="inline-flex items-center mt-8 border border-neutral-500 w-auto rounded-sm">
                      <div className="w-12 h-10 bg-neutral-800 text-neutral-50 flex justify-center items-center">S</div>
                      <div className="w-12 bg-white h-10 border-r border-neutral-500 text-neutral-800 flex justify-center items-center">M</div>
                      <div className="w-12 bg-white h-10 border-r border-neutral-500 text-neutral-800 flex justify-center items-center">L</div>
                      <div className="w-12 bg-white h-10 text-neutral-800 flex justify-center items-center">C</div>
                    </div>

                    <div className="mt-10 flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 bg-neutral-200 rounded-full"></div>
                        <div className="w-8 h-8 bg-neutral-800 rounded-full"></div>
                        <div className="w-8 h-8 bg-lime-900 rounded-full ring-2 ring-neutral-800 ring-offset-2"></div>
                        <div className="w-8 h-8 bg-amber-800 rounded-full"></div>
                      </div>
                      <div className="text-neutral-600 text-sm uppercase tracking-wide">Green</div>
                    </div>
                    <button className="bg-neutral-800 hover:bg-neutral-700 transition-all transition-300 text-neutral-100 py-4 rounded-full mt-10 uppercase text-sm font-semibold w-full">£ 40  -  Add to bag</button>
                </div>
            </div>
        </div>

    </Layout>
  )
}

export default ProductDetail


