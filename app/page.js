import Image from 'next/image'
import styles from './page.module.css'
import ButtonTest from '@/components/buttons/ButtonTest'
import DataMatchList from '@/components/data/DataMatchList'


export default function Home() {
  return (
      <main className={styles.main}>
        <ButtonTest/>
        <h2>BIENVENIDOS A QUIEN JUEGA HOY</h2>
        <DataMatchList/>
      </main>
  )
}
