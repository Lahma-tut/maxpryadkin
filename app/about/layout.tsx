import Link from "next/link";

export default function AboutLayout({ children }: {children: React.ReactNode}) {

    return (
    <div>
        <h1>About</h1>
        <div className='about-link'>
            <Link href='/about/contacts'>Contacts</Link>
            <Link href='/about/team'>Team</Link>
        </div>
            { children }
    </div>
)
}