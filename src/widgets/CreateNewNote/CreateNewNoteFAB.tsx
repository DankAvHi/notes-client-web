import { FAB } from "@/shared/ui";
import styles from "./CreateNewNoteFAB.module.css";
import typographyStyles from "@/shared/styles/themes/material/typography.module.css";
import iconStyles from "@/shared/styles/global/icons.module.css";
import { CreateIcon } from "@/shared/assets";

export const CreateNewNoteFAB = () => {
    return (
        <FAB elementType="link" href={`/edit/new`} prefetch className={styles.CreateNewNoteFAB}>
            <CreateIcon className={`${iconStyles.small}`} />
            <p className={`${typographyStyles["label-large"]}`}>{`Создать`}</p>
        </FAB>
    );
};
