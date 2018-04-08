window.addEventListener('scroll', function (xxx) {
    if (scrollY > 0) {
        topNavBar.classList.add('sticky')
    } else {
        topNavBar.classList.remove('sticky')
    }
    findClosestAndRemoveOffset()
}) 