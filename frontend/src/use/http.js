import axios from "axios"

axios.interceptors.request.use(
  config => {
    config.baseURL = "/api"
    const token = localStorage.getItem("token")
    if (token) {
      config.headers.authorization = `Bearer ${token}`
    }
    return config
  },
  err => Promise.reject(err)
)

axios.interceptors.response.use(
  res => res.data,
  err => {
    console.log("error form axios post", err.response.data);
    return Promise.reject(err.response.data)
  }
)

export const lazyRequest = request => {
  const promise = new Promise((resolve, deply = 1000) => {
    setTimeout(resolve, deply)
  })
  return Promise.all([request, promise])
}

export default axios