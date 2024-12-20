export function codeCheck () {
  fetch("/components/check.html")
    .then(response => {
        if (!response.ok){
            throw new Error("check not find : " + response.status)
        }
        return response.text()
    })
    .then(data => {
        // recuperer le "for" du label et l'attribuer au "name" et  "id" du input
        const listToCheck = document.querySelectorAll(".check-content label")
        listToCheck.forEach(element => {
            let elementFor = element.getAttribute("for")
            // creer et placer le custom check avec le data
            const checkBox = document.createRange().createContextualFragment(data)
            const inputCheck = checkBox.querySelector("input")
            inputCheck.setAttribute("name",elementFor)
            inputCheck.setAttribute("id",elementFor)
            element.parentNode.insertBefore(checkBox,element)
            // end
        })
        // end
        // Changement du check
        const newCheck = document.querySelectorAll(".check-content .custom-check")
        const invisibleInput = document.querySelectorAll(".check-content input")

            let checkLoad = (theInput) => {
                theInput.nextElementSibling.classList.add("checked")
                theInput.parentElement.nextElementSibling.classList.add("checked")
            }
            let uncheck = (theInput) => {
                theInput.nextElementSibling.classList.remove("checked")
                theInput.parentElement.nextElementSibling.classList.remove("checked")
            }

        newCheck.forEach(elementCheck => {
            elementCheck.addEventListener("click", ()=>{
                elementCheck.querySelector("input").click()
            })
        });
        invisibleInput.forEach(input => {
            input.addEventListener("change", ()=>{
                if(input.checked){
                    checkLoad(input)
                }
                else{
                    uncheck(input)
                }
            })
        })
    })
    .catch(error => console.log(error))
}