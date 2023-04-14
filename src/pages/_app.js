import '@/styles/globals.css'
import  { ReactLenis } from '@studio-freight/react-lenis'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }) {

  const router = useRouter()
  
  return (
    <AnimatePresence mode='wait'>
      <div key={router.route}>
           <Component {...pageProps} />
      </div>
    </AnimatePresence>)
}
