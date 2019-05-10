var debug=function(a){if(window.console!==undefined){console.log(a)
}};
jQuery.extend({highlight:function(a,k,g,f,j){if(a.nodeType===3){var d=a.data.match(k);
if(d){var b=document.createElement(g||"span");
b.className=f||"highlight";
var h=a.splitText(d.index);
h.splitText(d[0].length);
var e=h.cloneNode(true);
b.appendChild(e);
h.parentNode.replaceChild(b,h);
return 1
}}else{if((a.nodeType===1&&a.childNodes)&&!/(script|style)/i.test(a.tagName)&&!(a.tagName===g.toUpperCase()&&a.className===f)){if(j){jQuery.highlight(a.childNodes[0],k,g,f)
}else{for(var c=0;
c<a.childNodes.length;
c++){c+=jQuery.highlight(a.childNodes[c],k,g,f)
}}}}return 0
}});
jQuery.fn.unhighlight=function(a){var b={className:"highlight",element:"span"};
jQuery.extend(b,a);
return this.find(b.element+"."+b.className).each(function(){var c=this.parentNode;
c.replaceChild(this.firstChild,this);
c.normalize()
}).end()
};
jQuery.fn.highlight=function(h,b){var g={a:"[aàáâãäå]",c:"[cç]",e:"[eèéêë]",i:"[iìíîï]",o:"[oòóôõö]",u:"[uùúûü]"};
var e={className:"highlight",element:"span",caseSensitive:false,wordsOnly:false,accentInsensitive:true,firstOnly:false};
jQuery.extend(e,b);
if(e.accentInsensitive){for(var d in g){h=h.replace(new RegExp(g[d],"ig"),d);
h=h.replace(new RegExp(d,"g"),g[d])
}}if(h.constructor===String){h=[h]
}h=jQuery.grep(h,function(k,j){return k!=""
});
if(h.length==0){return this
}var a=e.caseSensitive?"":"i";
var f="("+h.join("|")+")";
if(e.wordsOnly){f="\\b"+f+"\\b"
}var c=new RegExp(f,a);
debug("pattern= "+f);
return this.each(function(){jQuery.highlight(this,c,e.element,e.className,e.firstOnly)
})
};