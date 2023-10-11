
<template>
  <div class="app">
    <Sidebar></Sidebar>
    <Contents></Contents>
  </div>
</template>


<script>
import Contents from './components/Contents.vue';
import Sidebar from './components/Sidebar.vue';

export default {
  components: {
    Sidebar,
    Contents
}
}
</script>

<style>
@import url('../public/scss/main.scss');
@import url('../public/scss/themes.scss');
</style>
