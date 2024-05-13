/*******************************************************************************

    uBlock Origin Lite - a comprehensive, MV3-compliant content blocker
    Copyright (C) 2014-present Raymond Hill

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see {http://www.gnu.org/licenses/}.

    Home: https://github.com/gorhill/uBlock
*/

/* jshint esversion:11 */

'use strict';

// ruleset: irn-0

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\"section#left-side > aside > h4\",\"tasks\":[[\"has-text\",\"تبلیغات\"],[\"upward\",\"aside\"]]}"],["{\"selector\":\"div.panel\",\"tasks\":[[\"has\",{\"selector\":\"> div#collapse_Linkestan\"}]]}","{\"selector\":\"div[style=\\\"text-align:right; margin:10px;\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> a[href=\\\"http://ads.aftab.cc\\\"]\"}]]}"],["{\"selector\":\".block > header > h2\",\"tasks\":[[\"has-text\",\"/وبگردی|نیازمندی|رپرتاژ/\"],[\"upward\",\".block\"]]}","{\"selector\":\".carousel-inner > .item > .row > .col-md-4 > article\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"aftabir.com/reportages\\\"]\"}],[\"upward\",\".col-md-4\"]]}","{\"selector\":\".carousel-inner > .item > .row > .col-md-8\",\"action\":[\"style\",\"width: 100% !important;\"],\"tasks\":[[\"has\",{\"selector\":\"article > a[href*=\\\"aftabir.com/news/view/\\\"]\"}]]}","{\"selector\":\".col-sm-3 > .block > .img\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"aftabir.com\\\"]\"}]]}]]}"],["{\"selector\":\".yn-bnr\",\"tasks\":[[\"upward\",\".custom\"]]}"],["{\"selector\":\".sidebar.col-4 > ul > li > h4\",\"tasks\":[[\"has-text\",\"رپورتاژ آگهی\"],[\"upward\",\"li\"]]}"],["{\"selector\":\".post-sticky\",\"tasks\":[[\"upward\",\".row\"]]}"],["{\"selector\":\"div.video-list\",\"tasks\":[[\"has\",{\"selector\":\"> div > div\",\"tasks\":[[\"has\",{\"selector\":\"span.ad\",\"tasks\":[[\"has-text\",\"AD\"]]}]]}]]}","{\"selector\":\"div[type=\\\"aparat\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> .link\"}]]}"],["{\"selector\":\"#yektanet-pos-2\",\"tasks\":[[\"upward\",\".boxsh\"]]}","{\"selector\":\".menu_left-side-ads\",\"tasks\":[[\"upward\",\".boxsh\"]]}","{\"selector\":\".menu_right-side-ads\",\"tasks\":[[\"upward\",\".boxsh\"]]}"],["{\"selector\":\".widget-asan > span > a\",\"tasks\":[[\"upward\",\".widget-asan\"]]}","{\"selector\":\"article.post.game\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"has\",{\"selector\":\".button, .post-cat\"}]]}]]}"],["{\"selector\":\".col-sm-12 span\",\"tasks\":[[\"has-text\",\"وبگردی\"],[\"upward\",\".col-sm-12\"]]}"],["{\"selector\":\"aside > div.sec_right > div.menu_box > div.margin > ul > li\",\"tasks\":[[\"has\",{\"selector\":\"> a[href*=\\\"bargozideha.com/reportage/\\\"]\"}]]}","{\"selector\":\"div[style]\",\"tasks\":[[\"has\",{\"selector\":\"> iframe[src=\\\"/ddd.html\\\"]\"}]]}"],["{\"selector\":\"#yt_spotlight3 .klatest-items-div > .modtitle\",\"tasks\":[[\"has-text\",\"تبلیغات متنی\"],[\"upward\",\".klatest-items-div\"]]}"],["{\"selector\":\"div.mp_box\",\"tasks\":[[\"has\",{\"selector\":\"> div.mpbb_ads a[target=\\\"_blank\\\"] > img[alt][title]\"}]]}"],["{\"selector\":\".benawa_contentarea .benawa_treeads\",\"tasks\":[[\"upward\",\".benawa_contentarea\"]]}"],["{\"selector\":\"#macy-container > article > .articlebox > a[href*=\\\"/blogsazan.com/mag/reportage\\\"]\",\"tasks\":[[\"upward\",\"article\"]]}","{\"selector\":\".blog_center_bar > .main_title\",\"tasks\":[[\"has-text\",\"مطالب پیشنهادی\"]]}","{\"selector\":\".blog_right_bar > .main_title\",\"tasks\":[[\"has-text\",\"آخرین مطالب مجله\"]]}","{\"selector\":\".blog_right_bar > .main_title\",\"tasks\":[[\"has-text\",\"آخرین ��طالب مجله\"],[\"spath\",\" + .main_content_free\"]]}","{\"selector\":\".main_content[style=\\\"border-radius:10px;\\\"] > div[style=\\\"padding: 10px; text-align:center; font-size:13px;\\\"] > a\",\"tasks\":[[\"upward\",\".main_content\"]]}"],["{\"selector\":\".widget\",\"tasks\":[[\"has\",{\"selector\":\".widgettitle\",\"tasks\":[[\"has-text\",\"/پیشنهاد|مفید/\"]]}]]}"],["{\"selector\":\".linkbox\",\"tasks\":[[\"upward\",4]]}"],["{\"selector\":\".bd-sidebar > div > .widget > .block-title\",\"tasks\":[[\"has-text\",\"تبلیغات\"],[\"upward\",\".widget\"]]}"],["{\"selector\":\"#primary\",\"tasks\":[[\"not\",{\"selector\":\"> .categoriesPageHead\",\"tasks\":[[\"has-text\",\"رپورتاژ آگهی\"]]}],[\"spath\",\".rowList > li\"],[\"has\",{\"selector\":\"a[href*=\\\"/promoted/\\\"]\"}]]}"],["{\"selector\":\"#commentSection article\",\"action\":[\"style\",\"border-radius: 12px !important; background-color: rgba(var(--color-hint-object-caution-rgb),.1);\"],\"tasks\":[[\"has\",{\"selector\":\"p[class*=\\\"text-caption-strong color-500\\\"]\"}]]}","{\"selector\":\".mb-4\",\"tasks\":[[\"has\",{\"selector\":\".mr-auto.text-caption.ai-center\"}]]}","{\"selector\":\".radius-large-lg\",\"tasks\":[[\"has\",{\"selector\":\"[class*=\\\"SponsoredBrandCarousel\\\"]\"}]]}","{\"selector\":\"[class*=\\\"ProductContent\\\"]\",\"tasks\":[[\"has\",{\"selector\":\".mr-auto.text-caption.ai-center\"}]]}","{\"selector\":\"[class*=\\\"VerticalProductCard\\\"]\",\"tasks\":[[\"has\",{\"selector\":\".mr-auto.text-caption.ai-center\"}],[\"upward\",\"[class^=\\\"product-list\\\"]\"]]}"],["{\"selector\":\"a\",\"tasks\":[[\"has\",{\"selector\":\"> img.ads_pic\"}]]}","{\"selector\":\"a\",\"tasks\":[[\"has\",{\"selector\":\"> img.shbanner\"}]]}","{\"selector\":\"div.widget_content\",\"tasks\":[[\"has\",{\"selector\":\"> ul.blog_list\"}]]}","{\"selector\":\"form#captch_form > input[name=\\\"_wp_http_referer\\\"]\",\"action\":[\"remove\",\"\"]}","{\"selector\":\"header.recent_news_wrapper > ul.news_text > li\",\"tasks\":[[\"has-text\",\"تبلیغ :\"]]}"],["{\"selector\":\".general-box\",\"tasks\":[[\"has\",{\"selector\":\".box-header\",\"tasks\":[[\"has-text\",\"وب گردی\"]]}]]}"],["{\"selector\":\"aside.lefts_sides\",\"tasks\":[[\"has\",{\"selector\":\"> div.txt_letfs > ul.ads_txtcv\"}]]}","{\"selector\":\"div.adsfix_box\",\"tasks\":[[\"has\",{\"selector\":\"> div[id^=\\\"mediaad\\\"]\"}]]}"],["{\"selector\":\".latestContents\",\"tasks\":[[\"has\",{\"selector\":\".bTitle\",\"tasks\":[[\"has-text\",\"وب گردی\"]]}]]}"],["{\"selector\":\".sidebar-home\",\"tasks\":[[\"has\",{\"selector\":\".ads_0\"}]]}"],["{\"selector\":\"section.box.list\",\"tasks\":[[\"has\",{\"selector\":\"> header > h2\",\"tasks\":[[\"has-text\",\"وبگردی\"]]}]]}"],["{\"selector\":\"div#sidebar300 > div.mywidget > div.titles\",\"tasks\":[[\"has-text\",\"تبلیغات\"],[\"spath\",\" + div.titline\"]]}","{\"selector\":\"div#sidebar300 > div.mywidget > div.titles\",\"tasks\":[[\"has-text\",\"تبلیغات\"]]}","{\"selector\":\"div.mywidget\",\"tasks\":[[\"has\",{\"selector\":\"> div.titles\",\"tasks\":[[\"has-text\",\"تبلیغات متنی\"]]}]]}"],["{\"selector\":\".footer-content .tag-cloud\",\"tasks\":[[\"upward\",\".foot-col\"]]}"],["{\"selector\":\"div#macy-container > article\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has\",{\"selector\":\"> div.articlebox > div.icons\",\"tasks\":[[\"has-text\",\"تبلیغات\"]]}]]}","{\"selector\":\"div.main_content[style=\\\"border-radius:10px;\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> div[style=\\\"padding: 10px; text-align:center; font-size:13px;\\\"]\"}]]}","{\"selector\":\"div.main_title\",\"tasks\":[[\"has\",{\"selector\":\"> span\",\"tasks\":[[\"has-text\",\"مطالب پیشنهادی از سراسر وب\"]]}]]}"],["{\"selector\":\".r_box\",\"tasks\":[[\"has\",{\"selector\":\"p\"}]]}"],["{\"selector\":\"div.g\",\"tasks\":[[\"has\",{\"selector\":\"> div.g-col > span[style]\",\"tasks\":[[\"has-text\",\"تبلیغات\"]]}],[\"has\",{\"selector\":\"div.post-link-box1\"}]]}","{\"selector\":\"div.sidebar > div.widget\",\"tasks\":[[\"has\",{\"selector\":\"> div.widget-head > h3\",\"tasks\":[[\"has-text\",\"تبلیغات\"]]}]]}"],["{\"selector\":\"p\",\"action\":[\"style\",\"position: absolute !important; top: -10000px !important;\"],\"tasks\":[[\"has\",{\"selector\":\"> a[href=\\\"https://www.farsroid.com/download-imo-android/\\\"] > img\"}]]}"],["{\"selector\":\"header.header-part div.banner\",\"tasks\":[[\"has\",{\"selector\":\"> div.d-table-cell > a.d-block > img\"}]]}"],["{\"selector\":\"table > tbody > tr > td > .dagh > strong\",\"tasks\":[[\"has-text\",\"اخبار تبلیغاتی\"]]}"],["{\"selector\":\"div.post\",\"tasks\":[[\"has\",{\"selector\":\"a[href^=\\\"https://www.tarhdokan.com/\\\"]\"}]]}","{\"selector\":\"div[id$=\\\"col-up\\\"]\",\"tasks\":[[\"has-text\",\"تبلیغات\"],[\"spath\",\" + div[id$=\\\"col-body\\\"]\"]]}","{\"selector\":\"div[id$=\\\"col-up\\\"]\",\"tasks\":[[\"has-text\",\"تبلیغات\"]]}"],["{\"selector\":\"aside.sidebar-right > div.box\",\"tasks\":[[\"has\",{\"selector\":\"> div.title > h4.title-text\",\"tasks\":[[\"has-text\",\"تبلیغات متنی\"]]}]]}","{\"selector\":\"div.box\",\"tasks\":[[\"has\",{\"selector\":\"> div.ads\"}]]}"],["{\"selector\":\"aside.sidebar .widget\",\"tasks\":[[\"has\",{\"selector\":\"a.external\"}]]}"],["{\"selector\":\"\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"matches-path\",\"/reportage\"]]}],[\"spath\",\" .main-term-4998\"]]}","{\"selector\":\".primary-sidebar-widget\",\"tasks\":[[\"has\",{\"selector\":\"a[rel*=\\\"sponsored\\\"]\"}]]}"],["{\"selector\":\"\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"matches-path\",\"/reportage\"]]}],[\"spath\",\" .main-term-4662\"]]}","{\"selector\":\".secondary-sidebar-widget\",\"tasks\":[[\"has\",{\"selector\":\"a[rel*=\\\"sponsored\\\"]\"}]]}"],["{\"selector\":\".m-ads\",\"tasks\":[[\"upward\",\".sidebar-left-item.content\"]]}"],["{\"selector\":\"div.CenterBlock\",\"tasks\":[[\"has\",{\"selector\":\"> div.Tadsb2\"}]]}"],["{\"selector\":\".listing-item-blog\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"/author/ads/\\\"]\"}]]}"],["{\"selector\":\"div.video-area > div > div.d-flex\",\"tasks\":[[\"has\",{\"selector\":\"> a[href^=\\\"/c/\\\"][aria-label=\\\"bebin\\\"] > img\"}]]}"],["{\"selector\":\"style\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has-text\",\"@media print\"]]}","{\"selector\":\"style\",\"tasks\":[[\"has-text\",\"@media print\"]]}"],["{\"selector\":\"li\",\"tasks\":[[\"has\",{\"selector\":\"[href^=\\\"https://jalebamooz.com/reportage/\\\"]\"}]]}"],["{\"selector\":\"div.type-resource-image\",\"tasks\":[[\"has\",{\"selector\":\"> a[href^=\\\"/advertisements/triggered/\\\"]\"}]]}"],["{\"selector\":\".rbox .rbox-h\",\"tasks\":[[\"has-text\",\"تبلیغات\"],[\"upward\",\".rbox\"]]}"],["{\"selector\":\".bahavadaran-news > .header-section\",\"tasks\":[[\"has-text\",\"دیگر رسانه ها\"]]}"],["{\"selector\":\"[onclick^=\\\"sendBannerDataLayer\\\"]\",\"action\":[\"remove-attr\",\"onclick\"]}","{\"selector\":\"[onclick^=\\\"sendCardDataLayer\\\"]\",\"action\":[\"remove-attr\",\"onclick\"]}","{\"selector\":\"[onclick^=\\\"sendDataLayer\\\"]\",\"action\":[\"remove-attr\",\"onclick\"]}","{\"selector\":\"[onclick^=\\\"sendViewMoreDataLayer\\\"]\",\"action\":[\"remove-attr\",\"onclick\"]}"],["{\"selector\":\"section.other_news > header\",\"tasks\":[[\"has-text\",\"رپرتاژ\"],[\"spath\",\" + div\"]]}","{\"selector\":\"section.other_news > header\",\"tasks\":[[\"has-text\",\"رپرتاژ\"]]}"],["{\"selector\":\".footer_column > div > ul > li > a\",\"tasks\":[[\"has-text\",\"طراحی سایت\"]]}","{\"selector\":\".lnk > center > a > img[alt=\\\"ADS\\\"]\",\"tasks\":[[\"upward\",\"center\"]]}"],["{\"selector\":\"aside\",\"tasks\":[[\"has\",{\"selector\":\"aside > div > div > span\",\"tasks\":[[\"has-text\",\"تبلیغ\"]]}]]}"],["{\"selector\":\"section.adBox\",\"tasks\":[[\"has\",{\"selector\":\"> div.row > div > a[rel$=\\\"sponsored\\\"]\"}]]}"],["{\"selector\":\".sidebar_item > .sidebar_item__inner > .sidebar_item__title\",\"tasks\":[[\"has-text\",\"تبلیغات متنی\"],[\"upward\",\".sidebar_item\"]]}"],["{\"selector\":\"aside#left > .box > .title\",\"tasks\":[[\"has-text\",\"تبلیغات\"],[\"upward\",\".box\"]]}","{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"pa_vc_url\"]]}"],["{\"selector\":\"div.box\",\"tasks\":[[\"has\",{\"selector\":\"img[alt=\\\"icon_ads\\\"]\"}]]}","{\"selector\":\"div.col-xs-36.col-md-24\",\"action\":[\"style\",\"width: 83% !important;\"],\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"has\",{\"selector\":\".gutter_xs\"}]]}]]}"],["{\"selector\":\"div.up-ad\",\"tasks\":[[\"has\",{\"selector\":\"div.ad-wrapper\"}]]}"],["{\"selector\":\"#p30konkor-ads-p div\",\"tasks\":[[\"has\",{\"selector\":\"p > a[rel]\"}],[\"not\",{\"selector\":\"\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"p30konkor.com\\\"]\"}]]}]]}","{\"selector\":\".widget\",\"tasks\":[[\"has\",{\"selector\":\".h-text\",\"tasks\":[[\"has-text\",\"لینک های پیشنهادی\"]]}]]}"],["{\"selector\":\".right-sidebar > aside > .tit-side\",\"tasks\":[[\"has-text\",\"لینک های مفید\"],[\"upward\",\"aside\"]]}"],["{\"selector\":\".dinu\",\"tasks\":[[\"upward\",\".widget\"]]}"],["{\"selector\":\".box\",\"tasks\":[[\"has\",{\"selector\":\"header\",\"tasks\":[[\"has-text\",\"مفید\"]]}]]}"],["{\"selector\":\".widget > h3\",\"tasks\":[[\"has-text\",\"مطالب مفید\"],[\"upward\",\".widget\"]]}"],["{\"selector\":\".GSBlock > div > .title > h3\",\"tasks\":[[\"has-text\",\"لینک های ویژه\"],[\"upward\",\".GSBlock\"]]}","{\"selector\":\".GSLiveTab > .tab_container1 > #tab3 > h2\",\"tasks\":[[\"has-text\",\"مقالات\"],[\"upward\",\".GSLiveTab\"]]}","{\"selector\":\".OpenTable > div > center > a[rel=\\\"nofollow\\\"] > .img-responsive\",\"tasks\":[[\"upward\",\".OpenTable\"]]}","{\"selector\":\".OpenTable > h2\",\"tasks\":[[\"has-text\",\"مقالات\"],[\"upward\",\".OpenTable\"]]}"],["{\"selector\":\"div[style=\\\"margin-bottom:10px\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> .txt_adv_content\"}]]}"],["{\"selector\":\"\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"matches-path\",\"/fa/news/pr\"]]}],[\"spath\",\" .items-row\"],[\"has\",{\"selector\":\".sazitem_imgcat\",\"tasks\":[[\"has-text\",\"رپورتاژ آگهی\"]]}]]}"],["{\"selector\":\".widget\",\"tasks\":[[\"has\",{\"selector\":\".widget_title\",\"tasks\":[[\"has-text\",\"پیوند\"]]}]]}"],["{\"selector\":\"main.mainV2 div\",\"tasks\":[[\"has\",{\"selector\":\"> section > a > div > div > span\",\"tasks\":[[\"has-text\",\"تبلیغات\"]]}]]}","{\"selector\":\"main.mainV2 div\",\"tasks\":[[\"has\",{\"selector\":\"> section > div > div > h2 > p\",\"tasks\":[[\"has-text\",\"/^Ad$/\"]]}]]}"],["{\"selector\":\"div.ecbox\",\"tasks\":[[\"has\",{\"selector\":\"div.ads_text, div.text-ads\"}]]}","{\"selector\":\"div.ecbox2\",\"tasks\":[[\"has\",{\"selector\":\"> div.ec_body2 > div.adswrapper\"}]]}"],["{\"selector\":\"input.filter\",\"action\":[\"remove-attr\",\"disabled\"]}","{\"selector\":\"input.filter\",\"action\":[\"remove-class\",\"filter\"]}"],["{\"selector\":\"style\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has-text\",\"user-select\"]]}"],["{\"selector\":\"style\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has-text\",\"wccp\"]]}"],["{\"selector\":\"div.col-md-3 > .box.style-1 > .box-header\",\"tasks\":[[\"has-text\",\"/تبلیغات رپورتاژ|لوگو اسپانسر/\"],[\"upward\",\".box\"]]}"],["{\"selector\":\".column-side > .block > .block-title\",\"tasks\":[[\"has-text\",\"وبگردی\"],[\"upward\",\".block\"]]}"],["{\"selector\":\"\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"matches-path\",\"/category/website/reportage/\"]]}],[\"spath\",\" .box\"],[\"has-text\",\"رپورتاژ آگهی\"]]}"],["{\"selector\":\".col-xs-12 > article\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"/category/pr/\\\"]\"}]]}","{\"selector\":\".sidebar > .d-flex > aside > section > figure\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"ad.technews-iran.com/\\\"]\"}],[\"upward\",\".sidebar\"]]}"],["{\"selector\":\"\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"matches-path\",\"/tag/رپورتاژ-آگهی/\"]]}],[\"spath\",\" .posts-list > article.tag-8164 > .clearfix > a[class=\\\"title\\\"][href$=\\\"reportage/\\\"]\"],[\"upward\",\"article\"]]}","{\"selector\":\".widget > p > #KajAds_Panel\",\"tasks\":[[\"upward\",\".widget\"]]}"],["{\"selector\":\"div.buy_box > a.cheapest-seller-wrapper > div.online_seller div.online_badge\",\"tasks\":[[\"has-text\",\"آگهی\"],[\"upward\",\"div.buy_box\"]]}","{\"selector\":\"div.shop-card.seller-element\",\"tasks\":[[\"has\",{\"selector\":\"> div.shop-info > div#vijhe_small\"}]]}"],["{\"selector\":\"input[type=\\\"hidden\\\"]:is(input[name=\\\"usr_login\\\"], input[name=\\\"referer\\\"], input#usr_resolution, input#usr_os, input#usr_browser)\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"a[href^=\\\"/url/\\\"][target=\\\"_blank\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> img\"}]]}"],["{\"selector\":\"div.col-ms-36 > section\",\"tasks\":[[\"has\",{\"selector\":\"div.txt_adv_content\"}]]}","{\"selector\":\"div.row > section\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"/ads/redirect/\\\"]\"}]]}"],["{\"selector\":\"div.mnb\",\"tasks\":[[\"has\",{\"selector\":\"a[href^=\\\"/advertisements/triggered/\\\"]\"}]]}"],["{\"selector\":\"div.main > div.mainx1 > div\",\"tasks\":[[\"has\",{\"selector\":\"> span.side-title\",\"tasks\":[[\"has-text\",\"تبلیغات\"]]}]]}"],["{\"selector\":\"aside > .title\",\"tasks\":[[\"has-text\",\"تبلیغات\"],[\"upward\",\"aside\"]]}"],["{\"selector\":\".LeftSide > .TableOfContent > div[style=\\\"text-align:center;\\\"]\",\"tasks\":[[\"has-text\",\"صفحات مرتبط\"],[\"upward\",\".TableOfContent\"]]}"],["{\"selector\":\".part-content-wordpres > .title-section\",\"tasks\":[[\"has-text\",\"پست تبلیغاتی\"],[\"upward\",\".part-content-wordpres\"]]}","{\"selector\":\".small-tab-news > .sidebar-news > ul\",\"tasks\":[[\"has-text\",\"تبلیغات متنی\"],[\"upward\",\".small-tab-news\"]]}","{\"selector\":\"section.tabliqat-text > header\",\"tasks\":[[\"has-text\",\"تبلیغات متنی\"],[\"upward\",\"section.tabliqat-text\"]]}"],["{\"selector\":\"#site-footer .col-sm-4\",\"tasks\":[[\"has\",{\"selector\":\"a[rel=\\\"noopener\\\"][target=\\\"_blank\\\"]\"}]]}","{\"selector\":\".content-column\",\"tasks\":[[\"not\",{\"selector\":\"> .archive-title\",\"tasks\":[[\"has-text\",\"رپرتاژ تبلیغاتی\"]]}],[\"spath\",\" .item-inner\"],[\"has\",{\"selector\":\"a[href*=\\\"/pr/\\\"]\"}]]}","{\"selector\":\".eif\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"farnet.io\\\"]\"}]]}]]}"],["{\"selector\":\"aside.mt-5\",\"tasks\":[[\"has\",{\"selector\":\"> a[href^=\\\"https://l.vrgl.ir/r?l=http\\\"][target=\\\"_blank\\\"] img[alt=\\\"تبلیغات در ویرگول\\\"]\"}]]}"],["{\"selector\":\".skip-container p\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"1da.ir\\\"]\"}]]}],[\"has\",{\"selector\":\"img\"}]]}"],["{\"selector\":\".herald-ad\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"kurdsoft\\\"]\"}]]}],[\"not\",{\"selector\":\"\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"7ganj.ir\\\"]\"}]]}]]}","{\"selector\":\".herald-sidebar .widget\",\"tasks\":[[\"has\",{\"selector\":\".widget-title\",\"tasks\":[[\"has-text\",\"تبلیغات\"]]}],[\"spath\",\" p\"],[\"not\",{\"selector\":\"\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"kurdsoft\\\"]\"}]]}],[\"not\",{\"selector\":\"\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"7ganj.ir\\\"]\"}]]}]]}"],["{\"selector\":\"div#BodyMain > div#Body > div#Content > div[style] > div.Box\",\"tasks\":[[\"has\",{\"selector\":\"> div.CenterSmall > div.AdsBanerDiv\"}]]}"],["{\"selector\":\"input[id=\\\"PreparePrint\\\"]\",\"action\":[\"remove-attr\",\"disabled\"],\"tasks\":[[\"watch-attr\",[\"disabled\"]]]}"],["{\"selector\":\".widget > .widget-top\",\"tasks\":[[\"has-text\",\"آگهی متنی\"],[\"upward\",\".widget\"]]}"],["{\"selector\":\"div.ml-4.space-right-delt > div.bg-all-box\",\"tasks\":[[\"has\",{\"selector\":\"> div.yn-bnr\"}]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"vc_url\"]]}"],["{\"selector\":\"#sidebar .widget a[href*=\\\"faradars.org\\\"] > img[alt*=\\\"فرادرس\\\"]\",\"tasks\":[[\"upward\",\".widget\"]]}","{\"selector\":\"#sidebar .widget div[id^=\\\"kaprila_linktable\\\"]\",\"tasks\":[[\"upward\",\".widget\"]]}"],["{\"selector\":\"\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"matches-path\",\"/category/رپرتاژ/\"]]}],[\"spath\",\" article > footer > span.post-meta-cat\"],[\"has-text\",\"رپرتاژ\"],[\"upward\",\"article\"]]}","{\"selector\":\"aside > div > span > a.ani[target=\\\"_blank\\\"][title]\",\"tasks\":[[\"upward\",\"div\"]]}"],["{\"selector\":\".apktops-slider-section ul > li\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"has\",{\"selector\":\"a[href=\\\"https://t.me/+UgVXT9YqXOs0MQTy\\\"]\"}]]}]]}","{\"selector\":\".post-article > .content > .row .entry-content\",\"tasks\":[[\"has-text\",\"اسپاتیفای پرمیوم از APKTOPS\"],[\"upward\",\".post-article\"]]}","{\"selector\":\".spcontent\",\"tasks\":[[\"upward\",\".post\"]]}","{\"selector\":\"[id^=\\\"linkcat\\\"] > ul > li\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"apktops.ir\\\"]\"}]]}]]}"],["{\"selector\":\"\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"matches-path\",\"/category/رپرتاژ-آگهی\"]]}],[\"spath\",\" .archive-blog > article > figure > .entry-category\"],[\"has-text\",\"رپرتاژ آگهی\"],[\"upward\",\"article\"]]}"],["{\"selector\":\".page-body > .post:not(article) > .yn-bnr:empty\",\"tasks\":[[\"upward\",\".post\"]]}","{\"selector\":\".page-body > .post:not(article) > [id^=\\\"pos-article-\\\"]:empty\",\"tasks\":[[\"upward\",\".post\"]]}","{\"selector\":\".sidebar-right > .box > .title\",\"tasks\":[[\"has-text\",\"لینک های مفید\"],[\"upward\",\".box\"]]}"],["{\"selector\":\"section.text_type_holder\",\"tasks\":[[\"has\",{\"selector\":\"> header.header_section > h4\",\"tasks\":[[\"has-text\",\"تبلیغات متنی\"]]}]]}"],["{\"selector\":\"#sidebar > .block > h5\",\"tasks\":[[\"has-text\",\"لینک های متنی\"],[\"upward\",\".block\"]]}"],["{\"selector\":\"div[style*=\\\"position: fixed; right: 0px; bottom: 0px;\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> .close-fixedSd\"}]]}"],["{\"selector\":\"div.col-md-12 > div.sidebar-box\",\"tasks\":[[\"has\",{\"selector\":\"> div.row > div.text-center > a[target=\\\"_blank\\\"][title] > h4.text-dark[style]\"}]]}"],["{\"selector\":\"a.dl-btn\",\"tasks\":[[\"has\",{\"selector\":\"> span\",\"tasks\":[[\"has-text\",\"ads\"]]}]]}","{\"selector\":\"a[rel=\\\"nofollow\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> img[title=\\\"تبلیغات\\\"]\"}]]}"],["{\"selector\":\".slider-tab-ring\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"has\",{\"selector\":\"> *\",\"tasks\":[[\"has-text\",\"دیدگاه\"]]}]]}]]}"],["{\"selector\":\".main-term-none > .listing > .type-post > .item-inner > .featured > .term-badges\",\"tasks\":[[\"has-text\",\"رپورتاژ آگهی\"],[\"upward\",\".type-post\"]]}","{\"selector\":\".main-term-none > .listing > .type-post > .item-inner > .post-meta > .post-author-a > .author\",\"tasks\":[[\"has-text\",\"واحد تبلیغات\"],[\"upward\",\".type-post\"]]}"],["{\"selector\":\".linkbox > header\",\"tasks\":[[\"has-text\",\"تبلیغات متنی\"],[\"upward\",\".linkbox\"]]}"],["{\"selector\":\"div.textwidget\",\"tasks\":[[\"has\",{\"selector\":\"> div.parsi-ads\"}]]}"],["{\"selector\":\"section li\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"has\",{\"selector\":\"[href^=\\\"https://download1music.ir/\\\"]\"}]]}]]}"],["{\"selector\":\"#kaprila_downloadly_ir_side-2\",\"tasks\":[[\"upward\",\".g-cols\"]]}","{\"selector\":\"#kaprila_downloadly_ir_static-post\",\"tasks\":[[\"upward\",\".g-cols\"]]}","{\"selector\":\"#kaprila_downloadly_ir_top-side\",\"tasks\":[[\"upward\",\".g-cols\"]]}","{\"selector\":\"#kaprila_linktable\",\"tasks\":[[\"upward\",\".g-cols\"]]}","{\"selector\":\"#page-content > .wpb_row\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"faradars.org\\\"]\"}]]}","{\"selector\":\".postfixedafterpost\",\"tasks\":[[\"upward\",\".g-cols\"]]}"],["{\"selector\":\"\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"matches-path\",\"/رپورتاژ\"]]}],[\"spath\",\" .art-post > .head-post > .cat-post\"],[\"has-text\",\"رپورتاژ\"],[\"upward\",\".art-post\"]]}"],["{\"selector\":\"main > div\",\"tasks\":[[\"has\",{\"selector\":\"[href*=\\\"/advertising/\\\"]\"}]]}"],["{\"selector\":\".attention > header\",\"tasks\":[[\"has-text\",\"وبگردی\"],[\"upward\",\".attention\"]]}"],["{\"selector\":\".aside-inner > .widget-sidebar > .title\",\"tasks\":[[\"has-text\",\"/بنر شماره|تبلیغات متنی/\"],[\"upward\",\".widget-sidebar\"]]}"],["{\"selector\":\"div#player-container svg[width=\\\"48\\\"][height=\\\"48\\\"][viewBox=\\\"0 0 64 64\\\"] > g[opacity=\\\"0.6\\\"]\",\"tasks\":[[\"upward\",\"svg\"]]}"],["{\"selector\":\".widget > .widget_title\",\"tasks\":[[\"has-text\",\"پیوندهای مفید\"],[\"upward\",\".widget\"]]}"],["{\"selector\":\"div.col-md-12 > div.card\",\"tasks\":[[\"has\",{\"selector\":\"> a > img[src$=\\\".gif\\\"]\"}]]}"],["{\"selector\":\"div#sidebar > aside > section.widget_text\",\"tasks\":[[\"has\",{\"selector\":\"> a > h5\",\"tasks\":[[\"has-text\",\"تبلیغات\"]]}]]}"],["{\"selector\":\"a[target=\\\"_blank\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> img[src*=\\\"/Gif/\\\"][src$=\\\".gif\\\"]\"}]]}","{\"selector\":\"a[target=\\\"_blank\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> img[src*=\\\"/files/\\\"][src$=\\\".gif\\\"]\"}]]}"],["{\"selector\":\".sidebar > .box > .behtarinbacklink\",\"tasks\":[[\"upward\",\".box\"]]}"],["{\"selector\":\"#ads-container > .box > header\",\"tasks\":[[\"has-text\",\"وبگردی\"],[\"upward\",\".box\"]]}"],["{\"selector\":\"div.t3-contentwindows1\",\"tasks\":[[\"has\",{\"selector\":\"a[target=\\\"_blank\\\"] > img[src$=\\\".gif\\\"]\"}]]}"],["{\"selector\":\".box\",\"tasks\":[[\"has\",{\"selector\":\"header\",\"tasks\":[[\"has-text\",\"تبلیغات متنی\"]]}]]}"],["{\"selector\":\"div[class^=\\\"css-\\\"][dir=\\\"auto\\\"]\",\"tasks\":[[\"has-text\",\"بازارگاه\"],[\"spath\",\" + div[class^=\\\"css-\\\"]:empty + div[class^=\\\"css-\\\"]\"],[\"has\",{\"selector\":\"> div[class^=\\\"css-\\\"][style] > div[class^=\\\"css-\\\"]:empty + div[class^=\\\"css-\\\"][style] > div[style=\\\"width: 25%;\\\"] > div[tabindex=\\\"0\\\"][style=\\\"transition-duration: 0s;\\\"]\"}]]}","{\"selector\":\"div[class^=\\\"css-\\\"][dir=\\\"auto\\\"]\",\"tasks\":[[\"has-text\",\"بازارگاه\"]]}","{\"selector\":\"div[class^=\\\"css-\\\"][dir=\\\"auto\\\"][data-testid=\\\"favoritesSuperAppTitle\\\"] + div[class^=\\\"css-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> div[class^=\\\"css-\\\"] > div[class^=\\\"css-\\\"][style] > div[class^=\\\"css-\\\"][tabindex=\\\"0\\\"][style=\\\"transition-duration: 0s;\\\"]\"}]]}","{\"selector\":\"div[class^=\\\"css-\\\"][tabindex=\\\"0\\\"][style=\\\"transition-duration: 0s;\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> div[class^=\\\"css-\\\"] > div[class^=\\\"css-\\\"] > div[class^=\\\"css-\\\"][style] > div[class^=\\\"css-\\\"][dir=\\\"auto\\\"][data-testid=\\\"yourGoodMood\\\"]\"}]]}","{\"selector\":\"div[style]\",\"tasks\":[[\"has\",{\"selector\":\"> div[style] > div[style] > div[tabindex][role=\\\"link\\\"] > img[alt=\\\"Advertisement\\\"]\"}]]}"],["{\"selector\":\"div#column3 > table.sidea > tbody > tr\",\"tasks\":[[\"has\",{\"selector\":\"> td > div.mybox > h4\",\"tasks\":[[\"has-text\",\"تبلیغات متنی\"]]}]]}"],["{\"selector\":\"div.owl-item\",\"tasks\":[[\"has\",{\"selector\":\"> li[id^=\\\"ad\\\"]\"}]]}"],["{\"selector\":\"div.main > div.box\",\"tasks\":[[\"has\",{\"selector\":\"> p > a[href=\\\"http://botsaz.com/\\\"]\"}]]}","{\"selector\":\"div.sidebar > div.box\",\"tasks\":[[\"has\",{\"selector\":\"div.row\",\"tasks\":[[\"has-text\",\"تبلیغات\"]]}]]}"],["{\"selector\":\".aside_boxs > .title_nt_box\",\"tasks\":[[\"has-text\",\"تبلیغ\"],[\"upward\",\".aside_boxs\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"document.oncontextmenu=\"]]}","{\"selector\":\"style\",\"tasks\":[[\"has-text\",\"user-select\"]]}","{\"selector\":\"style[media=\\\"print\\\"]\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has-text\",\"display:none\"]]}","{\"selector\":\"style[media=\\\"print\\\"]\",\"tasks\":[[\"has-text\",\"display:none\"]]}"],["{\"selector\":\".side_left > .side > .title\",\"tasks\":[[\"has-text\",\"تبلیغات متنی\"],[\"upward\",\".side_left\"]]}"],["{\"selector\":\".entry\",\"tasks\":[[\"has\",{\"selector\":\".title\",\"tasks\":[[\"has-text\",\"تبلیغات\"]]}]]}"],["{\"selector\":\".sticky-column\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"modirnameh.ir\\\"]\"}]]}]]}"],["{\"selector\":\"div.col-12 div#ctl00_topModule1_pnlTop\",\"tasks\":[[\"has\",{\"selector\":\"> div.divleftmod > div.py-2 > strong\",\"tasks\":[[\"has-text\",\"جت سئو\"]]}]]}"],["{\"selector\":\".banneritem\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"/banners/click/\\\"]\"}]]}"],["{\"selector\":\"div[style]\",\"tasks\":[[\"has\",{\"selector\":\"> div.yn-bnr\"}]]}"],["{\"selector\":\".txt-box\",\"tasks\":[[\"has\",{\"selector\":\"> .txt_adv_content\"}]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"window.location=\"]]}"],["{\"selector\":\"div.side_left > div.side > div.title\",\"tasks\":[[\"has-text\",\"تبلیغات متنی\"],[\"upward\",\"div.side\"]]}"],["{\"selector\":\".post > .post__content > .post__category\",\"tasks\":[[\"has-text\",\"رپورتاژ آگهی\"],[\"upward\",\".post\"]]}"],["{\"selector\":\".sidbar > p > strong\",\"tasks\":[[\"has-text\",\"پیوندها\"],[\"upward\",\".sidbar\"]]}"],["{\"selector\":\"main > div.container-fluid.my-3\",\"tasks\":[[\"has\",{\"selector\":\"> div.row.mb-2 > div.col-lg-4 > a[target=\\\"_blank\\\"] > img.w-100[style=\\\"border-radius: 10px;\\\"]\"}]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"document.oncontextmenu =\"]]}"],["{\"selector\":\"section.sidebar-left-item\",\"tasks\":[[\"has\",{\"selector\":\"> div.custom-html-widget > p > a[target=\\\"_blank\\\"][rel=\\\"noopener\\\"] > img\"}]]}"],["{\"selector\":\"div.footer-block-1\",\"tasks\":[[\"has\",{\"selector\":\"> a[class^=\\\"text-ads\\\"]\"}]]}","{\"selector\":\"div.left-body\",\"tasks\":[[\"has\",{\"selector\":\"> div.left-title\",\"tasks\":[[\"has-text\",\"لینک دوستان\"]]}]]}","{\"selector\":\"div.left-body\",\"tasks\":[[\"has\",{\"selector\":\"> div.text div.text-ads\"}]]}","{\"selector\":\"div.right-body\",\"tasks\":[[\"has\",{\"selector\":\"> div.text div.adsr\"}]]}"],["{\"selector\":\"p\",\"tasks\":[[\"has\",{\"selector\":\"> a[href^=\\\"https://shirazsocial.com\\\"]\"}]]}"],["{\"selector\":\"aside.widget-area > div > div.sk-side\",\"tasks\":[[\"has\",{\"selector\":\"> div.sk-side-title > h2\",\"tasks\":[[\"has-text\",\"دانلود فیلم و سریال جدید\"]]}]]}","{\"selector\":\"aside.widget-area > div > div.sk-side\",\"tasks\":[[\"has\",{\"selector\":\"> div.sk-side-title > h2\",\"tasks\":[[\"has-text\",\"لوازم جانبی کامپیوتر و موبایل\"]]}]]}","{\"selector\":\"div.sk-side\",\"tasks\":[[\"has\",{\"selector\":\"> div.sk-side-body ul > li > a[href]:is([href=\\\"https://49tinymovie.site/\\\"], [href=\\\"https://zarfilm.com/\\\"], [href=\\\"https://anime-list.net/\\\"])\"}]]}"],["{\"selector\":\".box\",\"tasks\":[[\"has\",{\"selector\":\".top_title\",\"tasks\":[[\"has-text\",\"نیازمندیها\"]]}]]}","{\"selector\":\".film_box\",\"tasks\":[[\"has-text\",\"مدرسه آنلاین\"]]}","{\"selector\":\".stitle_box\",\"tasks\":[[\"has\",{\"selector\":\".top_title\",\"tasks\":[[\"has-text\",\"وب گردی\"]]}]]}"],["{\"selector\":\"section#RightPanel > div.RBC > div.CCTS\",\"tasks\":[[\"has-text\",\"تبلیغات متنی\"],[\"upward\",\"div.RBC\"]]}"],["{\"selector\":\"div.col3\",\"tasks\":[[\"has\",{\"selector\":\"div.txt_adv_content\"}]]}"],["{\"selector\":\".side1\",\"tasks\":[[\"has\",{\"selector\":\"a[title][rel=\\\"noopener noreferrer\\\"]\"}]]}"],["{\"selector\":\"#mostvisited\",\"tasks\":[[\"has\",{\"selector\":\".widget-title\",\"tasks\":[[\"has-text\",\"تبلیغات متنی\"]]}]]}","{\"selector\":\".content-container\",\"tasks\":[[\"has\",{\"selector\":\".ad-reportage\"}]]}","{\"selector\":\".square-ad\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"has\",{\"selector\":\"#featured-posts\"}]]}]]}"],["{\"selector\":\"aside.widget_text > div.aside_box_title\",\"tasks\":[[\"has-text\",\"لینک های ویژه\"],[\"upward\",\"aside.widget_text\"]]}"],["{\"selector\":\"\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"matches-path\",\"/author/d-reportages\"]]}],[\"spath\",\" ul#posts-container > li.post-item > .post-details > .post-meta > .author-meta\"],[\"has-text\",\"دپارتمان تبلیغات\"],[\"upward\",\"li.post-item\"]]}","{\"selector\":\".widget > .widget-title\",\"tasks\":[[\"has-text\",\"تبلیغات\"],[\"upward\",\".widget\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"bannersAsJson\"]]}"],["{\"selector\":\".form-inline\",\"tasks\":[[\"others\",\"\"]]}"],["{\"selector\":\"form[action^=\\\"link/topPageSubmit/\\\"], div#linkStr\",\"tasks\":[[\"others\",\"\"]]}"],["{\"selector\":\".col-md-12 > .title\",\"tasks\":[[\"has-text\",\"لینک دوستان\"]]}"],["{\"selector\":\".content_item\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"/category/ads/\\\"]\"}]]}"],["{\"selector\":\"div.sidebar-home\",\"tasks\":[[\"has\",{\"selector\":\"> div.wbox > strong\",\"tasks\":[[\"has-text\",\"تبلیغات\"]]}]]}"],["{\"selector\":\"article.fixedadv\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"has\",{\"selector\":\"> div.fixedadvcontent > a[href=\\\"https://www.youtube.com/c/Par30Game\\\"]\"}]]}]]}"],["{\"selector\":\"noscript\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".box-doc > .documentary-news-cnt > header\",\"tasks\":[[\"has-text\",\"بازرگانی\"],[\"upward\",\".box-doc\"]]}","{\"selector\":\".news-col-1 #rssbank\",\"tasks\":[[\"upward\",\".container\"]]}","{\"selector\":\".various-cnt > header\",\"tasks\":[[\"has-text\",\"بازرگانی\"],[\"upward\",\".various-cnt\"]]}"],["{\"selector\":\"#webgardi_list\",\"tasks\":[[\"upward\",\".section_cnt\"]]}"],["{\"selector\":\"li[id^=\\\"ad\\\"]\",\"tasks\":[[\"upward\",\"section.box\"]]}","{\"selector\":\"section.box ul > li.bklnk\",\"tasks\":[[\"upward\",\"section.box\"]]}"],["{\"selector\":\"[class=\\\"widget_text sidebar-box\\\"]\",\"tasks\":[[\"has-text\",\"تبلیغ\"]]}","{\"selector\":\"[class=\\\"widget_text sidebar-box\\\"]\",\"tasks\":[[\"has-text\",\"وبگردی\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"protoUrl\"]]}"],["{\"selector\":\"div.banner\",\"tasks\":[[\"has\",{\"selector\":\"> a > img\"}]]}"],["{\"selector\":\".widget > .section-heading > .h-text\",\"tasks\":[[\"has-text\",\"لینکستون\"],[\"upward\",\".widget\"]]}"],["{\"selector\":\"div.right-sidebar > aside\",\"tasks\":[[\"has\",{\"selector\":\"> div.tit-side\",\"tasks\":[[\"has-text\",\"پیوندهای داغ\"]]}]]}"],["{\"selector\":\"a[name^=\\\"Advertisement\\\"]\",\"tasks\":[[\"upward\",\".wb_element\"]]}"],["{\"selector\":\"aside.left > div.box > div.title\",\"tasks\":[[\"has-text\",\"تبلیغات\"],[\"upward\",\"div.box\"]]}"],["{\"selector\":\".cside1 > .hside2\",\"tasks\":[[\"has-text\",\"تبلیغات\"],[\"upward\",\".cside1\"]]}"]];

