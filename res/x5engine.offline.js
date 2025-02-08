/*minified*/
!function(d,m){"use strict";function a(t,i){if("|All|"==i)return m.settings.imBlog.posts_ids;for(var e in m.settings.imBlog[t])if(e.replace(/[\s]{1}/g,"_")===i.replace(/[\s]{1}/g,"_"))return m.settings.imBlog[t][e]||[];return[]}d.extend(m,{imBlog:{separator:'<div class="imBlogSeparator"></div>\n',paginate:function(t,i,e,o){var s='<div class="imBlogPagination pagination-container">',n=m.l10n.get,a=Math.ceil(o/e),l=i/e+1;if(a<2)return"";0<i&&(s+='<a href="'+t+"start="+(i-e)+"&length="+e+'" class="page">'+n("cmn_pagination_prev")+"</a>");for(var r=!1,c=!1,g=1;g<=a;g++)a<7||1==g||g==a||l-1<=g&&g<=1+l?s+='<a class="page'+(g==l?" current":"")+'" href="'+t+"start="+e*(g-1)+"&length="+e+'">'+g+"</a>":g<l-1&&!r?(s+='<span class="dots-page">...</span>',r=!0):1+l<g&&!c&&(s+='<span class="dots-page">...</span>',c=!0);return i+e<o&&(s+='<a href="'+t+"start="+(i+e)+"&length="+e+'" class="page">'+n("cmn_pagination_next")+"</a>"),s+="</div>"},showPost:function(t,i,e){i=i||0;var o="",s=m.l10n.get,n=m.imBlog.isBlogSection(),a=m.settings.imBlog,l=a.posts[t];if(l){if(0!==i){var i=""!==l.cover?'<div id="imBlogPostCover_'+t+'" class="imBlogPostCover"></div>':"";if("covertitlecontents"==a.article_type&&(o+=i),o=o+("<header><"+l.title_heading_tag+' id="imPgTitle" style="display: block;">'+l.title+"</"+l.title_heading_tag+"></header>")+'<div class="imBreadcrumb" style="display: block;">',""==l.author&&""==l.category||(o+=s("blog_published")+" ",""!=l.author&&(o+=s("blog_by")+' <a href="?author='+l.author.replace(/[\s]{1}/g,"_")+'"><strong> '+l.author+" </strong></a> "),""!=l.category&&(o+=s("blog_in")+' <a href="?category='+l.category.replace(/[\s]{1}/g,"_")+'">'+l.category+"</a> "),o+="&middot; "),o+=l.timestampExt,0<l.tag.length){o+="<br />Tags: ";for(var r=[],c=0;c<l.tag.length;c++)r.push('<a href="?tag='+l.tag[c]+'">'+l.tag[c]+"</a>");o+=r.join(",&nbsp;")}if(o+="</div>","titlecovercontents"==a.article_type&&(o+=i),o=o+'<div class="imBlogPostBody">'+l.body,("media"in l||"slideshow"in l)&&(o+='<div class="imBlogMedia">',"media"in l&&l.mediahtml&&(o+=l.mediahtml),"slideshow"in l&&l.slideshow&&(o+=l.slideshow),o+="</div>"),0<l.sources.length){for(var o=(o+='<div class="imBlogSources">')+("<b>"+s("blog_sources")+":</b><br />")+"<ul>",g=0;g<l.sources.length;g++)o+="<li>"+l.sources[g]+"</li>";o+="</ul></div>"}o+="<br /><br /></div>",l.comments&&("wsx5"==a.comments_source?(i=m.imBlog,o="stars"!=a.comment_type?(o=o+'<div class="topic-container topic-comments">\t<div class="topic-summary no-review '+("comment"==a.comment_type?"comments":"comments-and-star")+'">',o="comment"!=a.comment_type?(o=(o+=i.getTopicZeroAverage())+i.getTopicBars())+i.getTopicAddReviewHtml():(o+=i.getTopicTotalReview())+i.getTopicAddReviewHtml()+'<div class="topic-space"><div class="fill"></div></div>',o=(o=(o=(o+='</div>\t<div class="topic-form">\t\t<form id="blogComment" class="comments-and-ratings-topic-form" action="#">\t\t\t<div class="topic-form-row">\t\t\t\t<div class="topic-form-item">')+'\t\t\t\t\t<label for="form_name">'+s("blog_name")+'*</label> <input type="text" id="form_name" name="name" class="mandatory" />\t\t\t\t</div>\t\t\t\t<div class="topic-form-item second-column">')+'\t\t\t\t\t<label for="form_url">'+s("blog_website")+'</label> <input type="text" id="form_url" name="url" />\t\t\t\t</div>\t\t\t</div>\t\t\t<div class="topic-form-row">\t\t\t\t<div class="topic-form-item">')+'\t\t\t\t\t<label for="form_email">'+s("blog_email")+'*</label> <input type="text" id="form_email" name="email" class="mandatory valEmail" />\t\t\t\t</div>\t\t\t\t<div class="topic-form-item second-column empty-column">\t\t\t\t</div>\t\t\t</div>',o=(o=("comment"!=a.comment_type?(o+='\t\t<div class="topic-form-row">\t\t\t<div class="topic-form-item rating">')+'\t\t\t\t<label for="form_star_full">'+s("blog_rating")+'*</label>\t\t\t\t<span class="topic-star-container-big variable-star-rating">\t\t\t\t\t<span class="topic-star-fixer-big" style="width: 0;"></span>\t\t\t\t\t<input type="text" id="form_star_full" name="star-full" class="imfield mandatory" style="width: 160px; visibility: hidden;"/>\t\t\t\t</span>\t\t\t</div>\t\t</div>':o)+'\t\t\t<div class="topic-form-row">\t\t\t\t<div class="topic-form-item">')+'\t\t\t\t\t<label for="form_body">'+s("blog_message")+'*</label><textarea id="form_body" name="body" class="mandatory" maxlength="1500" style="width: 99%; height: 100px;"></textarea>\t\t\t\t</div>\t\t\t</div>',a.captcha&&(o+=a.captcha),(o+='\t\t\t<div class="topic-form-row">')+'\t\t\t\t<input type="button" value="'+s("comments_and_ratings_send_review")+'" class="imBlogCommentSubmitBtn" onclick="x5engine.imBlog.offlineCheck()"/>\t\t\t</div>\t\t</form>\t</div></div>'):(o=(o=(o+='<div style="text-align: center" class="topic-comments"><div class="topic-summary no-review star">')+i.getTopicZeroAverage())+i.getTopicBars()+'<div class="topic-star">\t<div style="text-align: center">\t\t<div class="box-star">')+'\t\t\t<div class="enter_rating">'+s("comments_and_ratings_enter_rating")+'</div>\t\t\t\t<div class="topic-star-container-big variable-star-rating">\t\t\t\t\t<span class="topic-star-fixer-big" style="width: 0%;"></span>\t\t\t\t</div>\t\t\t</div>\t\t</div>\t</div></div></div></div>'):o+=a.comments_code),n&&d("head title").empty().append(l.title_tag)}else o+='<article class="imBlogPostCard'+(""!==l.cardCover?" imBlogPostCardWithCover":"")+'">',""!==l.cardCover&&"topcontentsbottomcover"!=a.card_type&&(o+='<div class="imBlogPostWrapperCardCover"><img id="imBlogPostCardCover_'+t+'" class="imBlogPostCardCover" src="../'+(e?l.cover:l.cardCover)+'" alt="" onclick="window.location=\''+l.rel_url+"';\"/></div>"),a.show_card_title&&(o+='<header class="imBlogPostCardTitle"><h1><a href="'+l.rel_url+'">'+l.title+"</a></h1></header>"),a.show_card_category&&(o+='<div class="imBlogPostCardCategory"><a href="?category='+l.category.replace(/[\s]{1}/g,"_")+'">'+l.category+"</a></div>"),""!==l.cardCover&&"topcontentsbottomcover"==a.card_type&&(o+='<div class="imBlogPostWrapperCardCover"><img id="imBlogPostCardCover_'+t+'" class="imBlogPostCardCover" src="../'+(e?l.cover:l.cardCover)+'" alt="" onclick="window.location=\''+l.rel_url+"';\"/></div>"),a.show_card_description&&(o+='<div class="imBlogPostCardDescription">'+l.summary+'<div class="imBlogPostCardDescriptionFade"></div></div>'),(a.show_card_author||a.show_card_date)&&(o=o+'<div class="imBlogPostCardDetails">'+m.imBlog.separator,a.show_card_author&&(o+='<span class="imBlogPostCardAuthor"><a href="?author='+l.author.replace(/[\s]{1}/g,"_")+'">'+l.author+"</a></span>"),a.show_card_date&&(a.show_card_author&&""!=l.author&&(o+=" | "),o+='<span class="imBlogPostCardDate">'+l.timestamp+"</span>"),o+="</div>"),a.show_card_button&&(o+='<div class="imBlogPostCardButton"><a href="'+l.rel_url+'">'+s("blog_read_all")+"</a></div>"),o+="</article>";return o}},getTopicZeroAverage:function(){var t='<div class="topic-average">';return(t+='<div class="label-no-review">'+m.l10n.get("comments_and_ratings_no_reviews")+"</div>")+'<div class="fill"></div>'+"</div>"},getTopicBars:function(){for(var t='<div class="topic-bars">',i=5;0<i;i--)t=(t+='<div class="topic-bar">')+'<div class="bar-star-n">'+i+'&nbsp; <span class="topic-star-fixer-small star"></span></div>\n<div class="bar-progress"><span style="width: 0%;"></span></div>\n<div class="bar-total">0</div>\n</div>\n';return t=t+'<div class="fill"></div>'+"</div>"},getTopicAddReviewHtml:function(){var t='<div class="topic-add-review">';return(t+='<input type="button" class="topic-add-review-btn" value="'+m.l10n.get("comments_and_ratings_add_review")+'" />')+'<div class="fill"></div>'+"</div>"},getTopicTotalReview:function(){var t='<div class="topic-total-review">';return t+'<div class="topic-review-c">'+'<div class="topic-number-review">0</div>'+('<div class="label-review">'+m.l10n.get("comments_and_ratings_label_reviews")+"</div>")+'<div class="fill"></div>'+"</div>"+"</div>"},showPosts:function(t,i,e){var o=t.length<i+e?t.length:i+e;if(!(i>=t.length||o<=i)){var e=m.utils.getParam,e=null==e("category")&&null==e("author")&&null==e("tag")&&null==e("month")&&null==e("search"),s="";if(e&&"card"==m.settings.imBlog.highlight_mode){s+='<div class="imBlogHighlightedCards">';for(var n=i;n<Math.min(m.settings.imBlog.highlighted_count,o);n++)s+=m.imBlog.showPost(t[n],0,!0),i+=1;s+="</div>"}else if(e&&"slideshow"==m.settings.imBlog.highlight_mode&&0==i){s+='<div class="imBlogHighlightedCards slideshow">';for(n=0;n<Math.min(m.settings.imBlog.highlighted_count,t.length);n++)s+=m.imBlog.showPost(t[n],0,!0);1<m.settings.imBlog.highlighted_count&&(s+='<div class="imBlogHighlightedBefore">&laquo;</div><div class="imBlogHighlightedAfter">&raquo;</div><script>x5engine.boot.push(function () { x5engine.blogHighlightedSlideshow.start(); });<\/script>'),s+="</div>"}for(n=i;n<o;n++)s+=m.imBlog.showPost(t[n],0);return s=(s=(s=(s=(s=(s=(s=(s=(s=(s=(s=(s=(s=s+"<script>\n"+"\tx5engine.boot.push(function() {\n")+"\t\tif (!x5engine.responsive.isMobileDevice()) {\n"+"\t\t\tvar currentBrowser = x5engine.utils.getCurrentBrowser();\n")+"\t\t\t$('.imBlogPostCardDescription').css({'overflow': 'hidden'});\n"+"\t\t\t$('.imBlogPostCardDescription').hover(function() {\n")+'\t\t\t\t$(this).css("overflow", "auto");\n'+"\t\t\t\t$(this).children('.imBlogPostCardDescriptionFade').hide();\n")+"\t\t\t}, function() {\n"+'\t\t\t\t$(this).css("overflow", "hidden");\n')+"\t\t\t\t$(this).children('.imBlogPostCardDescriptionFade').show();\n"+"\t\t\t});\n")+'\t\t\tif (currentBrowser == "Microsoft Edge" || currentBrowser == "Microsoft Internet Explorer") {\n'+"\t\t\t\t$('.imBlogPostCardDescription').hover(function() {\n")+'\t\t\t\t\t$(this).css("overflow-y", "auto");\n'+"\t\t\t\t}, function() {\n")+'\t\t\t\t\t$(this).css("overflow-y", "hidden");\n'+"\t\t\t\t});\n")+"\t\t\t\t$('.imBlogPostCardDescription .imBlogPostCardDescriptionFade').remove();\n"+"\t\t\t}\n")+"\t\t}\n"+"\t\telse {\n")+"\t\t\t$('.imBlogPostCardDescription .imBlogPostCardDescriptionFade').remove();\n"+"\t\t}")+"\t});\n"+"<\/script>\n"}},offlineCheck:function(){m.imForm.validate("#blogComment",{type:"tip",showAll:!0})&&m.utils.showOfflineMessage(m.l10n.get("blog_offline_message"))},showCategory:function(t){var i,e="",o=m.settings.imBlog.posts_cat,s=m.utils.getParam("start"),n=m.utils.getParam("length"),a=[];for(i in o)"|All|"==t?a=a.concat(o[i]):i.replace(/[\s]{1}/g,"_")===t.replace(/[\s]{1}/g,"_")&&(a=o[i]);if(s=s?Math.max(s,0):0,n=n?Math.max(n,1):m.settings.imBlog.home_posts_number,a)return a.length?e=(e+=m.imBlog.showPosts(a,s,n))+m.imBlog.paginate("?category="+t.replace(/[\s]{1}/g,"_")+"&",s,n,a.length):e+='<div class="imBlogEmpty">Empty category</div>',e},showAuthor:function(t){var i,e="",o=m.settings.imBlog.posts_author,s=m.utils.getParam("start"),n=m.utils.getParam("length"),a=[];for(i in o)"|All|"==t?a=a.concat(o[i]):i.replace(/[\s]{1}/g,"_")===t.replace(/[\s]{1}/g,"_")&&(a=o[i]);if(s=s?Math.max(s,0):0,n=n?Math.max(n,1):m.settings.imBlog.home_posts_number,a)return a.length?e=(e+=m.imBlog.showPosts(a,s,n))+m.imBlog.paginate("?author="+t.replace(/[\s]{1}/g,"_")+"&",s,n,a.length):e+='<div class="imBlogEmpty">No author\'s posts</div>',e},showMonth:function(t){var i="",e=m.settings.imBlog.posts_month[t],o=m.utils.getParam("start"),s=m.utils.getParam("length"),o=o?Math.max(o,0):0,s=s?Math.max(s,1):m.settings.imBlog.home_posts_number;if(e)return e.length?i=(i+=m.imBlog.showPosts(e,o,s))+m.imBlog.paginate("?month="+t+"&",o,s,e.length):i+='<div class="imBlogEmpty">Empty month</div>',i},showSearch:function(t){var i="",e=m.settings.imBlog.posts_ids,o=m.utils.getParam("start"),s=m.utils.getParam("length"),n=[],a=0,o=o?Math.max(o,0):0,s=s?Math.max(s,1):m.settings.imBlog.home_posts_number;if(e){if(e.length){for(a=0;a<e.length;a++){var l=m.settings.imBlog.posts[e[a]];-1==l.title.indexOf(t)&&-1==l.summary.indexOf(t)&&-1==l.body.indexOf(t)||n.push(l.id)}i=(i+=m.imBlog.showPosts(n,o,s))+m.imBlog.paginate("?search="+t+"&",o,s,n.length),0===n.length&&(i+='<div class="imBlogEmpty">Empty search</div>')}else i+='<div class="imBlogEmpty">Empty blog</div>';return i}},showLast:function(t){var i=m.settings.imBlog.posts_ids,e="",o=m.utils.getParam("start"),s=m.utils.getParam("length"),o=o?Math.max(o,0):0,s=s?Math.max(s,1):t;if(i)return i.length?e=(e+=m.imBlog.showPosts(i,o,s))+m.imBlog.paginate("?",o,s,i.length):e+='<div class="imBlogEmpty">Empty blog</div>',e},showTag:function(t){var i=m.settings.imBlog.posts_ids,e="",o=[],s=m.utils.getParam("start"),n=m.utils.getParam("length"),s=s?Math.max(s,0):0,n=n?Math.max(n,1):m.settings.imBlog.home_posts_number;if(i){if(i.length){for(var a=0;a<i.length;a++)for(var l=m.settings.imBlog.posts[i[a]].tag,r=0;r<l.length;r++)l[r]==t&&o.push(i[a]);e+=m.imBlog.showPosts(o,s,n)}else e+='<div class="imBlogEmpty">Empty blog</div>';return e}},show:function(){var t,i=m.imBlog,e=m.utils.getParam,o=m.settings.imBlog.posts_slug,s=d("#imBlogContent"),n=m.imBlog.isBlogSection();m.utils.isOnline()||(s.empty(),o[t=location.search.replace(/^[\?]+/gi,"")]||e("id")?(d("#imBlogPage").removeClass("imBlogHome").addClass("imBlogArticle"),s.replaceWith('<article id="imBlogContent"></article>'),s=d("#imBlogContent"),o[t]?s.append(i.showPost(o[t],1)):s.append(i.showPost(e("id"),1))):(d("#imBlogPage").removeClass("imBlogArticle").addClass("imBlogHome"),e("category")?s.append(i.showCategory(e("category"))):e("author")?s.append(i.showAuthor(e("author"))):e("tag")?s.append(i.showTag(e("tag"))):e("month")?s.append(i.showMonth(e("month"))):e("search")?s.append(i.showSearch(e("search"))):s.append(i.showLast(m.settings.imBlog.home_posts_number)),n&&d("head title").empty().append(m.settings.imBlog.title_tag)),m.topic({target:".topic-comments"}))},getPostIdsFromParams:function(){var t,i=m.utils.getParam,e=location.search.replace(/^[\?]+/gi,"");return m.settings.imBlog.posts_slug[e]?[m.settings.imBlog.posts_slug[e]]:i("id")?[i("id")]:(e=function(t){{if(t("category"))return a("posts_cat",t("category"));if(t("author"))return a("posts_author",t("author"));if(t("tag")){var i=[];if(o=m.settings.imBlog.posts_ids)for(var e=0;e<o.length;e++)!function(t,i){for(var e=0;e<t.tag.length;e++)if(t.tag[e]==i)return 1;return}(m.settings.imBlog.posts[o[e]],t("tag"))||i.push(o[e]);return i}if(t("month"))return a("posts_month",t("month"));if(t("search")){var o,i=[];if(o=m.settings.imBlog.posts_ids){var s=t("search");for(e=0;e<o.length;e++){var n=m.settings.imBlog.posts[o[e]];-1==n.title.indexOf(s)&&-1==n.summary.indexOf(s)&&-1==n.body.indexOf(s)||i.push(n.id)}}return i}}return m.settings.imBlog.posts_ids}(i),t=Math.max(i("start")||0,0),i=Math.max(i("length")||m.settings.imBlog.home_posts_number,1),e.slice(Math.min(t,e.length),Math.min(t+i,e.length)))},isBlogSection:function(){return"/blog"==window.location.pathname.substring(0,5)}}})}(_jq,x5engine),function(s,n){"use strict";s.extend(n,{offlineNotify:{NOTIFICATION_CLASS_NAME:"im-offline-notification",CONTAINER_ID_NAME:"imNotificationContainer",notificationCount:0,notify:function(t){var i={message:(t=s.extend(!0,{message:n.l10n.get("blog_offline_message"),level:"attention",notificationWidth:300,notificationTimeRemove:5e3,notificationDelay:500,marginBetweenNotification:10,category:null,color:null,elementClose:'<svg class="notificationClose" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1490 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z"/></svg>'},t)).message,level:t.level};n.offlineNotify.notificationCount++,0<s("#"+n.offlineNotify.CONTAINER_ID_NAME).length?null!==t.category&&0<s("#"+n.offlineNotify.CONTAINER_ID_NAME).find("[data-category='"+t.category+"']").length?n.offlineNotify.notificationCount--:n.offlineNotify.showNotificationTimeout(t,i):(n.offlineNotify.createContainer(),n.offlineNotify.showNotification(t,i))},createContainer:function(){s("<div id='"+n.offlineNotify.CONTAINER_ID_NAME+"' />").appendTo("body")},showNotificationTimeout:function(t,i){var e=this,i=(e.newNotification=i,t.notificationDelay);0<i?setTimeout(function(){n.offlineNotify.showNotification(t,e.newNotification)},n.offlineNotify.notificationCount*i):n.offlineNotify.showNotification(t,e.newNotification)},showNotification:function(t,i){var e=s("<div class='offline-notification-wrapper'/>"),o=s("<div class=' "+n.offlineNotify.NOTIFICATION_CLASS_NAME+" "+i.level+"'/>").css({marginLeft:t.notificationWidth+10+"px",marginTop:t.marginBetweenNotification+"px"}).append("<p>"+i.message+"</p>").appendTo("body");null!==t.color&&s(o).css("background-color",t.color),null!==t.category&&s(o).attr("data-category",t.category),s("<div class='close-notification'>"+t.elementClose+"</div>").click(function(){n.offlineNotify.close(o)}).appendTo(o);o.appendTo(e),s("#"+n.offlineNotify.CONTAINER_ID_NAME).prepend(e),setTimeout(function(){n.offlineNotify.removeNotification(o)},t.notificationTimeRemove)},close:function(t){n.offlineNotify.removeNotification(t)},removeNotification:function(t){s(t).addClass("im-notification-fade-out"),setTimeout(function(){s(t).parent().remove(),n.offlineNotify.notificationCount--,n.offlineNotify.notificationCount<1&&(s("#"+n.offlineNotify.CONTAINER_ID_NAME).remove(),n.offlineNotify.notificationCount=0)},500)}}})}(_jq,x5engine),function(c,g){"use strict";c.extend(!0,g,{responsive:{showOrderingPositions:function(a){var l=c("body"),r=c(window);a=c.extend(!0,{onObjectClick:null},a),c("[data-responsive-sequence-number]").each(function(){function t(){o=g.utils.offset(i),n.css({top:o.top,left:o.left,"z-index":g.settings.zIndex.sequenceNumbers,display:"none"===i.css("display")?"none":""}).outerWidth(i.innerWidth()).outerHeight(i.innerHeight())}var i=c(this),e=i.attr("data-responsive-sequence-number"),o=null,s=null,n=c('<div class="responsive-sequence-box"><div class="sequence-box-background"></div><div class="sequence-number-background"></div><div class="sequence-number">'+e+"</div></div>");c.isFunction(a.onObjectClick)&&n.click(a.onObjectClick),l.append(n),t(),r.on("resize.sequence-number",function(){clearTimeout(s),s=setTimeout(t,10)}),g.utils.onElementResize(this,function(){r.trigger("resize.sequence-number")},"responsive-sequence")})},hideOrderingPositions:function(){c(".responsive-sequence-box").remove(),c(window).off(".sequence-number")}}})}(_jq,x5engine),function(c,g){"use strict";c.extend(g.utils,{showEditingLayers:function(a){let l=c("body"),r=c(window);a=c.extend(!0,{onObjectClick:null},a),c("[data-object-id]").each(function(){let t=c(this);var i=t.attr("data-object-type");function e(){o=g.utils.offset(t),n.css({opacity:0,top:o.top,left:o.left,"z-index":g.settings.zIndex.overlayers,display:"none"===t.css("display")?"none":""}).outerWidth(t.innerWidth()).outerHeight(t.innerHeight()),n.hover(function(){n.css({opacity:1})},function(){n.css({opacity:0})})}let o=null,s=null,n=c('<div class="object-overlay-box"><div class="overlay-box-background"></div>'+(t.attr("data-object-type")?'<div class="object-icon '+i+'"></div>':"")+"</div>");c.isFunction(a.onObjectClick)&&n.click(function(){a.onObjectClick(t.attr("data-object-id"))}),l.append(n),e(),r.on("resize.overlay-box",function(){clearTimeout(s),s=setTimeout(e,10)}),g.utils.onElementResize(this,function(){r.trigger("resize.overlay-box")},"overlayers")})},hideEditingLayers:function(){c(".object-overlay-box").remove(),c(window).off(".overlay-box")},isOverlayMode:function(){var t=c(".object-overlay-box");return t&&0<t.length},offlineMessageTimeout:null,showOfflineMessage:function(i,t,e,o,s,n){if(g.utils.isOnline())return!1;var a={};try{a=JSON.parse(i),a=c.extend({message:"",level:"attention",color:null,category:escape(i),notificationDelay:500},a)}catch(t){a.message=i,void 0!==o&&(a.level=o),void 0!==e&&(a.color=e),a.category=void 0===s?escape(i):escape(s),void 0!==n&&(a.notificationDelay=n)}return g.offlineNotify.notify(a),!0}})}(_jq,x5engine);