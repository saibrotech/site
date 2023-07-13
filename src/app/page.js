import Button from '@/components/Button';

export default function Home() {
  return (
    <main>
      <ul>
        <li>https://nextjs.org/docs/app/building-your-application/routing/colocation</li>
        <li>https://tailwindcss.com/docs/theme</li>
        <li>https://windstitch.vercel.app/</li>
      </ul>
      
      <section>
        <Button color="violet">Violet</Button>
        <Button color="gray">Gray</Button>
        <Button color="gray" size="lg">
          Gray | size=lg
        </Button>
        {/*  🚨 Open Sandbox to check TS Errors  */}
        <Button color="w">Error: wrong color</Button>
        <Button>Error: Missing color</Button>
        <Button size="x">Error: wrong size</Button>
      </section>
    </main>
  )
}
