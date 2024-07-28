/*******************************************************************************

    uBlock Origin Lite - a comprehensive, MV3-compliant content blocker
    Copyright (C) 2019-present Raymond Hill

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

// ruleset: vie-1

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssSpecificImports() {

/******************************************************************************/

const argsList = [".qc","#invideo_wrapper,\n.Ads,\n.mobile-catfixx",".pc-catfixx",".jw-logo","#ad-floating-right,\n.ad-floating-left","#sponsor-balloon,\n#top-banner-pc","#catfish",".container > div[style^=\"height: 228px\"]",".banner_site,\n.notify_auto,\n.sidebar_box_gray",".banner_top","#antiblocker,\n#antiblocker_underplayer","#footer_fixed_ads",".xx-ads",".ads-gg-top,\n.container + .col-xs-12.content_wrap,\n.content > .content > .content,\n.wrap-single > .pagination.text-center",".float-ck-center-lt","#custom_html-42","#popup-giua-man-hinh",".ad-container",".float-ck",".banner-sticky-footer-wrapper","#quangcaopc","#wap_bottombanner",".container.mt-1.d-none.d-lg-block,\n.menu-item-object-custom,\na.rlw-extra-i.py-3.flex-grow-1",".modal-backdrop.show",".align-items-center.justify-content-between.d-flex.col-12 > .d-lg-none.d-block",".sub-menu.d-none.d-lg-flex",".marquee-container",".fade.show",".company","div[id^=\"dnn_\"]","a[rel=\"nofollow\"]",".banner-link,\n.block-catfish.text-center.d-lg-none.d-block,\n.container > ul,\n.container.mt-1,\n.logo-cnt > .d-lg-none.d-block,\n.menu-cuoc-one88,\n.mt-5.d-lg-none.d-block.pb-2.text-center,\n.offer,\n.pl-lg-0.col-xl-4,\n.row.d-none,\n.widget-offers__list,\ndiv.d-lg-none.d-block:nth-of-type(3)","#match-child-1",".match-detail__offer",".sk_balloon",".offer__btn",".menu-top-nha-cai",".menu-cuoc-8xbet","#popup_banner_beta",".v4j-header > center","#quang-cao",".toogle-ads",".ads-container","#AgeModal","div.mt-3:nth-of-type(2),\ndiv.mt-3:nth-of-type(3)","#player + div[id]","#xs-addd0","#overlay",".adsMobile,\n.col-chat,\n.offer-rating.widget-offers__list",".dcmm-button-player.row",".adLogoPlayer",".sda-catfish",".sda-preload-popup,\n.sda-preload-popup-overlay","#adsbottom,\n.happy-under-player,\n.vailo-sticky,\n.vailo-under-navbar,\n.vailo-under-navbar-mobile","#ab_ctl,\n.bannerads",".banner-top","#bottomFixedDiv,\n#js_pup_navigation,\n#wAdList,\ntr[id^=\"word_\"]",".catfish-ck",".t_logo",".gnarty-offads","#fbox-background","#mobile-ads",".ads","a[href^=\"/cgi-bin/to.cgi\"]",".popup-container","#BaoMoi_HalfPage,\n.masthead-wrapper",".bm_B > div,\ndiv.bm_Ii",".monkey-content-duoicanbiet,\n.monkey-section-tinnoibat,\ndiv.monkey-qc",".list-dat-cuoc",".widget.widget_text","#text-14,\n.hocwp-ads",".bannerBox,\n.footerBanner,\ncenter > [href*=\"tlink.vn\"]",".mb-4 > [style=\"min-height: 350px;\"]",".fixed","a[rel=\"noopener noreferrer\"]",".widget-wrap.widget_text","#shoppe_aff_button",".adsbygoogle","#custom_html-7",".div_box_adv",".alldiv ~ div[class]","div.box-aside","[id$=\"bnr\"]",".ad-pin-right-bottom",".adv",".top-right",".line-ads",".btn-od",".btn-odds",".footer-banner",".d-lg-flex.d-none.p-0.company.flex-1.table","#home_header",".popup",".banner-ads,\ndiv#recent-content:nth-of-type(1)",".ad-manager-forum-list-bottom,\n.ad-manager-forum-list-top,\n.ad-manager-header,\n.ad-manager-thread-view-bottom,\n.ad-manager-thread-view-top,\ndiv[style=\"margin:6px 0px 6px 0px\"]",".google-auto-placed","#topbanner",".btn_small_fix_container",".ads-home-feed",".left-slider",".text-center.adsense",".banner-bot-mobile,\n.banner-top-mobile",".preload","[href^=\"https://shope.ee\"]","#latest-censored-videos > .row > div.pb-3.col:nth-of-type(1),\n.v3sb-box",".cat-fish.a-play,\n.overlay",".anhbn-qc",".ezo_ad",".ezoic-ad",".advbox","div[style=\"padding: 0px; margin: 10px 0 0 0 ; width: 100%;text-align: center;min-height: 280px;\"],\ndiv[style=\"width: 100%; min-height: 240px; text-align: center;\"],\ndiv[style=\"width: 100%; min-height: 90px; text-align: center;\"],\ndiv[style=\"width: 100%;text-align: center;min-height: 280px;\"]","#countdown,\n.bottom_cnt_ad,\n.tp_ads_incontent,\ndiv.ad_separator",".movie-banner","#js-read-body > .text-center.pb-3,\n#js-read__body + .mt-3,\n.nh-read__alert,\n.tpm-unit,\n[href$=\"/goout/lazada\"],\nsection.nh-section:nth-of-type(5)","div[class*=\"ads\"]",".ads-embed",".mp-adz","#floating_ads_bottom_textcss_container,\n.module_home_ads,\n.module_single_ads","#mp-adx-b32","[class^=\"box_adv_ele\"]","#tdi_129","#wap_bottombanner1",".my-banner",".code-block","#IMAPointernctPlayer,\n.adv_home_300_250,\n.nqc-zone","#itro_opaco",".i9bet","#mobile_content_bottom,\n.BanerTop100,\n.adv-300-right",".popUpBannerBox","a[target=\"_blank\"][rel=\"nofollow noopener\"]","#mobile_content_top,\n#p-GMH",".sticky-footer",".shadow-card + .mt-2","#adsposttop","#adrighttop",".adbox","#divExoLayerWrapper",".banner-catfish-bottom","#f186fb23a33995d91ce3c2212189178c8",".w1e48c4420b7073bc11916c6c1de226bb","#scriptDiv","#container-ads","a#banner",".banner",".pc_catfix_adv",".stream-item","#footer-widget-area",".box,\n.pum",".truct-catfish,\n.truct-widget","div#adsChapterTop","#ad_info_top,\n#catfishAd,\ndiv#ad_info",".footer-info",".v4j-header.v4j-content",".ai-viewport-1","#ads_preload1,\n#ads_preload2,\n#catfish-adv,\n.widget_text.text-center + .text-center","[class*=\"_banner\"]",".ads-menu-item,\n.dcmm-button-player-item,\n.divdatcuoc",".show-ads-banner,\n.widget","a[target=\"_blank\"][rel=\"dofollow\"]",".item-qc",".Header_topBanner__1xD-2,\n.styles_bannerInArticleWrapper__rPPJH,\n.styles_topBanner__NL_gW","#BigBanner,\n.ads_position",".ads_txt,\n[href=\"https://tailieugiaovien.com.vn/\"]","#download_appnew,\n.box-most-viewed.box-course.box-slide,\ndiv.ads_ads,\nh3.sub-title,\nul.list:nth-of-type(2)",".adx1","div[class^=\"adbox\"]","a.news__item--action:nth-of-type(2)","#article > .pt-3.text-centers,\n.text-muted","#balloon,\n.affiliate,\n.player-midpoint-progress",".banner-masthead","#link-view > center:nth-of-type(1)",".button-action-float-banner",".wtt-ads","#ouibounce-modal","#adstop2,\n.ads-item,\n.col-lg-4.hidden-xs.d-flex.flex-column.address-wrap,\n.float-right",".adv-side-bar,\n.banner-adv-wrapper,\n.banner-adv-wrapper2,\n.item-qc1",".td-container > div.td-pb-row > .td-pb-span12,\n.td-container-wrap.td-logo-wrap-full.td-banner-wrap-full,\n.td-crumb-container,\n.td_block_template_1.tdi_11.td-g-rec-id-sidebar,\n.td_block_template_1.tdi_28.td-g-rec-id-custom_ad_1.td-g-rec,\n.td_block_template_1.tdi_30.td-g-rec-id-sidebar.td-g-rec,\n.td_block_template_1.tdi_4.td-g-rec-id-custom_ad_1.td-g-rec,\n.td_block_template_1.tdi_6.td-g-rec-id-sidebar.td-g-rec,\n.td_block_template_1.tdi_9.td-g-rec-id-custom_ad_1.td-g-rec",".Float_ads,\n[id^=\"zone-ads\"]",".code-block-8.code-block,\n.ez-video-wrap","#pc-preload-modal,\n#popup",".quang-cao",".btn-bet,\n.g-imgbot,\n.g-imgtop,\n.link2.group-link,\n.top-main > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)",".active.bg-overlay",".wppopups-whole",".qx_135","#myModal,\ndiv[id^=\"adsphim-\"]","#banner-shopee,\ndiv[style^=\"position: fixed; bottom: 0px;\"]",".ff-banner","#backgroundPopupp,\n#popupContact","#ds_top,\n.hidden-md.right.col-3,\nbody > .container > div","[onclick^=\"__a.hide\"]","#i9bet",".hd-tube-desktop,\n.hd-tube-mobile",".adsphim-mobile-popup",".entry > a[target=\"_blank\"],\n.single-content > a[target=\"_blank\"],\n.wpbcap-laptopvang,\n[href*=\"hnmac.vn\"],\n[href*=\"laptopvang.com\"],\n[href*=\"macbookgiasi.vn\"],\n[href*=\"macone.vn\"],\n[href*=\"minhtuanmobile.com\"],\n[href*=\"vender.vn\"],\ndiv.\\35 fb1ed6025b0b.widget:nth-of-type(3)",".header-fix-ads,\n.lepopup-popup-container,\n.lepopup-popup-overlay","a[rel=\"nofollow sponsored\"]",".underplayer_btn",".ads-wrapper",".a-header,\n.apu,\n.header","#qc_clgt",".advertisement",".sticky",".datCuocBTN,\n.modelAds,\n.nhacaiuytin,\n.text-running",".btn-betting",".container-banner,\n.modal-ads,\ndiv[class^=\"slide-bar\"]","#app-web + .container[style=\"margin-bottom: 30px\"],\n.item.item-betnow,\n.sv-link.btn-bet-top,\n[href^=\"/goto\"]","#m-bet","div[class*=\"size-\"]",".ibs-bet","#menu-main-menu > .menu-bongdainfo.menu-item.nav-item.tt-bdif,\n#menu-main-menu > .menu-nha-cai-uy-tin.menu-item.nav-item.style-2 > .nav-link,\n.c-int.d-lg-none.d-block,\n.col-xl-4,\n.container > .row > .col-12,\n.d-lg-none.d-block.p-1.text-center,\n.justify-content-center.d-flex > .btn-primary.btn,\n.matches__item--footer,\n.mt-1.d-lg-flex.d-none.sub-menu,\na.d-lg-none.d-block:nth-of-type(2)",".hide-desk.footer-banner,\n.modelAds.modal-ads,\n.nhacaiuytin.after.top-btnpage","#mp-preload-pp-overlay,\n.adpl",".ad-botton,\n.topbanner",".btn-bottom-right-append-player,\n.images-bnr-bellow-append-custom,\n.images-top-pl",".classvi,\n.elementor-section-height-default.elementor-section-boxed.elementor-element-e601265.elementor-element.elementor-top-section.elementor-section",".btno-group.d-none.d-lg-flex,\n.container > .mt-1,\n.container > .mt-3,\n.d-lg-block,\n.justify-content-between.d-lg-none.d-flex.btno-group,\n.topButton,\n.widget_offer,\nheader > .container","#layerLogo",".black-layout > div:nth-child(2),\n.popup_u,\ndiv[style^=\"position: absolute;top: 0;\"]","div#bnads",".container > .row > center","[id^=\"Balloon_\"]","div[id^=\"float\"],\ndiv[id^=\"hide_float\"]","#iklan-atas-wrapper",".box_odds",".banners",".banner_list,\n.item-more,\n.nc_sidebar_home,\n.widget-sidebar-block",".body_wrapper1","#mp-preload-popup-overlay",".detail-odd-title,\n.div-ad-allpage-top,\ndiv[id^=\"div-ad-list-\"]","[href=\"https://8xbe52.com\"]","#hide_float_right",".a--d-wrapper",".catfish-bottom","#adx,\n.banner-preload,\n.catfish-top,\ndiv.banner-catfish-bottom",".btm_bar",".catfix","#bar_float_r,\n.quangcaomb",".footer-fixed-br-container",".v4j-watch-1.v4j-content,\nbody > div[class]",".no-auto-popup","#menubentrai,\n.gnartyx-offads",".btn-bet-top,\n.item-betnow",".box-host","[href*=\"cellphones.com.vn\"]",".textwidget","#right_float,\n[id$=\"float_banner\"]",".in.fade.modal-backdrop",".link-gold,\n[id^=\"banner\"]",".MuiDialog-container,\n.MuiDialog-root,\n.MuiModal-backdrop,\n.css-ylxsn9.MuiStack-root,\n.vjs-banner-btn,\ndiv.css-m49bkq.MuiStack-root > a","#ad_global_below_navbar",".b-player",".pum-overlay",".baloon,\n.col-sm-10.kqcenter,\n.kqbackground.vien ~ a[target=\"_blank\"]","#qc-kpgame",".info-footer:nth-child(4)",".mobile-catfix","#left_ads_float,\n#right_ads_float","#IMAGE635 > .ladi-transition.ladi-image,\n#IMAGE639 > .ladi-transition.ladi-image,\n#POPUP648,\n.backdrop-popup","#pc-catfix,\n.lightbox-player-pc,\ndiv[id^=\"preload-\"]","#banner-top-mobile,\n#pc-top-banner,\n#quang-cao-2",".pc-catfix,\nmobile-catfix","#pm_quangcao","#catfish-banner,\n#dl-banner-728x90,\n.center-screen.backdrop,\n.topless",".ads-pc,\n.ads-sp",".boxzilla-bottom-right-container,\n[href^=\"https://gotrackecom.info\"]",".adspopupgiua,\n.adspopupleft,\n.adspopupright,\n.float-ckgiua","#wap_bottombannerr,\n.grid-match[style]",".ads-floatingads,\n.banner-item,\n.top-nha-cai","#ad_balloon",".adpia_banner",".btn-top.btnz,\n.grid-match__footer > a.btn:nth-child(3),\n.mct_-bet-bot,\n.mmo,\n.mmo-inner,\n.modal",".show.fade",".fixed-bottom,\n.popup-banners",".sbAdv","#adsTopInPageBanner,\n.adsContainer,\n.header__auth > .details__devices-list",".elementor-widget-image",".box-rating","#ads_large_detail,\n#banner_top,\n#box_qua_tang_vne,\n#raovat,\n#sis_popup,\n#supper_masthead,\n.article_ads,\n.article_ads_300x250,\n.banner_mobile_300x250,\n.section_ads_300x250",".Notices.PanelScroller","div[class*=\"qca\"]",".content_middle_rightbar","winbox-1",".parent.special,\n.partner-me",".ad-floater,\n.popunder-link,\n.promotion-popup,\n.video-ad-layer","#hide_catfish","#top_oddd","#popup_fi",".code-block-1.code-block,\n.navbar-container + .container","#idAdLink","#closeAds","div.py-2.md\\:py-6.mx-auto.w-full.max-w-screen-3xl > div.relative",".BT-Ads,\n.qc-inner,\ndiv.qc_TC_Chap_Middle,\ndiv[id^=\"qc_M_\"]",".PanelScroller.Notices",".expand-static-banner,\n.preload-banner,\n.static-banner","p[style=\"color: rgb(174, 174, 174); margin-top: 10px; margin-bottom: 20px;\"]",".adv_phim,\n.fixed_bottom","#adspm4u",".js-editors-choice-slider.editors-choice-slider > .adsbygoogle","[src^=\"https://ads.starzd.com/\"]",".btn-betnow,\n.ft-box,\n.vb-button > .mct_-bet,\ndiv.vebo-sp.container:nth-of-type(7)","#hots-btn,\n.bet-btn-8423,\n.bn-popup-bottom-sdwdwxw,\n.btn_soikeo_74324,\n.highlight,\n.images_fixed,\na.btn_betnow_632132,\na.btn_fb:nth-of-type(3),\nli:nth-child(1n+2)",".show.modal",".v4j-header > a[target=\"_blank\"]",".sticky_bottom",".quangcaomobile","#tut4ktream_idAdLink","#video_player ~ div[id]","div[style^=\"position:fixed;inset:0px;z-index:100000;\"]",".cash-fish,\n.cash-fish-pc,\n.preload-pc,\n.top-mobile-banner,\n.under-player-pc-banner","#video_player + div[id]","body > [style*=\"position: fixed;\"]",".bg-black.w-full.items-center > .relative.px-2.flex,\n.items-center.justify-center.flex.w-full.top-\\[47px\\].fixed",".sdzhead",".banner-catfish-bottomd","div[data-value=\"1\"]","[data-clm=\"ccccc2\"],\n[data-id=\"ap3poapup\"]",".navbar-ex8-collapse","#bnc1","#bnc0","#sticky",".grid-match__footer,\n.odds-comp,\n.w-100.justify-content-center.align-items-center.d-flex,\na.d-lg-none.d-block:nth-of-type(1)",".separator",".-translate-x-1\\/2.transform.left-1\\/2.bottom-0.fixed",".bbMediaWrapper-inner > .samCodeUnit,\n.js-replyNewMessageContainer.block-body > div.samCodeUnit > .samItem,\n.p-footer,\n.samVideoOverlay",".popup-overlay","._9xtpcl.c4je67d.c1qs0lzc.c1hrlkpu.cc2icwl.c1i0iccj.cfd18df,\n._9xtpcl.e1e6v8dt,\n.blbew80,\n.llnefd1,\n.lpp0nsn,\n.luq51lg.a13wihj,\n.pointer-events-auto.block,\n.zbgpvb19.zbgpvb16.zbgpvbj.zbgpvbh.zbgpvbg.zbgpvbf.zbgpvbe.zbgpvb1","#header-ads,\n.catfish-img","#ad-container,\n.uniad-player + div[style]","#position_full_top_banner_pc",".gc-header__wrapper + div[style]",".button-dangkyngay",".afw-topbanner","#banner3double","div[id^=\"adsWeb\"]",".bgadmtoptotal",".bannertop",".top-right-col-ads",".my_responsive_add,\n.titleBar + *,\n[class1=\"my_responsive_add\"]","#background_bg_link,\n#div_inpage_banner,\n#div_inpage_banner_after,\n#div_inpage_banner_open,\n#subRightAbove,\n#subRightAboveHome,\n.adv-24h-mid,\n.boxbannerinfeed-kh,\n.fixad300x600,\n.lady,\n.module3,\n[id^=\"ADS_\"]",".admicro",".top-header",".top_page","#subiz_wrapper,\n.ad-embed",".features-r","#bannerMasthead,\n#desktop-home-top-page,\n#mobile-home-middle-1,\n#mobile-home-middle-2,\n#mobile-home-top-page,\n#mobile-top-page","#\\37 290,\n#\\38 893,\n#ke0v7etz,\n#kizq4u4r,\n#kjb6n9uy,\n#lnm1eu57,\n#lpr54voy,\n.ads-top,\n.top-advertisment","#topbn","#Adsv,\n.right-banner > a[title]",".__ads_click","#neo-right-ads","#BannerAdv","#gallery-2,\n.hd-cate-wrap,\n.home-qc-wrap,\n.home-sec-right .widget_media_image,\n.noname-left",".chapter-content .min-h-\\[275px\\]",".Advs_adv-components__1nBNS.Advs_adv-300x250__2eyhC.Advs_no-content__RWwW2,\n.HotTagGlobal_fixed-height__1f50i",".exp_qc_share",".c-banner",".bg-gray,\n.sidebar > div[style]","div[id^=\"adsbg\"]",".banrpstn","#myElementz,\n.bannerinfooter",".LRBanner",".bg_allpopupss,\n.bgal_popndungalal,\n.bn1,\n.bn2,\n.box_quangcao_mobile_320x50,\n.box_text_qc,\ndiv.news-left-related:nth-of-type(2)","#tubia","[id^=\"admzone\"]",".khw-ads-wrapper.clearfix",".banner-bottom-menu,\n.popup-bg,\n.showpop,\n[href*=\"bit.ly\"]",".background-blur,\n.qc-benphai,\n.qc-bentrai","#adrightsecondx,\n#adrightspecial,\n#adrightspeciallinks,\n#adsrighttop,\n#adsuggestion",".advertTop,\n.module_plugins",".ads-sponsor,\n.khw-adk14-wrapper",".top-banner-mobile","[id^=\"adv\"]",".quang_cao_pc_right_hoc_tap",".ads_shortcode",".admicro_top","#adop_bfd,\nins[class*=\"adsby\"]",".sponsor-zone","div[id^=\"ads_\"]","#top-adv","#popup_center","div[style=\"text-align:center;margin-top:0px;margin-bottom:0px;\"]",".box-banner","div[class^=\"adv-\"]",".ads-970x280","#pc-top-container,\n.align-items-center.justify-content-between.d-flex.text-center.bg-grey-6.w-100,\n.d-flex.justify-content-between > div > div.d-flex.justify-content-around.mt-4,\n.top-ads-16x9","#myCarousel,\n.banner-boder-zoom",".asd-headt,\n.detail__foru,\n.mb-40.section__qadd,\n.super-masthead,\n.top-banner,\n[class*=\"box-home\"],\n[data-marked-zoneid=\"tn_detail_danhchoban\"],\n[data-marked-zoneid=\"tn_detail_quantam\"],\n[id^=\"dablewidget_\"],\nzone","div[class$=\"_ads\"]",".zone-top",".c-banner-item","div[id^=\"adsMobile\"]",".fyi",".ads-common-box",".p-body-pageContent > table[style=\"width:100%;display:inline-block;background: #fff;\"]",".jsx-3569995709,\n.micro,\n.middle-comment-promotion,\n.pro-container,\ndiv[style=\"width:300px;height:250px\"],\ndiv[style=\"width:300px;height:600px\"],\ndiv[style=\"width:320px;height:100px\"]","#main-videoplayer,\n#pc-top,\n.ads-position",".container .desktopjszone,\n.mobilejszone","#header-ads-full,\n#shoppe_ads_fly,\n.ads-responsive,\n[id^=\"ads-\"]","#LeaderBoardTop,\n#admbackground,\n#adsMainFooter,\n.Mobile_Masthead_TTO_Wrapper,\n.adm-bot,\n.box-qad,\n.content-amuasam,\n.detail__qc,\n.section__r-vietlot,\n.wrapper-ads-mb",".clearfix.adregion,\n.visible-md.header-banners","[class^=\"sticky-top\"],\n[href*=\"vietcombank.com.vn\"]",".Flagrow-Ads-under-header",".vfs_banner","#vmcad_sponsor_middle_content,\n.box-adv,\n.mb-20.col-right-ads,\n.vmcadszone","section.mar20:nth-of-type(2),\nsection.mar20:nth-of-type(4)","#banner-dai-bottom,\n#banner-dai-top",".adsbypubpower,\n.v-element > .v-responsive,\ndiv.message--post",".sys-ads",".bf-3-primary-column-size.bs-vc-sidebar-column.vc_col-sm-3.vc_column_container.bs-vc-column.wpb_column > .wpb_wrapper.bs-vc-wrapper",".wrapper-adv","#banner1ab",".ad_by_yellowpages,\n.banner_add","#Zingnews_SiteHeader,\n.znews-banner","#ads_location,\n.block.ad",".odds-button,\n.odds-button2",".footer-button-sign-in.hide-desk,\n.hide-desk.wrap-content > .wrap-btn-action,\n.menu-right-slide",".banner-bottom-append-custom,\n.button-in-player-box,\n.logo-top-right-append-custom","#banner_preload,\n.doc-truyen-ads-d1,\n.doc-truyen-ads-d2","li.special.parent"];

