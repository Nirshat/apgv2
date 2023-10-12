<template>
  <div class="contentbox">
    <div class="rounded w-96 holder">
      <!-- This is a holder -->
    </div>

    <div class="flex flex-col gap-16">
      <div class="flex flex-col gap-2 active-content" id="about">
        <span class="rounded text-sm font-bold text-slate-300"> ABOUT </span>
        <About></About>
      </div>

      <div class="flex flex-col gap-2" :class="navs.active == 'exp' ? 'active-content' : ''" id="exp">
        <span class="rounded text-sm font-bold text-slate-300"> EXPERIENCE </span>
        <Exp></Exp>
      </div>

      <div class="flex flex-col gap-2" :class="navs.active == 'projects' ? 'active-content' : ''" id="projects">
        <span class="rounded text-sm font-bold text-slate-300"> PROJECTS </span>
        <Projects></Projects>
      </div>


      <p class="text-slate-400 text-sm text-center lg:text-start">
        Developed with 💚 by yours truly. Set-up with <span :class="hl2">Vite.js</span>, built with <span :class="hl2">Vue.js</span>, <span :class="hl2">Pinia</span>, <span :class="hl2">Tailwind css</span>, 
        <span :class="hl2">Sass</span>. All rights reserved.
      </p>
    </div>
  </div>
</template>

<script>
import { useNavStore } from '../stores/navigate';
import About from './contents/About.vue';
import Exp from './contents/Exp.vue';
import Projects from './contents/Projects.vue';

export default {
  components: { About, Exp, Projects },
  data() {
    return{
      titles: ['ABOUT', 'EXPERIENCE'],
      mhl: 'text-lime-400 font-semibold',
      hl: 'text-slate-300 font-semibold',
      hl2: 'text-slate-200',
    }
  },
  setup() {
    const navs = useNavStore();
    return{
      navs,
    }
  }
}
</script>

<style>
@import url('../../public/scss/contents.scss');
</style>