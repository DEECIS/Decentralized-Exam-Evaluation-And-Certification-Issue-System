<template>
  <div>
    <MyHeader/>
  <div v-if="this.$route.params.id==0">
    <div class="container">
      <div class="notification">
        Your account is
        <p>{{address}}</p>
        {{getCertId()}}
        <br/>
        <p>The certification id is </p>
        <p>
          <router-link :to="{ name: 'result', params: { id: id }}">
            {{id}}
            </router-link>
        </p>
      </div>
    </div>

  </div>
  <div v-else>
    {{getScore()}}
    {{date.getDate()}}-{{date.getMonth()}}-{{date.getFullYear()}}
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
      id:0,
      address: 0,
      result: 100,
      issue: "DEE | Decentralized Exam Evaluation And Certification Issue System",
      date: new Date()
    }
  },
  created(){
    console.log("created "+ this.$route.params.id);

    // init web3
    base.initWeb3();
    // set the country list
    this.DEE = base.CL;

    this.id = parseInt(this.$route.params.id);
    this.address = base.accounts[0];

  },
  mounted(){
  },
  methods:{
    getCertId(){
      console.log("Getting cert id");
      this.message = "Getting cert id"

      this.DEE.deployed().
        then((instance) => instance.getTestId() ).
          then((r) => {
            console.log(r)
            this.id = r;

        }).catch((e) => {
          console.error(e)
          this.message = "Got cert id failed"
        });
    },
    getScore(){
      console.log("Getting the test score");
    }
  }
}
</script>


