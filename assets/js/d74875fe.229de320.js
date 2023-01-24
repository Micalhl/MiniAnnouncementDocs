"use strict";(self.webpackChunkmini_announcement_documentation=self.webpackChunkmini_announcement_documentation||[]).push([[369],{3905:(n,e,t)=>{t.d(e,{Zo:()=>s,kt:()=>y});var r=t(7294);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function c(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var l=r.createContext({}),u=function(n){var e=r.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):a(a({},e),n)),t},s=function(n){var e=u(n.components);return r.createElement(l.Provider,{value:e},n.children)},m="mdxType",p={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(n,e){var t=n.components,i=n.mdxType,o=n.originalType,l=n.parentName,s=c(n,["components","mdxType","originalType","parentName"]),m=u(t),f=i,y=m["".concat(l,".").concat(f)]||m[f]||p[f]||o;return t?r.createElement(y,a(a({ref:e},s),{},{components:t})):r.createElement(y,a({ref:e},s))}));function y(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var o=t.length,a=new Array(o);a[0]=f;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=n,c[m]="string"==typeof n?n:i,a[1]=c;for(var u=2;u<o;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},1741:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=t(7462),i=(t(7294),t(3905));const o={sidebar_position:2},a="\u8fc1\u79fb\u63d2\u4ef6",c={unversionedId:"start/migrate-plugin",id:"start/migrate-plugin",title:"\u8fc1\u79fb\u63d2\u4ef6",description:"\u5982\u679c\u4f60\u662f\u4ece 1.2 \u6216\u66f4\u4f4e\u7684\u65e7\u7248\u672c\u5347\u7ea7\u5230\u4e86\u65b0\u7248\u672c\uff0c\u5219\u9700\u8981\u7ffb\u9605\u6b64\u6587\u7ae0\u3002",source:"@site/docs/start/migrate-plugin.md",sourceDirName:"start",slug:"/start/migrate-plugin",permalink:"/MiniAnnouncementDocs/docs/start/migrate-plugin",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u5b89\u88c5\u63d2\u4ef6",permalink:"/MiniAnnouncementDocs/docs/start/install-plugin"},next:{title:"\u914d\u7f6e\u63d2\u4ef6",permalink:"/MiniAnnouncementDocs/docs/start/configure-plugin"}},l={},u=[],s={toc:u};function m(n){let{components:e,...t}=n;return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u8fc1\u79fb\u63d2\u4ef6"},"\u8fc1\u79fb\u63d2\u4ef6"),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u662f\u4ece ",(0,i.kt)("inlineCode",{parentName:"p"},"1.2")," \u6216\u66f4\u4f4e\u7684\u65e7\u7248\u672c\u5347\u7ea7\u5230\u4e86\u65b0\u7248\u672c\uff0c\u5219\u9700\u8981\u7ffb\u9605\u6b64\u6587\u7ae0\u3002"),(0,i.kt)("p",null,"\u4f60\u9700\u8981\u4fdd\u7559\u597d\u539f\u6765\u7684\u914d\u7f6e\u6587\u4ef6\u3002\u7136\u540e\u8f93\u5165 ",(0,i.kt)("inlineCode",{parentName:"p"},"/miniannouncement migrate"),"\uff0c\u7cfb\u7edf\u4f1a\u81ea\u52a8\u8fc1\u79fb\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"> miniannouncement migrate\n[ MiniAnnouncement ] \u5f00\u59cb\u8fc1\u79fb...\n[ MiniAnnouncement ] \u5c1d\u8bd5\u8fc1\u79fb actionbars.yml...\n[ MiniAnnouncement ] \u5df2\u52a0\u8f7d\u914d\u7f6e\u6587\u4ef6 actionbars.yml.\n[ MiniAnnouncement ] \u6210\u529f\u8fc1\u79fb actionbars.yml!\n[ MiniAnnouncement ] \u5c1d\u8bd5\u8fc1\u79fb bossbars.yml...\n[ MiniAnnouncement ] \u5df2\u52a0\u8f7d\u914d\u7f6e\u6587\u4ef6 bossbars.yml.\n[ MiniAnnouncement ] \u5c1d\u8bd5\u8fc1\u79fb messages.yml...\n[ MiniAnnouncement ] \u5df2\u52a0\u8f7d\u914d\u7f6e\u6587\u4ef6 messages.yml.\n[ MiniAnnouncement ] \u5c1d\u8bd5\u8fc1\u79fb titles.yml...\n[ MiniAnnouncement ] \u5df2\u52a0\u8f7d\u914d\u7f6e\u6587\u4ef6 titles.yml.\n[ MiniAnnouncement ] \u6210\u529f\u8fc1\u79fb! \u8bf7\u91cd\u542f\u670d\u52a1\u5668\u6216\u91cd\u8f7d\u63d2\u4ef6\u6765\u5e94\u7528!\n")),(0,i.kt)("p",null,"\u91cd\u542f\u670d\u52a1\u5668\u5373\u53ef\u3002"))}m.isMDXComponent=!0}}]);