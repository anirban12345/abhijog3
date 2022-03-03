<template>
  <div>
    <AppHeader />
    <AppSidebar />
    <AppHome />
    <AppFooter />
  
  </div>
</template>

<script>
import AppHome from './components/AppHome.vue'
import AppHeader from './components/AppHeader.vue'
import AppSidebar from './components/AppSidebar.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'App',
  components: {
    AppHome,AppHeader,AppSidebar,AppFooter,
  }
}
</script>

<style>

</style>
