import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Avatar } from '../avatar/avatar';
import { Comment } from './comment/comment';

import styles from './post.module.css';
import { useState } from 'react';

export function Post({ author, content, role, publishedAt }) {
    
    const [comments, setComments] = useState([
        'post massa',
        'hello world',
    ]); 
    const [newCommentText, setNewCommentText] = useState('');

    const publishedDateFormat = format(publishedAt, "d 'de' LLLL 'às' HH:mm", {
        locale: ptBR,
    });

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    function handleCreateNewComment () {
        event.preventDefault();
        
        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }

    function handleNewCommentChange() {
        setNewCommentText(event.target.value);
    }

    function deleteComment(commentToDelete) {
        const listOfCommentsNotToDelete = comments.filter(comment => {
            return comment != commentToDelete;
        })
        setComments(listOfCommentsNotToDelete);
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar
                    src={author.avatarUrl}
                    />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{role}</span>
                    </div>
                </div>

                <time 
                title={publishedDateFormat} 
                datetime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(
                    line => {
                        if (line.type == 'paragraph') {
                            return <p key={line.content}>{line.content}</p>
                        } else if (line.type == 'link') {
                            return <p key={line.content}><a href="#">{line.content}</a></p>
                        }
                    }
                )}
            </div>
            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback!</strong>

                <textarea
                name="comment"
                placeholder="Comment" 
                value={newCommentText}
                onChange={handleNewCommentChange}
                required
                />
                
                <footer>
                    <button type='submit' disabled={newCommentText.length == 0}>Comentar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                {comments.map(single => {
                        return <Comment key='comment' content={single} deleteComment={deleteComment}/>
                    })
                }
            </div>
        </article>
    );
}
