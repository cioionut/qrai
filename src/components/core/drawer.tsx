import Link from "next/link";

// local

interface Props {
  lang: string,
}

export default async function Drawer(props: Props) {
  const { lang } = props;
  const home = 'Home'
  const about = 'About'

  return (
    <div className="drawer-side z-20">
      <label htmlFor="maindrawer" aria-label="close sidebar" className="drawer-overlay"></label>
      <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
        {/* <!-- Sidebar content here --> */}
        <li><Link href="/">{home}</Link></li>
        <li><Link href="/about">{about}</Link></li>
      </ul>
    </div>
  );
}