import { defineStore } from "pinia";

export const useProjectStore = defineStore(
  {
    id: 'projects',
    state: () => ({
      properties: [
        {
          name: 'KanbanHub',
          descr: 'is a task management tool app for recording and organizing projects. Each project features three status categories (To-Do, In-Progress, and Done) for efficient task management and project tracking.',
          techs: ['React','TypeScript','Zustand','Tailwind'],
          links: {github:'', demo:'https://kanbanhub.vercel.app/'},
          prev: 'kanbanhub.jpg',
          type: 'Frontend Development'
        },
        {
          name: 'ChefWeb',
          descr: 'is an online source website i developed for different categories of meals, recipes and cooking instructions. This project is part of my study in restful api`s and how to interact with it using axios.',
          techs: ['Rest API', 'React', 'TypeScript', 'Axios', 'Zustand', 'Tailwind', 'Sass'],
          links: {github:'', demo:'https://chefweb.vercel.app/'},
          prev: 'chefweb.png',
          type: 'Rest API with Frontend'
        },
        {
          name: 'Alumni Tracker',
          descr: 'is a web application system i developed for our capstone project. This app organizes the informations of alumni and allows the user to provide community updates to the alumni regarding with alumni events such as sports, reunions and etc.',
          techs: ['Php', 'MySQL', 'DataTables', 'Bootstrap', 'ApexCharts.js'],
          links: {github:'', demo:''},
          prev: 'ac-dash.png',
          type: 'Fullstack Development'
        },
        {
          name: 'Expense Tracker',
          descr: 'is a minimal app that allows the users to track their expenses. Main features are balance dashboard, add balance and expense, log history with time stamp and log descriptions.',
          techs: ['Vite.js', 'React', 'TypeScript', 'Zustand', 'Tailwind'],
          links: {github:'', demo:'https://nirshat.github.io/expense-tracker/'},
          prev: 'expense.png',
          type: 'Frontend Development'
        },
        {
          name: 'MovPicHub',
          descr: 'is a straightforward and streamlined website that utilizes API calls to dynamically generate and display movie posters based on your search queries.',
          techs: ['Rest API', 'React', 'TypeScript', 'Vanilla CSS'],
          links: {github:'', demo:'https://nirshat.github.io/movpichub/'},
          prev: 'movpichub.png',
          type: 'Rest API with Frontend'
        },
        {
          name: 'StellarQuiz',
          descr: 'is a celestial-themed quiz app designed to challenge your knowledge of astronomy. Explore questions about stars, galaxies, and cosmic phenomena, aiming for a top score of 10. It`s an engaging way to test your space expertise, whether you`re an astronomy enthusiast or a curious beginner.',
          techs: ['Vite.js', 'React', 'TypeScript', 'MUI', 'Vanilla CSS'],
          links: {github:'', demo:'https://nirshat.github.io/stellarquiz/'},
          prev: 'stlrqz.png',
          type: 'Frontend Development'
        },
        {
          name: 'Random Quotes Generator',
          descr: "is a simple site fetches random quotes through API calls, designed to deliver a daily dose of inspiration. It offers users a convenient way to access thought-provoking and motivational quotes at any time, enhancing your mindset and outlook on life.",
          techs: ['Rest API', 'React', 'TypeScript', 'Axios', 'Vanilla CSS'],
          links: {github:'', demo:'https://nirshat.github.io/quo-gen/'},
          prev: 'rqg.png',
          type: 'Rest API with Frontend'
        },
       ],
    }),
  }
)


// {
//   name: 'ToDo List',
//   descr: 'is a minimalist task manager designed to declutter your to-do list and enhance your productivity. With this clean and simple interface helps you to create and complete tasks with ease, all while keeping your schedule organized.',
//   techs: ['Vite.js', 'React', 'TypeScript', 'Bootstrap', 'MUI'],
//   links: {github:'', demo:'https://nirshat.github.io/to-do-list/'},
//   prev: 'todo.png',
//   type: 'Frontend Development'
// },