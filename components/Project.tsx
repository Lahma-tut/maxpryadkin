import Link from "next/link"

export const Project = ({ project }: any) => {

    return (
    <div className="project__body">
        <div className="project__items">
            <div className="items__image">
                <Link href={`/portfolio/${project.id}`}>
                <img src={project.image} />
                </Link>
            </div>
            <h4>{ project.title }</h4>
            <div className="items__info" >
            { project.github === "" ? "" : <a className="github__link" href={ project.github }>github</a> }
            { project.site === "" ? "" : <a className="site__link" href={ project.site }>сайт</a> }
            </div>
        </div>
    </div>            
    )
}