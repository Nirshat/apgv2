<template>
  <div class="flex flex-col">
    <span class="font-semibold text-lime-400">
      Full-stack Developer <i class="text-lime-400">(Hands-on)</i>
    </span>
    <span>Alumni Tracker System <i>(Capstone Project)</i></span>
    <p>
      Developed a system for administrator that organizes alumni data and allows the user to post an announcement of events. I also developed a portal site for alumni that contains announcement of events and allows the user to update their employment status.
    </p>
    <div class="">
      <span class="font-semibold">Tasks:</span>
      <ul class="">
        <li v-for="(task, index) in tasks" :key="index">
          • {{ task }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return{
      tasks: [
        'Created conceptual design of the project (prototype).',
        'Implemented the database structure with MySQL.',
        'Front-end Development with HTML, CSS, JS, Bootstrap.',
        'Back-end Development with PHP.',
      ]
    }
  }
}
</script>


<style>
@import url('../../../public/scss/themes.scss');
</style>