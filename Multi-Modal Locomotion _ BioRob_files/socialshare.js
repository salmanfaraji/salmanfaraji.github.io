function sharePopUp(c,a,b){var f=(epflJ(window).width()-c)/2,e=(epflJ(window).height()-a)/2,d="status=1,width="+c+",height="+a+",top="+e+",left="+f;
window.open(b,"socialshare",d);
return false
}function encodeForMail(){var a="mailto:?subject="+encodeURIComponent(document.title)+"&body="+encodeURIComponent(document.location);
console.log("1>generating mail link ... title="+document.title);
console.log("2>generating mail link ... title="+encodeURIComponent(document.title));
return a
}epflJ(document).ready(function(){epflJ("#social-widget p").css({cursor:"pointer"}).on("click",function(){var g=epflJ(this).text()=="Partager"?"[X]":"Partager";
epflJ(this).text(g);
epflJ(this).next("div").toggle()
});
var d="http://rep.kudos.ch/epfl/epfl-logo.png";
epflJ("meta[property='og\\:title']").attr("content",document.title);
epflJ("meta[property='og\\:type']").attr("content","website");
epflJ("meta[property='og\\:url']").attr("content",window.location);
epflJ("meta[property='og\\:image']").attr("content",d);
epflJ("a#social-share-email-link").attr("href",encodeForMail());
var b=encodeURI(document.title);
var c=encodeURI(window.location);
epflJ(".icon-twitter").click(function(h){var i="epfl,epflcampus";
var g="http://twitter.com/intent/tweet?url="+window.location+"&text="+document.title+"&hashtags="+i;
g=encodeURI(g);
sharePopUp(550,420,g);
return false
});
epflJ(".icon-facebook").click(function(h){var g="https://www.facebook.com/sharer/sharer.php?u="+window.location;
sharePopUp(550,230,g);
return false
});
epflJ(".icon-linkedin").click(function(h){var g="http://www.linkedin.com/shareArticle?mini=true&url="+window.location+"&title="+b;
sharePopUp(550,445,g);
return false
});
epflJ(".icon-googleplus").click(function(h){var g="https://plus.google.com/share?url="+c;
sharePopUp(550,330,g);
return false
});
epflJ(".icon-email").click(function(g){document.getElementById("social-share-email-link").click();
return false
});
var a="icons/grey-",f="icons/";
function e(g,j,i){var h=g.attr("src");
h&&g.attr("src",h.replace(j,i))
}epflJ("img.social-icon").hover(function(){e(epflJ(this),a,f)
},function(){e(epflJ(this),f,a)
})
});