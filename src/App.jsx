import { Header } from './components/Header';
import {Post} from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';


 export function App() {
  return (
    <div>
      <Header />
   <div className={styles.wrapper}>

    <Sidebar />

    <main>
    <Post 
   author="Jane"
   content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur ipsum cum nobis harum dolor, fugiat adipisci velit officia quam sunt id asperiores, quaerat quidem magnam cupiditate hic vero laudantium pariatur?"  
   />
    <Post 
   author="Lucas"
   content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur ipsum cum nobis harum dolor, fugiat adipisci velit officia quam sunt id asperiores, quaerat quidem magnam cupiditate hic vero laudantium pariatur?"  
   />
    </main>

   </div>
   </div>
  )
}


