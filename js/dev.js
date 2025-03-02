// index.html to blog.html

document.getElementById('discover')
.addEventListener('click', function(event){
    event.preventDefault();
    // console.log("go")
    window.location.href="blog.html"
})



// Completed Button
let counter = 6;
let counter2 = 23;
const counterElement = document.getElementById('counter');
const counter2Element = document.getElementById('counter2');

const active = document.getElementById('active');



document.getElementById('button1')
.addEventListener('click', function(event) {
  alert('Board updated successfully');
  counter--;
  counter2++;
  counterElement.innerText = counter;
  counter2Element.innerText = counter2;
  event.target.disabled = true;


   // Active loge
   const newParagraph = document.createElement('p');
   newParagraph.textContent = 'You have Complete The task fix mobile button issue at 12:48:15 PM';
   active.appendChild(newParagraph);

 
});

document.getElementById('button2')
.addEventListener('click', function(event) {
  alert('Board updated successfully');
  counter--;
  counter2++;
  counterElement.innerText = counter;
  counter2Element.innerText = counter2;
  event.target.disabled = true;

   // Active loge
   const newParagraph = document.createElement('p');
   newParagraph.textContent = 'You have Complete The Task Add Dark Mode at 12:48:15 PM';
   active.appendChild(newParagraph);

});

document.getElementById('button3')
.addEventListener('click', function(event) {
  alert('Board updated successfully');
  counter--;
  counter2++;
  counterElement.innerText = counter;
  counter2Element.innerText = counter2;
  event.target.disabled = true;

  // Active loge
  const newParagraph = document.createElement('p');
  newParagraph.textContent = 'You have Complete The Task Optimize Home page at 12:48:15 PM';
  active.appendChild(newParagraph);
  
});

document.getElementById('button4')
.addEventListener('click', function(event) {
  alert('Board updated successfully');
  counter--;
  counter2++;
  counterElement.innerText = counter;
  counter2Element.innerText = counter2;
  event.target.disabled = true;

  // Active loge
  const newParagraph = document.createElement('p');
  newParagraph.textContent = 'You have Complete The Task Add New emoji at 12:48:15 PM';
  active.appendChild(newParagraph);
});

document.getElementById('button5')
.addEventListener('click', function(event) {
  alert('Board updated successfully');
  counter--;
  counter2++;
  counterElement.innerText = counter;
  counter2Element.innerText = counter2;
  event.target.disabled = true;

  // Active loge
  const newParagraph = document.createElement('p');
  newParagraph.textContent = 'You have Complete The Task Integrate OpenAI API at 12:48:15 PM';
  active.appendChild(newParagraph);
});

document.getElementById('button6')
.addEventListener('click', function(event) {
  alert('Board updated successfully');
  counter--;
  counter2++;
  counterElement.innerText = counter;
  counter2Element.innerText = counter2;
  event.target.disabled = true;

  // Active loge
  const newParagraph = document.createElement('p');
  newParagraph.textContent = 'You have Complete The Task Improve Job searching at 12:48:15 PM';
  active.appendChild(newParagraph);
});




   

          