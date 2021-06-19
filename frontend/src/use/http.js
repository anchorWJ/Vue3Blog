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

const isDEV = process.env.NODE_ENV === "development"

axios.interceptors.response.use(
  res => res.data,
  err => {
    if (isDEV) {
      console.log("error form axios post", err.response.data);
    }
    return Promise.reject(err.response.data)
  }
)

// show notice slower
export const lazyRequest = (request, deply = 1000) => {
  const promise = new Promise((resolve) => {
    setTimeout(resolve, deply)
  })
  return Promise.all([request, promise])
}

export default axios