setInterval(carousel,1500);
function carousel() {
     // get imageLength
     let imageLength =document.getElementsByClassName('carouselImage').length;
     
    //  get storeValue
     let storeValue = document.getElementById('carouselFirstImage').alt;
     document.getElementById('test').innerHTML = storeValue
    //  condition apply
    if (1<= storeValue && storeValue < imageLength) {
        // hidden image 
        document.getElementsByClassName('carouselImage')[storeValue-1].style.display = 'none';

        // showing image 
        document.getElementsByClassName('carouselImage')[storeValue].style.display = 'block';
        
        // incresing value
        storeValue++
        // store a new storeValue
        document.getElementById('carouselFirstImage').alt = storeValue;
    }
    else if (storeValue == 0) {
        // hidden image 
        document.getElementsByClassName('carouselImage')[imageLength-1].style.display = 'none';

        // showing image 
        document.getElementsByClassName('carouselImage')[0].style.display = 'block';

        // incresing value
        storeValue++
        // store a new storeValue
        document.getElementById('carouselFirstImage').alt = storeValue;
    }
    else {
        storeValue = 0;
        // hidden image 
        document.getElementsByClassName('carouselImage')[imageLength-1].style.display = 'none';
        // index no 1
        document.getElementsByClassName('carouselImage')[storeValue].style.display = 'block';

        // store a new storeValue
        document.getElementById('carouselFirstImage').alt = storeValue;
    }
    
}
