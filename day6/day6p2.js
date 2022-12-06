markerText = "mjqjpqmgbljsphdztnvjfqwrcgsmlb"
buffer = []

function findDupes(arr) {
    seen = []
    for (var i = 0; i < arr.length; i++) {
        if (seen.includes(arr[i])) { // there is a duplicate char
            return true
        } else {
            seen.push(arr[i])
        }
    }
    return false // no dupes
}

for (var i = 0; i < markerText.length; i++) {
    buffer.push(markerText[i])
    console.log("Position: " + i)
    if (buffer.length < 14) {
        continue;
    }
    res = findDupes(buffer) // true = dupes, false = no dupes
    if (!res) { // if no duplicates
        console.log("FOUND @ " + (i+1));
        break;
    } else {
        buffer.shift()
    }
}
console.log(buffer)
