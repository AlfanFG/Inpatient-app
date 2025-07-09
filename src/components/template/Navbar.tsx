import { Link } from "react-router-dom";
import menus from "../../data/menus";

export default function Navbar() {
  return (
    <div className="flex gap-4">
      {menus.map((menu) => (
        <Link key={menu.id} to={menu.link}>
          {menu.title}
        </Link>
      ))}
    </div>
  );
}
