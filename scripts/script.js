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

// let n
// 初始化()
// var whichBtn = 1
// var timer = setTimer()
// $('#window').on('mouseenter', function () {
//     window.clearInterval(timer)
// })
// $('#window').on('mouseleave', function () {
//     timer = setTimer()
// })



// function setTimer(){
//     return setInterval(() => {
//         whichBtn += 1
//         makeLeave(getImage(n))
//             .one('transitionend', (e) => {
//                 makeEnter($(e.currentTarget))
//             })
//         activeButton(getBtn(whichBtn))
//         makeCurrent(getImage(n + 1))
//         n += 1
//     }, 3000)
// }

// function getImage(n) {
//     return $(`#images > img:nth-child(${x(n)})`)
// }
// function getBtn(n) {
//     return $(`.buttons > span:nth-child(${x(n)})`)
// }
// var length = $('#images > img').length
// function x(n) {
//     if (n > length) {
//         n = n % length
//         if (n === 0) {
//             n = length
//         }
//     }
//     return n
// }

// function 初始化() {
//     n = 1
//     $(`#images > img:nth-child(${n})`).addClass('current')
//         .siblings().addClass('enter')
//     $(`.buttons > span:nth-child(${n})`).addClass('red')
//         .siblings('.red').removeClass('red')
// }

// function makeCurrent($node) {
//     return $node.removeClass('enter leave').addClass('current')
// }

// function makeLeave($node) {
//     return $node.removeClass('enter current').addClass('leave')
// }
// function makeEnter($node) {
//     return $node.removeClass('leave current').addClass('enter')
// }

// // var allButtons = $('#buttons > span')
// // for(let i = 0; i  < allButtons.length; i++){
// //     $(allButtons[i]).on('click',function(e){
// //         var index = $(e.currentTarget).index()
// //         whichPic = index
// //         activeButton(allButtons.eq(whichPic))
// //     })
    
// // }
// // var whichPic = 0
// function activeButton($button){
//     $button
//         .addClass('red')
//         .siblings('.red').removeClass('red')
// }

//Slide02
function Carousel($node){
    this.init($node)
    this.bind()
    this.autoPlay()
}


Carousel.prototype = {
    constructor: Carousel,
    init: function($node){
        this.$node    = $node
        this.$imgCt   = this.$node.find('.img-ct')
        this.$imgs    = this.$node.find('.img-ct>li')
        this.$preBtn  = this.$node.find('.pre')
        this.$nextBtn = this.$node.find('.next')
        this.$buttons = this.$node.find('.button>li')

        this.imgWidth = this.$imgs.width()
        this.imgCount = this.$imgs.length
        this.index = 0

        this.$imgCt.append(this.$imgs.first().clone())
        this.$imgCt.prepend(this.$imgs.last().clone())
        this.$imgCt.width((this.imgCount + 2) * this.imgWidth)
        this.$imgCt.css({ left: '-' + this.imgWidth + 'px' })

    },
    bind: function(){
        var _this = this
        this.$preBtn.on('click',function(){
            _this.playPre(1)
        })
        this.$nextBtn.on('click',function(){
            _this.playNext(1)
        })
        this.$buttons.on('click',function(){
            var index = $(this).index()
            if (_this.index > index) {
                _this.playPre(_this.index - index)
            } else {
                _this.playNext(index - _this.index)
            }
        })
    },
    playNext: function(len){
        var _this = this
        this.$imgCt.animate({ left: '-=' + this.imgWidth * len }, function (){
            _this.index += len
            if (_this.index === _this.imgCount) {
                _this.$imgCt.css({ left: '-' + _this.imgWidth + 'px' })
                _this.index = 0
            }
            _this.setButton()
        })
    },
    playPre: function(len){
        var _this = this
        this.$imgCt.animate({ left: '+=' + this.imgWidth * len }, function (){
            _this.index -= len
            if (_this.index < 0) {
                _this.$imgCt.css('left', -_this.imgWidth * _this.imgCount)
                _this.index = _this.imgCount - 1
            }
            _this.setButton()
        })
    },
    setButton: function () {
        this.$buttons.eq(this.index).addClass('active')
            .siblings().removeClass('active')
    },
    autoPlay: function () {
        var _this = this
        var timer = setInterval(function () {
            _this.playNext(1)
        }, 1000)
        $('.window').on('mouseenter', function () {
            window.clearInterval(timer)
        })
        $('.window').on('mouseleave', function () {
            timer = setInterval(function () {
                _this.playNext(1)
            }, 1000)
        })
    }
}
new Carousel($('.window').eq(0))