<template>
  <div>
    <h1>Hello!</h1>
    <button @click="authenticate">Login</button>
  </div>
</template>

<script>
export default {
  methods: {
    authenticate() {
      this.$auth.loginWith('slack');
    }
  }
};
</script>