import { Metadata } from 'next'
import Link from 'next/link'
import styles from './page.module.css'

async function getData() {
    const response = await fetch('https://5qdns7-8080.csb.app/project', {
        next: {
            revalidate: 60
        }
    })
    return response.json()
}

export const metadata: Metadata = {
    title: 'Портфолио / maxpryadkin.ru',
  }

export default async function Portfolio() {
    const project = await getData()

    return (
        <>
        <h1>Портфолио</h1>
        <ul className={styles.project__ul}>
            {
                project.map((item: any) => <li key={item.id} className={styles.project__li}>
                    
                        <div className={styles.block__img}>
                        <Link href={`/portfolio/${item.id}`}><img src={ item.image } /></Link>
                        </div>
                        
                        <div className={styles.block__info}>
                        <h4>{ item.title }</h4>
                        <span>{ item.category }</span>
                        </div>

                </li>
                )
            }
        </ul>
        </>
    )
}