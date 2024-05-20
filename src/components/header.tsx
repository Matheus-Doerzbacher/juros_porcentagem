import { Logo } from "@/images/svg/svg_images";
import NavItem from "@/components/nav_item";
import Dropdown from "./droptdown";

export default function HeaderCustom() {
  return (
    <header className="py-3 flex justify-around items-center flex-col md:flex-row gap-7 bg-white fixed top-0 w-full">
      <a href="#">{Logo}</a>
      <nav className="flex gap-7">
        <NavItem title="Juros Composto" url="#" />
        <NavItem title="Juros Simples" url="#simples" />
        <Dropdown />
      </nav>
    </header>
  );
}
