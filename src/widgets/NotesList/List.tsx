"use client";

import { Notes } from "@/entities/note";
import { NoteCard } from "@/entities/note";

export const List = (props: { notes: Notes }) => {
    const { notes } = props;
    return (
        <>
            {notes.length > 0 ? (
                notes.map((note) => <NoteCard note={note} key={`${note.id} ${note.createdAt}`} />)
            ) : (
                <p>{`Нет сохранённых заметок`}</p>
            )}
        </>
    );
};
