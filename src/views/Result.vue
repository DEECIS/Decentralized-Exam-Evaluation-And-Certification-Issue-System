<template>
  <div>

    <div v-if="this.$route.params.id==0 ">
      <MyHeader/>
      <div class="container">
        <div class="notification">
          Your account is
          <p>{{base.account}}</p>
          {{getCertId()}}
          <br/>
          <div v-if="id != 0x0000000000000000000000000000000000000000">
            <p>The certification id is </p>
            <p>
              <router-link :to="{ name: 'result', params: { id: id }}">
                {{id}}
                </router-link>
            </p>
          </div>
          <div v-else>
            <p>It looks like you have not tested before.</p>
            <p>
              <router-link :to="{ name: 'quiz', params: { id: 0 }}">
                Quiz
              </router-link>
            </p>
            <p>
              Or you can search the certification through cert id.
            </p>
            <form>
              <input type="text" />
              <input type="submit" />
            </form>
          </div>
        </div>
      </div>

    </div>
    <div v-else>
      <div class="result column">
        {{getScore()}}
        <img  src="@/assets/reward.jpg"/>
        <div class="top-left">
          <strong>To the owner of account:</strong>
          <br/>
          {{address}}
        </div>

        <div class="in-center">
          <p>
            The score of
            <router-link :to="{ name: 'quiz', params: { id: 0 }}">
              {{Exam.name}}
            </router-link> is:
          </p>
          <p class="is-size-1">
            {{result}}
          </p>
        </div>

        <div class="bottom-right">
          Issued by <span class="is-size-4">DEE</span>
          <p>Version: {{version}} | Issuded In Block: {{block_num}}</p>
        </div>
      </div>
    </div>

  </div>
</template>
<script>

// @ is an alias to /src
import MyHeader from '@/components/MyHeader.vue'
import Exam from '@/views/Exam.vue'
import base from "@/components/base.js"

export default {
  name: 'certification',
  components: {
    MyHeader

  },
  data() {
    return {
      base,
      Exam,
      img: "{ background-image : url("+ require('@/assets/reward.jpg') + ")}",
      id:0,
      version: 0,
      block_num: 0,
      address: "",
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


  },
  mounted(){
    // this.address = base.accounts[0];
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

            // getScore(r);

        }).catch((e) => {
          console.error(e)
          this.message = "Got cert id failed"
        });
    },
    getScore(){
      console.log("Getting the test score");
      this.DEE.deployed().
        then((instance) => instance.getResult(this.$route.params.id)).
          then((r) => {
            console.log(r)
            this.address = r[0];
            var result = r[1].toNumber();
            var total = r[2].toNumber();

            this.result = (result.toFixed(4) / total * 100).toFixed(2);

            this.version = r[3].toNumber();
            this.block_num = r[4].toNumber();


        }).catch((e) => {
          console.error(e)
          this.message = "Got cert id failed"
        });
    }
  }
}
</script>
<style>

.result{
  margin-left: 175px;
  position: relative;
  text-align: center;
  height: 608px;
  width: 850px;

}
.top-left{
  position: absolute;
  text-align: left;
  top: 220px;
  left: 80px;
}
.in-center{
  position: absolute;
  text-align: right;
  top: 350px;
  left: 320px;
}

.bottom-right{
  position: absolute;
  text-align: right;
  bottom: 90px;
  right: 120px;
}

</style>



