import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment({content, onDeleteComment}) {
    function handleDeleteComment() {

      onDeleteComment(content);

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
           <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
           </button>
        </footer>

        </div>  

        </div>

      
    ) 
    

}