<template>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{title}}</title>
  </head>
  <body>
  <section class="hero is-info">
    <div class="hero-body">
      <div class="container">
        <div id="app">
          <H2 class="title">{{title}}</H2>
          <div id="nav" class="nabbar">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
  <br/>

    <router-view />

  <footer>
  </footer>
  </body>
</html>
</template>
<script>
export default {
  data(){
    return {
        "title": "Decentralized Exam Evaluation And Certification Issue System"
        }
  },
}
</script>


