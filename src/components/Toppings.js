import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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
      delay:0.5
    }
  },
   exit:{
      x: '-100vh',
      transition:{ease: 'easeInOut'}
    }
  
}

const buttonVariants={
  // visible:{
  //   x: [0, -20, 20],
  //   transition:{delay:2}
  // },
  hover:{
    //scale: [1,1.1,1,1.1,1,1.1,1],
    scale:1.1,
    textShadow:'0px 0px 8px rgb(255,255,255)',
    boxShadow:'0px 0px 8px rgb(255,255,255)',
    transition:{
      // yoyo: 10
      duration: 0.3,
      yoyo: Infinity
    }
  }
}

const Toppings = ({ addTopping, pizza }) => {
  let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];

  return (
    <motion.div className="toppings container"
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map(topping => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <motion.li key={topping} onClick={() => addTopping(topping)}
              whileHover={{scale:1.3,originX:0, color:'#f8e112'}}
              transition={{type:'spring', stiffness:300}}
            >
              <span className={spanClass}>{ topping }</span>
            </motion.li>
          )
        })}
      </ul>

      <Link to="/order">
        <motion.button
        variants={buttonVariants}
          // whileHover={{
          //   scale: 1.1,
          //   textShadow:'0px 0px 8px rgb(255,255,255)',
          // }}
          whileHover='hover'
        >
          Order
        </motion.button>
      </Link>

    </motion.div>
  )
}

export default Toppings;