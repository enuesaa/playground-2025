import evdev

devices = [evdev.InputDevice(path) for path in evdev.list_devices()]
for device in devices:
    print(f"Found: {device.name} at {device.path}")

    for event in device.read_loop():
        if event.type == evdev.ecodes.EV_KEY:
            key_event = evdev.categorize(event)
            print(f"Key {key_event.keycode} {'pressed' if key_event.keystate else 'released'}")
    break
