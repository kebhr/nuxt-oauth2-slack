module.exports = {
  mode: "spa",
  modules: ["@nuxtjs/axios", "@nuxtjs/auth"],
  auth: {
    redirect: {
      login: "/",
      logout: "/",
      callback: "/callback",
      home: "/home"
    },
    strategies: {
      slack: {
        _scheme: "oauth2",
        authorization_endpoint: "https://slack.com/oauth/authorize",
        response_type: "token",
        scope: ["users:read"],
        redirect_uri: "http://localhost:3000/callback",
        client_id: "YOUR_CLIENT_ID"
      }
    }
  }
};
