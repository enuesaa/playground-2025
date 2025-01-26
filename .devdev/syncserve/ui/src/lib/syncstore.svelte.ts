import { PUBLIC_SYNC_API_HOST } from '$env/static/public'
import { browser } from '$app/environment'

const host = PUBLIC_SYNC_API_HOST !== '' ? PUBLIC_SYNC_API_HOST : (browser ? location.host : 'localhost:80')

let socket = new WebSocket(`ws://${host}/sync`)
let data = $state('')

export function useSyncStore() {
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
      socket.send(text)
    }
	}
}
