import { Project } from '@/components/Project'
import { Metadata } from 'next'
import './page.css'

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
    <div>
        <h1>Портфолио</h1>
        <div className="project__body">
        { project.map((project: any) => <Project project={project} key={project.id} />) }
        </div>
    </div>
    )
}