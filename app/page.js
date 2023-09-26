import Image from 'next/image'
import styles from './page.module.css'
import ButtonTest from '@/components/buttons/ButtonTest'


export default function Home() {
  return (
    <main className={styles.main}>
      <ButtonTest/>
      {/* <AppBarNav/> */}
    </main>
  )
}
