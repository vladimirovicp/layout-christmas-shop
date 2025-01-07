import { giftsData } from './giftsData.js';

const best = document.querySelector('.best-gifts');

if(best){
    const giftsCardsTag = best.querySelector('.gifts__cards');
    const cardsTag = giftsCardsTag.querySelectorAll('.gifts__card');
    const arrRandom = generaneRandomGifts(4, 36);

    for(let i = 0; i < arrRandom.length; i++){
        cardsTag[i].innerHTML = ''; 

        let infoColorClass = '';

        if(giftsData[arrRandom[i]].category === 'For Health'){
          infoColorClass = ' color__tag-green';
        } 

        if(giftsData[arrRandom[i]].category === 'For Harmony'){
          infoColorClass = ' color__tag-pink';
        } 


        cardsTag[i].innerHTML = `<div class="gifts__card modal-btn" data-id="${arrRandom[i]}">
              <div class="gifts__card_img">
                <img src="${giftsData[arrRandom[i]].url}" alt="${giftsData[arrRandom[i]].name}" />
              </div>
              <div class="gifts__card_wrapper">
                <h4 class="gifts__card_info${infoColorClass}">${giftsData[arrRandom[i]].category}</h4>
                <h3 class="gifts__card_title">${giftsData[arrRandom[i]].name}</h3>
              </div>
            </div>`;
    }


}

//number - количество значений в массиве
// fromNumber - выборка из значений, указать на один больше  если от нуля до 100, то укажем 101

function generaneRandomGifts(number, fromNumber){
    const numbers = new Set();
  while (numbers.size < number) {
    const random = Math.floor(Math.random() * fromNumber);
    numbers.add(random);
  }
  return Array.from(numbers);
}
