import { Logo } from "@/images/svg/svg_images";
import NavItem from "@/components/nav_item";

export default function Home() {
  return (
    <main>
      <header className="container mx-auto py-3 flex justify-between items-center">
        <a href="#">{Logo}</a>
        <nav className="flex gap-4">
          <NavItem title="Juros Simples" url="#" />
          <NavItem title="Juros Composto" url="#" />
          <NavItem title="Porcentagem" url="#" />
        </nav>
      </header>
    </main>
  );
}
