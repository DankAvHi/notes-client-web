"use client";

import { ChangeEvent, useCallback } from "react";
import styles from "./Editor.module.css";
import { useEditContext } from "./edit.provider";
import typographyStyles from "@/shared/styles/themes/material/typography.module.css";

export const Editor = () => {
    const { note, setNote } = useEditContext();
    const { content, title } = note;

    const titleOnChangeHandler = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => setNote((prev) => ({ ...prev, title: event.target.value })),
        [setNote],
    );
    const contentOnChangeHandler = useCallback(
        (event: ChangeEvent<HTMLTextAreaElement>) => setNote((prev) => ({ ...prev, content: event.target.value })),
        [setNote],
    );

    return (
        <div className={styles.Editor}>
            <input
                className={`${typographyStyles["headline-large"]} ${styles.title}`}
                type="text"
                value={title || ""}
                onChange={titleOnChangeHandler}
            />
            <textarea
                className={`${typographyStyles["body-large"]} ${styles.content}`}
                name="content"
                id="content"
                onChange={contentOnChangeHandler}
                value={content}
            ></textarea>
        </div>
    );
};
