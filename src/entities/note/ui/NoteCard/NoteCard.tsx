import { Card } from "@/shared/ui";
import styles from "./NoteCard.module.css";
import typographyStyles from "@/shared/styles/themes/material/typography.module.css";
import { Note } from "@/shared/api";

export const NoteCard = (props: Note) => {
    const { content, title } = props;
    return (
        <Card className={styles.NoteCard}>
            <h3 className={typographyStyles["title-medium"]}>{title}</h3>
            <h3 className={typographyStyles["body-medium"]}>{content}</h3>
        </Card>
    );
};
