import { Search } from "lucide-react";
import styles from "./header.module.scss";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__logo}>
                <img src="logo.png" alt="logo"/>
                <h1 className={styles.header__title}>weatherio</h1>
            </div>
            <div className={styles.header__search}>
                <Search/>
                <form className={styles.header__form}>
                    <input type="text" className={styles.header__input} placeholder="Найти город"/>
                </form>
            </div>
        </header>
    )
}

export default Header;