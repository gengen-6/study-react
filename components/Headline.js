import styles from '@/styles/Home.module.css'



export default function Headline(props) {
  return (
    <>
        <h1 className={styles.title}>{props.page} Page</h1>

        <p>
        Get started by editing{" "} 
        <code className={styles.code}>Hello/index.js</code>
        </p>
    </>
  )
}
