<template>
  <div class="flex flex-col gap-3">
    <p>
      Hello! 👋, I specialize in crafting front-end web applications using JavaScript libraries and frameworks such as <span :class="mhl">React</span> and <span :class="mhl">Vue.js</span>, creating engaging and user-friendly digital experiences.
    </p>

    <p>
      I am an aspiring front-end web developer based in the Philippines. I graduated with a Bachelor of Science in Information Technology (July 2023). My objective
      is to continously learn new things and gain experiences to become a more
      valuable developer in future.
    </p>

    <!-- <p>
      I began my journey with <span :class="hl">React</span> right after i graduated in college because I had plenty of free time after finishing our capstone project. Currently, I'm learning about React topics like <span :class="hl2">state</span> and <span :class="hl2">props</span>, react hooks like 
      <span :class="hl2">useState</span> and <span :class="hl2">useEffect</span>, 
      using <span :class="hl2">Zustand</span> for managing state, and interacting with 
      <span :class="hl2">RESTful APIs</span> using <span :class="hl2">Axios</span>.
    </p>

    <p>
      I started to learn <span :class="hl">Vue.js</span> to be more flexible in front-end development and this portfolio is my starting point because i created this using Vue.js. 
      These are my current learnings in vue topics like <span :class="hl2">state and props</span>, <span :class="hl2">data binding</span>, <span :class="hl2">directives</span>, 
      <span :class="hl2">composition API</span> like <span :class="hl2">computed properties</span> and <span :class="hl2">setup()</span> and last is <span :class="hl2">Pinia</span> store to handle state management.
    </p> -->

    <p>
      Here are the other technologies i frequently used: 
      <span v-for="(tech, index) in maintechs" :class="hl">{{
        tech + ", "
      }} </span> <span :class="hl">Postman. </span>
      And here are some other technologies that i have used:
      <span v-for="(tech, index) in othertechs" :class="hl">{{
        tech + ", "
      }}</span> <span :class="hl">GitHub. </span>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      maintechs: [
        "TypeScript",
        "Tailwind",
        "Bootstrap",
        "Sass",
      ],
      othertechs: [
        "Vite",
        "Material UI",
        "Php",
        "MySQL",
        "Laravel",
        "Xampp",
        "Git",
      ],
      mhl: 'text-lime-400 font-semibold',
      hl: 'text-slate-300 font-semibold',
      hl2: 'text-slate-50',
    };
  },
};
</script>
