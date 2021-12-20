import axios from 'axios'

const client = axios.create({
  baseURL: 'https://demo.test.chm-cbd.net',
  json: true,
})

const execute = (method, resource, data = null, params = null) => new Promise((resolve, reject) => {
  client({
    method,
    url: resource,
    data,
    params
  }).then(req => resolve(req.data)).catch(err => reject(err.response.data.message))
})

// async execute (method, resource, data=null, params=null) {
//   return client({
//     method,
//     url: resource,
//     data,
//     params,
//     headers: { Authorization: authToken() }
//   }).then(req => {
//     return req.data
//   })
// },

export default {
  execute,
  client
}
