<template>
  <div>
    <h1>Hello!</h1>
    <div v-if="user">
      <p>You are logged in as {{ user.name }}.</p>
      <p>Your timezone: {{user.tz}}</p>
      <p>Is admin?: {{user.is_admin}}</p>
      <p>Is owner?: {{user.is_owner}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {}
    };
  },
  mounted() {
    const params = new URLSearchParams();
    params.append('user', this.$store.state.user);
    params.append('token', this.$store.state.token);
    this.$axios
      .$get('https://slack.com/api/users.info', {
        params: params,
        transformRequest: [
          (data, headers) => {
            delete headers.get['Content-Type'];
            return data;
          }
        ]
      })
      .then(response => {
        console.log(response);
        this.user = response.user;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>