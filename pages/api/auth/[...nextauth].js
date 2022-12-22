import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";


export default NextAuth({
    providers: [
        CredentialsProvider({
            id: "user-credentials",
            name: "Credentials",
            credentials: {
                ID: { label: "ID", type: "text"},
                PW: { label: "PW", type: "password" }
            },
            async authorize(credentials, req) {
                if (credentials.ID === "Dejong1706" && credentials.PW == "abcd"
                ) {
                    const user = { id: 1, name: "Byeong Geun", email: "ppk1998@naver.com" }
                    return user;
                } else {
                    return alert("아이디와 비밀번호가 다릅니다");
                }
            }
        })
    ],

    pages:{
        signIn: '/login',
    }
})