import { MenuIcon, SearchIcon } from "@/shared/assets";
import styles from "./Search.module.css";

export const Search = () => {
    return (
        <div className={styles.Search}>
            <button className={styles.menuButton}>
                <MenuIcon />
            </button>
            <input type="text" name="search" id="search" />
            <SearchIcon />
        </div>
    );
};
