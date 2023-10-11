<template>
  <div class="flex flex-col gap-10">
    <div
      v-for="(project, index) in projs.properties"
      :key="index"
      class="flex flex-col gap-2 box"
    >
      <div class="flex flex-row justify-between">
        <div class="flex flex-row gap-3">
          <img :src="project.prev" alt="" class="rounded h-12 w-20">
          <div class="flex flex-col">
            <a v-if="project.links.demo !== '' " target="_blank" :href="project.links.demo" class="hover:-rotate-2 ease-linear duration-100" :class="mhl">
              {{ project.name }}
              <i class="fa-solid fa-arrow-up-right-from-square text-sm" :class="mhl"></i>
            </a>
            <span v-else :class="mhl">
              {{ project.name }}
            </span>
            <span class="rounded text-sm">Front-end Development</span>
          </div>
        </div>


      </div>
      <div class="flex flex-col gap-3">
        <p class="text-sm">
          {{ project.descr }}
        </p>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="(tech, index) in project.techs"
            class="bg-slate-800 text-sm py-1 px-2 rounded-md text-lime-400"
          >
            {{ tech }}
          </span>
        </div>
        <!-- <div class="rounded text-end">
          <a
            v-if="project.links.demo !== ''"
            target="_blank"
            :href="project.links.demo"
            class="text-green-300 mob"
          >
            <i class="fa-solid fa-arrow-up-right-from-square text-sm text-green-300"></i>
            View Site
          </a>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { useProjectStore } from "../../stores/projects";

export default {
  setup() {
    const projs = useProjectStore();
    return {
      projs,
    };
  },
  data() {
    return{
      mhl: 'text-lime-400 font-semibold',
      hl: 'text-slate-300 font-semibold',
      hl2: 'text-slate-50',
    }
  }
};
</script>


<style>
@import url('../../../public/scss/projects.scss');
</style>