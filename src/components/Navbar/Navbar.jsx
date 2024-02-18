import { listItem } from "../Elements/ListItem/list";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <nav className='font-thin w-full fixed bg-slate-900 text-white z-50 justify-between text-xl p-7 flex items-center gap-5'>
      <h1 className='text-3xl font-extralight text-rose-300'>
        D y l a n <span className='text-slate-200'> A v i l l a </span>
      </h1>
      <ul className='flex items-center gap-6'>
        <li className='hover:bg-rose-500 p-2 rounded cursor-pointer duration-[1.1s] ease-in-out'>
          <Link to={`/`}>Home</Link>
        </li>
        <li className='hover:bg-rose-500 p-2 rounded cursor-pointer duration-[1.1s] ease-in-out'>
          <Link to={`/${listItem[1]}`}>About</Link>
        </li>
        <li className='hover:bg-rose-500 p-2 rounded cursor-pointer duration-[1.1s] ease-in-out'>
          <Link to={`/${listItem[2]}`}>Project</Link>
        </li>
        <li className='bg-rose-500 p-2 rounded cursor-pointer duration-[1.1s] ease-in-out hover:bg-rose-400'>
          <Link to={`/${listItem[3]}`}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};
