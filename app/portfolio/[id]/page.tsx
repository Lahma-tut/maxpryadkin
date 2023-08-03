import styles from './page.module.css'

async function getData(id: string) {
    const response = await fetch(`https://5qdns7-8080.csb.app/project/${id}`,
    {
        next: {
            revalidate: 60,
        }
    })
    return response.json()
}

type Props = {
    params: {
        id: string
    }
}

export async function generateMetadata({ params: {id} }: Props) {
    const project = await getData(id)
    return {
        title: project.title,
    }
}

export default async function Post({ params: {id} }: Props) {
    const project = await getData(id)

    return (
        <>
        <h1>{ project.title }</h1>
        <div className={styles.items__info}> 
            { project.github === "" ? "" : <a className={styles.github__link} href={ project.github }>github</a> }
            { project.site === "" ? "" : <a className={styles.site__link} href={ project.site }>сайт</a> }
        </div>
        <div className={styles.project__image}><img src={project.image} /></div>
        </>
    )
}