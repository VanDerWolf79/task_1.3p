<template>
    <div class="container">
      <h2>Projects</h2>
      <div class="project" v-for="(project, index) in projects" :key="index">
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        projects: [
          {
            title: 'Project 1',
            description: 'My first project I did in SIT120 was a basic html page that showed off basic HTML tags and the use off 3 forms of CSS',
          },
          {
            title: 'Project 2',
            description: 'My second project I created a web page that worked on any device that utilized HTML, CSS and JavaScript. I learned how to use all of them together to make a website that worked really well for what the task needed',
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .project {
    border: 1px solid #ccc;
    padding: 1rem;
    margin-bottom: 1rem;
    background-color: white;
  }
  
  .project h3 {
    font-size: 1.5rem;
  }
  
  .project p {
    font-size: 1rem;
  }
  </style>
  
