window.onload = function painterCanvas(width, height) {


    var canvasColors = ['#ff0000', '#ff4000', '#ffbf00', '#ffff00', '#80ff00', '#40ff00', '#00ff00', '#00ff40', '#00ff80', '#00ffbf', '#00ffff'];
    //setting boxes to be able to be colored,
    function colorSetter() {
        var divColors = document.getElementById('color-palette');
        for (var i = 0; i < canvasColors.length; i++) {
            var newDiv = document.createElement('div');
            newDiv.classList.add('colors');
            divColors.appendChild(newDiv);
            newDiv.style.backgroundColor = canvasColors[i];

        }
    }
    colorSetter();




    var ppcanvas = document.getElementById('#pp-canvas');
    var boxes = document.querySelectorAll('#pp-canvas .box');
    console.log(boxes);
    for (var i = 0; i < boxes.length; i++) {
        var colored = false;
        boxes[i].addEventListener('click', function(event) {
            this.style.backgroundColor = 'red';
            colored = true;
        });
    };

    // to select color

    function applyColor() {

        var colorPalette = document.getElementById('#color-palette');
        var colorBoxes = document.querySelectorAll('.box');
        for (var i = 0; i < colorBoxes.length; i++) {
            colorBoxes[i].addEventListener('click', function(event) {
            		this.style.backgroundColor = savedColor;
                });

        }
    }
applyColor();



//to select new color
    var savedColor;

    function selectNewColor() {
        var colorPalette = document.getElementById('#color-palette');
        var colorBoxes = document.querySelectorAll('.colors');
        //console.log(colorBoxes);
        for (var i = 0; i < colorBoxes.length; i++) {
            //console.log(colorBoxes[i].style);
            colorBoxes[i].addEventListener('click', function(event) {
                savedColor = this.style.backgroundColor;
                console.log(savedColor);
            });



        }
    }
    selectNewColor();


    


// erase a pixel
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