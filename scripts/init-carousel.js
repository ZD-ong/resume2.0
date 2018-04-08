
//Slide02
function Carousel($node) {
    this.init($node)
    this.bind()
    this.autoPlay()
}


Carousel.prototype = {
    constructor: Carousel,
    init: function ($node) {
        this.$node = $node
        this.$imgCt = this.$node.find('.img-ct')
        this.$imgs = this.$node.find('.img-ct>li')
        this.$preBtn = this.$node.find('.pre')
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
    bind: function () {
        var _this = this
        this.$preBtn.on('click', function () {
            _this.playPre(1)
        })
        this.$nextBtn.on('click', function () {
            _this.playNext(1)
        })
        this.$buttons.on('click', function () {
            var index = $(this).index()
            if (_this.index > index) {
                _this.playPre(_this.index - index)
            } else {
                _this.playNext(index - _this.index)
            }
        })
    },
    playNext: function (len) {
        var _this = this
        this.$imgCt.animate({ left: '-=' + this.imgWidth * len }, function () {
            _this.index += len
            if (_this.index === _this.imgCount) {
                _this.$imgCt.css({ left: '-' + _this.imgWidth + 'px' })
                _this.index = 0
            }
            _this.setButton()
        })
    },
    playPre: function (len) {
        var _this = this
        this.$imgCt.animate({ left: '+=' + this.imgWidth * len }, function () {
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