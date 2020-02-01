<template>
  <p>Redirecting...</p>
</template>

<script>
export default {
  mounted() {
    const code = this.$route.query.code;
    if (code !== '') {
      const params = new URLSearchParams();
      params.append('client_id', 'YOUR_CLIENT_ID');
      params.append('client_secret', 'YOUR_CLIENT_SECRET');
      params.append('code', code);
      params.append('redirect_uri', 'http://localhost:3000/callback');
      this.$axios
        .$post('https://slack.com/api/oauth.access', params, {
          withCredentials: false,
          transformRequest: [
            (data, headers) => {
              headers.post['Content-Type'] =
                'application/x-www-form-urlencoded';
              return data;
            }
          ]
        })
        .then(response => {
          this.$store.state.token = response.access_token;
          this.$store.state.user = response.user_id;
          this.$store.state.team = response.team_id;
          this.$router.push({ path: '/home' });
        });
    }
  }
};
</script>