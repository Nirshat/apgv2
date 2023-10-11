<template>
  <div class="flex flex-col sidebar">
    <div class="flex flex-col gap-1">
      <span class="text-3xl font-semibold hl">Aron Paul Gonzales</span>
      <span class="text-lg hl">React & Vue.js Developer</span>
      <p>non-stop grinding to be more valuable developer. Currently learning Vue.js 🔥</p>
    </div>

    <div class="navs">
      <div
        v-for="(nav, index) in navigations"
        :key="index"
        class="flex flex-row items-center gap-2"
      >
        <span
          class="border-b rounded ease-in-out duration-300"
          :class="nav.id == navs.active ? 'border-lime-400 w-16 ease-in-out duration-300' : 'border-slate-400 w-8'"
        ></span>
        <a
          :href="`#${nav.id}`"
          @click="navs.navigate(nav.id)"
          class="py-1 uppercase hover:text-slate-100 text-sm"
          :class="nav.id == navs.active ? 'font-semibold text-lime-400' : 'text-slate-400'"
        >
          {{ nav.name }}
        </a>
      </div>
    </div>

    <div class="flex gap-5">
      <a v-for="(icon, index) in icons" :key="index" target="_blank" :href="icon.src">
        <i
          class="rounded text-3xl text-slate-400 hover:text-slate-50 ease-in-out duration-200"
          :class="icon.name"
          key="index"
        ></i>
      </a>
    </div>
  </div>
</template>

<script>
import { useNavStore } from "../stores/navigate";

export default {
  data() {
    return {
      navigations: [
        { id: "about", name: "About" },
        { id: "exp", name: "Experience" },
        { id: "projects", name: "Projects" },
      ],
      icons: [
        {name: "fa-solid fa-envelope", src: "mailto:apg.yoojy@gmail.com"},
        {name: "fa-brands fa-github", src: "https://github.com/Nirshat"},
        {name: "fa-brands fa-linkedin", src: "https://www.linkedin.com/in/apg-1101yj"},
        {name: "fa-solid fa-file-lines", src: "https://nirshat.github.io/assets/apg-cv.pdf"},
      ],
    };
  },
  setup() {
    const navs = useNavStore();
    return {
      navs,
    };
  },
};
</script>
