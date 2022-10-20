var clbListtv = document.querySelectorAll('.clb-list-tv')
var nextBtn = document.querySelector('.clb-next')
var prevBtn = document.querySelector('.clb-prev')

/*--    
        Tabs
    -----------------------------------*/  
    const tabs = document.querySelectorAll('[data-tab-target]')
    const tabContents = document.querySelectorAll('.tab-table-active')

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = document.querySelector(tab.dataset.tabTarget)
            tabContents.forEach(tabContent => {
                tabContent.classList.remove('active')
            })
            tabs.forEach(tab => {
                tab.classList.remove('active')
            })
            tab.classList.add('active')
            target.classList.add('active')
        })
    })


// Modal js
const regBtns = document.querySelectorAll('.js-register') 
const modal = document.querySelector('.js-modal')
const close = document.querySelector('.js-modal-close')
const ModalContainer = document.querySelector('.js-modal-container')

    function ShowRegister(){
        modal.classList.add('open')
    }

    function HideRegister(){
        modal.classList.remove('open')
    }
    for( const Btn of regBtns){
        Btn.addEventListener('click',ShowRegister)
    }

    close.addEventListener('click',HideRegister)
    modal.addEventListener('click',HideRegister)
    ModalContainer.addEventListener('click', function(event){
        event.stopPropagation()
    })
