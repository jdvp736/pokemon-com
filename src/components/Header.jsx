// pokedex/src/components/Header.jsx
import { Link } from "react-router";

export const Header = ({ title = "Pokédex 2025" }) => {
  return (
    <header className="w-full pokedex-header">
      {/* Contenedor interno consistente con hero y grid */}
      <div className="site-container flex items-center justify-between py-4">
        <div className="flex items-center gap-4">
          <div className="pokeball w-12 h-12" aria-hidden />
          <h1 className="text-2xl font-extrabold tracking-tight text-white">{title}</h1>
        </div>

        <nav>
          <ul className="flex gap-2 items-center">
            <li><Link to="/" className="nav-link">Inicio</Link></li>
            <li><Link to="/about" className="nav-link">Acerca</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}