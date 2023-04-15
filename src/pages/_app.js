import '@/styles/globals.css'
import  { ReactLenis } from '@studio-freight/react-lenis'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import { CartProvider } from "react-use-cart";

export default function App({ Component, pageProps }) {

  const router = useRouter()
  
  return (
    <AnimatePresence mode='wait'>
      <div key={router.route}>
        <CartProvider>
          <Component {...pageProps} />
        </CartProvider>
      </div>
    </AnimatePresence>)
}
