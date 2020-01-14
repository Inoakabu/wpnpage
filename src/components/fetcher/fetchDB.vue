<script>
// import axios from 'axios'
// import { useFetch } from "vue-async-function";

import cpAPICall from '../../assets/conf/cpAPI.json'

export default {

  data () {
    return {
      apiURL: JSON.stringify(cpAPICall.call.apiURL).replace(/"/g, "") + JSON.stringify(cpAPICall.call.token).replace(/"/g, ""),
      data: []
    }
  },
  // setup() {
  //   console.log("TEst")
  //   const apiCall = cpAPICall.call
  //   const { data, error, isLoading } = useFetch(apiCall.apiURL + apiCall.token, {
  //     heders: { Accept: "appliction/json" }
  //   });
  //   return { data, error, isLoading }
  // }
  methods: {
    fetchData: function() {
      fetch(this.apiURL).then((res) => {
        return res.json().then((data) => {
          this.data = data.entries
        })
      })
    }
  },
  created: function () {
    this.fetchData();
  }
}
</script>