/* 
 * Copyright (c) 2010 Scott Murphy @hellocreation (http://scott-murphy.net)
 * 
 * jQuery quickClear plugin
 * Version 1.0 (Aug 2010)
 * @requires jQuery v1.2.3 or later
 *
 * Licensed under the MIT License
 */
(function(a){a.fn.quickClear=function(b){var c={clearImg:'<img src="/images/clear.gif" />',container:'<span class="clearBtnContainer"></span>',padding:5};
var b=a.extend(c,b);
return this.each(function(){var h=a(this);
var g=a(b.clearImg);
var d=a(b.container);
var j=false;
l();
function l(){e();
h.bind({focus:function(){f()
},focusout:function(){if(j){return j=false
}else{k()
}}});
g.bind({mousedown:function(){j=true;
i();
setTimeout(function(){h.focus()
},0)
}});
h.parent("span").bind({mouseover:function(){f()
},mouseout:function(){k()
}})
}function e(){h.wrap(d).after(g);
g.hide().addClass("clearButton");
var m=g.outerWidth();
h.css("padding-right",m+b.padding);
h.width(h.width()-m-b.padding)
}function f(){g.show()
}function k(){g.hide()
}function i(){h.val("")
}})
}
})(jQuery);