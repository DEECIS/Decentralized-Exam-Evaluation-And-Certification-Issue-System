<template>
  <div>

    <div v-if="$route.params.id == 0 || $route.params.id == empty_id">
      <!-- default page of result, account + id -->
      <MyHeader/>
      <div class="container">
        <div class="notification">

          <div v-if = "base.account">
            <!-- detect web3 -->
            Your account is
            <p>{{base.account}}</p>
            {{getCertId()}}
            <br/>
          </div>

          <div v-if="id != empty_id">
            <!-- detect cert id -->
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
            <br/>
            <div>
              <div class="field">
                <div class="control">
                  <input
                  v-validate="'required|length:66|is_not:empty_id'"
                  class="input is-primary is-rounded"
                  v-model="id_input"
                  name="cert_id"
                  type="text" placeholder="the cert id">
                </div>
              </div>

              <p>
                {{id_input}}
              </p>
              <p>
                <span class="has-text-danger">{{ errors.first('cert_id') }}</span>
              </p>

              <button
              @click="search()"
              class="button is-primary">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div v-else>
      {{getScore()}}
      <!-- show certification -->
      <div v-if=" !cert_found ">
        <MyHeader/>
        <p>Cannot found, please check the cert id.</p>
      </div>
      <div v-else class="result column">

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
      empty_address: '0x0000000000000000000000000000000000000000',
      empty_id: '0x0000000000000000000000000000000000000000000000000000000000000000',
      id:'0x0000000000000000000000000000000000000000000000000000000000000000', // the default bytes 32
      id_input: '',
      cert_found: false,
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

            if (this.address != this.empty_address){
              this.cert_found = true;
            }else{
              this.cert_found = false;
            }

            var result = r[1].toNumber();
            var total = r[2].toNumber();

            this.result = (result.toFixed(4) / total * 100).toFixed(2);

            this.version = r[3].toNumber();
            this.block_num = r[4].toNumber();


        }).catch((e) => {
          console.error(e);
          this.cert_found = false;
          // this.address = '0x0000000000000000000000000000000000000000000000000000000000000000';
          this.message = "Got cert id failed";
        });
    },
    isValidId(id){

      if (id !== "" && id !=="0" && id.substring(0,2) == "0x"){
        return true;
      }
      return false;
    },
    search(){
      if ( this.isValidId(this.id_input) ){
        // this.getScore();
        this.$router.push({ name: 'result', params: { id: this.id_input }});
        // this.getScore();
        location.reload();
      }
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



