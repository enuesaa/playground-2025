import { PUBLIC_SYNC_API_URL } from '$env/static/public'


const socket = new WebSocket(PUBLIC_SYNC_API_URL)

export function createSyncStore() {
  let data = $state('')

	return {
		get data() {
      return data
    },
    connect() {
      socket.onmessage = (event) => {
        if (typeof event.data !== 'string') {
          return;
        }
        data = event.data
      }
    },
    send(text: string) {
      // socket.onopen = () => {
        socket.send(text)
        // socket.close()
      // }
    }
	}
}
