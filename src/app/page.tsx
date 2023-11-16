import { Notes } from "./notes/Notes";
import styles from "./page.module.css";

export default function Home() {
    return (
        <main className={styles.main}>
            <Notes />
        </main>
    );
}
