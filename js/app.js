//Make history, or better yet...make the World Events page interactive with events or event listeners for each exercise below.

// 1. The Greatest Thing Since Sliced Bread 
// Find the onclick event in the h3 element and create a function that will italicize the contents and change the font color to cornflowerblue in the div id of 'bread'.


function italics(){
    bread.style.fontStyle = 'italic';
    bread.style.color = 'cornflowerblue'; 
}

// 2. The Birth of the Internet
// Find the onmouseover event in the h3 element and create a function that will replace the current contents in the div id of 'webby' to the following:

var webContents = 'The Internet got its start in the United States more than 50 years ago as a government weapon in the Cold War. In the 1980s, research at CERN in Switzerland by British computer scientist Tim Berners-Lee resulted in the World Wide Web, linking hypertext documents into an information system, accessible from any node on the network.';

function changeContent(){
    webby.innerHTML = webContents;
}

// 3. The Boxer Rebellion
// Find the onclick event in div id of 'fightDaPower' and create a function that will convert the Chinese text in the same div element into English (the English content is provided below).

var revolution = 'Boxer Uprising or Yihetuan Movement was an anti-imperialist uprising which took place in China towards the end of the Qing dynasty between 1899 and 1901. It was initiated by the Militia United in Righteousness, known in English as the "Boxers," and was motivated by proto-nationalist sentiments and opposition to foreign imperialism and associated Christian missionary activity.';

function translation(){
    fightDaPower.innerHTML = revolution;
}


// 4. The Great Depression
// Add an event listener to the h3 element id of 'hardTimes' and create a function to display the contents in the div element of 'depress'.

hardTimes.addEventListener('click', dispDepr);

function dispDepr(){
    depress.style.display = 'block';
}


// 5. Apollo 11
// Add an event listener to the h3 element id of 'blastOff' and create a function to show and hide the contents in the div element of 'moonWalk' after clicking on Apollo 11.

blastOff.addEventListener('click', dispMoon);

function dispMoon(){
    if (moonWalk.style.display = 'none'){
        moonWalk.style.display = 'block';
    } else {
        moonWalk.style.display = 'none';
    }
}

// 6. The American Civil War
// Add an event listener to the div element id of 'freedom' and create a function to remove all instances of 'corn' in the content.

freedom.addEventListener('click', removeCorn);

function removeCorn(){
    freedom.innerHTML = freedom.innerHTML.replace(/corn /g, '');
}

// 7. The Renaissance
// Add an event listener to the div element id of 'rebirth' and create a function to remove all the lowercase and uppercase z's in the content. 

rebirth.addEventListener('mouseover', noZ);

function noZ(){
    rebirth.innerHTML = rebirth.innerHTML.replace(/z/g, '');
    rebirth.innerHTML = rebirth.innerHTML.replace(/Z/g, '');
}


// 8. the Gutenberg Printing Press
// Add an event listener to the h3 element id of 'showBooks' and create a function to display a random book title from the classics array in the div element of 'mustRead'.

var classics = ["Charlotte's Web", "War and Peace", "The Secret", "How to Win Friends and Influence People", "Good to Great", "The Lean Startup", "The Odyssey", "Essentialism"];

showBooks.addEventListener('click', ranBook);

function ranBook(){
    mustRead.innerHTML = classics[Math.floor(Math.random()*classics.length)]
}

// 9. World War II
// Add an event listener to the image element and create a function that will toggle between images when hovering (mouseover) on the image.

// use the following image reference:
// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjMMBlsYV-Ta5N_GKAoxRDBEa9BRZqdzQRvpiHELEPb6IPVZ73

var whatDis = document.getElementsByTagName('img');


whatDis[9].addEventListener('mouseover', newImage);

function newImage(){
    if (whatDis[9].src === 'https://www.sagu.edu/images/thoughthub/thumbnails/2015/7-Interesting-Features-of-World-War-2-2.jpg'){
        whatDis[9].src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjMMBlsYV-Ta5N_GKAoxRDBEa9BRZqdzQRvpiHELEPb6IPVZ73'
    } else {
        whatDis[9].src = 'https://www.sagu.edu/images/thoughthub/thumbnails/2015/7-Interesting-Features-of-World-War-2-2.jpg';
    }
}

// 10. The Industrial Revolution
// Add an event listener to the h3 element and create a function that will reverse the contents in the div element id of 'gameChanger'

var thisElement = document.getElementsByTagName('h3');

thisElement[9].addEventListener('mouseover', reverseThis);

function reverseThis(){
    gameChanger.innerHTML = gameChanger.innerHTML.split("").reverse().join("");
}

// Final Boss
// Add event listeners for the thumbs up and thumbs down images that will count the number of times the thumb has been clicked on. 

var buttonUp = document.getElementsByClassName('fas fa-thumbs-up');

for (var i=0; i<buttonUp.length; i++){
    buttonUp[i].addEventListener('click', thumbUp);
}

function thumbUp(){
    var moreLikes = this.querySelectorAll('.up')[0];
    moreLikes.innerHTML ++;
    
}

var buttonDown = document.getElementsByClassName('fas fa-thumbs-down');

for (var i=0; i<buttonDown.length; i++){
    buttonDown[i].addEventListener('click', thumbDown);
}

function thumbDown(){
    var moreLikes = this.querySelectorAll('.down')[0];
    moreLikes.innerHTML --;
    
}

