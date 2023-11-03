import styles from '../app/page.module.css'
import {Box} from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <Box>
        <Link href="/example">
          Navigate to SPA page
        </Link>
      </Box>
    </main>
  )
}
