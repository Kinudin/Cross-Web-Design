$(function(){var e=$("#ajax-contact"),t=$("#form-messages");$(e).submit(function(n){n.preventDefault();var r=$(e).serialize();$.ajax({type:"POST",url:$(e).attr("action"),data:r}).done(function(e){$(t).removeClass("error");$(t).addClass("success");$(t).text(e)}).fail(function(e){$(t).removeClass("success");$(t).addClass("error");e.responseText!==""?$(t).text(e.responseText):$(t).text("Oops! An error occured and your message could not be sent.")})})});