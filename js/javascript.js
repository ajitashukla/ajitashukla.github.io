var captionLength = 0;
var caption = ["front-end developer", "Computer Science graduate", "multitasker", "writer"];
 
$(document).ready(function() {
    //setInterval ('cursorAnimation()', 600);
    captionEl = $('#caption');
    for(var i = 0; i < caption.length; i++)
        {  if(i == caption.length)
           {  
              i=0; 
           }    

        function type() {
            captionEl.html(caption[i].substr(0, captionLength++));
            if(captionLength < caption[i].length+1) {
            setTimeout('type()', 50);
            } else {
            captionLength = 0;
            captionEl.css('background','yellow');
            captionEl.html('');
      }
     }      
    }
});
 
 