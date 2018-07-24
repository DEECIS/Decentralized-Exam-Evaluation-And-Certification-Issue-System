<template>
  <div>
    <MyHeader/>
  <div>
    <img src="@/assets/reward.jpg"/>
  </div>
  </div>
</template>
<script>

// @ is an alias to /src

import MyHeader from '@/components/MyHeader.vue'
import base from "@/components/base.js"

export default {
  name: 'home',
  components: {
    MyHeader
  },
  data() {
    return {
      id:0
    }
  },
  created(){
    console.log("created "+ this.$route.params.id);

    // init web3
    base.initWeb3();
    // set the country list
    this.DEE = base.CL;

    this.id = parseInt(this.$route.params.id);

    if (this.id == 0){

    }else{

    }
  }
}
</script>


