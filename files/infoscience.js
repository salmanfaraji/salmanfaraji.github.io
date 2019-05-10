function change_search_field(b,a){var c=a.attr("id"),d=jQuery("label[for="+c+"]");
debug('change_search_field(rid: "'+c+'", text: "'+d.text()+'")');
b.text(d.text()).next().addClass("hidden")
}(function(d){var a=function(e){if(window.console!==undefined){console.log(e)
}};
function b(){var f={},e=window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(g,h,i){f[h]=i
});
return f
}function c(){a("CHECK!!!!");
var e="";
d('#advanced-search input[type="text"]').each(function(){e+=d(this).val()
});
a("v= "+e);
if(e==""){d("#main-search-form-options-toggler").removeClass("toggled-active");
d("#main-search-form-options").hide()
}else{d("#main-search-form-options-toggler").addClass("toggled-active");
d("#main-search-form-options").show()
}}d(document).ready(function(){var f=d("form").filter(function(){return this.id!="header_searchform"
}).find(".search-filter"),e=b().q?b().q.replace(/\+/g," "):"";
e=decodeURI(e);
a("sfilter= "+f.size());
d('#main-searchform input[type="text"]').quickClear({clearImg:'<img src="/images/clear.gif" />'});
d("form").filter(function(){return this.id!="header_searchform"
}).find(".selected-field").click(function(){d(this).siblings("ul").toggleClass("hidden")
});
f.mouseleave(function(){d(this).children("ul").addClass("hidden")
});
f.find("input[type=radio]").change(function(){change_search_field(d(this).parent().parent().siblings(".selected-field"),d(this))
});
if(d.browser.msie||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/iPad/i)){f.find("label").click(function(){var g=d(this).attr("for");
change_search_field(d(this).parent().parent().siblings(".selected-field"),d("#"+g));
d("#"+g).attr("checked","checked")
})
}c()
})
}(jQuery));