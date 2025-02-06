export default function MealsSlugPage ({ params}) {
    return (
        <main>
            <div>
                <p>Meals  Share Page</p>
                <h1>{params.slug}</h1>
            </div>
        </main>
    )
}