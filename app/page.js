import Image from 'next/image'
import styles from './page.module.css'
import ButtonTest from '@/components/buttons/ButtonTest'
import DataMatchListContainer from '@/components/data/DataMatchListContainer'


export default function Home() {
  return (
      <>
        <nav className={styles.nav}>
          <ButtonTest/>
        </nav>
        <main className={styles.main}>
          {/* <h2>BIENVENIDOS A QUIEN JUEGA HOY</h2> */}
          <DataMatchListContainer/>
        </main>
      </>
  )
}
