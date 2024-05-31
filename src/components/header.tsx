import Image from "next/image";
import Link from "next/link";

import LogoImg from "../../public/logo.svg";
import SearchIcon from "../../public/icon-search.svg";
import IconUser from "../../public/icon-user.svg";
import { GridContainer } from "../components/grid";

const arrayMenu = [
  "Início",
  "Benefícios",
  "Para quem é o curso?",
  "Preços promocionais",
  "Sobre nós",
];

export function Header() {
    const activedStyle = 'bg-green-actived text-opacity-100 rounded-full';
  return (
    <header className="relative w-full h-24 bg-green-primary flex items-center">
      <GridContainer className="flex items-center justify-between">
        <Image src={LogoImg} alt="logo" />
        <div className="flex items-center gap-20">
          <nav className="flex">
            {arrayMenu.map((item, index) => (
              <Link key={index} href="#" className={`px-3 py-1 text-white text-opacity-40 ${index === 0 ? activedStyle : ''}`}>
                {item}
              </Link>
            ))}
          </nav>
          <div>
            <button>
              <Image src={SearchIcon} alt="Icon Search" />
            </button>
            <button>
              <Image src={IconUser} alt="user icon" />
              <span>Fazer Login</span>
            </button>
          </div>
        </div>
      </GridContainer>
    </header>
  );
}
