import { Metadata } from 'next'
import './page.css'

async function getData() {
    const response = await fetch('https://5qdns7-8080.csb.app/project', {
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
    const project = await getData() ;

    return (
    <div>
        <h1>Портфолио</h1>
        <ul className='portfolio_item'>
            {project.map((cart: any) => (
                <li key={project.id}>
                        <div className='cards_img'>
                            <img src={ cart.image }/>
                        </div>
                        <h4>{ cart.title }</h4>
                        <a className='github_link' href={ cart.github }>github</a>
                        <a className='site_link' href={ cart.site }>сайт</a>
                </li>
            ))}
        </ul>
        </div>
    )
}