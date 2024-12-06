document.addEventListener("DOMContentLoaded", (event) => {
    // variable global
    const loadingView = document.querySelector("#loading")
    const uncheckAll= document.querySelector("#uncheckAll")
    const checkList = document.querySelectorAll(".check-container input")
    const indication = document.querySelectorAll(".check-container i")

    // Loading Event
    setTimeout(() => {
        loadingView.remove()
    }, 4000);
    // End Loading Event
        uncheckAll.addEventListener("click", ()=>{
            checkList.forEach(check => {
                if (check.checked) {
                    unCheck(check)
                    check.checked = false;
                }
            })
        })
    // button uncheck
    // end button uncheck
    
    // Check List
        // function 
    let checking = (theCheckElement) => {
        theCheckElement.nextElementSibling.classList.remove("notChecked")
        theCheckElement.nextElementSibling.classList.add("checked")
        theCheckElement.parentElement.nextElementSibling.style.textDecoration = "line-through"
        theCheckElement.parentElement.nextElementSibling.style.color = "#8e8e8e"
    }
    let unCheck = (theCheckElement) => {
        theCheckElement.nextElementSibling.classList.remove("checked")
        theCheckElement.nextElementSibling.classList.add("notChecked")
        theCheckElement.parentElement.nextElementSibling.style.textDecoration = "none"
        theCheckElement.parentElement.nextElementSibling.style.color = "#000"
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
  