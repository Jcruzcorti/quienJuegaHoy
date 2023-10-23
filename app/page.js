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
        </nav>
        <main >
          {/* <h2>BIENVENIDOS A QUIEN JUEGA HOY</h2> */}
          <InformationAlert/>
          <DataMatchListContainer/>
        </main>
      </>
  )
}
