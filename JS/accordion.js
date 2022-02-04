

const header = document.querySelectorAll('.accordion-header');


header.forEach(item =>{
    item.addEventListener('click', function(){
     item.classList.toggle('active');
    
     if(item.classList.contains('active')){
        item.nextElementSibling.style.height = item.nextElementSibling.scrollHeight + 'px';
     }else{
        item.nextElementSibling.style.height = '0';
     };
   
     header.forEach(data =>{
        if(data != this){
            data.classList.remove('active');
            data.nextElementSibling.style.height = '0';
        }else{

        }
    });
    });
});






