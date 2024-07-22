const para = document.getElementById("para")
const btn = document.getElementById("btn").addEventListener("click",function() {
    para.innerHTML = "this content is change by DOM"
})
// Task 2 Add a double-click event listener to an image taht toggle its visibility.
const image = document.getElementById("img")
    image.addEventListener('dblclick', function() {
        if (image.style.display === 'none') {
          image.style.display = ''; // Reset display to default (usually block)
        } else {
          image.style.display = 'none';
        }
      });
// Task 3 add a mouseover event listener to an element that changes its background.
const element = document.getElementById('myElement');

element.addEventListener('mouseover', function() {
  element.style.backgroundColor = 'lightblue'; // Change to your desired color
});

element.addEventListener('mouseout', function() {
    element.style.backgroundColor = ''; // Resets to default background
  });
// Add a mouseout event listener to an element that resets its background color.
// Add a keyup event listener to an input field that displays the current value in a paragraph.
const inputField = document.getElementById('text');
const outputPara = document.getElementById('dis-text');

inputField.addEventListener('keyup', function() {
  outputPara.textContent = this.value; // "this" refers to the input field
});
