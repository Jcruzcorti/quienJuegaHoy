import Image from 'next/image'
import styles from './page.module.css'
import ButtonTest from '@/components/buttons/ButtonTest'
import AppBarNav from '@/components/appBar/AppBarNav'


export default function Home() {
  return (
    <main className={styles.main}>
      {/* <ButtonTest/> */}
      <AppBarNav/>
    </main>
  )
}
