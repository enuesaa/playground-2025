import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    // Listen for frame loads; Turbo fires "turbo:frame-load" on the frame element
    this.element.addEventListener("turbo:frame-load", this.frameLoaded)
  }

  disconnect() {
    this.element.removeEventListener("turbo:frame-load", this.frameLoaded)
  }

  frameLoaded = (event) => {
    // When modal frame receives content, show overlay if not empty
    const frame = event.target
    if (frame.id !== "modal") return

    const hasContent = frame.innerHTML.trim().length > 0
    if (hasContent) {
      this.show()
    } else {
      this.hide()
    }
  }

  show() {
    this.element.classList.add("visible")
  }

  hide() {
    this.element.classList.remove("visible")
    // clear content to fully close
    this.element.innerHTML = ""
  }

  close(event) {
    event?.preventDefault()
    this.hide()
  }
}
