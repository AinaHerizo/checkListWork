document.addEventListener("DOMContentLoaded", (event) => {
    // variable global
    const loadingView = document.querySelector("#loading")
    const checkList = document.querySelectorAll(".check-container input")
    const indication = document.querySelectorAll(".check-container i")

    // Loading Event
    setTimeout(() => {
        loadingView.remove()
    }, 4000);
    // End Loading Event
    
    // Check List
        // function 
    let checking = (theCheckElement) => {
        theCheckElement.nextElementSibling.classList.remove("notChecked")
        theCheckElement.nextElementSibling.classList.add("checked")
    }
    let unCheck = (theCheckElement) => {
        theCheckElement.nextElementSibling.classList.remove("checked")
        theCheckElement.nextElementSibling.classList.add("notChecked")
    }
        // end function
    indication.forEach(i => {
        i.addEventListener("click", () => {
                i.previousElementSibling.click()
            }
        )
    })
    checkList.forEach(check => {
        check.addEventListener("change", () => {
            if (check.checked) {
                checking(check);
            } else {
                unCheck(check);
            }
        });
    });
    // en Check List
});
  