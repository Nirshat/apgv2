<template>
  <div class="flex flex-col sidebar">
    <div class="flex flex-col gap-1">
      <span class="text-3xl md:text-4xl font-bold hl">Aron Paul Gonzales</span>
      <span class="text-lg hl">React & Vue.js Developer</span>
      <div class="flex flex-col mt-3">
        <span class="text-sm text-green-300">Status:</span>
        <span> • non-stop grinding 🔥 </span>
        <span> • job hunting 👀</span>
        <span> • currently learning Vue.js</span>
      </div>
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
          class="py-1 uppercase text-sm"
          :class="nav.id == navs.active ? `${mhl} hover:${mhl}` : 'text-slate-400 hover:text-slate-100'"
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
      mhl: 'text-lime-400 font-semibold',
      hl: 'text-slate-300 font-semibold',
      hl2: 'text-slate-200',
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
