const searchField = document.getElementById("search-bar");
const filterable = document.getElementsByClassName("new-message");
const button = document.querySelector('.arrow');




const handleSearch = event => {
    const userSearch = event.target.value.toLowerCase();
    Array.from(filterable).forEach(message => {
        messageText = message.textContent.toLowerCase();
        if(messageText.includes(userSearch)) {
            message.style.display = "flex";
        }else{
            message.style.display = "none";
        }
    });
}

searchField.addEventListener("keyup", handleSearch);