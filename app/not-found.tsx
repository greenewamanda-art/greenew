import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center bg-black/80">
            <h1 className="text-6xl font-bold text-white">404</h1>
            <p className="mt-4 text-lg text-white">
                Oops! Página não encontrada.
            </p>
            <Button variant='link' asChild>
                <Link
                    href="/"
                >
                    Voltar para a Home
                </Link>
            </Button>
        </div>
    )
}
