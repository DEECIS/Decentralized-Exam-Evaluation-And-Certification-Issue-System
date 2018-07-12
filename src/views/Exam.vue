<template>
  <div>
    <div class="columns  ">
      <div class="column
      is-8
      is-offset-2
      has-background-dark
      has-text-light
      ">
        <h4>Quiz {{this.$route.params.id}}:</h4>
        <br/>
        <p>
        {{ questions[this.$route.params.id].question }}
        </p>
        <br/>
        <br/>
      </div>
    </div>
    <br/>

    <div class="columns  is-narrow">
      <div class="column
      is-6
      is-offset-3
      ">

        <div class="control">
          <ul v-for="option in questions[this.$route.params.id].options">
            <li>
          <label class="radio has-background-light">
            <input type="radio" name="answer">
            {{option}}
          </label>
            </li>
            <br/>
          </ul>
        </div>
      </div>
    </div>

    <div class="columns">
      <div class="column
      is-2
      is-offset-2
      ">

      <button class="button"
      v-if="$route.params.id -1 >=0"
      @click="prevQuestion()"
      >Previous</button>

      </div>

      <div class="column
        is-2
        is-offset-5
        ">

        <button class="button"
        v-if="$route.params.id +1 < questions.length"
        @click="nextQuestion()">
        Next</button>

      </div>
    </div>



  </div>
</template>
<script>
import questions from "@/questions.json"

export default {
  data(){return {
    questions,
    question_index: 0
    }
  },

  mounted(){
    console.log("mounted "+ this.$route.params.id);
    this.question_index = parseInt(this.$route.params.id);
  },
  methods:{
    changeQuestion(i){
      if (this.question_index + i >=0 &&
       this.question_index + i < this.questions.length){
        this.$router.push({
          name: "quiz",
          params: {
            id: parseInt(this.$route.params.id)+i
          }
        })

      }else{
        console.log("route index error");
      }
    },
    nextQuestion(){
      this.changeQuestion(1)
    },
    prevQuestion(){
      this.changeQuestion(-1)
    }
  }
}
</script>

