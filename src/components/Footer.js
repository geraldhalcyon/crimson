import React from 'react'
import Topfooter from '@/components/Topfooter'
import Midfooter from '@/components/Midfooter'
import Btmfooter from '@/components/Btmfooter'
import styles from "../styles/footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.blockFooter}>
        <>
          <Topfooter />
          <Midfooter />
          <Btmfooter />
        </>
    </footer>
  )
}

export default Footer
