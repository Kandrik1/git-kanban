import NextAuth, {NextAuthOptions} from "next-auth"
import GithubProvider from "next-auth/providers/github"

export const authOptions: any = {
    providers: [
        GithubProvider({
            clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
            clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
        }),
    ],
    callbacks: {
        async jwt({ token, account, profile }) {

            if (account) {
                token.accessToken = account.access_token
                token.id = profile.id
            }
            return token
        },
        async session({ session, token, user }) {
            session.accessToken = token.accessToken
            session.user.id = token.id

            return session
        },
        async redirect({ url, baseUrl }) {
            return baseUrl
        }
    },
    pages: {
        signIn: "/auth"
    }
}


export default NextAuth(authOptions)