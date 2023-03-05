/* eslint-disable no-return-await */
import fetch from 'node-fetch'


import { call } from '../../assets/conf/cpAPI.json'

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

export default async function getData(url = '', data = {}) {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${call.token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  return await res.json()
}