const hostnamesMap = new Map([["*",0],["animevietsub.app",[1,2,3]],["damconuongz.com",[2,30]],["thongtintruyen.com",[2,143,144]],["abysscdn.com",[3,45]],["api.anime3s.com",[3,58]],["freeplayervideo.com",[3,45]],["player-cdn.com",[3,45]],["geoip.redirect-ads.com",[3,45]],["phim18u.net",[3,11,14,260]],["phimss.net",[3,264]],["live4.xoilac34.org",[3,27,207,208,209,242,243,300]],["i.fdcdn.xyz",3],["watch.rkplayer.xyz",[3,417]],["hhchina.app",[4,5,6]],["hhtqvietsub.top",[5,6,224]],["hhtq3d.com",[6,96]],["hhtrungquoc6.com",[6,96]],["hoathinh3dtq.com",6],["phimbocn.com",6],["phimhoathinh3d.com",6],["wibu47.com",6],["hentaivn.forum",[6,183]],["motchilltv.ink",[6,116]],["hhtqnet.me",[6,224]],["hoathinh4k2.net",6],["phimmoi2024.net",[6,17]],["smotchill.net",6],["hoathinhtq.site",[6,16]],["dragonphim.tv",[6,16]],["hhh3d.tv",[6,16]],["hhninja6.tv",6],["hhtm.tv",6],["animeweb.vip",[6,96]],["hhtq5.vip",6],["hhtq7.vip",[6,96,224,327]],["hh3d1.xyz",6],["xemphimchill.xyz",[6,16,17,128]],["bluphim.art",7],["vnesports.art",[8,9]],["mythethao.net",[9,18,257]],["hayghe.bio",10],["bichill.biz",11],["dongchill.co",[11,46]],["vivuphim.info",[11,62,128]],["dongphim.li",[11,47,196]],["phimmoi.onl",[11,17,141,285]],["sexnhe.biz",12],["vlxyz.tube",12],["tamlinh247.biz",13],["cliphot69.blog",[14,15]],["cliphotvn69.com",14],["gvnvh18.com",14],["mobiblogz.com",14],["topviet69.com",14],["xem14.com",[14,173]],["hh3dhay.lol",[14,217]],["phim24h.mobi",[14,232]],["sayhentai.one",14],["phimvuihd.org",14],["hh3dhay.pro",14],["3dchill.shop",14],["vutruphim.tv",[14,320]],["phevkl.uk",[14,228,322]],["viet69.vin",[14,325]],["247phim.cc",[16,17,18]],["hayhaytv.cc",[16,17,18]],["anivn.club",[16,40]],["boctem.com",16],["tvhay26.com",16],["movies.vkoolz.com",[16,18,116]],["vuaphimmoi8.net",[16,18]],["vungtv.us",[16,18,141]],["www.phimmoichilla.xyz",[16,17]],["ephoto360.com",[17,86]],["thiepmung.com",17],["motphimchill.online",17],["ophimhd.vip",[17,116,328]],["checkgaigoi7.cc",18],["dailyphimz.com",18],["sieudamtv.dev",[18,179,180]],["gunnylau360.net",18],["gunnymienphi.net",18],["phim.vkool4.net",[18,47,57,277]],["vuonhoalan.net",[18,281]],["phim33.tv",[18,315]],["rphang.vin",[18,324]],["phim18vip.vip",18],["phimno4.xyz",[18,414]],["biphims.cc",19],["cakhiaz.cc",[20,21,22,23,24,25,26,27,28,29]],["xoilacs.cc",[20,21,25,26,28,29,30,31,32,33,34,35,36,37]],["90phutz18.live",[20,21,26,28,32,33,37,210]],["veboz18.live",[20,21,24,26,28,29,30,88,89,216]],["avvietsub.info",[21,188,189]],["phym18.lol",[21,188,218]],["nhentaivn.online",[21,188,287]],["xemtv.tvhayhd.tv",[21,317]],["xoilaczvu.tv",[21,33,36,37,88,90,321]],["phimsexsub.xyz",21],["live.90phut34.live",[23,27,206,207,208,209]],["live.thapcam22.net",[23,88,182,207,271,272]],["noitu.pro",[23,302]],["blog.abit.vn",[23,155,272,331]],["tructiep2.banhkhuc15.net",[27,207,208,209,242,243]],["live.vebo24.net",[27,207,208,209,242,243]],["live.vebo26.net",[27,207,208,209,242,243]],["vebo4.net",[27,207,208,209,242,243]],["rakhoizz.tv",[28,34,88,89]],["francemag.com",[29,87,88,89,90]],["bongdainfoo.com",30],["chatboxn.com",30],["xem.tructiepnba.com",[30,148]],["xemtivi4k.com",[30,174]],["abtruyen.net",[30,240]],["ketqua01.net",[30,253]],["biphim.online",[30,47,197,286]],["vidian.online",[30,290]],["truyenchu.com.vn",[30,353]],["nghean24h.vn",30],["vbfast.xyz",30],["tructiepdabong5.co",[35,47,48,49,50]],["chillhaytv.click",38],["phimtho.net",38],["mphim14.org",[38,296]],["phimmoinay.vip",[38,51]],["soikeoz.vip",[38,225]],["protruyen4.xyz",[38,47]],["javhay.click",39],["heovktgame.club",41],["ketqua247vn.club",42],["keoso.me",[42,225,226]],["mobiblog.club",[43,44]],["javhd.tech",[43,138]],["quat2vn.club",45],["subnhanh.li",[46,47,197]],["subnhanhvl.net",[46,47]],["subnhanh.tube",[46,47]],["xoivo2.online",[49,50,157]],["tvzinghd.co",[51,52]],["phimmoisz.org",[51,297]],["vailonxx.co",[53,54]],["vlxxhot.com",[54,164]],["123nhadatviet.com",55],["123nhadatviet.net",55],["tuoitre.vn",[55,399]],["tuoitrenews.vn",55],["live.7mvn2.com",56],["ahaphimz.com",57],["vphims.net",57],["phimvietsub.pro",[58,304]],["subnhanh.xyz",[58,60,116,304]],["animetvn4.com",[59,60,61]],["animet1.net",[59,60,241]],["appvn.com",62],["javtopxx.com",[62,105]],["linkerpt.com",62],["mod.lnpchannel.com",62],["vlxx.mobi",[62,187,233,234]],["soikeo365.net",[62,268]],["ghienphim.one",[62,143,283,284]],["cungthi.online",[62,77]],["antt.vn",62],["bongda24h.vn",62],["kienthuc.net.vn",[62,377]],["nghenhinvietnam.vn",62],["nhadautu.vn",62],["saostar.vn",62],["v.xemphimviet.xyz",[62,143,284,419]],["asianbookie.com",63],["asideway.com",64],["baomoi.com",65],["m.baomoi.com",66],["baonga.com",67],["bongda12h365.com",68],["thethao12h.me",[68,229]],["canhrau.com",69],["topthuthuat.com",69],["chouc.com",70],["www.clbgamesvn.com",71],["congthucvatly.com",[72,73]],["phuongtrinhhoahoc.com",[73,132]],["phimhaytv.info",[73,191]],["contuhoc.com",74],["www5.cbox.ws",74],["cryptoviet.com",75],["cunghocvui.com",76],["custommapposter.com",77],["giavang.net",77],["romgoc.net",77],["dexuat.com",78],["diadiem.com",79],["mobile.ditnhauvietnam.com",80],["javhdvip.net",80],["doisongphapluat.com",81],["dualeotruyenbi.com",82],["dubaotiente.com",[83,84]],["bongda.com.vn",[84,342]],["giadinhonline.vn",[84,355]],["taichinhdoanhnghiep.net.vn",[84,143]],["nongnghiep.vn",[84,355]],["vietnamnet.vn",[84,404]],["ebookbkmt.com",85],["tructiep.caheo7.link",[89,202,203,204,205]],["tructiep12.cakhia24.live",[89,202,203,204,205]],["cakhia.cakhia29.xyz",[89,202,203,204,205]],["rakhoi1.rakhoi3.xyz",[89,202,203,204,416]],["fsharetv.com",91],["fullcliphot.com",[92,93]],["home.mannhan3.pro",[92,301]],["forum.gocmod.com",[94,95]],["www.tiengnhatdongian.com",95],["ycongnghe.com",[95,176]],["truyensieuhay.com",[96,151]],["hoahoc247.com",97],["hoidap247.com",98],["homedy.com",99],["hotruyen1.com",100],["huphimtv.com",[101,102]],["sexviet1.one",102],["www.iosviet.com",103],["javtiful.com",104],["lacaigi.com",106],["laptrinhcanban.com",[107,108]],["yhocdata.com",[108,178]],["lichngaytot.com",109],["lichvannien365.com",110],["loigiaihay.com",111],["mephimitv.com",112],["metruyencv.com",113],["metruyencv.info",113],["metruyencv.net",113],["mmo4me.com",114],["baodauthau.vn",[114,334]],["motchillfc.com",115],["motphimtvv.com",116],["www.mp.com",[116,118]],["phimnhanhvll.com",116],["motphimww.com",117],["phimmoiiii.net",117],["tvphim.us",117],["muabanraovat.com",119],["muaxegiatot.com",120],["nettruyenaa.com",121],["nettruyenx.com",122],["nghienanh.com",123],["nhaccuatui.com",124],["phim202.com",125],["phimdinhcao.com",[126,127,128]],["phimlongtieng.com",[126,127,128,130]],["phimdinhcao.net",[126,127,128]],["phimlongtieng.net",[126,127,128,130]],["phimhaymoii.com",129],["phimyeuthichb.com",131],["truyensextv.com",131],["lxmanga.life",[131,198]],["quantrimang.com",[133,134,135]],["hoatieu.vn",[133,165,202,368]],["vndoc.com",[135,165]],["khoahoc.tv",135],["download.com.vn",135],["download.vn",[135,173,358]],["gamevui.vn",135],["xem.sex-sub.com",[136,137]],["vl.phe.to",[136,313]],["sexheovl.com",[138,139]],["sexsoc.info",[138,192]],["heovlvn.net",[138,139,192]],["sexvietco.net",138],["sexvip1z.net",[138,139]],["viet69new.net",[138,139]],["vlxxai.net",[138,192]],["javhd.social",[138,192]],["sieutamphim.com",140],["sphimhdc.com",[141,142]],["truyengihotnay.com",[143,149]],["truyengihotnha.com",[143,149]],["truyengihotqua.com",[143,149]],["tenmientruyengi.net",[143,149]],["thichxemphim1.net",[143,273]],["truyengihotdo.net",[143,149]],["truyengihotnha.net",[143,149]],["truyengihotqua.net",[143,149]],["truyengihotzay.net",[143,149]],["megalink.pro",143],["baoxaydung.com.vn",143],["tienphong.vn",[143,334,391,392]],["toquoc.vn",143],["thuthuatjb.com",145],["thuthuattienich.com",146],["toithuthuat.com",147],["truyenqqviet.com",150],["sexvn.tuoi69s.com",152],["tvhaiss.com",153],["tvhayd.com",154],["tvso1.com",155],["bongdaso66.net",[155,246]],["vaoroi365.com",[156,157]],["vatlypt.com",158],["vesotantai.com",159],["vietcetera.com",160],["vietgiaitri.com",161],["vietjack.com",162],["www.vietjack.com",163],["vsc7.com",166],["vtruyen.com",167],["vuighe3.com",[168,169]],["xem1080.com",169],["web1s.com",170],["webhoctienganh.com",171],["webtretho.com",172],["xosodaiphat.com",175],["yeah1.com",177],["sex.chichnhau.net",[179,247]],["xoilacz.dev",[181,182]],["hentaivn.homes",184],["cdnwp.icu",185],["mephim.ink",[185,193]],["luotphim1.net",185],["animehay.in",186],["phim1080.in",187],["socolivebongda.net",[188,267]],["xem.javkche.info",190],["javhd.shop",192],["maclife.io",194],["tapchibitcoin.io",195],["truyen18.life",199],["anime47.link",[200,201]],["doctruyen3qvn.pro",201],["www.toptruyenvn.pro",201],["tructiep36.cakhia24.live",[204,211]],["vn.cliphot69.live",212],["doctruyenchufull.live",213],["mn.mediastation.live",214],["sexhd88.live",215],["vn.phym18.lol",219],["keonhacai5.love",[220,221]],["xemtivingon.org",221],["chotlo247.me",222],["www.gaingon18.me",223],["bongda365.news",225],["ngaytho.me",227],["phimhay123.me",228],["chat.vebotv.me",230],["tuoinung.men",231],["mephimnhe1.net",[232,256]],["xvideos1z.net",233],["tvhayk.org",[233,299]],["phimtuoitho.tv",233],["play.anh.moe",235],["heo69.moe",236],["sexphimhd.vip",236],["tuoi69.moe",237],["viet69.name",238],["sexsub.247jav.net",239],["bantincongnghe.net",244],["blogkiienthuc.net",245],["chodansinh.net",248],["xem19.gavang1.net",249],["xem20.gavang1.net",249],["gockhuat.net",250],["vn.javbabe.net",251],["javfc2.net",252],["khiphach.net",254],["linkneverdie.net",255],["ophimhdvn3.net",[256,259]],["phimgichill.net",[256,259,261]],["www.o-study.net",258],["phimmoichillv.net",262],["phimnhua.net",263],["sachmoi.net",265],["sieukhungvn.net",266],["tenovi.net",[269,270]],["truyentuan.xyz",[270,418]],["tracnghiem.net",274],["phimmoi.tuphim.net",275],["vietmoz.net",276],["vnexpress.net",278],["vozer.net",279],["vtipster.net",280],["zcine.net",282],["phimhay.online",288],["tut4ktream.online",289],["animew.org",291],["blogtruyenvn.org",292],["btcvn.org",293],["chillphimmoizzz.org",294],["lmssplus.org",295],["truyenaudiocv.org",298],["phimsexhay669.pro",303],["sexgaidep69.pro",305],["phim.sexngocha.pro",305],["sexabc.us",305],["sexvn2024.pro",306],["youtubeporn.pro",[307,308]],["vectorx.top",307],["hls.playerfb.xyz",307],["phim18hd.sex",309],["bestx.stream",310],["filemoon.sx",311],["ws-client.gavang.tech",312],["sex.lenlut.tv",314],["phimdacap.tv",316],["vieclam.tv",[318,319]],["xskt.com.vn",319],["motchilltv.us",323],["www.buomtv.vip",326],["2banh.vn",329],["2game.vn",330],["afamily.vn",332],["sport5.vn",332],["autodaily.vn",333],["xehay.vn",[333,411]],["cafebiz.vn",335],["cafef.vn",336],["ttvn.toquoc.vn",336],["careerlink.vn",337],["chap.vn",338],["24h.com.vn",339],["autopro.com.vn",340],["baohaugiang.com.vn",341],["congan.com.vn",343],["daklak24h.com.vn",344],["dantri.com.vn",345],["nld.com.vn",346],["tapchikientruc.com.vn",347],["thanhtra.com.vn",348],["thoidai.com.vn",349],["petrotimes.vn",349],["www.thuocbietduoc.com.vn",350],["thuongtruong.com.vn",351],["thuysanvietnam.com.vn",352],["voh.com.vn",354],["congluan.vn",355],["congly.vn",356],["thitruongtaichinhtiente.vn",[356,390]],["danviet.vn",357],["eva.vn",359],["fshare.vn",360],["game24h.vn",361],["game8.vn",362],["gameio.vn",363],["gamek.vn",364],["soha.vn",364],["genk.vn",365],["vnews.gov.vn",366],["gplay.vn",367],["hosocongty.vn",369],["kenh14.vn",370],["kinhtedothi.vn",[371,372]],["minhngoc.net.vn",372],["vn-z.vn",372],["lazi.vn",373],["lucloi.vn",374],["muare.vn",375],["myeva.vn",376],["phunumoi.net.vn",378],["nhipcaudautu.vn",378],["nhacdj.vn",379],["olug.vn",380],["phapluatplus.vn",381],["qdnd.vn",382],["reatimes.vn",383],["rung.vn",384],["www.saostar.vn",385],["sharecode.vn",386],["thanhnien.vn",387],["thethao247.vn",388],["thethaovanhoa.vn",389],["tinnhanhchungkhoan.vn",392],["tiin.vn",393],["timdaily.vn",394],["tinhte.vn",395],["tinmoi.vn",396],["tintucvietnam.vn",397],["truyenfull.vn",398],["tuyengiao.vn",400],["tvphapluat.vn",401],["v4u.vn",402],["vietfones.vn",403],["vietq.vn",405],["viettelstore.vn",406],["voz.vn",407],["vtcnews.vn",408],["vungoctuan.vn",409],["webthethao.vn",410],["yellowpages.vn",412],["znews.vn",413],["rk.plcdn.xyz",415],["plvb.xyz",415]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map([["livescore.com",[0]],["msn.com",[0]],["dm.de",[0]],["medium.com",[0]]]);

self.specificImports = self.specificImports || [];
self.specificImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
