<template>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{title}}</title>
  </head>
  <body>


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