const hostnamesMap = new Map([["aftab.cc",1],["aftabir.com",2],["akharinnews.com",3],["alamto.com",4],["androidgozar.com",5],["aparat.com",6],["arga-mag.com",7],["asandl.com",8],["asriran.com",9],["bargozideha.com",10],["bazimag.com",11],["behmusic.com",12],["benawa.com",13],["blogsazan.com",14],["charbzaban.com",15],["chetor.com",16],["deltapayam.com",17],["digiato.com",18],["digikala.com",19],["dlfox.com",20],["donya-e-eqtesad.com",21],["doostihaa.com",22],["ecoiran.com",23],["eghtesademeli.com",24],["eghtesadonline.com",25],["elmefarda.com",26],["elmevarzesh.com",27],["eramblog.com",28],["etelanews.com",29],["farachart.com",30],["farsroid.com",31],["gamefa.com",32],["ghatreh.com",33],["graphiran.com",34],["harfetaze.com",35],["honarfardi.com",36],["idehalmag.com",37],["idehaltech.com",38],["iranidata.com",39],["irannaz.com",40],["itresan.com",41],["jabeh.com",42],["jafekri.com",43],["coffeeapps.ir",[43,100]],["sclinic.ir",[43,141]],["jalebamooz.com",44],["khabarfoori.com",45],["khabarpu.com",46],["khanefootball.com",47],["khanoumi.com",48],["khodrotak.com",49],["lordroid.com",50],["marzfun.com",51],["miniroid.com",52],["moderndl.com",53],["mybia4music.com",54],["niniban.com",55],["ninisite.com",56],["p30konkor.com",57],["par30media.com",58],["sakhtafzarmag.com",59],["salameno.com",60],["sariasan.com",61],["sarzamindownload.com",62],["sedayiran.com",63],["shahrsakhtafzar.com",64],["shereno.com",65],["sheypoor.com",66],["soorban.com",67],["takhfifan.com",68],["takmili.com",[69,70]],["kihanb.ir",[69,128]],["takskin.com",71],["tarafdari.com",72],["techfars.com",73],["technews-iran.com",74],["techrato.com",75],["torob.com",76],["uploadboy.com",77],["vajehyab.com",78],["vananews.com",79],["varandaz.com",80],["vazeh.com",81],["vipofilm.com",82],["zibamoon.com",83],["konkur.in",84],["farnet.io",85],["virgool.io",86],["1da.ir",87],["7ganj.ir",88],["aboutall.ir",89],["ac.ir",90],["amazing.ir",91],["androidify.ir",92],["androidparsi.ir",93],["dailymobile.ir",[93,101]],["tarfandha.org",93],["androidzoom.ir",94],["anzalweb.ir",95],["apktops.ir",96],["appreview.ir",97],["avaz-kurd.ir",98],["bartarinha.ir",99],["dana.ir",102],["darkroid.ir",103],["digiboy.ir",104],["digiro.ir",105],["dlrozaneh.ir",106],["download.ir",107],["download1music.ir",108],["downloadly.ir",109],["downloadsoftware.ir",110],["econews.ir",111],["entekhab.ir",112],["farsifilm.ir",113],["filmnet.ir",114],["filmsky.ir",115],["forsatnet.ir",116],["gamemods.ir",117],["games4online.ir",118],["gamesetup.ir",119],["hamshahrionline.ir",120],["iica.ir",121],["imna.ir",122],["my.irancell.ir",123],["iranjib.ir",124],["isna.ir",125],["kalakamuz.ir",126],["khodropluss.ir",127],["listen2music.ir",129],["mihand.ir",130],["modirnameh.ir",131],["mohandescenter.ir",132],["moviemag.ir",133],["musicdel.ir",134],["nabzefanavari.ir",135],["najiremix.ir",136],["nex11music.ir",137],["show-music.ir",137],["plaza.ir",138],["power-music.ir",139],["rbiran.ir",140],["silasdl.ir",142],["skinak.ir",143],["subf2m.ir",144],["subkade.ir",145],["tabnak.ir",146],["taknaz.ir",147],["tejaratemrouz.ir",148],["top90.ir",149],["toranji.ir",150],["uptrack.ir",151],["youc.ir",152],["zoomg.ir",153],["xip.li",154],["opizo.me",155],["androidina.net",156],["jeyran.net",157],["par30dl.net",158],["par30games.net",159],["pichak.net",160],["rokna.net",161],["55online.news",162],["saat24.news",163],["techna.news",164],["bandmoviez.one",165],["skyroom.online",166],["bazdeh.org",167],["texahang.org",168],["takvim.tj",169],["artmusics.top",170],["harmonydl.us",171]]);

const entitiesMap = new Map([["hamtamovie",0]]);

const exceptionsMap = new Map(undefined);

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
