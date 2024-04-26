import axios from 'axios'

import { apiConfig } from './const'

const responseErrorInterceptor = (errorConfig: object) => {
  return Promise.reject(errorConfig)
}

class HttpProvider {
  static api = axios.create(apiConfig)

  static get(url: string, config: object = {}) {
    return HttpProvider.api.get(url, config)
  }

  static patch(url: string, data: object = {}) {
    return HttpProvider.api.patch(url, data)
  }

  static post(url: string, data: object, config: object = {}) {
    return HttpProvider.api.post(url, data, config)
  }

  static put(url: string, data: object, config: object = {}) {
    return HttpProvider.api.put(url, data, config)
  }
}

HttpProvider.api.interceptors.response.use(config => config, responseErrorInterceptor)
HttpProvider.api.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, responseErrorInterceptor)

export { HttpProvider }
