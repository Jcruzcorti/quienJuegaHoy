import React from 'react'
import styles from '../page.module.css'
import ButtonTest from '@/components/buttons/ButtonTest';

function MatchTomorrow() {
  return (
    <main className={styles.main}>
      <ButtonTest/>
      <h1>Match Tomorrow</h1>
    </main>
  )
}

export default MatchTomorrow;