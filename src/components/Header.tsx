import { NavLink } from "@/components/NavLink";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-black/60 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <NavLink to="/" className="text-lg font-bold tracking-tight">
          InfluIA
        </NavLink>
        <nav className="flex items-center gap-4">
          <NavLink to="/o-movimento" className="text-sm text-muted-foreground hover:text-foreground" activeClassName="text-foreground">
            O movimento
          </NavLink>
          <NavLink to="/uma-iniciativa-creator" className="text-sm text-muted-foreground hover:text-foreground" activeClassName="text-foreground">
            Uma iniciativa +Creator
          </NavLink>
          <NavLink to="/influia" className="text-sm text-muted-foreground hover:text-foreground" activeClassName="text-foreground">
            A InfluIA
          </NavLink>
          <NavLink to="/algoritmo" className="text-sm text-muted-foreground hover:text-foreground" activeClassName="text-foreground">
            Algoritmo
          </NavLink>
          <NavLink to="/faq" className="text-sm text-muted-foreground hover:text-foreground" activeClassName="text-foreground">
            FAQ
          </NavLink>
          <NavLink to="/apoie" className="text-sm font-medium text-indigo-400 hover:text-indigo-300" activeClassName="text-indigo-300">
            Apoiar
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
