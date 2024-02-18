import axiosCustomInstance from './axiosInstance'

type RequestOptions = {
  headers?: Record<string, string>
  params?: Record<string, string | number | boolean>
}

// Function to send a GET request to a specific endpoint with optional headers and params
export const get = async <T>(
  endpoint: string,
  options?: RequestOptions
): Promise<T> => {
  try {
    const res = await axiosCustomInstance<T>({
      method: 'get',
      url: endpoint,
      headers: options?.headers ?? {},
      params: options?.params ?? {},
    })
    return res.data
  } catch (err) {
    console.error(err)
    throw err
  }
}

// Function to send a POST request to a specific endpoint with optional headers and params
export const post = async <T, U = undefined>(
  endpoint: string,
  data?: U,
  options?: RequestOptions
): Promise<T> => {
  try {
    const res = await axiosCustomInstance<T>({
      method: 'post',
      url: endpoint,
      data: data,
      headers: options?.headers ?? {},
    })
    return res.data
  } catch (err) {
    console.error(err)
    throw err
  }
}

// Function to send a PATCH request to a specific endpoint with optional headers and params
export const patch = async <T, U = undefined>(
  endpoint: string,
  data?: U,
  options?: RequestOptions
): Promise<T> => {
  try {
    const res = await axiosCustomInstance<T>({
      method: 'patch',
      url: endpoint,
      data: data,
      headers: options?.headers ?? {},
    })
    return res.data
  } catch (err) {
    console.error(err)
    throw err
  }
}

// Function to send a DELETE request to a specific endpoint with optional headers and params
export const remove = async <T>(
  endpoint: string,
  options?: RequestOptions
): Promise<T> => {
  try {
    const res = await axiosCustomInstance<T>({
      method: 'delete',
      url: endpoint,
      headers: options?.headers ?? {},
    })
    return res.data
  } catch (err) {
    console.error(err)
    throw err
  }
}
