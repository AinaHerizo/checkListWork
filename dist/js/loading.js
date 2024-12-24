export function codeLoading() {
    fetch("./components/loading.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("loading not found : " + response.status);
            }
            return response.text()
        })
        .then(data => {
            document.querySelector("body").prepend(document.createRange().createContextualFragment(data));
            const loadingView = document.querySelector("#loadingPage")
            // Loading Event
            if (loadingView) {
                setTimeout(() => {
                    loadingView.remove()
                }, 4000);
            }
            else {
                console.warn("Loading not found");                
            }
            // End Loading Event
        })
        .catch(error => console.log(error));
}
