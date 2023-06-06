function attendance(input) {
    const words = ["Minahal", "Nasaktan", "Nagmahal"]
    let result = `Absent: ${input}`

    if(words.includes(input)) {
        result = `Present: ${input}`
    }
    return result;
}

console.log(attendance("Minahal"));
console.log(attendance("Nasaktan"));
console.log(attendance("Nagmahal"));
console.log(attendance("Joseph"));