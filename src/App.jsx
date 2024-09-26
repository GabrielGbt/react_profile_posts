import { Header } from './componentes/header/header';

import styles from './app.module.css';

import './global.css';
import { Sidebar } from './componentes/sidebar/Sidebar';
import { Post } from './componentes/post/Post';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://images.unsplash.com/photo-1475650522725-015d35677789?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Junin do grau',
      role: 'dono da titan150',
    },
    content: [
      { type: 'paragraph', content: 'Fala galera' },
      { type: 'paragraph', content: 'Aprendizado de grau hoje!' },
      { type: 'image', imageUrl: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2024-05-03 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://plus.unsplash.com/premium_photo-1679397743664-f9384e6ad49d?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Primo rico',
      role: 'dono da porsche',
    },
    content: [
      { type: 'paragraph', content: 'Fala galera' },
      { type: 'paragraph', content: 'Aprendizado de react hoje!' },
      { type: 'image', imageUrl: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2024-05-03 20:30:00')
  },
];

export function App() {
  console.log(styles);
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
         {posts.map(
          post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                role={post.author.role}
                publishedAt={post.publishedAt}
              />
            )
           }
          )
         }
        </main>
      </div>
    </div>
  )
}


