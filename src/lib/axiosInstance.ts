import Axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'

const createAxiosInstance = () => {
  const instance = Axios.create({
    baseURL: process.env.API_URL,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
  return instance
}

const instance = createAxiosInstance()

export const axiosInstance = async <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig
): Promise<AxiosResponse<T>> => {
  const source = Axios.CancelToken.source()

  const promise = instance({
    ...config,
    ...options,
    cancelToken: source.token,
  })

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  promise.cancel = () => {
    source.cancel('Query was cancelled')
  }

  return promise
}

export default axiosInstance

export type ErrorType<Error> = AxiosError<Error>
