import $ from 'jquery'


const typyngInputListener =(id,func,doneTypingInterval)=>{
    let typingTimer;                
    $("#"+id).keyup(function(){
        clearTimeout(typingTimer);
        if ($("#"+id).val()) {
            typingTimer = setTimeout(func, doneTypingInterval);
        }
    });
}

const scrollingChat = (id,scrollInterval) =>{
    $().ready(function () {
        $("#"+id).animate({ scrollTop: 0 }, scrollInterval);
      });
}

const moveDivFarEnd = (id, justify, align)=>{

  $("#"+id).animate({[align]: "2px",[justify]: "2px"});
 
}


const timeAgo = (date) => {
  const is_plural = (interval)=>{
     return Math.floor(interval) === 1 ? "" :"s"; 
  }
  var seconds = Math.floor((new Date() - date) / 1000);

  var interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + "ano" +is_plural(interval);
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    let mes = Math.floor(interval);
    return mes === 1 ? mes + " mês" : mes + " meses";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " dia"+is_plural(interval);
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " hora"+is_plural(interval);
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " minuto"+is_plural(interval);
  }
  return Math.floor(seconds) + " segundo"+is_plural(interval);
};

export {typyngInputListener,scrollingChat,moveDivFarEnd, timeAgo}


