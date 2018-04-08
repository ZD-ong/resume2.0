//欢迎界面loading
setTimeout(function () {
    siteWelcome.classList.remove('active')
}, 1000)


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
