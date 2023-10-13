import React from 'react'
import styles from '../page.module.css'
import ButtonTest from '@/components/buttons/ButtonTest';

function MatchTomorrow() {
  return (
    <>        
      <nav className={styles.nav}>
        <ButtonTest/>
      </nav>
      <main className={styles.mainNavigation}>
        <h2>Match Tomorrow</h2>
      </main>
    </>
  )
}

export default MatchTomorrow;