import { giftsData } from './giftsData.js';

const tab = function () {
    const tabsTag = document.querySelector('.gifts__tabs');

    if(tabsTag){ 
        const tabNavTag = tabsTag.querySelectorAll('.gifts__btn');
        tabNavTag.forEach(item => {
            item.addEventListener('click', selectTabNav)
        });

        function selectTabNav() {
            tabNavTag.forEach(item => {
                item.classList.remove('_active');
            });
            this.classList.add('_active');
            categoryName = this.getAttribute('data-for');
            displayContent();
        }
    }
}

function displayContent(){
    if (tabContent){
        tabContent.innerHTML = '';
        if(categoryName === 'All'){
            for (let i=0; i < giftsData.length; i++){

                let infoColorClass = '';
                if(giftsData[i].category === 'For Health'){
                    infoColorClass = ' color__tag-green';
                } 

                if(giftsData[i].category === 'For Harmony'){
                    infoColorClass = ' color__tag-pink';
                } 

                tabContent.innerHTML += `<div class="gifts__card modal-btn" data-id=${i} data-category="${giftsData[i].category}">
                <div class="gifts__card_img">
                    <img
                    src="../${giftsData[i].url}"
                    alt="${giftsData[i].name}"
                    />
                </div>
                <div class="gifts__card_wrapper">
                    <h4 class="gifts__card_info${infoColorClass}">${giftsData[i].category}</h4>
                    <h3 class="gifts__card_title">${giftsData[i].name}</h3>
                </div>
                </div>`;
            }
        } else {
            for (let i=0; i < giftsData.length; i++){

                if (categoryName === giftsData[i].category){

                    let infoColorClass = '';
                    if(giftsData[i].category === 'For Health'){
                        infoColorClass = ' color__tag-green';
                    } 

                    if(giftsData[i].category === 'For Harmony'){
                        infoColorClass = ' color__tag-pink';
                    } 

                    tabContent.innerHTML += `<div class="gifts__card modal-btn" data-id=${i} data-category="${giftsData[i].category}">
                        <div class="gifts__card_img">
                            <img
                            src="../${giftsData[i].url}"
                            alt="${giftsData[i].name}"
                            />
                        </div>
                        <div class="gifts__card_wrapper">
                            <h4 class="gifts__card_info ${infoColorClass}">${giftsData[i].category}</h4>
                            <h3 class="gifts__card_title">${giftsData[i].name}</h3>
                        </div>
                    </div>`;
                }
            }
        }
    }
    startModal();
}

tab();
let categoryName = 'All';
const tabContent = document.querySelector('.gifts__cards');
displayContent();


function startModal(){
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
}





