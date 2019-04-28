export default {
  name: 'CO2',
  data() {
    return {
      msg: '',
      countries: '',
      countryinput: '',
    };
  },
  methods: {
    // search: function (event) {
    //   //vm.$forceUpdate();
    //
    //   // alert('Hello ' + this.countryinput + '!')
    //   //   if (event) {
    //   //     alert(event.target.tagName)
    //   var self = this;
    //     self.show = false;
    //
    //     Vue.nextTick(function (){
    //       console.log("re-render");
    //       self.show = true;
    //     })
    //
    //     console.log('test')
    //     },
    getMessage() {
      const path = 'http://localhost:5000/api/countries/Finland';
      axios.get(path)
        .then((res) => {
          this.msg = res.data;
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
        });
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
  },
  created() {
    this.getMessage();
    this.getCountries();
  },
};
