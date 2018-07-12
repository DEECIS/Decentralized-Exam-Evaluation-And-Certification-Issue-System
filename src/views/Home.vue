<template>
  <div>
    <MyHeader/>

  <br/>
  </div>
</template>

<script>
// @ is an alias to /src

import MyHeader from '@/components/MyHeader.vue'

export default {
  name: 'home',
  components: {
    MyHeader
  }
}
</script>
