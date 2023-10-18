///faq Accordion 

document.addEventListener('DOMContentLoaded', ()=> {
    const faqContainer = document.querySelector('.faq-content');

    faqContainer.addEventListener('click', (e)=> {
        //console.log(e.target);
        const groupHeader = e.target.closest('.faq-group-header');
        //console.log(groupHeader);
        if(!groupHeader){
            return;
        }
        const group = groupHeader.parentElement;
        const groupBody = group.querySelector('.faq-group-body');
        const icon = groupHeader.querySelector('i');



        //toggle Icon
    icon.classList.toggle('fa-plus')
    icon.classList.toggle('fa-minus')

    //Toggle visibility of body
    groupBody.classList.toggle('open');

    //Close other open Faq body
    const otherGroup = faqContainer.querySelectorAll('.faq-group');//select more then 1
    //console.log(otherGroup);
    otherGroup.forEach((otherGroup)=> {
        if(otherGroup != group){
            const otherGroupBody = otherGroup.querySelector('.faq-group-body');
            const otherIcon = otherGroup.querySelector('.faq-group-header i');

            otherGroupBody.classList.remove('open');
            otherIcon.classList.remove('fa-minus')
            otherIcon.classList.add('fa-plus');
        }
    });
    });
});

//Mobile Menu 
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.querySelector('.hamburger-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    hamburgerButton.addEventListener('click', ()=> mobileMenu.classList.toggle('active'));
})