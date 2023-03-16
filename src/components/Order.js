import React, { useEffect } from 'react';
import { motion} from 'framer-motion';
//import { useState } from 'react';


const containerVariants={
  hidden:{
    x: '100vh',
    opacity:0,
  },
  visible: {
    opacity:1,
    x:0,
    transition:{
      type: 'spring',
      //delay:0.5,
      mass:0.4,
      damping:8,
      when: 'beforeChildren',
      staggerChildren:0.4
    }
  },
  exit:{
    x:'-100vw',
    transition: {ease: 'easeInOut'}
  }
}

const childVariants={
  hidden:{
    opacity:0
  },
  visible:{
    opacity:1
  }
}

const Order = ({ pizza, setShowModal }) => {
    // const [showTitle, setShowTitle] = useState(true);
    // setTimeout (()=>{
    //   setShowTitle(false)
    // },4000)

    useEffect(()=>{
      setTimeout(()=>{
        setShowModal(true)
      }, 5000)
    },[setShowModal])

  return (
    <motion.div className="container order"
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        exit='exit'
    >
      {/* <AnimatePresence>
        {showTitle && (
        <motion.h2
          exit={{y: -1000}}
        >Thank you for your order :)</motion.h2>
        )}
      </AnimatePresence> */}
      <h2>Thank you for your order :)</h2>
      <motion.p variants={childVariants} >You ordered a {pizza.base} pizza with:</motion.p>
      <motion.div
        variants={childVariants}
      >
      {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
      </motion.div>
    </motion.div>
  )
}

export default Order;