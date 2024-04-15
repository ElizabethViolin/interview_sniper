import { ElementType, FC } from 'react';
import { ChatBubbleLeftRightIcon, UserCircleIcon, HomeIcon } from '@heroicons/react/16/solid';
import Link from "next/link";

interface NavIconProps {
  Icon: ElementType; 
  href: string; 
}

const NavIcon: FC<NavIconProps> = ({ Icon, href }) => {
  return (
    <Link href={href} className="h-7 w-7 cursor-pointer text-blue-700 hover:text-blue-800 transition duration-300 ease-in-out hover:scale-110">
      <Icon className="h-7 w-7" /> 
    </Link>
  );
}

export const NavBar: FC = () => {
  return (
    <main className="fixed right-0 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-8 pr-5">
      <NavIcon Icon={UserCircleIcon} href="/" />
      <NavIcon Icon={HomeIcon} href="/" />
      <NavIcon Icon={ChatBubbleLeftRightIcon} href="/network" />
    </main>
  );
}
