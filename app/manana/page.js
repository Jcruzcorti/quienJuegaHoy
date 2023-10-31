import React from 'react'
import styles from '../page.module.css'
import ButtonTest from '@/components/buttons/ButtonTest';
import InformationAlert from '@/components/informationAlert/InformationAlert';
import DataMatchListContainerTomorrow from '@/components/dataTomorrow/DataMatchListContainerTomorrow';

function MatchTomorrow() {
  
  return (
    <>        
      <nav className={styles.nav}>
        <ButtonTest/>
        <InformationAlert/>
      </nav>
      <main className={styles.main}>
        <DataMatchListContainerTomorrow/>
      </main>
    </>
  )
}

export default MatchTomorrow;