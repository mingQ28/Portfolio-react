const navItems = [
    {
        name: 'Home',
        link: '/',
        emoji: '🏠',
    },
    {
        name: 'Introduce',
        link: '/',
        emoji: '💁‍♀️',
    },
    {
        name: 'Project',
        link: '/',
        emoji: '📂',
    },
    {
        name: 'Contact',
        link: '/',
        emoji: '📧',
    },
]


const NavBar = ({withEmoji = false}) => {
    return (
        <nav className="w-full h-10 p-2 px-20 bg-blue-400 flex justify-items-end items-center gap-2">
            <ul>
            {navItems.map((item) => (
                <li>
                    <a href={item.link}></a>
                    {item.name}
                </li>
            ))}
            </ul>
        </nav>
    )
}

export default NavBar