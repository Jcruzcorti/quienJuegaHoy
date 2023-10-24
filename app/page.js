import Image from 'next/image'
import styles from './page.module.css'
import ButtonTest from '@/components/buttons/ButtonTest'
import DataMatchListContainer from '@/components/data/DataMatchListContainer'
import InformationAlert from '@/components/informationAlert/InformationAlert'


export default function Home() {
  return (
      <>
        <nav className={styles.nav}>
            <ButtonTest/>
          {/* <div className={styles.navInfo}> */}
            <InformationAlert/>
          {/* </div> */}
        </nav>
          <main className={styles.main}>
            <h1 className={styles.h1}>¿QUIEN JUEGA HOY?</h1>
            {/* <InformationAlert/> */}
            <DataMatchListContainer/>
          </main>
      </>
  )
}
