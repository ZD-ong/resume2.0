
var APP_ID = 'fknaL9T6vkqd3Eh5PaVrEcFQ-gzGzoHsz';
var APP_KEY = '8NGlccCGdgUYe9iGX5KonEnw';

AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});


var query = new AV.Query('Message');
query.find()
.then(function (messages) {
    messages.map(function(item){
        return item.attributes
    }).map(function(item){
        let li = document.createElement('li')
        li.innerText=`${item.name}: ${item.content}`
        $('#messageList').append(li)
    })
    // 成功获得实例
    // todo 就是 id 为 57328ca079bc44005c2472d0 的 Todo 对象实例
})

let $myForm = $('#postMessageForm')

$myForm.submit(function(e){
    e.preventDefault()
    let content = $('input[name=content]').val()
    console.log(content)
    let name = $('input[name=name]').val()
    var Message = AV.Object.extend('Message')
    var message = new Message()
    message.save({
        'name': name,
        'content': content
    }).then(function (object) {
        let li = document.createElement('li')
        li.innerText = `${object.attributes.name}: ${object.attributes.content}`
        $('#messageList').append(li)
        //清空留言区
        document.querySelector('#postMessageForm').querySelector('input[name=name]').value = ''
        document.querySelector('#postMessageForm').querySelector('input[name=content]').value = ''
        console.log(object)
    })
})



/*
//创建 TestObject 表
var TestObject = AV.Object.extend('TestObject');
//在表中创建一行数据
var testObject = new TestObject();
//数据内容是 words: 'Hello World!'
//如果保存成功则运行 alert('')
testObject.save({
    words: 'Hello World!'
}).then(function (object) {
    alert('LeanCloud Rocks!');
})
*/