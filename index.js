// Code your solution here
function findMatching(array, string) {
    return array.filter(word => word.toLowerCase() == string.toLowerCase())
}

function fuzzyMatch(array, string) {
    return array.filter(word => word.startsWith(string))
}

function matchName(array, string) {
    return array.filter(word => word['name'].toLowerCase() == string.toLowerCase())
}