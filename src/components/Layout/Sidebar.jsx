import React from 'react'
import {motion} from 'framer-motion'

function Sidebar({open,setopen}) {
  return (
    <div>
        {open && 
        <motion.div style={{zIndex:100}} initial={{left:-320}} animate={{left:0}} transition={{duration:1,ease:[0.16, 1, 0.3, 1]}} className="fixed top-0 left-0 w-80 bg-white h-screen shadow-xl border-r border-neutral-300"></motion.div>
        }
    </div>
  )
}

export default Sidebar