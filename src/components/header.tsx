import { Logo } from "../../public/images/svg/svg_images";
import NavItem from "@/components/nav_item";
import Dropdown from "./droptdown";
import Link from "next/link";

export default function HeaderCustom() {
  return (
    <header className="py-3 flex justify-around items-center flex-col md:flex-row gap-7 bg-white fixed top-0 w-full z-50">
      <Link href="/">{Logo}</Link>
      <nav className="flex gap-7">
        <NavItem title="Calculo de Juros" url="/juros" />
        <Dropdown />
      </nav>
    </header>
  );
}
