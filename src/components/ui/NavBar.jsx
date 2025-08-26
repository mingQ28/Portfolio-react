const navItems = [
  {
    name: "Home",
    link: "/",
    emoji: "🏠",
  },
  {
    name: "Introduce",
    link: "/",
    emoji: "💁‍♀️",
  },
  {
    name: "Project",
    link: "/",
    emoji: "📂",
  },
  {
    name: "Contact",
    link: "/",
    emoji: "📧",
  },
];

const NavBar = ({ withEmoji = false, gap = "gap-60" }) => {
  return (
    <nav className="w-full h-15 p-2 px-15 flex justify-end items-center">
      <ul className={`flex ${gap}`}>
        {navItems.map((item) => (
          <li key={item.name} className="">
            {withEmoji && <span>{item.emoji}</span>}
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
