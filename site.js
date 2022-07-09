$(window).scroll(() => {
    const scrolledClass = 'header--scrolled';
    const header = $('#site-header');
    let scroll = $(window).scrollTop();

    if (scroll >= 100) header.addClass(scrolledClass);
    else header.removeClass(scrolledClass);
});

/**
 * Opens a specified modal by element id.
 *
 * @param modalId
 */
function openModal(modalId) {
    $('#' + modalId).show();
}

/**
 * Closes a specified modal by element id.
 *
 * @param modalId
 */
function closeModal(modalId) {
    $('#' + modalId).hide();
}
