<template>
  <div>
    <h1>CO2 Emissions</h1>
    <p>Which country's emissions would you like to see?</p>
    <p>Country is: {{ this.countryinput }}</p>
    <p>{{ loading }}</p>
    <p>
      vituttaa
    </p>
    <p>{{msg.countryinput}}</p>
    <!-- <input type="text" id="myInput" onkeyup="myFunction()"
    placeholder="Search for a country.." title="Type in a name">
    <input id="country" type="text" name="countryname" placeholder="Search for a country..">
    <input type="submit" value="Submit" @click="submitEntry"> -->
  <form>
      <input v-model="msg.countryinput" placeholder="Search for a country.."/>
      <button v-on:click="updateInput" type="submit">Search</button>
      <!-- <button v-on:click="search" type="submit">Search</button> -->
  </form>
  <!-- <div>
    <p>{{ msg.emissions[2]}}</p>
    <p>{{ countries.countries[4] }}</p>
    <p>{{ msg.years }}</p>
  </div>
  <div>{{msg.emissions[0]}} -->

<h2>{{ msg.headers[0] }}</h2>
  <table class="tablestyle" align="center">
  <tr>
    <th>Year</th>
    <th>{{ msg.headers[2] }}</th>
  </tr>
  <tr v-for="(emission, index) in msg.emissions">
  <td>{{ msg.years[index] }}</td>
    <td>{{ emission }}</td>
  </tr>
</table>

<!-- <ul id="example-1">
  <li v-for="country in countries.countries">
    {{ countries.countries }}
  </li>
</ul> -->

<!-- <ul id="example-1">
  <li v-for="emission in msg.emissions">
    {{ emission }}
  </li>
</ul> -->
  </div>
  <!-- <div>
    <p v-if="visible">{{ text }}</p>
    <button style="margin-bottom: 1.5em;" type="button" @click="$store.commit('CHANGE_VIS')">Pound me!!</button>
  </div> -->
  </div>
</template>

<!-- v-model="user.email" -->

<script>
import { mapState } from 'vuex'
import axios from 'axios';

export default {
  name: 'CO2',
  data () {
    return {
      //ountryinput: 'Finland',
      countries: '',
      msg: '',
      emissions: '',
      headers: '',
      years: '',
      loading: '',
    }
  },
  // async mounted () {
  //   await this.$store.dispatch('loadText')
  // },
  computed: mapState([
    'msg',
    'countries',
    'countryinput',
    'visible',
  ]),
  watch: {
      // .this: {
      //     handler(newValue) {
      //         const { countryinput } = newValue
      //
      //         this.fetchData(countryinput)
      //     },
      //     immediate: true,
      // },
    //   countryinput: function (newQuestion, oldQuestion) {
    //   this.loading = 'Waiting for you to stop typing...'
    //   this.debouncedGetAnswer()
    // },
    countryinput: function(newInput, oldInput){
        countryinput = newInput;
    }
  },
  methods: {
    // loadCountries(){
    //     this.$store.dispatch('loadCountries', { countries: this.form.countries})
    //   },
    // ________updateInput() {
    // let newcountryinput = 'Sweden';
    // newcountryinput = this.$store.state.countryinput;
    // return newcountryinput;
    // },
    getMessage() {
      const path = 'http://localhost:5000/api/countries/' + this.countryinput;
      axios.get(path)
        .then((res) => {
          this.msg = res.data;
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
        });
    },
    changeInput(payload) {
      const path = 'http://localhost:5000/api/countries';
      axios.post(path, payload)
        .then(() => {
          this.getMessage();
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.log(error);
          this.getMessage();
        });
    },
    onSubmit(evt) {
      evt.preventDefault();
      let read = false;
      if (this.addBookForm.read[0]) read = true;
      const payload = {
        countryinput: this.countryinput,
      };
      this.changeInput(payload);
      this.initForm();
    },
    getCountries() {
      const path = 'http://localhost:5000/api/countries';
      axios.get(path)
        .then((res) => {
          this.countries = res.data;
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
        });
    },
    // getAnswer: _.debounce(
    //       function () {
    //         if (this.countryinput.indexOf('?') === -1) {
    //           this.answer = 'Questions usually contain a question mark. ;-)'
    //           return
    //         }
    //         this.answer = 'Thinking...'
    //         var vm = this
    //         axios.get('https://yesno.wtf/api')
    //           .then(function (response) {
    //             vm.answer = _.capitalize(response.data.answer)
    //           })
    //           .catch(function (error) {
    //             vm.answer = 'Error! Could not reach the API. ' + error
    //           })
    //       },
    //       // This is the number of milliseconds we wait for the
    //       // user to stop typing.
    //       500
    //     )
  },
  created() {
    this.getMessage();
    this.getCountries();
  },
};
</script>

<style>
 .tablestyle {
  border-style: solid;
  border-width: 5px;
  width: 50%;
  text-align: center;
}
th, td {
  border-bottom: 1px solid #ddd;
  text-align: center;
}

</style>
