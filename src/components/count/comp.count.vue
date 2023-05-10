<template>
  <div class="count">
    <h3>Festival-Countdown</h3>
    <h1 v-if="total >= 0">
      {{ days }} : {{ hours }} : {{ minutes }} : {{ seconds }}
    </h1>
    <h1 v-else>IT`S ON</h1>
    <p>
      {{ content[currentLang].days }} : {{ content[currentLang].hrs }} :
      {{ content[currentLang].min }} : {{ content[currentLang].sec }}
    </p>
  </div>
</template>

<script>
import content from "@/assets/json/content.json";
// import fetcher from "../../helpers/fetcher/fetcher";
// const cockpit = require("../../assets/conf/cpAPI.json");
// const collURL =
//   JSON.stringify(cockpit.call.collURL).replace(/"/g, "") +
//   "count" +
//   cockpit.call.endStr +
//   JSON.stringify(cockpit.call.token).replace(/"/g, "");

export default {
  name: "Count",
  data() {
    return {
      currentDate: Date.parse(new Date(this.endDate)) - Date.parse(new Date()),
      endDate: "April 26, 2024 01:00:00",
      content: content.countdown,
    };
  },
  computed: {
    days() {
      return Math.floor(this.currentDate / (1000 * 60 * 60 * 24));
    },
    hours() {
      let hours = Math.floor((this.currentDate / (1000 * 60 * 60)) % 24);
      return hours > 9 ? hours : `0${hours}`;
    },
    minutes() {
      let minutes = Math.floor((this.currentDate / 1000 / 60) % 60);
      return minutes > 9 ? minutes : `0${minutes}`;
    },
    seconds() {
      let seconds = Math.floor((this.currentDate / 1000) % 60);
      return seconds > 9 ? seconds : `0${seconds}`;
    },
    total() {
      let total = 0;
      total = this.days + this.hours + this.minutes + this.seconds;
      return total;
    },
    currentLang() {
      return this.$route.params.lang;
    },
  },
  methods: {
    setCurrentDate() {
      this.currentDate =
        Date.parse(new Date(this.endDate)) - Date.parse(new Date());
    },
    // getData: function () {
    //   fetcher(collURL).then((res) => {
    //     this.endDate = res.entries[0].wpnDate;
    //   });
    // },
  },
  created() {
    this.setCurrentDate();
    setInterval(this.setCurrentDate, 1000);
    // this.getData();
  },
};
</script>

<style>
.count {
  padding: 5rem 0;
  text-align: center;
}

.count h1 {
  color: var(--typo);
  font-size: 3rem;
}

@media (max-width: 768px) {
  .count {
    padding: 2.5rem 0;
  }
}

@media (max-width: 560px) {
  .count h1 {
    color: var(--typo);
    font-size: 12vw;
  }
}

@media (max-width: 411px) {
  .count h1 {
    color: var(--typo);
    font-size: 10vw;
  }
}

.count h3 {
  text-transform: uppercase;
}

.count p {
  color: var(--typo);
  text-transform: uppercase;
  opacity: 0.25;
}
</style>
