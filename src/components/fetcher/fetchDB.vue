<script>
// import axios from 'axios'
import { useFetch } from "vue-async-function";

import cpAPICall from '../../assets/conf/cpAPI.json'

export default {
  setup() {
    console.log("TEst")
    const apiCall = cpAPICall.call
    const { data, error, isLoading } = useFetch(apiCall.apiURL + apiCall.token, {
      heders: { Accept: "appliction/json" }
    });
    return { data, error, isLoading }
  }
}
</script>