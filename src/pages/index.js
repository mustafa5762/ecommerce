import Layout from "@/components/Layout/Layout";



export default function Home() {
  return (
    <>
      <Layout>
        <div className="w-full h-screen absolute top-0 left-0">
          <video autoPlay muted loop src="https://cdn.shopify.com/videos/c/o/v/197b08b3833044dab2d8ed2d6ec3e6f4.mp4" className="w-full h-full object-cover object-center"></video>
        </div>
        <div className="h-screen"></div>
        <div className="text-center">
          <h5 className="tracking-widest text-purple-500 uppercase font-semibold">Featured in</h5>
          <h2 className="text-4xl font-bold text-neutral-950 mt-3 tracking-tight">Gaming Tees</h2>
        </div>
        <div className="h-80"></div>
      </Layout>
    </>
  )
}
