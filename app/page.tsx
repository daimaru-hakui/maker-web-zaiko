import { redirect } from 'next/navigation'


export default async function Home() {
  redirect('/daimaru-hakui')
  return (
    <main className="flex flex-col items-center justify-between overflow-hidden">
      大丸白衣
    </main>
  );
}

