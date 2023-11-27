import { Notes } from "@/shared/api";
import styles from "./List.module.css";
import { Card } from "@/shared/ui";
import typographyStyles from "@/shared/styles/themes/material/typography.module.css";

export const List = (props: { title: string; notes: Notes }) => {
    const { notes, title } = props;
    return (
        <>
            <p>{`${title}, ${notes.length} штук:`}</p>
            {notes.map((note) => (
                <Card className={styles.Note} key={`${note.id} ${title}`}>
                    {note.title && (
                        <h3 className={`${typographyStyles["title-medium"]} ${styles.text}`}>{note.title}</h3>
                    )}
                    <p className={`${typographyStyles["body-medium"]} ${styles.text}`}>{note.content}</p>
                </Card>
            ))}
        </>
    );
};
