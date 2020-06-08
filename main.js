// You should NOT change the HTML or CSS in this project (at least until you reach
// the bonus objectives). Focus on the JavaScript.
const replaceAllButton = document.querySelector(".replace-all-button")
const findInput = document.querySelector(".find-input")
const replaceInput = document.querySelector(".replace-input")

// The following variable holds your OUTER ARRAY of row elements.
// Later you will need an OUTER LOOP to loop over the individual elements within
// this array.
const rowElements = document.querySelectorAll(".row")


// When you call the function belwo, it will get and return an INNER ARRAY
// containing the cell elements for a given row.
// Call this function from WITHIN your row elements loop. Then you will, in turn,
// need to loop over the resulting cell elements. But where should this whole
// NESTED LOOP go? Think through the user's experience: when should WHAT happen? 
function getCellElements(currentRowElement) {
    return currentRowElement.querySelectorAll(".cell")
}



// YOUR CODE GOES HERE

replaceAllButton.addEventListener("click", function () {
    console.log(rowElements)
    let find = findInput.value
    let replace = replaceInput.value

    console.log(find, replace)

    for (let rowIndex = 0; rowIndex < rowElements.length; rowIndex += 1) {

        let info = getCellElements(rowElements[rowIndex])
        console.log(info)

        for (let infoIndex = 0; infoIndex < info.length; infoIndex += 1) {



            console.log(info[infoIndex].innerText)

            if (info[infoIndex].innerText.includes(find)) {

                // use .replace()    use .innerHTML and set innerHTML

                info[infoIndex].innerHTML = info[infoIndex].innerHTML.replace(find, replace)


            }

            console.log(info[infoIndex].innerHTML.includes(find))




        }





    }

})

// One last thing: dedicate very careful attention to using variables and
// naming them accurately.
// And when you change the value you are assigning to a variable, don't
// forget to consider changing the name to reflect the change you made! It
// is very easy to get confused when you are working inside NESTED LOOPS.
// The best of us do. And unnecessary confusion during the process of 
// developing your code means wasted time.
//
// The time-cost of structuring and naming things well is FAR less than the
// time-cost of ignoring the quality and readability of your code.
//
// You can, of course, remove any comments in this starter project once
// you have read them, if you prefer.
