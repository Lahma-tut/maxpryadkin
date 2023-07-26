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
  }

export default async function Portfolio() {
    const posts = await getData() ;

    return (
    <div>
        <h1>Портфолио</h1>
        <ul className='portfolio_item'>
            {posts.map((post: any) => (
                <li key={post.id}>
                        <div className='cards_img'>
                            <img src={ post.image }/>
                        </div>
                        <h4>{ post.title }</h4>
                        <a className='github_link' href={ post.github }>github</a>
                        <a className='site_link' href={ post.site }>сайт</a>
                </li>
            ))}
        </ul>
        </div>
    )
}