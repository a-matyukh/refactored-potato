
export function emit(eventName: MyEvents, payload?: {}) {
    let event = new CustomEvent(eventName, {
        detail: payload
    })
    document.dispatchEvent(event)
}