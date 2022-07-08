$(window).scroll(() => {
    const scrolledClass = 'header--scrolled';
    const header = $('#site-header');
    let scroll = $(window).scrollTop();

    if (scroll >= 100) header.addClass(scrolledClass);
    else header.removeClass(scrolledClass);
});
