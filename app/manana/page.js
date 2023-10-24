import React from 'react'
import styles from '../page.module.css'
import ButtonTest from '@/components/buttons/ButtonTest';
import InformationAlert from '@/components/informationAlert/InformationAlert';
import DataMatchListContainer from '@/components/data/DataMatchListContainer';

function MatchTomorrow() {

  
  return (
    <>        
      <nav className={styles.nav}>
        <ButtonTest/>
        <InformationAlert/>
      </nav>
      <main className={styles.main}>
        <h1 className={styles.h1}>¿QUIEN JUEGA MAÑANA?</h1>
        <DataMatchListContainer/>
      </main>
    </>
  )
}

export default MatchTomorrow;