import { Tiptap } from './TipTap'
import styles from './page.module.css'

export default function Home() {
  return (
    <div style={{ width: '800px', margin: '100px', border: 'solid 1px #ccc', padding: '100px' }} className={styles.tiptap}>
      <Tiptap />
    </div>
  );
}
