<template>
  <div>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>

    <tabbar>
      <tabbar-item link="/home" selected>
        <span slot="label">home</span>
      </tabbar-item>
      <tabbar-item show-dot link="/service">
        <span slot="label">service</span>
      </tabbar-item>
      <tabbar-item link="/my">
        <span slot="label">my</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
  import {Tabbar, TabbarItem, Group, Cell} from 'vux'

  export default {
    name: "layout",
    components: {
      Tabbar,
      TabbarItem,
      Group,
      Cell
    }
  }
</script>

<style scoped>

</style>
