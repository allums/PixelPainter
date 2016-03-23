window.onload  = function painterCanvas(width, height) {




    var ppcanvas = document.getElementById('#pp-canvas');
    var boxes = document.querySelectorAll('#pp-canvas .box');
    console.log(boxes);
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener('click', function(event) {
            this.style.backgroundColor = 'red';
        });
        
        //console.log(boxes);
    }





    function selectPixel() {





    }


    function erasePixel() {




    }


    function clearPixels() {





    }


    return {

        
        selectPixel: selectPixel,
        erasePixel: erasePixel,
        clearPixels: clearPixels



    };


};