import Layout from '@/components/Layout/Layout'
import ProductCard from '@/components/Products/ProductCard'
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

function Categorypage() {
  return (
    <>
        <Layout>
            <div className="grid grid-cols-2 lg:grid-cols-4 px-2 lg:px-10 mt-10 gap-x-3 lg:gap-x-6 gap-y-6">
              {data?.map(product => <ProductCard product={product}/>)}
            </div>
        </Layout>
    </>
  )
}

export default Categorypage


