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