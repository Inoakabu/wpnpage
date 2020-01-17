// import cockpit from '../../assets/conf/cpAPI.json'
const fetch = require('node-fetch')
const cockpit = require('../../assets/conf/cpAPI.json')

let collDef = 'Bands'
const collListURL = JSON.stringify(cockpit.call.collListURL).replace(/"/g, "") + JSON.stringify(cockpit.call.token).replace(/"/g, "")
const collURL = JSON.stringify(cockpit.call.collURL).replace(/"/g, "") + collDef + cockpit.call.endStr + JSON.stringify(cockpit.call.token).replace(/"/g, "")
// let data = []

exports.getCollections = async function getCollections(url = '', data = {}){
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return await res.json();
}


exports.getData = async function getData(url = '', data = {}) {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return await res.json();
}


// getData(collURL).then((data) => {
//   console.log(data)
// })