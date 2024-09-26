import { ThumbsUp, Trash } from '@phosphor-icons/react';
import styles from './comment.module.css';
import { Avatar } from '../../avatar/avatar';

export function Comment({content, deleteComment}) {
    function handleDeleteComment () {
        deleteComment(content);
    }
    return (
        <div className={styles.comment}>
            <Avatar
            hasBorder={false}
            src="https://images.unsplash.com/photo-1518183214770-9cffbec72538?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Robertinha</strong>
                            <time title="17 de janeiro às 5:01" datetime="2070-01-71 08:12:30">Cerca de 1h atrás</time>
                        </div>
                        <button title="Delete">
                            <Trash 
                            onClick={handleDeleteComment}
                            size={24}
                            />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp/>
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}
