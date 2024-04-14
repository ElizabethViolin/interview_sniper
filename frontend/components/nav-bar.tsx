import { ChatBubbleLeftRightIcon, UserCircleIcon, HomeIcon } from '@heroicons/react/16/solid';

function NavIcon({ Icon }) {
  return (
    <div className="h-7 w-7 cursor-pointer text-blue-700 hover:text-blue-800 transition duration-300 ease-in-out hover:scale-110">
      <Icon />
    </div>
  );
}

export function NavBar() {
  return (
    <main className="fixed right-0 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-8 pr-5">
      <NavIcon Icon={UserCircleIcon} />
      <NavIcon Icon={HomeIcon} />
      <NavIcon Icon={ChatBubbleLeftRightIcon} />
    </main>
  );
}
