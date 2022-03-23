const button = $('#gonder')
const form =$('#form')
form.submit(serialize)

function serialize(e){
   const username = $('#username').val()
   const password = $('#password').val()
   const user = $('#yollanicakkisi').val()
   const title = $('#baslik').val()
   const message = $('#mesaj').val()
   
    const object = new Object()
    object.username = username
    object.password = password
    object.user = user
    object.title = title
    object.message = message
    postData(object)
}
function postData(data){
$.ajax({
    type: "POST",
    url: "http://localhost:3000",
    data: JSON.stringify(data),
    dataType: "json",
    success: function (response) {
        console.log("Data Yollandı")
    }
})

}