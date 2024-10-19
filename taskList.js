window.onload = function() {
    //character image element
    const charimg = document.createElement('img');
    
    charimg.src = 'assets/tammy.png'; // image path

    //sizing and position
    charimg.style.position = 'fixed';
    charimg.style.left = '45%';
    charimg.style.top = '35%';
    charimg.style.height = '50%';

    //adds the image to the page 
    document.body.appendChild(charimg);
};
