const searchField = document.getElementById("search-bar");
const filterable = document. querySelectorAll(".filter");




const handleSearch = event => {
    Array.from(filterable).forEach(message => {
        const userSearch = event.target.value.toLowerCase();
        messages = message.parentElement.parentElement;
        messageText = message.textContent.toLowerCase();
        if(messageText.includes(userSearch)) {
            messages.style.display = "flex";
        }else{
            messages.style.display = "none";
        }
    });
}


searchField.addEventListener("keyup", handleSearch);