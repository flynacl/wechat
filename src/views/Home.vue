<template>
  <div>
    <div>home</div>
  </div>
</template>

<script>
  export default {
    name: "home",
    methods: {
      getUserInfo() {
        this.$store.dispatch('GetUserInfo').then((result) => {
          console.log(result)
        }).catch(() => {
        })
      }
    },
    created() {
      this.getUserInfo();
    }
  }
</script>

<style scoped>

</style>
