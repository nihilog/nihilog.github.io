(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[989],{7942:function(e,t,n){"use strict";var r=n(3848);t.default=void 0;var o,a=(o=n(7294))&&o.__esModule?o:{default:o},u=n(4957),i=n(9898),c=n(639);var l={};function s(e,t,n,r){if(e&&u.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,o=i.useRouter(),f=a.default.useMemo((function(){var t=u.resolveHref(o,e.href,!0),n=r(t,2),a=n[0],i=n[1];return{href:a,as:e.as?u.resolveHref(o,e.as):i||a}}),[o,e.href,e.as]),d=f.href,p=f.as,v=e.children,g=e.replace,y=e.shallow,h=e.scroll,b=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var m=(t=a.default.Children.only(v))&&"object"===typeof t&&t.ref,w=c.useIntersection({rootMargin:"200px"}),k=r(w,2),_=k[0],C=k[1],E=a.default.useCallback((function(e){_(e),m&&("function"===typeof m?m(e):"object"===typeof m&&(m.current=e))}),[m,_]);a.default.useEffect((function(){var e=C&&n&&u.isLocalURL(d),t="undefined"!==typeof b?b:o&&o.locale,r=l[d+"%"+p+(t?"%"+t:"")];e&&!r&&s(o,d,p,{locale:t})}),[p,d,C,b,n,o]);var L={ref:E,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,i,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(n))&&(e.preventDefault(),null==i&&r.indexOf("#")>=0&&(i=!1),t[o?"replace":"push"](n,r,{shallow:a,locale:c,scroll:i}))}(e,o,d,p,g,y,h,b)},onMouseEnter:function(e){u.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),s(o,d,p,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var Z="undefined"!==typeof b?b:o&&o.locale,M=o&&o.isLocaleDomain&&u.getDomainLocale(p,Z,o&&o.locales,o&&o.domainLocales);L.href=M||u.addBasePath(u.addLocale(p,Z,o&&o.defaultLocale))}return a.default.cloneElement(t,L)};t.default=f},639:function(e,t,n){"use strict";var r=n(3848);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!u,c=o.useRef(),l=o.useState(!1),s=r(l,2),f=s[0],d=s[1],p=o.useCallback((function(e){c.current&&(c.current(),c.current=void 0),n||f||e&&e.tagName&&(c.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=i.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return i.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,u=r.elements;return u.set(e,t),a.observe(e),function(){u.delete(e),a.unobserve(e),0===u.size&&(a.disconnect(),i.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return o.useEffect((function(){if(!u&&!f){var e=a.requestIdleCallback((function(){return d(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[f]),[p,f]};var o=n(7294),a=n(6286),u="undefined"!==typeof IntersectionObserver;var i=new Map},443:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return d}});var r=n(7294),o=n(2296),a=n(6765),u=n(5203),i=n(6750),c=n(9775),l=n(5883),s=n(2781);var f={name:"qu9742",styles:"margin-bottom:100px"},d=!0;t.default=function(e){var t=e.PostsPages,n=e.keyword,d=(0,r.useState)(0),p=d[0],v=d[1],g=(0,u.Z)(t),y=(0,r.useCallback)((function(){0!==p&&v(p-1)}),[p]),h=(0,r.useCallback)((function(){p!==t.length-1&&v(p+1)}),[p]),b=(0,r.useCallback)((function(){0!==p&&v(0)}),[p]),m=(0,r.useCallback)((function(){p!==t.length-1&&v(t.length-1)}),[p]),w=f,k=(0,i.L)({title:'"'.concat(n,'" \uad00\ub828 \uc77c\ub7ec\uc2a4\ud2b8'),url:"/illust/keywords/".concat(n)});return(0,s.tZ)(r.Fragment,null,(0,s.tZ)(o.Z,{meta:k},(0,s.tZ)("div",{id:"blog-keyword-page",css:w},(0,s.tZ)(c.x,{top:"100"},(0,s.tZ)(c.u,{i:"f002",w:"900",f:"Free"},"\u201c ",n," \u201d \ud0a4\uc6cc\ub4dc \uad00\ub828 \uc77c\ub7ec\uc2a4\ud2b8 ",g,"\uc7a5"),(0,s.tZ)(a.P,{bottom:"0"},"\ub2e4\ub978 \ud0a4\uc6cc\ub4dc\ub4e4\uc744 \ubcf4\ub824\uba74 \uc0c1\ub2e8 \uc11c\ube0c \uba54\ub274\uc5d0\uc11c \ud0a4\uc6cc\ub4dc \ub9c1\ud06c\ub97c \ud074\ub9ad\ud558\uc138\uc694.")),(0,s.tZ)("div",{id:"blog-post-list"},t[p].map((function(e){var t=e.frontMatter,n=e.slug;return(0,s.tZ)(l.oV,{key:n,type:"illust",frontMatter:t,slug:n})}))),(0,s.tZ)(l._3,{prev:y,next:h,first:b,last:m,current:p,total:t.length}))))}},5203:function(e,t){"use strict";t.Z=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"posts",n=0;if("posts"===t)for(var r=0;r<=e.length-1;r++)n+=e[r].length;else for(var o=0;o<=e.length-1;o++)n+=e[o].length;return n}},4946:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/illust/keywords/[keyword]",function(){return n(443)}])},1664:function(e,t,n){e.exports=n(7942)},5934:function(e,t,n){"use strict";var r;n.d(t,{Z:function(){return f}});var o=new Uint8Array(16);function a(){if(!r&&!(r="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(o)}var u=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var i=function(e){return"string"===typeof e&&u.test(e)},c=[],l=0;l<256;++l)c.push((l+256).toString(16).substr(1));var s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(c[e[t+0]]+c[e[t+1]]+c[e[t+2]]+c[e[t+3]]+"-"+c[e[t+4]]+c[e[t+5]]+"-"+c[e[t+6]]+c[e[t+7]]+"-"+c[e[t+8]]+c[e[t+9]]+"-"+c[e[t+10]]+c[e[t+11]]+c[e[t+12]]+c[e[t+13]]+c[e[t+14]]+c[e[t+15]]).toLowerCase();if(!i(n))throw TypeError("Stringified UUID is invalid");return n};var f=function(e,t,n){var r=(e=e||{}).random||(e.rng||a)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){n=n||0;for(var o=0;o<16;++o)t[n+o]=r[o];return t}return s(r)}},2809:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return r}})},159:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return r}})}},function(e){e.O(0,[912,883,888,774,179],(function(){return t=4946,e(e.s=t);var t}));var t=e.O();_N_E=t}]);