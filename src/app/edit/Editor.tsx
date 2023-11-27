"use client";

import { ChangeEvent } from "react";
import styles from "./Editor.module.css";
import { useEditContext } from "./edit.provider";
import typographyStyles from "@/shared/styles/themes/material/typography.module.css";

export const Editor = () => {
    const { title, setTitle, content, setContent } = useEditContext();

    const titleOnChangeHandler = (event: ChangeEvent<HTMLInputElement>) => setTitle(event.target.value);
    const contentOnChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => setContent(event.target.value);

    return (
        <div className={styles.Editor}>
            <input
                className={`${typographyStyles["headline-large"]} ${styles.title}`}
                type="text"
                value={title}
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
