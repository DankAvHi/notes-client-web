"use client";

import { Notes } from "@/entities/note";
import { NoteCard } from "@/entities/note";

export const List = (props: { notes: Notes }) => {
    const { notes } = props;
    const pinnedNotes = notes.filter((note) => note.pinned && !note.deleted);
    const defaultNotes = notes.filter((note) => !note.pinned && !note.deleted);
    return (
        <>
            {notes.length > 0 ? (
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
