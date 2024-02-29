import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react';

export function Comment({content, onDeleteComment}) {
    const [likeCount, setLikeCount] = useState(0);
     
    function handleDeleteComment() {
      onDeleteComment(content);

    }

    function handleLikeComment () {
      setLikeCount(likeCount + 1);
    }

    return (
        <div className={styles.comment}>
     <Avatar hasBorder={true} src="https://avatars.githubusercontent.com/u/115804201?v=4" alt="" />

     <div className={styles.commentBox}>
        <div className={styles.commentContent}>
            <header> 
        <div className={styles.authorAndTime}>
        <strong>Ketlen Batista</strong>
        <time title="28 de Novembro às 08:15h" dateTime="28-11-23  08:15:30"> Cerca de 1 hora atrás
        </time>
      </div> 
      <button onClick={handleDeleteComment} title="Deletar comentário">
        <Trash size={24} />
      </button>
            </header>
         <p>{content}</p>

        </div>

        <footer>
           <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
           </button>
        </footer>

        </div>  

        </div>

      
    ) 
    

}