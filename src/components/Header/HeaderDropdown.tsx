import { HeaderLinks } from "@/config/links";

export default function HeaderDropdown() {
  return (
    <div className="flex-none md:hidden">
      <div className="dropdown dropdown-end">
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
          {HeaderLinks.map((e, k) => {
            return (
              <li key={k}>
                <a href={e.link} className="btn btn-ghost normal-case text-2xl">
                  {e.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
