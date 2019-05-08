/*
 * EPFL 1.4 - Core library for dynamic CSS/JS loading for the EPFL websites.
 *
 * Copyright (c) 2012 Julien Ramboz - EPFL
 * Examples and docs at: http://jahia-ws.epfl.ch/jsdoc/
 *
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 */
var epflJ=epflJ||jQuery;
var EPFL=(function(k,b){var c="instances";
var a={};
var h=function(n){var o=n;
if(b.createStyleSheet){b.createStyleSheet(o)
}else{k("head").append(k('<link rel="stylesheet" href="'+o+'" type="text/css" />'))
}};
var l=function(n,p){var o=n;
k.getScript(o,p)
};
var m=function(n,o){return function(){EPFL.loadJS(n,o)
}
};
var e=function(o,n){a[o]={};
a[o][c]={};
a[o].cssTrigger=n.cssTrigger;
a[o].cssUrl=n.cssUrl;
a[o].jsUrl=n.jsUrl;
a[o].jsCallback=n.jsCallback
};
var j=function(p,o,n){if(a[o]===undefined){throw new Error("Unknown EPFL Plugin: "+o)
}a[o][c][p]=n
};
var i=function(n){return a[n][c]
};
var d=function(o,n){return a[n][c][o]
};
var g=function(p,o){var n=window.open(p,o,"width=1020,height=730,left=10,top=10,resizable=yes,scrollbars=yes,status=no");
if(window.focus){n.focus()
}return n
};
var f=function(){k.each(a,function(n,o){if(!o.cssTrigger||(o.cssTrigger&&k(o.cssTrigger).length>0)){if(o.cssUrl){EPFL.loadCSS(o.cssUrl)
}if(o.jsUrl){EPFL.loadJS(o.jsUrl,o.jsCallback)
}}});
EPFL.isInitialized=true
};
return{init:function(){f()
},loadCSS:function(n){if(n instanceof Array&&n.length>1){var o;
for(o=0;
o<n.length;
o++){h(n[o])
}}else{h(n)
}},loadJS:function(n,p){if(n instanceof Array&&n.length>1){var o=n.shift();
l(o,m(n,p))
}else{l(n,p)
}},registerPlugin:function(o,n){e(o,n)
},usePlugin:function(p,o,n){j(p,o,n)
},getPluginInstances:function(n){return i(n)
},getPluginConf:function(o,n){return d(o,n)
},openPopup:function(o,n){return g(o,n)
}}
}(epflJ,document));
epflJ(document).ready(function(){EPFL.init()
});
/* EPFL analytics 2.0 - Plugin library that handles the GA tracking. */
EPFL.analytics=(function(d,b){var c=["UA-4833294-1"];
var a=function(h,j,n,l,k,f,e){h.GoogleAnalyticsObject=k;
h[k]=h[k]||function(){(h[k].q=h[k].q||[]).push(arguments)
},h[k].l=1*new Date();
f=j.createElement(n),e=j.getElementsByTagName(n)[0];
f.async=1;
f.src=l;
e.parentNode.insertBefore(f,e)
};
return{setAccount:function(e){c.push(e)
},init:function(){try{a(window,document,"script","//www.google-analytics.com/analytics.js","ga");
ga("create",c[0],{name:"epfl",cookieDomain:"auto"});
ga("epfl.set","anonymizeIp",true);
ga("epfl.send","pageview");
for(var f=1;
f<c.length;
f++){var g="tracker_"+f;
ga("create",c[f],{name:g,cookieDomain:"auto"});
ga(g+".set","anonymizeIp",true);
ga(g+".send","pageview")
}}catch(h){console.error("Failed to initialize the library",this,h)
}}}
}(epflJ,document));
epflJ(document).ready(function(){EPFL.analytics.init()
});
/* EPFL header 1.4 - Plugin library that handles the header panels. */
EPFL.header=(function(e,b){var c=function(f){e(".navigation-panel").addClass("hidden");
e(f).removeClass("hidden");
e("#header2013").expose({color:"#000",opacity:0.6,loadSpeed:0,closeSpeed:0})
};
var a=function(){if(!e(".navigation-panel:not(.hidden)").length){return
}e(".navigation-panel").addClass("hidden");
e.mask.close()
};
var d=function(){var g=e("html").attr("xml:lang");
switch(g){case"en":case"fr":break;
default:g="en"
}var f="/templates/epfl/static_epfl_menus/header_"+g+".jsp";
e("#header2013").load(f+" #header2013 > *",function(){e("#header2013").removeClass("filler");
e("#header2013 #nav-menus .menu").click(function(){var h=e(".navigation-panel",this);
if(h.hasClass("hidden")){c(h)
}else{a()
}return false
});
e("#header2013 .navigation-panel").click(function(h){h.stopPropagation()
});
e(document).keyup(function(h){if(h.keyCode==27){a()
}});
e("html").click(a);
EPFL.search.init()
})
};
return{init:function(){try{d()
}catch(f){console.error("Failed to initialize the library",this,f)
}}}
}(epflJ,document));
EPFL.mainNavFix=(function(c,a){var b=function(){c("li.dropdown").each(function(){var d=c(this).find("ul.menu li").filter(function(){return c(this).attr("id")&&(typeof(c(this).attr("id"))!="undefined")&&c(this).attr("id").match("dropdown[0-9]+")
});
if(d.length==0){c(this).find("ul.menu").remove()
}})
};
return{init:function(){try{b()
}catch(d){console.error("Failed to initialize the library",this,d)
}}}
}(epflJ,document));
epflJ(document).ready(function(){EPFL.mainNavFix.init()
});
/* EPFL navigation 1.0 - Plugin library that handles the navigation menus. */
EPFL.navigation=(function(c,a){var b=function(){c(".dropdown").click(function(){c(this).children("ul").toggleClass("hidden")
});
c(".dropdown").mouseleave(function(){c(this).children("ul").addClass("hidden")
});
c("#main-navigation .dropdown").hoverIntent(function(){c(this).children("ul").removeClass("hidden")
},function(){c(this).children("ul").addClass("hidden")
});
c("#main-navigation .dropdown").click(function(){return true
});
c(".tree li.inpath").addClass("open");
c(".tree").treeview({collapsed:true,unique:false});
c(".tree").children().addClass("local-color");
c(".tree li a").hover(function(f){f.stopPropagation();
c(".tree li").removeClass("hover");
c(this).parent().addClass("hover")
},function(f){f.stopPropagation();
c(this).parent().removeClass("hover")
});
var d=function(){return !c(this).children().length
};
var e;
while((e=c("#main-content ul").filter(d)).length){e.remove()
}c("h1,h2,h3,h4,h5,h6",c("#content")).each(function(){if(!this.id){var f=epflJ(this).text().trim();
if(f){var g=f.toLowerCase().replace(/\(\)\[\]/,"").replace(/\W/g,"-").replace(/-+/g,"-");
if(!epflJ("[id="+g+"]").length){this.id=g
}}}})
};
return{init:function(){try{b()
}catch(d){console.error("Failed to initialize the library",this,d)
}}}
}(epflJ,document));
epflJ(document).ready(function(){EPFL.navigation.init()
});
/* EPFL dynamic 1.4 - Registers dynamic plugin libraries. */
(function(a){a.registerPlugin("files-gallery",{cssTrigger:".files-gallery",cssUrl:["/templates/epfl/css/epfl.filesGallery.css"],jsUrl:["/templates/epfl/js/epfl.filesGallery.js"],jsCallback:function(){a.filesGallery.init()
}});
a.registerPlugin("files-list",{cssTrigger:".files-list",cssUrl:"/templates/epfl/css/epfl.filesList.css",jsUrl:"/templates/epfl/js/epfl.filesList.js",jsCallback:function(){a.filesList.init()
}});
a.registerPlugin("filter",{cssTrigger:".filterable",cssUrl:"/templates/epfl/css/epfl.filter.css",jsUrl:"/templates/epfl/js/epfl.filter.js",jsCallback:function(){a.filter.init()
}});
a.registerPlugin("syntax-highlight",{cssTrigger:".syntax-highlight",cssUrl:["//www.epfl.ch/css/syntaxhighlighter/shCore.css","//www.epfl.ch/css/syntaxhighlighter/shThemeEPFL.css"],jsUrl:["//www.epfl.ch/js/syntaxhighlighter/shCore.js","/templates/epfl/js/epfl.syntaxHighlight.js"],jsCallback:function(){a.syntaxHighlight.loadBrushes(window.SyntaxHighlighter);
a.syntaxHighlight.init(window.SyntaxHighlighter)
}});
a.registerPlugin("epfl-map",{cssTrigger:".epfl-map",cssUrl:["//plan-old.epfl.ch/mfbase/ext/resources/css/xtheme-gray.css","//plan-old.epfl.ch/epflApi/css/api.css"],jsUrl:["/templates/epfl/js/epfl.map.js","//plan-old.epfl.ch/mfbase/ext/adapter/ext/ext-base.js","//plan-old.epfl.ch/mfbase/ext/ext-all.js","//plan-old.epfl.ch/build/epfl.js"],jsCallback:function(){a.map.init(window.Ext,window.epfl)
}})
}(EPFL));
epflJ(document).ready(function(){(function(e,b,d){e(".box.two-cols div.box-col:even").addClass("box-left-col");
e(".box.two-cols div.box-col:odd").addClass("box-right-col");
e("#content:not(.fullpage-content) > .box:odd").addClass("last-col");
e(".toggler").click(function(){e(this).toggleClass("toggled-active").next().slideToggle("slow");
return false
});
e(".modal-opener[rel]").overlay({mask:{color:"#000",opacity:0.6,loadSpeed:200},closeOnClick:false});
var c=e("table.sortable");
if(c.length>0){c.tablesorter({dateFormat:"uk"})
}e("img[align]").each(function(){e(this).addClass(e(this).attr("align"))
});
e("img[rel]").each(function(){try{e(this).overlay()
}catch(f){console.error("Missing overlay with id: #"+e(this).attr("rel"))
}});
var a=e(".big-buttons");
if(a.length>0){d.loadCSS("/templates/epfl/css/epfl.bigButtons.css");
a.show()
}if(e(".snippets").length>0){d.loadCSS("//www.epfl.ch/css/applications.css");
e(".snippet-img").click(function(){var f=e(e(this).attr("rel"));
f.expose({color:"#000",loadSpeed:"fast",onLoad:function(){f.show()
},onBeforeClose:function(){f.hide()
}})
})
}if(e("#edit-content").length===0){if(e(".keyVisual").length>0){d.loadCSS("/templates/epfl/css/epfl.keyVisuals.css")
}if(e(".keyVisual").length>1){e("#keyVisuals").scrollable({circular:true,mousewheel:true}).navigator({navi:".indicator"}).autoscroll({interval:7000});
e("#keyVisuals .items").css("left","-652px")
}}e(".keyVisual").show()
}(epflJ,document,EPFL))
});
/* EPFL search 1.3 - Plugin library that handles the search box. */
EPFL.search=(function(e,b){var a=function(){var f=e("#header_searchfield").data("autocompleter");
if(f){f.options.enabled=true;
return
}e("#header_searchfield").autocomplete({url:"//search.epfl.ch/json/autocompletename.action",resultsClass:"ac-list",selectClass:"ac-selected",loadingClass:"ac-loading",useCache:false,filterResults:false,sortResults:false,remoteDataType:"jsonp",queryParamName:"term",limitParamName:"maxRows",maxItemsToShow:15,minChars:3,processData:function(g){if(!e("#header_searchfield").data("autocompleter")){return[]
}if(g instanceof Array&&g.length===0){return g
}var j=[],k;
for(var h in g.result){k=g.result[h];
j.push([k.firstname+" "+k.name,k.name+", "+k.firstname])
}if(g.hasMore){j.push(["//search.epfl.ch/psearch.action?q="+g.term,g.lang&&g.lang==="en"?"See all results":"Voir tous les résultats"])
}return j
},showResult:function(k,j){var h=e("#header_searchfield").data("autocompleter").lastProcessedValue_;
if(k.indexOf("psearch.action")!==-1){return'<a class="ac-more" href="'+k+'" title="'+j+'">'+j+"</a>"
}var g=new RegExp("("+h+")","ig");
var i="<strong>$1</strong>";
return j[0].replace(g,i)
}})
};
var d=function(){e("#header_searchfield").data("autocompleter").options.enabled=false
};
var c=function(){var f=e("#searchform");
f.submit(function(){g.val(g.val().replace(/</g,"&lt;"));
return true
});
e("#header2013 .selected-field").click(function(){e(this).siblings("ul").toggleClass("hidden")
});
e("#header2013 .search-filter").mouseleave(function(){e(this).children("ul").addClass("hidden")
});
e('#header2013  #nav-search input[type="radio"]').click(function(){e(this).parent().parent().addClass("hidden")
});
e('#header2013 input[type="radio"]').change(function(j){var i=e("label[for="+e(this).attr("id")+"]");
e("#search-box .selected-field").text(i.text());
if(e(this).is("#search-engine-person")){a()
}else{d()
}});
a();
e("#search-engine-local").change(function(i){e("#header_local_site").attr("value",location.host)
});
var g=e("#searchfield");
g.blur(function(){if(e(this).val()===""){e(this).val(e("#searchform label.current").attr("title")).removeClass("focused")
}}).keypress(function(i){if(i.which===13){e(this).parent("form").submit()
}});
e("#searchlink").click(function(){g.focus()
});
if(e.browser.msie){e('#header input[type="radio"]').click(function(){_change_search_base(e(this));
this.blur();
this.focus()
})
}if(navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/iPad/i)){e("#search-box label").click(function(){var i=e(this).attr("for");
_change_search_base(e("#"+i))
})
}if(window.location.href.indexOf("/engineName/search")!==-1){e("#search-engine-local").click();
var h=window.location.search.match(/[\^&]q=([^&]+)/);
if(h){e("#searchfield").focus().val(h[1])
}}};
return{init:function(){try{c()
}catch(f){console.error("Failed to initialize the library",this,f)
}}}
}(epflJ,document));
epflJ(document).ready(function(){EPFL.search.init()
});
/* EPFL truncate 1.0 - Plugin library that handles truncating text. */
EPFL.truncate=(function(f,b){var c=function(h){var j=h.html();
var g=j.lastIndexOf(" ");
h.html(j.substring(0,g)+"...");
return g!==-1
};
var a=function(h,g){return g.position().top+g.outerHeight()+2<h.position().top+h.innerHeight()
};
var e=function(k,j){var h=f(j),g,i;
h.each(function(l,m){g=f(m);
i=g.find(k);
if(i.length){while(!a(g,i)&&c(i)){}}})
};
var d=function(){var g=f("div.news-text");
g.each(function(j,h){h=f(h);
var l=h.find("p span.heading");
var k=h.find("p span.read-more");
if(l.length&&k.length){while(!a(h,k)&&c(l)){}}})
};
return{init:function(){try{d()
}catch(g){console.error("Failed to initialize the library",this,g)
}},apply:function(h,g){e(h,g)
}}
}(epflJ,document));
epflJ(document).ready(function(){EPFL.truncate.init()
});
