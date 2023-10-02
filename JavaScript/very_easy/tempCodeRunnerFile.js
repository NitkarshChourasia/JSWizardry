function determineLever(arr) {
    arrStr = arr.join("").toLowerCase();
    leverTypeObj = { efl: "first class lever", elf: "second class lever", fel: "third class lever" };
    return leverTypeObj[arrStr];
} // Best way in my opinion.

if (require.main == module) {
    console.log("#### First Class, Second Class and Third Class Levers  ####\n");
    // Test cases.
    console.log(determineLever(["e", "f", "l"]));
    console.log(determineLever(["e", "l", "f"]));
    console.log(determineLever(["f", "e", "l"]));

    console.log(); // Blank line for readability.
    // Custom test cases.
    console.log(determineLever(["E", "F", "L"]));
    console.log(determineLever(["E", "L", "F"]));
    console.log(determineLever(["F", "E", "L"]));
}

// 18-09-2023
// complete.