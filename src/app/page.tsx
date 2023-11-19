import { Search } from "@/widgets/Search";
import styles from "./page.module.css";

export default function Home() {
    return (
        <main className={styles.main}>
            <Search />
        </main>
    );
}
