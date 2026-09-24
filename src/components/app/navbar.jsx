import { NavLink } from "react-router-dom"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const navLinkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors hover:text-white/90 ${
      isActive ? "text-white" : "text-white/65"
    }`

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2">
          <span className="font-semibold text-lg tracking-tight font-[Playfair_Display] text-white">
            <span className="text-green-400">Cook</span>It
          </span>
        </NavLink>

        <nav className="hidden sm:flex items-center gap-6">
          <NavLink to="/" className={navLinkClass} end>Home</NavLink>
          <NavLink to="/recipes" className={navLinkClass}>Recipes</NavLink>
        </nav>

        <NavLink to="/add-recipe">
          <Button size="sm" className="gap-1.5 bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm">
            <Plus className="w-4 h-4" />
            Add Recipe
          </Button>
        </NavLink>
      </div>
    </header>
  )
}