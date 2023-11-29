import { PencilLine } from 'phosphor-react'

import styles from './Sidebar.module.css';

export function Sidebar() {
    return(
<aside className={styles.sidebar}>
    <img 
    className={styles.cover} 
    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    />

    <div className={styles.profile}>

<img className={styles.avatar} src="https://avatars.githubusercontent.com/u/115804201?v=4"/>

    <strong>Ketlen Batista</strong>
    <span>Web Develope</span>
    </div>

    <footer>
        <a href="#">
            <PencilLine size= {20} />
            Editar seu perfil
        </a>
    </footer>
</aside>
    );
}