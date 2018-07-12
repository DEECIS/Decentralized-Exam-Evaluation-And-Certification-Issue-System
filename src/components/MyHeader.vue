<template>
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
</template>

<script>
export default {
  name: "MyHeader",
  data(){
    return {
        "title": "Decentralized Exam Evaluation And Certification Issue System"
        }
  },

}
</script>

<style>

</style>
