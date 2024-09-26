import styles from "./header.module.css";
import logo  from "../../assets/Ignite.png";

export function Header() {
    return (
        <header className={styles.header}>
        <img src={logo}/>
        </header>
    );
}