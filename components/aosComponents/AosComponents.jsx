import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import styles from '../../app/page.module.css'


export default function AosComponents({children}) {

    useEffect(() => {
        AOS.init({
          delay:0,
          duration: 300,
        });
      },[]);

  return (
    <div data-aos="fade-down" className={styles.MatchContainer}>{children}</div>
  )
}
