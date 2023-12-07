"use client";

import { Notes } from "@/entities/note";
import { NoteCard } from "@/entities/note";

export const List = (props: { notes: Notes }) => {
    const { notes } = props;
    const normalNotes = notes.filter((note) => !note.deleted);
    const pinnedNotes = normalNotes.filter((note) => note.pinned);
    const defaultNotes = normalNotes.filter((note) => !note.pinned);
    return (
        <>
            {defaultNotes.length > 0 || pinnedNotes.length > 0 ? (
                <>
                    {pinnedNotes.map((note) => (
                        <NoteCard note={note} key={`${note.id} ${note.createdAt}`} />
                    ))}
                    {defaultNotes.map((note) => (
                        <NoteCard note={note} key={`${note.id} ${note.createdAt}`} />
                    ))}
                </>
            ) : (
                <p>{`Нет сохранённых заметок`}</p>
            )}
        </>
    );
};
