function initAnchors(){new SmoothScroll({anchorLinks:".btn-back",extraOffset:0,wheelBehavior:"none"})}jQuery(function(){initAnchors()}),function(l,t){var e,s,r,h=l(window),a="onwheel"in document||9<=document.documentMode?"wheel":"mousewheel DOMMouseScroll";function i(t,o,n){var i;document.body&&(o="number"==typeof o?{duration:o}:o||{},e=e||l("html, body"),i=o.container||e,"number"==typeof t&&(t={top:t}),s&&r&&s.off(a,r),o.wheelBehavior&&"none"!==o.wheelBehavior&&(r=function(t){"stop"===o.wheelBehavior?(i.off(a,r),i.stop()):"ignore"===o.wheelBehavior&&t.preventDefault()},s=i.on(a,r)),i.stop().animate({scrollLeft:t.left,scrollTop:t.top},o.duration,function(){r&&i.off(a,r),l.isFunction(n)&&n()}))}function o(t){this.options=l.extend({anchorLinks:'a[href^="#"]',container:null,extraOffset:null,activeClasses:null,easing:"swing",animMode:"duration",animDuration:800,animSpeed:1500,anchorActiveClass:"anchor-active",sectionActiveClass:"section-active",wheelBehavior:"stop",useNativeAnchorScrolling:!1},t),this.init()}o.prototype={init:function(){this.initStructure(),this.attachEvents(),this.isInit=!0},initStructure:function(){var t=this;this.container=this.options.container?l(this.options.container):l("html,body"),this.scrollContainer=this.options.container?this.container:h,this.anchorLinks=jQuery(this.options.anchorLinks).filter(function(){return jQuery(t.getAnchorTarget(jQuery(this))).length})},getId:function(t){try{return"#"+t.replace(/^.*?(#|$)/,"")}catch(t){return null}},getAnchorTarget:function(t){var o=this.getId(l(t).attr("href"));return l(1<o.length?o:"html")},getTargetOffset:function(t){var o=t.offset().top;return this.options.container&&(o-=this.container.offset().top-this.container.prop("scrollTop")),"number"==typeof this.options.extraOffset?o-=this.options.extraOffset:"function"==typeof this.options.extraOffset&&(o-=this.options.extraOffset(t)),{top:o}},attachEvents:function(){var o=this;if(this.options.activeClasses&&this.anchorLinks.length){this.anchorData=[];for(var t=0;t<this.anchorLinks.length;t++){var n=jQuery(this.anchorLinks[t]),i=o.getAnchorTarget(n),e=null;l.each(o.anchorData,function(t,o){o.block[0]===i[0]&&(e=o)}),e?e.link=e.link.add(n):o.anchorData.push({link:n,block:i})}this.resizeHandler=function(){o.isInit&&o.recalculateOffsets()},this.scrollHandler=function(){o.refreshActiveClass()},this.recalculateOffsets(),this.scrollContainer.on("scroll",this.scrollHandler),h.on("resize load orientationchange refreshAnchor",this.resizeHandler)}this.clickHandler=function(t){o.onClick(t)},this.options.useNativeAnchorScrolling||this.anchorLinks.on("click",this.clickHandler)},recalculateOffsets:function(){var n=this;l.each(this.anchorData,function(t,o){o.offset=n.getTargetOffset(o.block),o.height=o.block.outerHeight()}),this.refreshActiveClass()},toggleActiveClass:function(t,o,n){t.toggleClass(this.options.anchorActiveClass,n),o.toggleClass(this.options.sectionActiveClass,n)},refreshActiveClass:function(){var e=this,s=!1,r=this.container.prop("scrollHeight"),a=this.scrollContainer.height(),c=this.options.container?this.container.prop("scrollTop"):h.scrollTop();this.options.customScrollHandler?this.options.customScrollHandler.call(this,c,this.anchorData):(this.anchorData.sort(function(t,o){return t.offset.top-o.offset.top}),l.each(this.anchorData,function(t){var o=e.anchorData.length-t-1,n=e.anchorData[o],i="parent"===e.options.activeClasses?n.link.parent():n.link;r-a<=c?o===e.anchorData.length-1?e.toggleActiveClass(i,n.block,!0):e.toggleActiveClass(i,n.block,!1):!s&&(c>=n.offset.top-1||0===o)?(s=!0,e.toggleActiveClass(i,n.block,!0)):e.toggleActiveClass(i,n.block,!1)}))},calculateScrollDuration:function(t){return"speed"===this.options.animMode?Math.abs(this.scrollContainer.scrollTop()-t.top)/this.options.animSpeed*1e3:this.options.animDuration},onClick:function(t){var o=this.getAnchorTarget(t.currentTarget),n=this.getTargetOffset(o);t.preventDefault(),i(n,{container:this.container,wheelBehavior:this.options.wheelBehavior,duration:this.calculateScrollDuration(n)}),this.makeCallback("onBeforeScroll",t.currentTarget)},makeCallback:function(t){if("function"==typeof this.options[t]){var o=Array.prototype.slice.call(arguments);o.shift(),this.options[t].apply(this,o)}},destroy:function(){var e=this;this.isInit=!1,this.options.activeClasses&&(h.off("resize load orientationchange refreshAnchor",this.resizeHandler),this.scrollContainer.off("scroll",this.scrollHandler),l.each(this.anchorData,function(t){var o=e.anchorData.length-t-1,n=e.anchorData[o],i="parent"===e.options.activeClasses?n.link.parent():n.link;e.toggleActiveClass(i,n.block,!1)})),this.anchorLinks.off("click",this.clickHandler)}},l.extend(o,{scrollTo:function(t,o,n){i(t,o,n)}}),t.SmoothScroll=o}(jQuery,this),$(function(){$(".nav-opener").on("click",function(t){t.preventDefault(),$("body").toggleClass("nav-active")})}),$(function(){var t=$("body");$(window).scroll(function(){0<$(window).scrollTop()?t.addClass("scroll"):t.removeClass("scroll")})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiaW5pdEFuY2hvcnMiLCJTbW9vdGhTY3JvbGwiLCJhbmNob3JMaW5rcyIsImV4dHJhT2Zmc2V0Iiwid2hlZWxCZWhhdmlvciIsImpRdWVyeSIsIiQiLCJleHBvcnRzIiwicGFnZSIsImFjdGl2ZUJsb2NrIiwiYWN0aXZlV2hlZWxIYW5kbGVyIiwid2luIiwid2luZG93Iiwid2hlZWxFdmVudHMiLCJkb2N1bWVudCIsImRvY3VtZW50TW9kZSIsInNjcm9sbFRvIiwib2Zmc2V0Iiwib3B0aW9ucyIsImNhbGxiYWNrIiwic2Nyb2xsQmxvY2siLCJib2R5IiwiZHVyYXRpb24iLCJjb250YWluZXIiLCJ0b3AiLCJvZmYiLCJlIiwic3RvcCIsInByZXZlbnREZWZhdWx0Iiwib24iLCJhbmltYXRlIiwic2Nyb2xsTGVmdCIsImxlZnQiLCJzY3JvbGxUb3AiLCJpc0Z1bmN0aW9uIiwidGhpcyIsImV4dGVuZCIsImFjdGl2ZUNsYXNzZXMiLCJlYXNpbmciLCJhbmltTW9kZSIsImFuaW1EdXJhdGlvbiIsImFuaW1TcGVlZCIsImFuY2hvckFjdGl2ZUNsYXNzIiwic2VjdGlvbkFjdGl2ZUNsYXNzIiwidXNlTmF0aXZlQW5jaG9yU2Nyb2xsaW5nIiwiaW5pdCIsInByb3RvdHlwZSIsImluaXRTdHJ1Y3R1cmUiLCJhdHRhY2hFdmVudHMiLCJpc0luaXQiLCJzZWxmIiwic2Nyb2xsQ29udGFpbmVyIiwiZmlsdGVyIiwiZ2V0QW5jaG9yVGFyZ2V0IiwibGVuZ3RoIiwiZ2V0SWQiLCJzdHIiLCJyZXBsYWNlIiwiZXJyIiwibGluayIsInRhcmdldElkIiwiYXR0ciIsImdldFRhcmdldE9mZnNldCIsImJsb2NrIiwiYmxvY2tPZmZzZXQiLCJwcm9wIiwiYW5jaG9yRGF0YSIsImkiLCJ0YXJnZXRCbG9jayIsImFuY2hvckRhdGFJdGVtIiwiZWFjaCIsImluZGV4IiwiaXRlbSIsImFkZCIsInB1c2giLCJyZXNpemVIYW5kbGVyIiwicmVjYWxjdWxhdGVPZmZzZXRzIiwic2Nyb2xsSGFuZGxlciIsInJlZnJlc2hBY3RpdmVDbGFzcyIsImNsaWNrSGFuZGxlciIsIm9uQ2xpY2siLCJkYXRhIiwiaGVpZ2h0Iiwib3V0ZXJIZWlnaHQiLCJ0b2dnbGVBY3RpdmVDbGFzcyIsImFuY2hvciIsInN0YXRlIiwidG9nZ2xlQ2xhc3MiLCJmb3VuZEZsYWciLCJjb250YWluZXJIZWlnaHQiLCJ2aWV3UG9ydEhlaWdodCIsImN1c3RvbVNjcm9sbEhhbmRsZXIiLCJjYWxsIiwic29ydCIsImEiLCJiIiwicmV2ZXJzZUluZGV4IiwiYW5jaG9yRWxlbWVudCIsInBhcmVudCIsImNhbGN1bGF0ZVNjcm9sbER1cmF0aW9uIiwiTWF0aCIsImFicyIsImN1cnJlbnRUYXJnZXQiLCJ0YXJnZXRPZmZzZXQiLCJtYWtlQ2FsbGJhY2siLCJuYW1lIiwiYXJncyIsIkFycmF5Iiwic2xpY2UiLCJhcmd1bWVudHMiLCJzaGlmdCIsImFwcGx5IiwiZGVzdHJveSIsImJsb2NrT3JPZmZzZXQiLCJkdXJhdGlvbk9yT3B0aW9ucyIsImhlYWRlciIsInNjcm9sbCIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiXSwibWFwcGluZ3MiOiJBQU1BLFNBQVNBLGNBQ1IsSUFBSUMsYUFBYSxDQUVoQkMsWUFBYSxZQUNiQyxZQUFhLEVBQ2JDLGNBQWUsU0FYakJDLE9BQU8sV0FDTkwsZ0JBa0JDLFNBQVNNLEVBQUdDLEdBRWIsSUFBSUMsRUFFSEMsRUFBYUMsRUFEYkMsRUFBTUwsRUFBRU0sUUFFUkMsRUFBZSxZQUFhQyxVQUFxQyxHQUF6QkEsU0FBU0MsYUFBb0IsUUFBVSw0QkFHaEYsU0FBU0MsRUFBU0MsRUFBUUMsRUFBU0MsR0FFbEMsSUFBSUMsRUFDQU4sU0FBU08sT0FFWEgsRUFEc0IsaUJBQVpBLEVBQ0EsQ0FDVEksU0FBVUosR0FHREEsR0FBVyxHQUV0QlYsRUFBT0EsR0FBUUYsRUFBRSxjQUNqQmMsRUFBY0YsRUFBUUssV0FBYWYsRUFNZCxpQkFBWFMsSUFDVkEsRUFBUyxDQUNSTyxJQUFL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bnQiOlsialF1ZXJ5KGZ1bmN0aW9uKCkge1xyXG5cdGluaXRBbmNob3JzKCk7XHJcbn0pO1xyXG5cclxuXHJcbi8vIGluaXRpYWxpemUgc21vb3RoIGFuY2hvciBsaW5rc1xyXG5mdW5jdGlvbiBpbml0QW5jaG9ycygpIHtcclxuXHRuZXcgU21vb3RoU2Nyb2xsKHtcclxuXHRcdC8vIGFuY2hvckxpbmtzOiAnYVtocmVmXj1cIiNcIl06bm90KFtocmVmPVwiI1wiXSknLFxyXG5cdFx0YW5jaG9yTGlua3M6ICcuYnRuLWJhY2snICxcclxuXHRcdGV4dHJhT2Zmc2V0OiAwLFxyXG5cdFx0d2hlZWxCZWhhdmlvcjogJ25vbmUnXHJcblx0fSk7XHJcbn1cclxuXHJcblxyXG4vKiFcclxuICogU21vb3RoU2Nyb2xsIG1vZHVsZVxyXG4gKi9cclxuOyhmdW5jdGlvbigkLCBleHBvcnRzKSB7XHJcblx0Ly8gcHJpdmF0ZSB2YXJpYWJsZXNcclxuXHR2YXIgcGFnZSxcclxuXHRcdHdpbiA9ICQod2luZG93KSxcclxuXHRcdGFjdGl2ZUJsb2NrLCBhY3RpdmVXaGVlbEhhbmRsZXIsXHJcblx0XHR3aGVlbEV2ZW50cyA9ICgnb253aGVlbCcgaW4gZG9jdW1lbnQgfHwgZG9jdW1lbnQuZG9jdW1lbnRNb2RlID49IDkgPyAnd2hlZWwnIDogJ21vdXNld2hlZWwgRE9NTW91c2VTY3JvbGwnKTtcclxuXHJcblx0Ly8gYW5pbWF0aW9uIGhhbmRsZXJzXHJcblx0ZnVuY3Rpb24gc2Nyb2xsVG8ob2Zmc2V0LCBvcHRpb25zLCBjYWxsYmFjaykge1xyXG5cdFx0Ly8gaW5pdGlhbGl6ZSB2YXJpYWJsZXNcclxuXHRcdHZhciBzY3JvbGxCbG9jaztcclxuXHRcdGlmIChkb2N1bWVudC5ib2R5KSB7XHJcblx0XHRcdGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ251bWJlcicpIHtcclxuXHRcdFx0XHRvcHRpb25zID0ge1xyXG5cdFx0XHRcdFx0ZHVyYXRpb246IG9wdGlvbnNcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG5cdFx0XHR9XHJcblx0XHRcdHBhZ2UgPSBwYWdlIHx8ICQoJ2h0bWwsIGJvZHknKTtcclxuXHRcdFx0c2Nyb2xsQmxvY2sgPSBvcHRpb25zLmNvbnRhaW5lciB8fCBwYWdlO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIHRyZWF0IHNpbmdsZSBudW1iZXIgYXMgc2Nyb2xsVG9wXHJcblx0XHRpZiAodHlwZW9mIG9mZnNldCA9PT0gJ251bWJlcicpIHtcclxuXHRcdFx0b2Zmc2V0ID0ge1xyXG5cdFx0XHRcdHRvcDogb2Zmc2V0XHJcblx0XHRcdH07XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gaGFuZGxlIG1vdXNld2hlZWwvdHJhY2twYWQgd2hpbGUgYW5pbWF0aW9uIGlzIGFjdGl2ZVxyXG5cdFx0aWYgKGFjdGl2ZUJsb2NrICYmIGFjdGl2ZVdoZWVsSGFuZGxlcikge1xyXG5cdFx0XHRhY3RpdmVCbG9jay5vZmYod2hlZWxFdmVudHMsIGFjdGl2ZVdoZWVsSGFuZGxlcik7XHJcblx0XHR9XHJcblx0XHRpZiAob3B0aW9ucy53aGVlbEJlaGF2aW9yICYmIG9wdGlvbnMud2hlZWxCZWhhdmlvciAhPT0gJ25vbmUnKSB7XHJcblx0XHRcdGFjdGl2ZVdoZWVsSGFuZGxlciA9IGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRpZiAob3B0aW9ucy53aGVlbEJlaGF2aW9yID09PSAnc3RvcCcpIHtcclxuXHRcdFx0XHRcdHNjcm9sbEJsb2NrLm9mZih3aGVlbEV2ZW50cywgYWN0aXZlV2hlZWxIYW5kbGVyKTtcclxuXHRcdFx0XHRcdHNjcm9sbEJsb2NrLnN0b3AoKTtcclxuXHRcdFx0XHR9IGVsc2UgaWYgKG9wdGlvbnMud2hlZWxCZWhhdmlvciA9PT0gJ2lnbm9yZScpIHtcclxuXHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH07XHJcblx0XHRcdGFjdGl2ZUJsb2NrID0gc2Nyb2xsQmxvY2sub24od2hlZWxFdmVudHMsIGFjdGl2ZVdoZWVsSGFuZGxlcik7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gc3RhcnQgc2Nyb2xsaW5nIGFuaW1hdGlvblxyXG5cdFx0c2Nyb2xsQmxvY2suc3RvcCgpLmFuaW1hdGUoe1xyXG5cdFx0XHRzY3JvbGxMZWZ0OiBvZmZzZXQubGVmdCxcclxuXHRcdFx0c2Nyb2xsVG9wOiBvZmZzZXQudG9wXHJcblx0XHR9LCBvcHRpb25zLmR1cmF0aW9uLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0aWYgKGFjdGl2ZVdoZWVsSGFuZGxlcikge1xyXG5cdFx0XHRcdHNjcm9sbEJsb2NrLm9mZih3aGVlbEV2ZW50cywgYWN0aXZlV2hlZWxIYW5kbGVyKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoJC5pc0Z1bmN0aW9uKGNhbGxiYWNrKSkge1xyXG5cdFx0XHRcdGNhbGxiYWNrKCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0Ly8gc21vb3RoIHNjcm9sbCBjb250c3RydWN0b3JcclxuXHRmdW5jdGlvbiBTbW9vdGhTY3JvbGwob3B0aW9ucykge1xyXG5cdFx0dGhpcy5vcHRpb25zID0gJC5leHRlbmQoe1xyXG5cdFx0XHRhbmNob3JMaW5rczogJ2FbaHJlZl49XCIjXCJdJywgLy8gc2VsZWN0b3Igb3IgalF1ZXJ5IG9iamVjdFxyXG5cdFx0XHRjb250YWluZXI6IG51bGwsIC8vIHNwZWNpZnkgY29udGFpbmVyIGZvciBzY3JvbGxpbmcgKGRlZmF1bHQgLSB3aG9sZSBwYWdlKVxyXG5cdFx0XHRleHRyYU9mZnNldDogbnVsbCwgLy8gZnVuY3Rpb24gb3IgZml4ZWQgbnVtYmVyXHJcblx0XHRcdGFjdGl2ZUNsYXNzZXM6IG51bGwsIC8vIG51bGwsIFwibGlua1wiLCBcInBhcmVudFwiXHJcblx0XHRcdGVhc2luZzogJ3N3aW5nJywgLy8gZWFzaW5nIG9mIHNjcm9sbGluZ1xyXG5cdFx0XHRhbmltTW9kZTogJ2R1cmF0aW9uJywgLy8gb3IgXCJzcGVlZFwiIG1vZGVcclxuXHRcdFx0YW5pbUR1cmF0aW9uOiA4MDAsIC8vIHRvdGFsIGR1cmF0aW9uIGZvciBzY3JvbGwgKGFueSBkaXN0YW5jZSlcclxuXHRcdFx0YW5pbVNwZWVkOiAxNTAwLCAvLyBwaXhlbHMgcGVyIHNlY29uZFxyXG5cdFx0XHRhbmNob3JBY3RpdmVDbGFzczogJ2FuY2hvci1hY3RpdmUnLFxyXG5cdFx0XHRzZWN0aW9uQWN0aXZlQ2xhc3M6ICdzZWN0aW9uLWFjdGl2ZScsXHJcblx0XHRcdHdoZWVsQmVoYXZpb3I6ICdzdG9wJywgLy8gXCJzdG9wXCIsIFwiaWdub3JlXCIgb3IgXCJub25lXCJcclxuXHRcdFx0dXNlTmF0aXZlQW5jaG9yU2Nyb2xsaW5nOiBmYWxzZSAvLyBkbyBub3QgaGFuZGxlIGNsaWNrIGluIGRldmljZXMgd2l0aCBuYXRpdmUgc21vb3RoIHNjcm9sbGluZ1xyXG5cdFx0fSwgb3B0aW9ucyk7XHJcblx0XHR0aGlzLmluaXQoKTtcclxuXHR9XHJcblx0U21vb3RoU2Nyb2xsLnByb3RvdHlwZSA9IHtcclxuXHRcdGluaXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR0aGlzLmluaXRTdHJ1Y3R1cmUoKTtcclxuXHRcdFx0dGhpcy5hdHRhY2hFdmVudHMoKTtcclxuXHRcdFx0dGhpcy5pc0luaXQgPSB0cnVlO1xyXG5cdFx0fSxcclxuXHRcdGluaXRTdHJ1Y3R1cmU6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG5cdFx0XHR0aGlzLmNvbnRhaW5lciA9IHRoaXMub3B0aW9ucy5jb250YWluZXIgPyAkKHRoaXMub3B0aW9ucy5jb250YWluZXIpIDogJCgnaHRtbCxib2R5Jyk7XHJcblx0XHRcdHRoaXMuc2Nyb2xsQ29udGFpbmVyID0gdGhpcy5vcHRpb25zLmNvbnRhaW5lciA/IHRoaXMuY29udGFpbmVyIDogd2luO1xyXG5cdFx0XHR0aGlzLmFuY2hvckxpbmtzID0galF1ZXJ5KHRoaXMub3B0aW9ucy5hbmNob3JMaW5rcykuZmlsdGVyKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBqUXVlcnkoc2VsZi5nZXRBbmNob3JUYXJnZXQoalF1ZXJ5KHRoaXMpKSkubGVuZ3RoO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblx0XHRnZXRJZDogZnVuY3Rpb24oc3RyKSB7XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0cmV0dXJuICcjJyArIHN0ci5yZXBsYWNlKC9eLio/KCN8JCkvLCAnJyk7XHJcblx0XHRcdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0Z2V0QW5jaG9yVGFyZ2V0OiBmdW5jdGlvbihsaW5rKSB7XHJcblx0XHRcdC8vIGdldCB0YXJnZXQgYmxvY2sgZnJvbSBsaW5rIGhyZWZcclxuXHRcdFx0dmFyIHRhcmdldElkID0gdGhpcy5nZXRJZCgkKGxpbmspLmF0dHIoJ2hyZWYnKSk7XHJcblx0XHRcdHJldHVybiAkKHRhcmdldElkLmxlbmd0aCA+IDEgPyB0YXJnZXRJZCA6ICdodG1sJyk7XHJcblx0XHR9LFxyXG5cdFx0Z2V0VGFyZ2V0T2Zmc2V0OiBmdW5jdGlvbihibG9jaykge1xyXG5cdFx0XHQvLyBnZXQgdGFyZ2V0IG9mZnNldFxyXG5cdFx0XHR2YXIgYmxvY2tPZmZzZXQgPSBibG9jay5vZmZzZXQoKS50b3A7XHJcblx0XHRcdGlmICh0aGlzLm9wdGlvbnMuY29udGFpbmVyKSB7XHJcblx0XHRcdFx0YmxvY2tPZmZzZXQgLT0gdGhpcy5jb250YWluZXIub2Zmc2V0KCkudG9wIC0gdGhpcy5jb250YWluZXIucHJvcCgnc2Nyb2xsVG9wJyk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIGhhbmRsZSBleHRyYSBvZmZzZXRcclxuXHRcdFx0aWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuZXh0cmFPZmZzZXQgPT09ICdudW1iZXInKSB7XHJcblx0XHRcdFx0YmxvY2tPZmZzZXQgLT0gdGhpcy5vcHRpb25zLmV4dHJhT2Zmc2V0O1xyXG5cdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuZXh0cmFPZmZzZXQgPT09ICdmdW5jdGlvbicpIHtcclxuXHRcdFx0XHRibG9ja09mZnNldCAtPSB0aGlzLm9wdGlvbnMuZXh0cmFPZmZzZXQoYmxvY2spO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0dG9wOiBibG9ja09mZnNldFxyXG5cdFx0XHR9O1xyXG5cdFx0fSxcclxuXHRcdGF0dGFjaEV2ZW50czogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciBzZWxmID0gdGhpcztcclxuXHJcblx0XHRcdC8vIGhhbmRsZSBhY3RpdmUgY2xhc3Nlc1xyXG5cdFx0XHRpZiAodGhpcy5vcHRpb25zLmFjdGl2ZUNsYXNzZXMgJiYgdGhpcy5hbmNob3JMaW5rcy5sZW5ndGgpIHtcclxuXHRcdFx0XHQvLyBjYWNoZSBzdHJ1Y3R1cmVcclxuXHRcdFx0XHR0aGlzLmFuY2hvckRhdGEgPSBbXTtcclxuXHJcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmFuY2hvckxpbmtzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHR2YXIgbGluayA9IGpRdWVyeSh0aGlzLmFuY2hvckxpbmtzW2ldKSxcclxuXHRcdFx0XHRcdFx0dGFyZ2V0QmxvY2sgPSBzZWxmLmdldEFuY2hvclRhcmdldChsaW5rKSxcclxuXHRcdFx0XHRcdFx0YW5jaG9yRGF0YUl0ZW0gPSBudWxsO1xyXG5cclxuXHRcdFx0XHRcdCQuZWFjaChzZWxmLmFuY2hvckRhdGEsIGZ1bmN0aW9uKGluZGV4LCBpdGVtKSB7XHJcblx0XHRcdFx0XHRcdGlmIChpdGVtLmJsb2NrWzBdID09PSB0YXJnZXRCbG9ja1swXSkge1xyXG5cdFx0XHRcdFx0XHRcdGFuY2hvckRhdGFJdGVtID0gaXRlbTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKGFuY2hvckRhdGFJdGVtKSB7XHJcblx0XHRcdFx0XHRcdGFuY2hvckRhdGFJdGVtLmxpbmsgPSBhbmNob3JEYXRhSXRlbS5saW5rLmFkZChsaW5rKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHNlbGYuYW5jaG9yRGF0YS5wdXNoKHtcclxuXHRcdFx0XHRcdFx0XHRsaW5rOiBsaW5rLFxyXG5cdFx0XHRcdFx0XHRcdGJsb2NrOiB0YXJnZXRCbG9ja1xyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9O1xyXG5cclxuXHRcdFx0XHQvLyBhZGQgYWRkaXRpb25hbCBldmVudCBoYW5kbGVyc1xyXG5cdFx0XHRcdHRoaXMucmVzaXplSGFuZGxlciA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0aWYgKCFzZWxmLmlzSW5pdCkgcmV0dXJuO1xyXG5cdFx0XHRcdFx0c2VsZi5yZWNhbGN1bGF0ZU9mZnNldHMoKTtcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRcdHRoaXMuc2Nyb2xsSGFuZGxlciA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0c2VsZi5yZWZyZXNoQWN0aXZlQ2xhc3MoKTtcclxuXHRcdFx0XHR9O1xyXG5cclxuXHRcdFx0XHR0aGlzLnJlY2FsY3VsYXRlT2Zmc2V0cygpO1xyXG5cdFx0XHRcdHRoaXMuc2Nyb2xsQ29udGFpbmVyLm9uKCdzY3JvbGwnLCB0aGlzLnNjcm9sbEhhbmRsZXIpO1xyXG5cdFx0XHRcdHdpbi5vbigncmVzaXplIGxvYWQgb3JpZW50YXRpb25jaGFuZ2UgcmVmcmVzaEFuY2hvcicsIHRoaXMucmVzaXplSGFuZGxlcik7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIGhhbmRsZSBjbGljayBldmVudFxyXG5cdFx0XHR0aGlzLmNsaWNrSGFuZGxlciA9IGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRzZWxmLm9uQ2xpY2soZSk7XHJcblx0XHRcdH07XHJcblx0XHRcdGlmICghdGhpcy5vcHRpb25zLnVzZU5hdGl2ZUFuY2hvclNjcm9sbGluZykge1xyXG5cdFx0XHRcdHRoaXMuYW5jaG9yTGlua3Mub24oJ2NsaWNrJywgdGhpcy5jbGlja0hhbmRsZXIpO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0cmVjYWxjdWxhdGVPZmZzZXRzOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyIHNlbGYgPSB0aGlzO1xyXG5cdFx0XHQkLmVhY2godGhpcy5hbmNob3JEYXRhLCBmdW5jdGlvbihpbmRleCwgZGF0YSkge1xyXG5cdFx0XHRcdGRhdGEub2Zmc2V0ID0gc2VsZi5nZXRUYXJnZXRPZmZzZXQoZGF0YS5ibG9jayk7XHJcblx0XHRcdFx0ZGF0YS5oZWlnaHQgPSBkYXRhLmJsb2NrLm91dGVySGVpZ2h0KCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHR0aGlzLnJlZnJlc2hBY3RpdmVDbGFzcygpO1xyXG5cdFx0fSxcclxuXHRcdHRvZ2dsZUFjdGl2ZUNsYXNzOiBmdW5jdGlvbihhbmNob3IsIGJsb2NrLCBzdGF0ZSkge1xyXG5cdFx0XHRhbmNob3IudG9nZ2xlQ2xhc3ModGhpcy5vcHRpb25zLmFuY2hvckFjdGl2ZUNsYXNzLCBzdGF0ZSk7XHJcblx0XHRcdGJsb2NrLnRvZ2dsZUNsYXNzKHRoaXMub3B0aW9ucy5zZWN0aW9uQWN0aXZlQ2xhc3MsIHN0YXRlKTtcclxuXHRcdH0sXHJcblx0XHRyZWZyZXNoQWN0aXZlQ2xhc3M6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgc2VsZiA9IHRoaXMsXHJcblx0XHRcdFx0Zm91bmRGbGFnID0gZmFsc2UsXHJcblx0XHRcdFx0Y29udGFpbmVySGVpZ2h0ID0gdGhpcy5jb250YWluZXIucHJvcCgnc2Nyb2xsSGVpZ2h0JyksXHJcblx0XHRcdFx0dmlld1BvcnRIZWlnaHQgPSB0aGlzLnNjcm9sbENvbnRhaW5lci5oZWlnaHQoKSxcclxuXHRcdFx0XHRzY3JvbGxUb3AgPSB0aGlzLm9wdGlvbnMuY29udGFpbmVyID8gdGhpcy5jb250YWluZXIucHJvcCgnc2Nyb2xsVG9wJykgOiB3aW4uc2Nyb2xsVG9wKCk7XHJcblxyXG5cdFx0XHQvLyB1c2VyIGZ1bmN0aW9uIGluc3RlYWQgb2YgZGVmYXVsdCBoYW5kbGVyXHJcblx0XHRcdGlmICh0aGlzLm9wdGlvbnMuY3VzdG9tU2Nyb2xsSGFuZGxlcikge1xyXG5cdFx0XHRcdHRoaXMub3B0aW9ucy5jdXN0b21TY3JvbGxIYW5kbGVyLmNhbGwodGhpcywgc2Nyb2xsVG9wLCB0aGlzLmFuY2hvckRhdGEpO1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gc29ydCBhbmNob3IgZGF0YSBieSBvZmZzZXRzXHJcblx0XHRcdHRoaXMuYW5jaG9yRGF0YS5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcclxuXHRcdFx0XHRyZXR1cm4gYS5vZmZzZXQudG9wIC0gYi5vZmZzZXQudG9wO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdC8vIGRlZmF1bHQgYWN0aXZlIGNsYXNzIGhhbmRsZXJcclxuXHRcdFx0JC5lYWNoKHRoaXMuYW5jaG9yRGF0YSwgZnVuY3Rpb24oaW5kZXgpIHtcclxuXHRcdFx0XHR2YXIgcmV2ZXJzZUluZGV4ID0gc2VsZi5hbmNob3JEYXRhLmxlbmd0aCAtIGluZGV4IC0gMSxcclxuXHRcdFx0XHRcdGRhdGEgPSBzZWxmLmFuY2hvckRhdGFbcmV2ZXJzZUluZGV4XSxcclxuXHRcdFx0XHRcdGFuY2hvckVsZW1lbnQgPSAoc2VsZi5vcHRpb25zLmFjdGl2ZUNsYXNzZXMgPT09ICdwYXJlbnQnID8gZGF0YS5saW5rLnBhcmVudCgpIDogZGF0YS5saW5rKTtcclxuXHJcblx0XHRcdFx0aWYgKHNjcm9sbFRvcCA+PSBjb250YWluZXJIZWlnaHQgLSB2aWV3UG9ydEhlaWdodCkge1xyXG5cdFx0XHRcdFx0Ly8gaGFuZGxlIGxhc3Qgc2VjdGlvblxyXG5cdFx0XHRcdFx0aWYgKHJldmVyc2VJbmRleCA9PT0gc2VsZi5hbmNob3JEYXRhLmxlbmd0aCAtIDEpIHtcclxuXHRcdFx0XHRcdFx0c2VsZi50b2dnbGVBY3RpdmVDbGFzcyhhbmNob3JFbGVtZW50LCBkYXRhLmJsb2NrLCB0cnVlKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHNlbGYudG9nZ2xlQWN0aXZlQ2xhc3MoYW5jaG9yRWxlbWVudCwgZGF0YS5ibG9jaywgZmFsc2UpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQvLyBoYW5kbGUgb3RoZXIgc2VjdGlvbnNcclxuXHRcdFx0XHRcdGlmICghZm91bmRGbGFnICYmIChzY3JvbGxUb3AgPj0gZGF0YS5vZmZzZXQudG9wIC0gMSB8fCByZXZlcnNlSW5kZXggPT09IDApKSB7XHJcblx0XHRcdFx0XHRcdGZvdW5kRmxhZyA9IHRydWU7XHJcblx0XHRcdFx0XHRcdHNlbGYudG9nZ2xlQWN0aXZlQ2xhc3MoYW5jaG9yRWxlbWVudCwgZGF0YS5ibG9jaywgdHJ1ZSk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRzZWxmLnRvZ2dsZUFjdGl2ZUNsYXNzKGFuY2hvckVsZW1lbnQsIGRhdGEuYmxvY2ssIGZhbHNlKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fSxcclxuXHRcdGNhbGN1bGF0ZVNjcm9sbER1cmF0aW9uOiBmdW5jdGlvbihvZmZzZXQpIHtcclxuXHRcdFx0dmFyIGRpc3RhbmNlO1xyXG5cdFx0XHRpZiAodGhpcy5vcHRpb25zLmFuaW1Nb2RlID09PSAnc3BlZWQnKSB7XHJcblx0XHRcdFx0ZGlzdGFuY2UgPSBNYXRoLmFicyh0aGlzLnNjcm9sbENvbnRhaW5lci5zY3JvbGxUb3AoKSAtIG9mZnNldC50b3ApO1xyXG5cdFx0XHRcdHJldHVybiAoZGlzdGFuY2UgLyB0aGlzLm9wdGlvbnMuYW5pbVNwZWVkKSAqIDEwMDA7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMub3B0aW9ucy5hbmltRHVyYXRpb247XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRvbkNsaWNrOiBmdW5jdGlvbihlKSB7XHJcblx0XHRcdHZhciB0YXJnZXRCbG9jayA9IHRoaXMuZ2V0QW5jaG9yVGFyZ2V0KGUuY3VycmVudFRhcmdldCksXHJcblx0XHRcdFx0dGFyZ2V0T2Zmc2V0ID0gdGhpcy5nZXRUYXJnZXRPZmZzZXQodGFyZ2V0QmxvY2spO1xyXG5cclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRzY3JvbGxUbyh0YXJnZXRPZmZzZXQsIHtcclxuXHRcdFx0XHRjb250YWluZXI6IHRoaXMuY29udGFpbmVyLFxyXG5cdFx0XHRcdHdoZWVsQmVoYXZpb3I6IHRoaXMub3B0aW9ucy53aGVlbEJlaGF2aW9yLFxyXG5cdFx0XHRcdGR1cmF0aW9uOiB0aGlzLmNhbGN1bGF0ZVNjcm9sbER1cmF0aW9uKHRhcmdldE9mZnNldClcclxuXHRcdFx0fSk7XHJcblx0XHRcdHRoaXMubWFrZUNhbGxiYWNrKCdvbkJlZm9yZVNjcm9sbCcsIGUuY3VycmVudFRhcmdldCk7XHJcblx0XHR9LFxyXG5cdFx0bWFrZUNhbGxiYWNrOiBmdW5jdGlvbihuYW1lKSB7XHJcblx0XHRcdGlmICh0eXBlb2YgdGhpcy5vcHRpb25zW25hbWVdID09PSAnZnVuY3Rpb24nKSB7XHJcblx0XHRcdFx0dmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xyXG5cdFx0XHRcdGFyZ3Muc2hpZnQoKTtcclxuXHRcdFx0XHR0aGlzLm9wdGlvbnNbbmFtZV0uYXBwbHkodGhpcywgYXJncyk7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRkZXN0cm95OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuXHRcdFx0dGhpcy5pc0luaXQgPSBmYWxzZTtcclxuXHRcdFx0aWYgKHRoaXMub3B0aW9ucy5hY3RpdmVDbGFzc2VzKSB7XHJcblx0XHRcdFx0d2luLm9mZigncmVzaXplIGxvYWQgb3JpZW50YXRpb25jaGFuZ2UgcmVmcmVzaEFuY2hvcicsIHRoaXMucmVzaXplSGFuZGxlcik7XHJcblx0XHRcdFx0dGhpcy5zY3JvbGxDb250YWluZXIub2ZmKCdzY3JvbGwnLCB0aGlzLnNjcm9sbEhhbmRsZXIpO1xyXG5cdFx0XHRcdCQuZWFjaCh0aGlzLmFuY2hvckRhdGEsIGZ1bmN0aW9uKGluZGV4KSB7XHJcblx0XHRcdFx0XHR2YXIgcmV2ZXJzZUluZGV4ID0gc2VsZi5hbmNob3JEYXRhLmxlbmd0aCAtIGluZGV4IC0gMSxcclxuXHRcdFx0XHRcdFx0ZGF0YSA9IHNlbGYuYW5jaG9yRGF0YVtyZXZlcnNlSW5kZXhdLFxyXG5cdFx0XHRcdFx0XHRhbmNob3JFbGVtZW50ID0gKHNlbGYub3B0aW9ucy5hY3RpdmVDbGFzc2VzID09PSAncGFyZW50JyA/IGRhdGEubGluay5wYXJlbnQoKSA6IGRhdGEubGluayk7XHJcblxyXG5cdFx0XHRcdFx0c2VsZi50b2dnbGVBY3RpdmVDbGFzcyhhbmNob3JFbGVtZW50LCBkYXRhLmJsb2NrLCBmYWxzZSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5hbmNob3JMaW5rcy5vZmYoJ2NsaWNrJywgdGhpcy5jbGlja0hhbmRsZXIpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdC8vIHB1YmxpYyBBUElcclxuXHQkLmV4dGVuZChTbW9vdGhTY3JvbGwsIHtcclxuXHRcdHNjcm9sbFRvOiBmdW5jdGlvbihibG9ja09yT2Zmc2V0LCBkdXJhdGlvbk9yT3B0aW9ucywgY2FsbGJhY2spIHtcclxuXHRcdFx0c2Nyb2xsVG8oYmxvY2tPck9mZnNldCwgZHVyYXRpb25Pck9wdGlvbnMsIGNhbGxiYWNrKTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHJcblx0Ly8gZXhwb3J0IG1vZHVsZVxyXG5cdGV4cG9ydHMuU21vb3RoU2Nyb2xsID0gU21vb3RoU2Nyb2xsO1xyXG59KGpRdWVyeSwgdGhpcykpO1xyXG4kKGZ1bmN0aW9uKCkge1xyXG5cdCQoXCIubmF2LW9wZW5lclwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdCQoXCJib2R5XCIpLnRvZ2dsZUNsYXNzKFwibmF2LWFjdGl2ZVwiKTtcclxuXHR9KTtcclxufSk7XHJcbiQoZnVuY3Rpb24oKSB7XHJcbiAgICAvL2NhY2hlcyBhIGpRdWVyeSBvYmplY3QgY29udGFpbmluZyB0aGUgaGVhZGVyIGVsZW1lbnRcclxuICAgIHZhciBoZWFkZXIgPSAkKFwiYm9keVwiKTtcclxuICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIHNjcm9sbCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuXHJcbiAgICAgICAgaWYgKHNjcm9sbCA+IDApIHtcclxuICAgICAgICAgICAgaGVhZGVyLmFkZENsYXNzKFwic2Nyb2xsXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGhlYWRlci5yZW1vdmVDbGFzcyhcInNjcm9sbFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7Il19
