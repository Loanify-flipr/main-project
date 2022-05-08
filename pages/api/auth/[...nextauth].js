import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: "828105379708-k22kgj5dqfduj8ebe3h8ru4n024pdm3e.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],

  database:"mongodb+srv://Ansh:sarita23@cluster1.kkkea.mongodb.net/Loanify?retryWrites=true&w=majority",
  callbacks: {
    session: async (session, user) => {
      session.id = user.id;
      return Promise.resolve(session);
    },
  },
});