interface NavItemProps {
  title: string;
  url: string;
}

export default function NavItem({ title, url }: NavItemProps) {
  return (
    <a
      href={url}
      className="text-zinc-950 hover:text-blue-500 transition-colors duration-300 text-lg font-bold"
    >
      {title}
    </a>
  );
}
