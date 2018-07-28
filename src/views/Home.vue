<template>
  <div>
    <MyHeader/>
    <div class="columns">

      <div class="column
      is-three-fifths
      is-offset-one-fifth
      ">
        <br/>
        <p>This is an project prototype to use <strong>blockchain and smart contract</strong> to
          do testing, evaluation and issuing certifications.
        </p>
        <br/>
        <p>
          We try to combine smart contract of ethereum and the education system,
          for most qustions in a quiz or test, the evaluation can be done automatically,
          and it is be used in many testing too, i.e. Toefl, PTE testing.
        </p>
        <br/>
        <p>
          This process can migrated into blockchain through smart contract. Currently, in this demo,
           the quiz is just the basic multi-options selecting, however,
           it can be easily used in different and more complicated situations.

        </p>
        <br/>
        <h2 class="title">
          Feel free to try it
        </h2>

        <p>
          Open the <router-link :to="{ name: 'quiz', params: { id: 0 }}">quiz demo</router-link> to try it and know more about the working porcess.
        </p>

        <p>
          This project is open source, under apache 2.0,
          you can easily to get the oopen source through the link below.
          If you think this project is good, feel free to contribute codes, documents and your ideas.
        </p>

        <br/>
        <h2 class="title">
          More about the project
        </h2>
        <p>
          <ul>
            <li>
              <a href="https://github.com/tim-hub/Decentralized-Exam-Evaluation-And-Certification-Issue-System">Github</a>
            </li>
          </ul>
          </p>
      </div>

    </div>

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
