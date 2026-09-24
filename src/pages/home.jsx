import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import RecipeList from "../components/app/recipe-list"
import bgImage from "../images/Flat lay backdrop.jpeg"

export default function Home({ recipes, loading, onDelete }) {
  const recent = recipes.slice(0, 3)

  return (
    <div className="flex flex-col">

      {/* ── Hero — full viewport height, navbar floats over it ── */}
      <section
        className="relative overflow-hidden flex items-center justify-center"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
        }}
      >
        {/* Gradient overlay — darker at top (behind navbar) and bottom */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.55) 100%)'
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col items-center text-center gap-6">
          <Badge className="gap-1.5 bg-white/10 text-white border-white/20 backdrop-blur-sm">
            Your personal recipe book
          </Badge>
          <h1 className="font-heading text-4xl sm:text-6xl font-semibold tracking-tight text-white max-w-2xl leading-tight">
            Cook something{" "}
            <span className="text-green-400 italic">delicious</span> today
          </h1>
          <p className="text-white/70 text-base sm:text-lg max-w-xl">
            Save, manage, and discover your favorite recipes — all in one place.
          </p>
          <div className="flex gap-3 flex-wrap justify-center">
            <Link to="/recipes">
              <Button size="lg" className="gap-2 bg-white text-gray-900 hover:bg-white/90">
                Browse Recipes <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link to="/add-recipe">
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-black hover:bg-white/30 backdrop-blur-sm"
              >
                Add a Recipe
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Recent Recipes ── */}
      <section className="max-w-6xl mx-auto px-6 py-12 w-full">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="font-heading text-xl font-semibold">Recent Recipes</h2>
            <p className="text-sm text-muted-foreground mt-0.5">Your latest additions</p>
          </div>
          <Link to="/recipes">
            <Button variant="ghost" size="sm" className="gap-1">
              View all <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </Link>
        </div>
        <RecipeList recipes={recent} onDelete={onDelete} loading={loading} />
      </section>

    </div>
  )
}