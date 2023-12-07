import { Editor } from "./Editor";
import { TopBar } from "./TopBar";
import { EditProvider } from "./edit.provider";
import styles from "./page.module.css";

type EditPageProps = {
    searchParams: { id: string };
};

export default function Edit({ searchParams }: EditPageProps) {
    const { id } = searchParams;
    const isNew = id === "new";
    const editableId = isNaN(+id) ? undefined : +id;
    return (
        <EditProvider id={editableId} isNew={isNew}>
            <main className={styles.edit}>
                <TopBar />
                <Editor />
            </main>
        </EditProvider>
    );
}
