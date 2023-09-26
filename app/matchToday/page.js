import React from 'react'
import styles from '../page.module.css'
import ButtonTest from '@/components/buttons/ButtonTest';

function MatchToday() {
  return (
    <main className={styles.mainNavigation}>
      <ButtonTest/>
       <h1>Match today</h1>
    </main>
  )
}

export default MatchToday;