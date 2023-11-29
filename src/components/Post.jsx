import styles from './Post.module.css';
import janeImg from '../assets/jane.png';

export function Post({author}) {
    return (
       <article className={styles.post}>
        <header>
           <div className={styles.author}>
           <img className={styles.avatar} src={janeImg} />
           <div className={styles.authorInfo}>
            <strong>{author}</strong>
            <span>Web developer</span>

           </div>
            </div>

            <time title="28 de Novembro às 08:15h" dateTime="28-11-23  08:15:30">Publicado há 1 hora</time>
        </header>

        <div className={styles.content}>
            <p>Fala galeraa 👋</p>

            <p>Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

            <p>👉 <a href=""> jane.design/doctorcare</a></p>

            <p> <a href=""> #novoprojeto #nlw #rocketseat </a></p>
        </div>
       </article>
    )
}