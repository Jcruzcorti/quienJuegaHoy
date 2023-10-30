import styles from './page.module.css'
import ButtonTest from '@/components/buttons/ButtonTest'
import DataMatchListContainer from '@/components/data/DataMatchListContainer'
import InformationAlert from '@/components/informationAlert/InformationAlert'


export default function Home() {
  return (
      <>
        <nav className={styles.nav}>
            <ButtonTest/>
            <InformationAlert/>
        </nav>
        <main className={styles.main}>
            <DataMatchListContainer/>
        </main>
      </>
  )
}
