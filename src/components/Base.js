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

const nextVariants={
// initial={{x:'-100vh'}}    
 // animate={{x:0}}
 // transition={{type:'spring', stiffness:120}}
 hidden:{
  x: '-100vw'
 },
 visible:{
  x: 0, 
  transition: {type:'spring', stiffness:120}
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

const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <motion.div className="base container"
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
      // initial={{ opacity: 0, x: '100vw' }}
      // animate={{ opacity: 1, x: 0 }}
      // transition={{ type: 'spring', delay: 0.5 }}
    >

      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li key={base} onClick={() => addBase(base)}
              whileHover={{scale:1.3,originX:0, color:'#f8e112'}}
              transition={{type:'spring', stiffness:300}}
            >
              <span className={spanClass}>{ base }</span>
            </motion.li>
          )
        })}
      </ul>

      {pizza.base && (
        <motion.div className="next"
        variants={nextVariants}
        // initial={{x:'-100vh'}}    
        // animate={{x:0}}
        // transition={{type:'spring', stiffness:120}}

        ///////////////////

        // initial='hidden'
        // animate='visible'
        >
          <Link to="/toppings">
            <motion.button
              // whileHover={{
              //   scale: 1.1,
              //   textShadow:'0px 0px 8px rgb(255,255,255)',
              //   boxShadow:'0px 0px 8px rgb(255,255,255)'
              // }}

              variants={buttonVariants}
              whileHover='hover'
            >Next</motion.button>
          </Link>
        </motion.div>
      )}

    </motion.div>
  )
}

export default Base;