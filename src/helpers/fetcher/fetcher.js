/* eslint-disable no-return-await */
const fetch = require('node-fetch')

// exports.getCollections = async function getCollections(url = '', data = {}){
//   const res = await fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(data)
//   });
//   return await res.json();
// }

export async function getData(url = '', data = {}) {
  const res = await fetch(url, {
    method: 'POST',
    headers: {

      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return await res.json();
}