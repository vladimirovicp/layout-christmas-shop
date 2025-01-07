
import { giftsData } from './giftsData.js';

const modalBtns = document.querySelectorAll('.modal-btn');

const gifts = document.querySelector('.gifts');
const isGifts = gifts ? true : false;

if(modalBtns.length > 0){
    const modal = document.querySelector('.modal');
    if(modal) {
        modalBtns.forEach(modalBtn => {
            modalBtn.addEventListener('click', (e) => {
                // console.log(modalBtn.dataset.name)

                const contentTag = modal.querySelector('.modal__content')

                const id = modalBtn.dataset.id;
                const content = giftsData[modalBtn.dataset.id];

                let infoColorClass = '';
                if(content.category === 'For Health'){
                    infoColorClass = ' color__tag-green';
                } 

                if(content.category === 'For Harmony'){
                    infoColorClass = ' color__tag-pink';
                } 

                const live = content.superpowers.live;
                const create = content.superpowers.create;
                const love = content.superpowers.love;
                const dream = content.superpowers.dream;
                
                live.slice(1,2)


				//const pathIMG = isGifts ? "../assets/img/best-gifts/orig/" . content.url.slice(-10) : "./assets/img/best-gifts/orig/" . content.url.slice(-10);

				const pathIMGStart = isGifts ? "../" : "./";

                contentTag.innerHTML = '';
                contentTag.innerHTML = `
                    <div class="modal__img">
                    <img src="${pathIMGStart}assets/img/best-gifts/orig/${content.url.slice(-10)}" alt="${content.name}">
                    </div>
                    <div class="modal__wrapper">
                    <div class="modal-gifts__category${infoColorClass}">${content.category}</div>
                    <div class="modal-gifts__name">${content.name}</div>
                    <div class="modal-gifts__description">${content.description}</div>
                    <div class="modal-gifts__powers">
                        <div class="powers__title">Adds superpowers to:</div>
                        <div class="powers__cards">
                        <div class="powers__card">
                            <div class="powers__name">Live</div>
                            <div class="powers__mark">${live}</div>
                            <div class="powers__snowflakes">
                                <div class="powers__snowflake${live.slice(1,2) >= 1 ? ' _action' : '' }"></div>
                                <div class="powers__snowflake${live.slice(1,2) >= 2 ? ' _action' : '' }"></div>
                                <div class="powers__snowflake${live.slice(1,2) >= 3 ? ' _action' : '' }"></div>
                                <div class="powers__snowflake${live.slice(1,2) >= 4 ? ' _action' : '' }"></div>
                                <div class="powers__snowflake${live.slice(1,2) == 5 ? ' _action' : '' }"></div>
                            </div>
                        </div>
                        <div class="powers__card">
                            <div class="powers__name">Create</div>
                            <div class="powers__mark">${create}</div>
                            <div class="powers__snowflakes">
                            <div class="powers__snowflake${create.slice(1,2) >= 1 ? ' _action' : '' }"></div>
                            <div class="powers__snowflake${create.slice(1,2) >= 2 ? ' _action' : '' }"></div>
                            <div class="powers__snowflake${create.slice(1,2) >= 3 ? ' _action' : '' }"></div>
                            <div class="powers__snowflake${create.slice(1,2) >= 4 ? ' _action' : '' }"></div>
                            <div class="powers__snowflake${create.slice(1,2) >= 5 ? ' _action' : '' }"></div>
                            </div>
                        </div>
                        <div class="powers__card">
                            <div class="powers__name">Love</div>
                            <div class="powers__mark">${love}</div>
                            <div class="powers__snowflakes">
                            <div class="powers__snowflake${love.slice(1,2) >= 1 ? ' _action' : '' }"></div>
                            <div class="powers__snowflake${love.slice(1,2) >= 2 ? ' _action' : '' }"></div>
                            <div class="powers__snowflake${love.slice(1,2) >= 3 ? ' _action' : '' }"></div>
                            <div class="powers__snowflake${love.slice(1,2) >= 4 ? ' _action' : '' }"></div>
                            <div class="powers__snowflake${love.slice(1,2) >= 5 ? ' _action' : '' }"></div>
                            </div>
                        </div>
                        <div class="powers__card">
                            <div class="powers__name">Dream</div>
                            <div class="powers__mark">${dream}</div>
                            <div class="powers__snowflakes">
                            <div class="powers__snowflake${dream.slice(1,2) >= 1 ? ' _action' : '' }"></div>
                            <div class="powers__snowflake${dream.slice(1,2) >= 2 ? ' _action' : '' }"></div>
                            <div class="powers__snowflake${dream.slice(1,2) >= 3 ? ' _action' : '' }"></div>
                            <div class="powers__snowflake${dream.slice(1,2) >= 4 ? ' _action' : '' }"></div>
                            <div class="powers__snowflake${dream.slice(1,2) >= 5 ? ' _action' : '' }"></div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>`;

                openModal();
                document.onclick = function (e) {
                    if(e.target.className == "_lock-modal"){
                        closeModal()
                    }
                };
            })
        });

        const modalClose = modal.querySelector('.modal__close');
        modalClose.addEventListener('click', ()=>{
            closeModal()
        })


    }

    function openModal(modalBtn){
        modal.classList.add('active');
        document.body.classList.add('_lock-modal');
    }

    function closeModal(){
        modal.classList.remove('active');
        document.body.classList.remove('_lock-modal');
    }


}