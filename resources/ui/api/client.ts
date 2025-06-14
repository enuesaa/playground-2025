export const fetcher = async <T>(
  url: string,
  options: RequestInit,
): Promise<T> => {
  const response = await fetch(url, options)
  const resbody = await response.json()

  return { status: response.status, data: resbody } as T
}
