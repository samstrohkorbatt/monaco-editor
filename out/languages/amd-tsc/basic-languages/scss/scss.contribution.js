define(["require","exports","../_.contribution"],(function(s,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),(0,n.registerLanguage)({id:"scss",extensions:[".scss"],aliases:["Sass","sass","scss"],mimetypes:["text/x-scss","text/scss"],loader:function(){return AMD?new Promise((function(e,n){s(["vs/basic-languages/scss/scss"],e,n)})):new Promise((function(e,n){s(["./scss"],e,n)}))}})}));