import { Editor } from "./Editor";
import { TopBar } from "./TopBar";
import { EditProvider } from "./edit.provider";
import styles from "./page.module.css";

export default function Edit() {
    return (
        <EditProvider>
            <main className={styles.edit}>
                <TopBar />
                <Editor />
            </main>
        </EditProvider>
    );
}
