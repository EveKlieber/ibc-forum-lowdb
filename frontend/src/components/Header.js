import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div>
    <aside>
      <span>mtb</span> NEWS
      </aside>
    <NavLink to="/">
      <header>
        <h1>FORUM</h1><span>Home</span>
      </header>
    </NavLink>
    
    </div>
  );
}
