export function codeCheck () {
  fetch("/components/check.html")
    .then(response => {
        if (!response.ok){
            throw new Error("check not find : " + response.status)
        }
        return response.text()
    })
    .then(data => {
        const listToCheck = document.querySelectorAll(".check-content label")
        listToCheck.forEach(element => {
            let elementFor = element.getAttribute("for")
            const checkBox = document.createRange().createContextualFragment(data)
            const inputCheck = checkBox.querySelector("input")
            inputCheck.setAttribute("name",elementFor)
            inputCheck.setAttribute("id",elementFor)
            element.parentNode.insertBefore(checkBox,element)
        })
    })
    .catch(error => console.log(error))
}