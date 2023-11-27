"use client";

import { IconButton } from "@/shared/ui";
import styles from "./TopBar.module.css";
import { ArrowBack, Attachment, DeleteForever, PushPin } from "@/shared/assets/icons";
import { useRouter } from "next/navigation";
import typographyStyles from "@/shared/styles/themes/material/typography.module.css";
import { useEditContext } from "./edit.provider";

export const TopBar = () => {
    const router = useRouter();
    const { title } = useEditContext();

    const backButtonOnClickHandler = () => router.back();

    return (
        <header className={styles.TopBar}>
            <IconButton className={styles.back} onClick={backButtonOnClickHandler}>
                <ArrowBack />
            </IconButton>
            <h2 className={`${typographyStyles["title-large"]} ${styles.title}`}>
                {title.length > 0 ? title : "Заголовок..."}
            </h2>
            <div className={styles.actions}>
                <IconButton className={styles.action}>
                    <PushPin className={styles.actionIcon} />
                </IconButton>
                <IconButton className={styles.action}>
                    <Attachment className={styles.actionIcon} />
                </IconButton>
                <IconButton className={styles.action}>
                    <DeleteForever className={styles.actionIcon} />
                </IconButton>
            </div>
        </header>
    );
};
