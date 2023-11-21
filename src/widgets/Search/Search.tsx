import { MenuIcon, SearchIcon } from "@/shared/assets";
import iconStyles from "@/shared/styles/global/icons.module.css";
import materialTypographyStyles from "@/shared/styles/themes/material/typography.module.css";
import styles from "./Search.module.css";

export const Search = () => {
    return (
        <div className={styles.Search}>
            <button className={styles.menuButton} title="Меню" type="button">
                <MenuIcon className={iconStyles.default} />
            </button>
            <input
                className={`${materialTypographyStyles["body-large"]} ${styles.input}`}
                type="text"
                name="search"
                id="search"
                title="Поиск"
                placeholder="Поиск заметок..."
            />
            <SearchIcon className={iconStyles.defaultAsymetry} />
        </div>
    );
};
