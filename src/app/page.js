"use client"
import { useEffect, useRef } from 'react'
import styles from './page.module.css'
import { motion, useInView } from 'framer-motion'
const phrases = [
  "It is a long established fact",
  "that a reader will be distracted",
  "by the readable content of a page",
  "when looking at its layout."
]

export default function Home() {

  
  return (
    <main className={styles.main}>

      <MaskText phrases={phrases}></MaskText>
      <MaskText></MaskText>
      <MaskText></MaskText>
      <MaskText></MaskText>
    </main>
  )
}

function MaskText() {
  const body = useRef(null);
  const isInView = useInView(body,{ once: true, margin: "-10%" });
  const animate = {
    initial: {y:'100%'},
    open: (i) => ({y:'0%', transition: {duration:0.5, delay:0.1*i} , ease:[0.33, 1, 0.68, 1]})
  }
  useEffect(
    ()=>{
      console.log(isInView);
    },[isInView]
  )



  return (
    <div ref={body} className={styles.body}>
      {
        phrases.map((phrase, index) => {
          return <div key={index} className={styles.lineMask}>
            <motion.p variants={animate} custom={index} initial="initial" animate={isInView? "open":""}>{phrase}</motion.p>
          </div>
        })
      }
    </div>
  )

}