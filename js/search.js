const searchField = document.getElementById("search-bar");
const filterable = document. getElementsByClassName("filter");





const handleSearch = event => {
    const userSearch = event.target.value.toLowerCase();
    
    Array.from(filterable).forEach(message => {
        messages = filterable.parentElement.parentElement;
        messageText = message.textContent.toLowerCase();
        if( messageText.includes(userSearch)) {
            messages.style.display = "flex";
        }else{
            messages.style.display = "none";
        }
    });
}


searchField.addEventListener("keyup", handleSearch);