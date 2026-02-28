function alertMsg() {
    alert("تبارك الله عليك! هادي هي أول خطوة نحو النجاح. غنتواصلو معاك فـ أقرب وقت.");
}

// زيادة: تأثير بسيط عند التمرير (Scroll)
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if(window.scrollY > 50) {
        nav.style.background = '#f1f1f1';
    } else {
        nav.style.background = '#fff';
    }
});