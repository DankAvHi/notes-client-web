import { Card } from "@/shared/ui";
import styles from "./NoteCard.module.css";
import typographyStyles from "@/shared/styles/themes/material/typography.module.css";
import { Button } from "@/shared/ui/Button";
import { Note } from "../..";

export const NoteCard = (props: { note: Note }) => {
    const { content, title, id } = props.note;

    return (
        <Button className={`${styles.NoteCard}`} elementType="link" href={{ pathname: `edit`, query: { id: id } }}>
            <Card className={`${styles.card}`}>
                <h2 className={`${typographyStyles["title-medium"]} ${styles.typography} ${styles.title}`}>{title}</h2>
                <p className={`${typographyStyles["body-medium"]} ${styles.typography} ${styles.text}`}>{content}</p>
            </Card>
        </Button>
    );
};
