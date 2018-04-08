let aTags = document.querySelectorAll('header nav a')
for (let i = 0; i < aTags.length; i++) {
    aTags[i].onclick = function (e) {
        e.preventDefault()//阻止默认跳转
        // let a = e.currentTarget
        // let href = a.getAttribute('href')
        // let element = document.querySelector(href)
        // let top = element.offsetTop
        let top = document.querySelector(e.currentTarget.getAttribute('href')).offsetTop


        let currentTop = window.scrollY
        let targetTop = top - 80
        var coords = { y: currentTop }
        var tween = new TWEEN.Tween(coords)
            .to({ y: targetTop }, 1000)
            .easing(TWEEN.Easing.Quadratic.InOut)
            .onUpdate(function () {
                window.scrollTo(0, coords.y)
            })
            .start();
    }
}
function animate(time) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
}
requestAnimationFrame(animate);
