<template>
  <div id="app">
    <app-header/>
    <router-view
        v-bind:portfolio = 'portfolio'
    />
    <app-footer/>
  </div>
</template>

<script>
import AppFooter from "@/components/AppFooter";
import AppHeader from "@/components/AppHeader";
export default {
  components: {
    AppHeader,
    AppFooter
  },
  computed: {
    portfolio () {
      return this.$store.getters.portfolio
    }
  }
}
</script>
<style lang ="scss">
#app {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
}
</style>
