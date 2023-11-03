import Link from "next/link";

export default function Home() {
  return (
    <main>
        <h1>This is using PAGES router</h1>

        <Link href="/example">
          Navigate to SPA page
        </Link>
    </main>
  )
}
