
const modal = document.querySelector('.facebook-modal');
const apply = document.querySelector('#apply');
const close_btn = document.querySelector('#close-1');
const close_popup = document.querySelector('#close-2');
const alert_pop = document.querySelector('.modal-popup');
const edit = document.querySelector('#edit');
const discard = document.querySelector('#discard');

apply.addEventListener('click', function(e){
    e.preventDefault();
    modal.classList.add('active');
});
close_btn.addEventListener('click',function(){
   alert_pop.classList.add('on');
});
modal.addEventListener('click',function(e){

    if(e.target == this){
        modal.classList.remove('active');
    }
   
});
close_popup.addEventListener('click', function(){
    alert_pop.classList.remove('on');
})

discard.addEventListener('click', function(){
    alert_pop.classList.remove('on');
    modal.classList.remove('active');
    
})
edit.addEventListener('click',function(){
    alert_pop.classList.remove('on');
})




