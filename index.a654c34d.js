$(document).ready((function(){$("#menu, #mobile-menu").on("click","a",(function(e){e.preventDefault();var t=$(this).attr("href"),n=$(t).offset().top;$("body,html").animate({scrollTop:n},1e3)}))}));
//# sourceMappingURL=index.a654c34d.js.map
