"use client";

import { Card } from "@/shared/ui";
import styles from "./NotesList.module.css";
import typographyStyles from "@/shared/styles/themes/material/typography.module.css";
import { useGetNotes } from "@/entities/note";

export const NotesList = () => {
    const { data, error, isLoading } = useGetNotes();

    if (error) {
        return <p>{`Ошибка при загрузке данных`}</p>;
    }

    return (
        <div className={styles.NotesList}>
            {isLoading
                ? `Загрузка`
                : data.map((note) => (
                      <Card className={styles.Note} key={note.id}>
                          <h3 className={typographyStyles["title-medium"]}>{note.title}</h3>
                          <p className={typographyStyles["body-medium"]}>{note.content}</p>
                      </Card>
                  ))}
        </div>
    );
};
