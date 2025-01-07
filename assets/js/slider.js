const containerSlider = document.querySelector('.slider');
let logic = false;
let currentPosition = 0;

const minPosition = 0;
let maxPosition = 6;
function logicSlider(){
    currentPosition = 0;
    const widthWindow = window.innerWidth;
    if (widthWindow > 768){
        logic = true;
        maxPosition = 3;
    } else {
        logic = false;
        maxPosition = 6;
    }
}

logicSlider();


if(containerSlider){
    const navigation = containerSlider.querySelector('.slider__navigation');

    if(navigation){
        const prev = navigation.querySelector('.slider__prev');
        const next = navigation.querySelector('.slider__next');
        const slider = containerSlider.querySelector('.slider__items');
        activeButton();


        function movementSlider(){
            let position = 0;

                const sizeSlider = slider.offsetWidth;

            if(logic){
                // switch (currentPosition) {
                //     case 1: position = -422;
                //     break;
                //     case 2: position = -990;
                //     break;
                //     case 3: position = -1453;
                //     break;
                //     default: position = 0;
                // }



                switch (currentPosition) {
                    case 1: position = -(1989 - sizeSlider) / 3;
                    break;
                    case 2: position = -2 *(1989 - sizeSlider) / 3;
                    break;
                    case 3: position = -(1989 - sizeSlider);
                    break;
                    default: position = 0;
                }
            } else {
                switch (currentPosition) {
                    case 1: position = -(1989 - sizeSlider) / 6;
                    break;
                    case 2: position = -2 * (1989 - sizeSlider) / 6;
                    break;
                    case 3: position = -3 * (1989 - sizeSlider) / 6;
                    break;
                    case 4: position = -4 * (1989 - sizeSlider) / 6;
                    break;
                    case 5: position = -5 * (1989 - sizeSlider) / 6;
                    break;
                    case 6: position = -(1989 - sizeSlider);
                    break;
                    default: position = 0;
                }
                // switch (currentPosition) {
                //     case 1: position = -422;
                //     break;
                //     case 2: position = -771;
                //     break;
                //     case 3: position = -990;
                //     break;
                //     case 4: position = -1234;
                //     break;
                //     case 5: position = -1453;
                //     break;
                //     case 6: position = -1787;
                //     break;
                //     default: position = 0;
                // }
            }
            slider.style.transform = `translateX(${position}px)`;
            
        }

        prev.addEventListener('click', ()=>{
            if (currentPosition >= 1){
                currentPosition = currentPosition - 1;
                activeButton()  
                movementSlider();
            }
        });

        next.addEventListener('click', ()=>{
            if(currentPosition < maxPosition){
                currentPosition = currentPosition + 1;
                activeButton()
                movementSlider();
            }

        });


        function activeButton(){
            if(currentPosition === minPosition){
                prev.classList.add('_disabled');
                next.classList.remove('_disabled');

            }
            if(currentPosition === minPosition + 1){
                prev.classList.remove('_disabled')
            }

            if(currentPosition === maxPosition){
                prev.classList.remove('_disabled');
                next.classList.add('_disabled')
            }
            if(currentPosition === maxPosition - 1){
                next.classList.remove('_disabled')
            }
        }


    }
}


window.addEventListener('resize', function (event) {
    logicSlider();
    movementSlider();
    activeButton();

}, true);