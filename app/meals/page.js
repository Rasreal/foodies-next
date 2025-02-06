import Link from "next/link";

export default function MealsPage () {
    return (
        <main>
            <div>
                <p>Meals Page</p>
                <h1><Link href="/meals/share">Share</Link></h1>
                <h1><Link href="/meals/slug-1">Slug1</Link></h1>
                <h1><Link href="/meals/slug-2">Slug2</Link></h1>
            </div>
        </main>
    )
}