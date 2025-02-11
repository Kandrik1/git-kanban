import { Inter } from 'next/font/google'
import {signOut} from "next-auth/react";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <div>
        Main
          <p onClick={() => signOut()}>Sign Out</p>
      </div>
  )
}

export function getStaticProps() {
    return {
        props: {
            pageConfig: {
                title: "Main",
                withHeader: true
            }
        }
    }
}