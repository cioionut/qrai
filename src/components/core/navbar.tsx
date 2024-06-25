
import Link from "next/link";

// local
import { websiteName } from '@/lib/commons/constants';
// local components
import Settings from "../settings/settings";


interface Props {
  lang: string,
}


export default async function Navbar(props: Props) {

  const { lang } = props;
  // navbar entries
  const brand = websiteName
  const home = 'Home'
  const about = 'About'

  return (
    <div className="w-full navbar sticky top-0 z-10 shadow backdrop-filter backdrop-blur" >
      <div className="flex-none lg:hidden">
        <label htmlFor="maindrawer" aria-label="open sidebar" className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-6 w-6 stroke-current">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </label>
      </div>
      <div className="flex-1 px-2 mx-2">
        {/* {brand} */}
        <Link href="/" className="text-xl font-bold lg:text-2xl" >{brand}</Link>
      </div>
      <div className="hidden flex-none lg:block">
        <ul className="menu menu-horizontal">
          {/* <!-- Navbar menu content here --> */}
          <li><Link href="/">{home}</Link></li>
          <li><Link href="/about">{about}</Link></li>
          <li><Settings /></li>
        </ul>
      </div>
    </div >
  );
}