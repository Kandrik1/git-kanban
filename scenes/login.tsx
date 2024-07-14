import {signIn, useSession} from "next-auth/react";

export default function Login() {
    const {data} = useSession()
    console.log(data)

    return (
        <div className="bg-red-800">
            <p onClick={() => signIn("github")}>Sign In</p>
        </div>
    )
}