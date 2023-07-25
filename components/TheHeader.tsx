import { Navigation } from './Navigation';

const navItems = [
    {label:'МАКСПРЯДКИН', href:'/'},
    {label:'Портфолио', href:'/portfolio'},
    {label:'Опыт работы', href:'/work'},
    
];

export const TheHeader = () => {
    return (
        <header className='header'>
            <nav><Navigation navLink={ navItems } /></nav>
        </header>
    )
}