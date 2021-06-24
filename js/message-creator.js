//Opening the message create menu
const openMenu = document.querySelector(`.add-button`);
const messageModal = document.querySelector('.create-message-overlay');

openMenu.addEventListener("click", () =>{
    messageModal.style.display = `flex`;
})


//Creating color option divs
const labelContainer = document.querySelector('.label-choices');


 const styleColors = [
    '#8ba5ff',
    '#a28bff',
    '#c58bff',
    '#e88bff',
    '#ff8bb5',
    '#ff8b8b',
    '#ffa78b',
    '#ffbc8b',
    '#ffd18b',
    '#fff38b',
    '#b7ff8b',
    '#8bffa5',
    '#8bfff1',
    '#8bc7ff',
    '#ffffff',
    '#bcbcbc',
    '#868686',
    '#585858'
]

styleColors.forEach(color => {
    colorDiv = document.createElement('div');
    colorDiv.style.backgroundColor = color;
    colorDiv.className = "label-choices-options";
    labelContainer.appendChild(colorDiv);

});

//Getting user label choice
var labelColor;

labelContainer.addEventListener("click", (e)=>{
    if(e.target !== labelContainer){
        labelColor = getComputedStyle(e.target).backgroundColor;
        console.log(labelColor)
    }
});




//Getting Current date
var todaysDate = new Date();
const months = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
var today = `${months[todaysDate.getMonth()]} ${todaysDate.getDate()}, ${todaysDate.getFullYear()}`;


//Posting message
const messageBoard = document.querySelector('.messages');
const postIt = document.querySelector('.post-it');
var html;


postIt.addEventListener("click", ()=>{
    let yourTitle = document.getElementById('your-title').value;
    let yourMessage = document.getElementById('your-message').value; 
    html = 
        `
        <div class="new-message">
            <div  class="date-wrapper">
                <div style="background-color:${labelColor}"; class="label-color"></div>
                <div class="date">${today}</div>
            </div>
            <div class="message-wrapper">
                <h4 class="title">${yourTitle}</h4>
                <p class="message">${yourMessage}</p>
            </div>
        </div>
        `;
    

    messageBoard.innerHTML+=html;
    messageModal.style.display = `none`;
});