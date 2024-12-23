export function codeButton (){
    let buttonUncheck = document.querySelector("#uncheckAll")

  buttonUncheck.addEventListener("click", ()=>{
    const invisibleInput = document.querySelectorAll(".check-content input")
    invisibleInput.forEach(input => {
        if (input.checked) {
            input.click()
        }
    });
  })
}
