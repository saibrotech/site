export default function Showcase() {
    return (
        <main className="p-6">
            <h1>Theme</h1>
            <section className="p-4">
                <h2>Colors</h2>
                <div className="flex gap-4 rounded-lg text-center">
                    <div className="p-4 bg-orange shadow-lg rounded-lg">orange</div>
                    <div className="p-4 bg-blue shadow-lg rounded-lg">blue</div>
                    <div className="p-4 bg-gray shadow-lg rounded-lg text-white">gray</div>
                    <div className="p-4 bg-invalid shadow-lg rounded-lg">(invalid)</div>
                </div>
            </section>
            <section className="p-4">
                <h2>Fonts</h2>
                <p className="font-sans">Font Sans (Default)</p>
                <p className="font-mono">Font Mono</p>
                <p className="font-invalid">(Font Invalid)</p>
            </section>
            <section className="p-4">
                <h2>References</h2>
                <ul>
                    <li><a className="text-blue hover:underline" href="https://nextjs.org/docs/app/building-your-application/routing/colocation">Next.js - Project Organization and File Colocation</a></li>
                    <li><a className="text-blue hover:underline" href="https://tailwindcss.com/docs/theme">Tailwind Theme</a></li>
                    <li><a className="text-blue hover:underline" href="https://windstitch.vercel.app/">Windstitch - Stitches-like API for Tailwind CSS</a></li>
                </ul>
            </section>
        </main>
    )
}
