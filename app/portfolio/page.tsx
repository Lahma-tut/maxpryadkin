import { Metadata } from 'next'
import Link from 'next/link';
import './page.css'

async function getData() {
    const response = await fetch('https://maxpryadkin.ru/products.json', {
        next: {
            revalidate: 60
        }
    })

    return response.json();
} 

export const metadata: Metadata = {
    title: 'Портфолио / maxpryadkin.ru',
    description: 'Generated by create next app',
  }

export default async function Portfolio() {
    const posts = await getData() ;

    return (
    <div>
        <h1>Портфолио</h1>
        <ul className='portfolio_item'>
            {posts.map((post: any) => (
                <li key={post.id}>
                    <Link href={`/portfolio/${post.id}`}>
                        <div className='cards_img'>
                            <img src={ post.image }/>
                            </div>
                        <h4>{ post.title }</h4>
                        <p>{ post.category }</p>
                        </Link>
                </li>
            ))}
        </ul>
        </div>
    )
}