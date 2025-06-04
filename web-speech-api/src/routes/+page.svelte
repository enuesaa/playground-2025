<script lang="ts">
	import { browser } from '$app/environment'

	let transcript = ''
	let recognition: SpeechRecognition

	if (browser) {
		recognition = new window.webkitSpeechRecognition()
		recognition.lang = 'ja'
		recognition.continuous = true

		recognition.onresult = ({ results }) => {
			transcript = results[0][0].transcript
		}
	}

	function startRecognition() {
		recognition?.start()
	}

	function stopRecognition() {
		recognition?.stop()
	}
</script>

<h2>文字起こし</h2>

<textarea>{transcript}</textarea>

<section>
	<button on:click={startRecognition}>Start</button>
	<button on:click={stopRecognition}>Stop</button>
</section>
