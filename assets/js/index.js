var clbListtv = document.querySelectorAll('.clb-list-tv')
var nextBtn = document.querySelector('.clb-next')
var prevBtn = document.querySelector('.clb-prev')


const BuyBtns = document.querySelectorAll('.js-register')
            const modal = document.querySelector('.js-modal')
            const close = document.querySelector('.js-modal-close')
            const ModalContainer = document.querySelector('.js-modal-container')

            function ShowBuyTickets(){
                modal.classList.add('open')
            }

            function HideBuyTickets(){
                modal.classList.remove('open')
            }
            for( const BuyBtn of BuyBtns){
                BuyBtn.addEventListener('click',ShowBuyTickets)
            }

            close.addEventListener('click',HideBuyTickets)
            modal.addEventListener('click',HideBuyTickets)
            ModalContainer.addEventListener('click', function(event){
                event.stopPropagation()
            })
