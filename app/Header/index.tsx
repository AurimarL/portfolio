export default function Header() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a
          className="btn btn-ghost normal-case md:text-4xl text-sm"
          href="/"
          onClick={() => null}
        >{`< Aurimar Lopes />`}</a>
      </div>
      <div className="flex-none md:block hidden">
        <a
          className="btn btn-ghost normal-case md:text-2xl"
          href="#Skills"
        >{`< Skills />`}</a>
        <a
          className="btn btn-ghost normal-case md:text-2xl"
          href="#Projects"
        >{`< Projetos />`}</a>
      </div>
      <div className="flex-none md:hidden">
        <div className="dropdown  dropdown-end">
          <label tabIndex={0} className="btn btn-square btn-ghost m-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a
                href="#Skills"
                className="btn btn-ghost normal-case text-2xl"
              >{`< Skills />`}</a>
            </li>
            <li>
              <a
                href="#Projects"
                className="btn btn-ghost normal-case text-2xl"
              >{`< Projects />`}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
