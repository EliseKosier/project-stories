import _ from 'lodash';

import ".//style.scss";

var modal = document.getElementById('id01');


function component() {
    const element = document.createElement('div');
  
 // Lodash, now imported by this script
    element.innerHTML = _.join([], ' ');
  
    return element;
  }

  var post= document.getElementById("post");
post.addEventListener("click", function(){
    var commentBoxValue= document.getElementById("comment-box").value;
 
    var li = document.createElement("li");
    var text = document.createTextNode(commentBoxValue);
    li.appendChild(text);
    window.alert("Sorry... Comments are not enabled at this time.");
 
});
  
  document.body.appendChild(component());
  