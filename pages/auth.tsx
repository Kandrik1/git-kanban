import { Inter } from 'next/font/google'
import Login from "../scenes/login";


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <div>
            <Login/>
        </div>
    )
}
export function getStaticProps() {
    return {
        props: {
            pageConfig: {
                title: "Auth",
                withHeader: false
            }
        }
    }
}