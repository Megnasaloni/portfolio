$(document).ready(function () {
    $('.filters ul li').click(function () {
        const value = $(this).attr('data-filter');
        if (value == '*') {
            $('.all').show('1000');
        }
        else {
            $('.all').not('.' + value).hide('1000');
            $('.all').filter('.' + value).show('1000');
        }
    })

    $('.filters ul li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    })
})