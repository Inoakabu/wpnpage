// import cockpit from '../../assets/conf/cpAPI.json'
const fetch = require('node-fetch')
const cockpit = require('../../assets/conf/cpAPI.json')

const apiURL = JSON.stringify(cockpit.call.apiURL).replace(/"/g, "") + JSON.stringify(cockpit.call.token).replace(/"/g, "")
// let data = []

async function getData(url = '', data = {})

// console.log(apiURL);