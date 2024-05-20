import Link from "next/link";

interface NavItemProps {
  title: string;
  url: string;
  onclick?: () => void;
}

export default function NavItem({ title, url }: NavItemProps) {
  return (
    <Link
      href={url}
      className="text-zinc-950 hover:text-blue-600 transition-colors duration-300 text-lg font-semibold"
    >
      {title}
    </Link>
  );
}
