import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="bg-gray-200 shadow-md py-2">
      <div className="max-w-xl mx-auto flex justify-between items-center">
        <Link href="/">
          <a>
            <h1 className="text-2xl">Event Manager</h1>
          </a>
        </Link>
        <ul className="flex">
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className="ml-3">
            <Link href="/events">
              <a>Events</a>
            </Link>
          </li>
          {/* <li>
            <Link>
              <a></a>
            </Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
