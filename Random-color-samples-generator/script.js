document.getElementById('trigger-btn').addEventListener('click', function(){
    document.getElementById('container-wrapper').style.height = '60vh';
    let target = document.getElementById('container');
    target.innerHTML = '';
    let counter = 50;
    let hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
    
   while(counter > 0){
    let newDiv = document.createElement('div');
    let currentColor = '#';
    for(let i = 0; i <= 5; i++){
       currentColor += hexValues[Math.floor(Math.random() * hexValues.length)];
    }
    newDiv.style.background = `${currentColor}`;
    newDiv.setAttribute('title', `${currentColor}`);
    newDiv.setAttribute('class', 'newDiv')
    counter--;
    target.append(newDiv);
   }
})
