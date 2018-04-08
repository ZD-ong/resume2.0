//添加 offsite 类
let specialTags = document.querySelectorAll('[data-x]')
for (let i = 0; i < specialTags.length; i++) {
    specialTags[i].classList.add('offset')
}

setTimeout(function () {
    findClosestAndRemoveOffset()
}, 1500)


window.addEventListener('scroll', function (xxx) {
    findClosestAndRemoveOffset()
}) 


/*helper*/
function findClosestAndRemoveOffset() {
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