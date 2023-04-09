import styles from './Headline.module.css';

export function Headline(props) {
  return (
    <>
      <h1 className={styles.title}>{props.page} Page</h1>

      <p>Get started by editing {props.children}</p>
    </>
  );
}
