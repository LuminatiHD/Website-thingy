/*use strict*/
function submitform(){
    url = document.getElementsByName("link")[0].value
    hash = document.getElementsByName("hash")[0].value      
    var fs = require('fs')
    alert(hash)
    var htmlContent = '<html>Whatever</html>'
    fs.writeFile('./redirect/'+hash+'.html', htmlContent)
}

