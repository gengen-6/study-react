import Image from 'next/image'
import styles from '@/styles/Home.module.css'

export function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        Powerd by{" "}
      <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          className={styles.vercelLogo}
          width={100}
          height={24}
          priority
        />
      </footer>
    </>
  )
}