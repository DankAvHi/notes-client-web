import { Search } from "@/widgets/Search";
import styles from "./page.module.css";
import { NotesList } from "@/widgets/NotesList";
import { CreateNewNoteFAB } from "@/widgets/CreateNewNote";

export default function Home() {
    return (
        <>
            <main className={styles.main}>
                <Search />
                <NotesList />
                <CreateNewNoteFAB />
            </main>
        </>
    );
}
