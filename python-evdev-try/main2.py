import evdev

dev = evdev.InputDevice('/dev/input/event9')

print("Name:", dev.name)

# for 8bitdo
for event in dev.read_loop():
    if event.type == evdev.ecodes.EV_KEY:
        key_event = evdev.categorize(event)
        print("[KEY]", key_event.keycode, key_event.keystate)
    elif event.type == evdev.ecodes.EV_ABS:
        abs_event = evdev.categorize(event)
        print("[ABS]", evdev.ecodes.ABS[abs_event.event.code], abs_event.event.value)

# [KEY] BTN_SELECT 0
# [KEY] BTN_START 1
# [KEY] BTN_START 0
# [ABS] ABS_GAS 255
# [KEY] BTN_TR2 1
# [ABS] ABS_GAS 0
# [KEY] BTN_TR2 0
