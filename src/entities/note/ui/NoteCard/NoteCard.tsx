import { Card } from "@/shared/ui";
import styles from "./NoteCard.module.css";
import typographyStyles from "@/shared/styles/themes/material/typography.module.css";
import { Button } from "@/shared/ui/Button";
import { Note } from "../..";
import { PushPin } from "@/shared/assets/icons";

export const NoteCard = (props: { note: Note }) => {
    const { content, title, id, pinned } = props.note;

    return (
        <Button className={`${styles.NoteCard}`} elementType="link" href={`/edit/${id}`}>
            <Card className={`${styles.card}`}>
                {pinned && <PushPin className={styles.pinned} />}
                {title && title.length > 0 && (
                    <h2 className={`${typographyStyles["title-medium"]} ${styles.typography} ${styles.title}`}>
                        {title}
                    </h2>
                )}
                <p className={`${typographyStyles["body-medium"]} ${styles.typography} ${styles.text}`}>{content}</p>
            </Card>
        </Button>
    );
};
