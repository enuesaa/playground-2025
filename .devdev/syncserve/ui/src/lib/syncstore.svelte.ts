export function createSyncStore() {
  let data = $state('')



  const socket = new WebSocket('ws://localhost:80/sync');
  socket.onopen = () => {
    console.log('socket connected');
  };
  socket.onmessage = (event) => {
    if (typeof event.data !== 'string') {
      return;
    }
    data = event.data
  }

	return {
		get data() {
      return data
    },
		// increment: () => count += 1
	}
}
