import React, { useState } from 'react'
import {ChevronUpIcon,ChevronDownIcon} from '@heroicons/react/24/solid'
import {AnimatePresence, motion} from 'framer-motion'

function Accordian(props) {

    const [open, setopen] = useState(false)

  return (
    <div>
        <div className="border-t border-b border-neutral-300 px-4 oveflow-hidden">
            <div className="flex justify-between items-center py-4">
                <div className="text-neutral-800 font-medium tracking-wide">
                    {props.label}
                </div>
                <div onClick={() => setopen(!open)} className="text-neutral-700">
                    { open ? <ChevronUpIcon className='w-4 h-4'/> : <ChevronDownIcon className='w-4 h-4'/>}
                </div>
            </div>
            <AnimatePresence>
            {
                open &&
                <motion.p initial={{height:0}} animate={{height:'auto'}} exit={{height:0}} transition={{duration:0.3,ease:[0.16, 1, 0.3, 1]}} className="text-neutral-700 leading-relaxed overflow-clip mb-4 tracking-wide">
                    {props.children}
                </motion.p>
            }
            </AnimatePresence>
        </div>
    </div>
  )
}

export default Accordian