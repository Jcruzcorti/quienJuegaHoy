import React from 'react'
import styles from '../page.module.css'
import ButtonTest from '@/components/buttons/ButtonTest';

function MatchTomorrow() {
  return (
    <main className={styles.mainNavigation}>
      <ButtonTest/>
      <h2>Match Tomorrow</h2>
    </main>
  )
}

export default MatchTomorrow;