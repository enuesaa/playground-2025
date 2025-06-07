export const fetcher = async <T>(url: string, options: RequestInit): Promise<T> => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL
  console.log(baseUrl)

  const response = await fetch(url, options)
  const resbody = await response.json()

  return { status: response.status, data: resbody } as T
}
