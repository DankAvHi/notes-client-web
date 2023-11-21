import { Card } from "@/shared/ui";
import styles from "./NotesList.module.css";
import typographyStyles from "@/shared/styles/themes/material/typography.module.css";
import type { Notes } from "@/shared/api";

const notesMock: Notes = [
    {
        id: 0,
        content: `Длинный текст очень важной, или не очень, заметки. Текст рыба не работает, доказано`,
        title: "Заголовок",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: 1,
        content: `Длинный текст очень важной, или не очень, заметки. Текст рыба не работает, доказано`,
        title: "Заголовок",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: 2,
        content: `Длинный текст очень важной, или не очень, заметки. Текст рыба не работает, доказано`,
        title: "Заголовок",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: 3,
        content: `Длинный текст очень важной, или не очень, заметки. Текст рыба не работает, доказано`,
        title: "Заголовок",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
];

export const NotesList = () => {
    return (
        <div className={styles.NotesList}>
            {notesMock.map((note) => (
                <Card className={styles.Note} key={note.id}>
                    <h3 className={typographyStyles["title-medium"]}>{note.title}</h3>
                    <p className={typographyStyles["body-medium"]}>{note.content}</p>
                </Card>
            ))}
        </div>
    );
};
