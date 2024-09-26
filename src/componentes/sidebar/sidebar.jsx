import { PencilLine } from "@phosphor-icons/react";

import styles from './sidebar.module.css';
import { Avatar } from "../avatar/avatar";

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://images.unsplash.com/photo-1719937206168-f4c829152b91?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <div className={styles.profile}>
                <Avatar
                src="https://images.unsplash.com/photo-1475650522725-015d35677789?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <strong>Ayrton senna</strong>
                <span>Dev Web</span>
            </div>
            <footer>
                <a href="#">
                    <PencilLine/>
                    Editar seu perfil
                    </a>
            </footer>
        </aside>
    );
}
