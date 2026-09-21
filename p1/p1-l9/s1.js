let old = 15;
let isMan = true;
let isWorkingAgePerson = (
    old >= 18
    && (
        (isMan === true && old < 65)
        || (isMan === false && old < 63)
    )
)
console.log(` ${isWorkingAgePerson}`);