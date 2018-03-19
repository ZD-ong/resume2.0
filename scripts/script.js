setTimeout(function () {
    siteWelcome.classList.remove('active')
}, 1000)

let specialTags = document.querySelectorAll('[data-x]')
for (let i = 0; i < specialTags.length; i++) {
    specialTags[i].classList.add('offset')
}
setTimeout(function () {
    findClosest()
}, 1500)


window.onscroll = function (xxx) {
    if (scrollY > 0) {
        topNavBar.classList.add('sticky')
    } else {
        topNavBar.classList.remove('sticky')
    }
    findClosest()
}

function findClosest() {
    let specialTags = document.querySelectorAll('[data-x]')
    let minIndex = 0
    for (let i = 1; i < specialTags.length; i++) {
        if (Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)) {
            minIndex = i
        }
    }
    // minIndex 就是里窗口顶部最近的元素
    specialTags[minIndex].classList.remove('offset')
    let id = specialTags[minIndex].id
    let a = document.querySelector('a[href="#' + id + '"]')



}

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


console.log(TWEEN)

//slides

let n
初始化()
var timer = setTimer()
$('#window').on('mouseenter', function () {
    window.clearInterval(timer)
})
$('#window').on('mouseleave', function () {
    timer = setTimer()
})



function setTimer(){
    return setInterval(() => {
        makeLeave(getImage(n))
            .one('transitionend', (e) => {
                makeEnter($(e.currentTarget))
            })
        makeCurrent(getImage(n + 1))
        n += 1
    }, 3000)
}

function getImage(n) {
    return $(`#images > img:nth-child(${x(n)})`)
}
var length = $('#images > img').length
function x(n) {
    if (n > length) {
        n = n % length
        if (n === 0) {
            n = length
        }
    }
    return n
}

function 初始化() {
    n = 1
    $(`#images > img:nth-child(${n})`).addClass('current')
        .siblings().addClass('enter')
}

function makeCurrent($node) {
    return $node.removeClass('enter leave').addClass('current')
}
function makeLeave($node) {
    return $node.removeClass('enter current').addClass('leave')
}
function makeEnter($node) {
    return $node.removeClass('leave current').addClass('enter')
}