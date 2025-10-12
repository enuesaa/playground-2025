package args

import "core:strconv"

pint :: proc(s: string) -> int {
    value, ok := strconv.parse_int(s)
    if !ok {
        return 0
    }
    return value
}
