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

// ruleset: rou-1

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssSpecificImports() {

/******************************************************************************/

const argsList = ["[href=\"https://www.patriotromania.ro/\"]",".ad",".banner_720,\n.fab_lastpost,\n.fab_mid_thread,\n.my_post_goad.my_post.row-fluid",".banners-box,\n.new_domain_r.block",".rm-skin",".img-banner","#ipsLayout_sidebar > .cWidgetContainer,\n.advertise,\n.content-page-mg > p,\n[alt=\"advertisement_alt\"],\n[href=\"https://luxuryescorts.com/\"],\n[href^=\"https://bcprm.com/promo.php\"]","[href^=\"https://www.profi.ro/\"]","[href^=\"https://bit.ly/\"]",".td-all-devices",".td_shadow_btn","[style^=\"overflow:auto;\"]","td[height^=\"500\"]","a[href^=\"https://www.udont2021.com/\"]",".widget_text",".wpsd-master-wrapper,\n[href^=\"https://afflat3c1.com/trk/\"]",".ai_widget.widget","#ppsPopupBgOverlay,\n.code-block-8.code-block,\n.ppsPopupShell","[href^=\"https://event.2performant.com/\"]",".banner",".branding-container,\n[href*=\"AdB\"],\n[id^=\"div-gpt-ad\"]",".size-large.wp-block-image,\n[href^=\"https://www.gralmedical.ro/\"]","#adv-Piede-sticky",".revis-widget,\n[href=\"http://www.erbasu.ro/\"]",".mask,\n.widget-popup,\n.widget-profitshare","#bula-ultima-ora",".banneritem",".p-b-30","#banner1,\n#banner5,\n#banner6,\n#banner8_singlebottom,\n#logorow > a[style=\"margin-left:30px\"],\n#meteo,\n.floating,\ndiv.ric.richmedia","#hightopbanner",".adv","#idvop_fbl",".adds",".banner-img","[class^=\"Banner\"]","#Wbanner300x250 > .maxima_zilei",".numbers-promo-placeholder",".td-a-rec",".text-11",".braso-adlabel,\n.braso-adlabel + [class]","[href*=\"?utm_source=\"]","[href*=\"/?utm_source=cetateanul\"]",".ad-banner",".adsense-imagine,\n[href=\"https://creditrapid.ro/\"]",".background-image-clickable",".block-minorHeader,\n[data-widget-key=\"Reclama\"],\n[href^=\"https://www.airbnb.com/\"]",".height-300,\n[data-platform=\"AdNow\"],\n[data-platform=\"MGID\"]","#sam_branding","[id*=\"ads\"],\n[id^=\"banner\"]",".widget_custom_html",".ai-track,\n.e-con-full,\n.elementor-widget-smartmag-codes,\n.smartmag-widget-codes,\n[href=\"https://viamso.ro/\"]","[id^=\"buffercode_banner\"]","[href^=\"https://accounts.binance.me/en/register\"]","[href^=\"http://bit.ly/\"]","[href^=\"https://freakhosting.com/\"]",".aobn",".news-fb-comments,\n.side-col",".popmake-content,\n.td-a-rec-id-header,\n.widget_wq_reclame,\n[class*=\"_ad_\"]",".minh-250","#branding-holder,\n.ad-in-artilce,\n.retail_insert_in_article",".custom-html-widget.textwidget","[href=\"https://www.sipotehnokaronline.com/\"],\n[href^=\"https://www.sviatoacademy.ro/\"]",".banner_wrapper","[id^=\"gid-ads\"]",".front-overlay-banners,\n[id=\"intRightSideBanners\"]",".bannergroup",".gofollow","[href=\"https://www.fabricadecompost.ro/\"]","#aboveheader,\n#sticky",".sam__branding,\n[style=\"min-height: 250px;\"]","#mvp-content-bot,\n.adsubtitlu",".promotion-section,\n[href=\"http://www.catenapascupas.ro/\"],\n[href^=\"https://www.catena.ro/\"]",".fmowr-link,\n.widget_fmowr.widget",".banner728x90px","[id^=\"ado\"]","[href=\"http://contramundum.ro/\"],\n[href=\"https://anonimus.ro/oferta-de-publicitate/\"],\n[href=\"https://fabricatinro.ro/\"],\n[href=\"https://gandeste.org/\"],\n[href=\"https://malltaranesc.ro/\"],\n[href=\"https://softimaj.ro/\"],\n[href=\"https://trenduri.blogspot.com/\"]","#ivm-inread,\n#slidebox,\n.DAGInScrollContainer,\n.bannerBox,\n.desktop_only.grey.section,\naside > .bannerBox,\nbody > .bannerGrey","#ribbon",".ads",".ads-vizualizare",".gads-top,\n.recl:not([href=\"#\"])","[href^=\"https://msi.gm/\"]","[href=\"https://tradecores.com/\"]",".pubheader",".pub,\n[href=\"https://www.sab.ro/\"],\n[href^=\"https://www.porschefinance.ro/\"]",".td_spot_img_all",".td-pb-span12.tdi_24",".reclama",".custom-html-widget",".bg--dark,\n.branding","#text-49,\n.banner_g,\n[href^=\"https://ro.xtb.com/\"],\n[href^=\"https://www.brd.ro/\"]",".demand-supply,\n[href=\"https://fwdbv.ro/abonamente/\"]","A[href=\"http://bit.ly/1RQRaRq\"],\nA[href=\"https://aegonmarket.ro/\"],\nA[href=\"https://bancatransilvania.ro/pentru-companii/imm/credite-imm/investeste-romaneste/\"],\nDIV[id=\"_tdv_all\"]","[href=\"https://www.facebook.com/bmonkeyadv.ro\"]",".ai-rotate",".grv-product-box,\n.recomandations","[class^=\"banner\"]","[class^=\"reclama\"]","#sidebar > [href*=\"_click\"]",".is-style-default [href]",".banners",".branding--top",".banner-ads-container",".height-sm-360.height-xs-200.mg-bottom-20",".height-250","#carvertical_widget,\n.description_area_gad,\n.second_carvertical_noVin,\n[href^=\"https://www.carvertical.com/\"]","#footer-ads-section,\n.pin-it-button","#banner_container_top",".google-ads-billboard,\n.google-ads-in_article",".axd","[href*=\"utm_medium=banner\"],\n[href^=\"https://sdcproperties.ro/\"],\n[href^=\"https://www.studiumgreen.ro/\"],\n[id^=\"ad\"]",".wpb_wrapper > aside.widget_text.widget","[href=\"https://www.kerigma.ro/\"],\n[href^=\"https://librariact.ro/\"]","[src*=\"banner\"]",".textwidget",".customnomobile,\n[href^=\"https://www.nurvil.ro/\"]",".theiaStickySidebar",".sidebar,\n.sidebar-mid,\n[href=\"https://almaclinic.ro/\"],\n[href^=\"https://car-invatamant.ro/aplica-online/\"]","[href=\"https://www.amosnews.ro/\"]","[href^=\"https://www.facebook.com/profile.php\"]","[href=\"https://redsky.ro/\"]",".twp-ad-image-section,\n[class*=\"widget_media_image\"],\n[id*=\"widget_sp\"]","[alt=\"ad\"],\n[href=\"https://hotelilavamaveche.ro/\"],\nimg[alt=\"Dr.Teo\"]",".profitshare",".adsense","[data-banner]",".essbis-container",".td-loader-gif,\n[href*=\"maie.ro\"]","[href=\"https://www.dcbusiness.ro/cum-nu-construim-in-romania\"]","[href=\"https://arca.info.ro/\"],\n[href=\"https://www.proger.ro/\"]","[href^=\"https://ccir.ro/\"]","[data-ad]","[href*=\"&utm_campaign\"],\n[href*=\"banner\"],\n[href=\"http://www.arenamall.ro/\"],\n[href=\"https://anunturi.desteptarea.ro/minireclame/\"],\n[href^=\"https://volvobacau.ro/cere-oferta\"],\n[style*=\"banner\"]",".alert-warning.alert",".space","#adContainer,\n#category_b",".a-wrap","[class*=\"banner\"]",".featuredBrandsCon",".content-add,\n.side-sticky-banner",".gridview-post-ad-two,\n[href=\"http://arosa.ro\"],\n[href=\"https://www.facebook.com/florievenimentecadouri\"],\n[href=\"https://www.facebook.com/laguna.focsani/\"],\n[href=\"https://www.facebook.com/reinabijou.ro\"],\n[href^=\"https://m.facebook.com/\"]",".ns-wrap-bottom-right",".section.add",".cxADBlock,\n.videoPlayerAD","[id^=\"media_image\"]","#background-link","#background-image,\n.nspb-interstitial,\n.player-bar-ad","#adobranding","[href=\"http://boromir.ro/\"],\n[href=\"https://uzinamecanicavl.ro/site/index.php\"]","#ado970p1,\n#ado970p2,\n#lastmin,\n#lastmin2,\n#likepagefb,\n#overlay,\n#ureche-fb,\n.agoramag,\n.bncp-desktop,\n.brandc,\n.ford.reclama-auto,\n.news-listing-comunicate,\n[href=\"https://agoramag.ro\"]","[class^=\"ssc-card__branding\"],\n[id^=\"strawberry_feeds_manager_widget\"],\n[rel^=\"sponsored\"]",".banner-info","div[id^=\"custom_html\"],\ndiv[id^=\"text\"]",".adsclick,\n.adscontent,\n.adsenvelope,\n.boxOverContent__banner,\n.boxOverContent__getOfferLink,\n.container__bannerZone","[href^=\"https://ivecopentrutine.ro/\"]","[href*=\"profitshare.ro/\"]","aside.widget_media_image.widget.td_block_template_1","[href=\"https://e-husa.ro/\"]","aside.widget_media_image.widget",".geeki-before-content,\n.geeki-la-inceput-de-articol-mobil","[href=\"http://prohd.ro\"],\n[href=\"http://www.avis3000.ro/\"],\n[href=\"http://www.jos-palaria.ro/\"],\n[href^=\"https://www.fordcarbenta.ro/\"]",".images_adv","#master\\.dreapta\\.carlig\\.smartw_12938869,\n#medlive_6844636,\n#pageBodyx > .padded_page_body > .contentFather > .content > .right_side > a > img,\n#rss\\.domnuleprimar_5328294,\n#rss\\.euractiv_20456596,\n#rss\\.medlive_20312972,\n#rss\\.webpr_6183168,\n.articol_lead_full[style=\"width: 158px; margin-right:5px; float:left;\"],\n.at-widget-anunturi,\n.parteneri","#\\$\\{tile\\.name\\}_\\$\\{tile\\.id\\}",".td-a-rec-id-sidebar.td-a-rec","#adswidget1-quick-adsense-reloaded-2,\n#banners-4","#billboard,\n#rectangle,\n.fake_grooveskin",".height-sm-250.height-xs-400.text-center.mg-bottom-20,\n.mg-top-20.container--single.container > .mg-bottom-20","#text-25",".widget_custom_html.side-widget.widget_text,\n[href=\"http://www.april91.ro/\"]",".banner_image","[width=\"2246\"][height=\"519\"]",".panel[class*=\"widget\"]",".code-block",".td-a-rec-id-custom-spot","#text-2",".bannerGrey",".afis-sticky,\n[id*=\"overlayer\"]",".ai-attributes,\n.reclamaLata,\n.titluReclama","#floating",".section-full-ads",".row-header-baner,\ndiv.bnd",".pum-active",".index-slide,\n[id*=\"banner\"],\n[src^=\"https://luju.ro/static/images/ccir\"],\nvideo",".sp-module-content","#copy","#FixedDivContainer,\n#fixedDiv",".bannerDFP","#alephLiveBkp","#alephLive,\ndiv.notif-bula.notif",".mg-top-20,\n.sam-container",".widget_media_image",".theiaStickySidebar.inner,\n[href=\"http://www.volta.ro/\"],\n[href=\"https://www.platinumoptic.ro/\"],\n[href^=\"https://cybernet.volvocarsdealer.ro/cere-oferta\"]","#honda_bnr_rot_1,\n[href=\"http://www.itsybitsy.ro/live/\"]",".aboveDisqusBanners","#_tdv_all,\n[href*=\"imobiliare.ro\"]","[class*=\"td-a-rec-id-custom_ad\"],\n[href=\"https://www.bursa.ro/\"]",".widget_custom_html.widget.widget_text",".listAd.center-block.img-responsive,\n.visible.go-premium-drawer",".pls-dis-blck","#pa_inarticle_placeholder","[href=\"http://www.coralimpex.ro/\"],\n[href=\"http://www.rosal.ro/\"],\n[href=\"http://www.trcj.ro\"]","#ys-container,\n.metasingle-jos,\n.visible.ys-layer","[href=\"https://www.incorectpolitic.com\"]","[href=\"https://www.facebook.com/TaxiLuxTarguNeamt/\"]","#text-10","[href=\"https://indagra.ro\"],\n[href=\"https://plescavita.ro/produs/plescavita/\"],\n[href=\"https://www.indagra-food.ro/\"]","#block-2,\n[href=\"https://www.rplp-piatracraiului.ro/\"]","#stickynote4",".adv-link",".second_header > .container > .reclama728",".bk-sticksb-wrapper,\n.ottowebAds","[href=\"http://www.moveout.ro/\"],\n[href=\"https://chestionareauto.ro/\"]",".ptate,\n.ptate_banner_cmz,\n[href=\"http://www.rcforfun.ro/\"],\n[href=\"https://www.anvelopemag.ro/anvelope-iarna.aspx\"],\n[href^=\"https://afiliati-online.casapariurilor.ro/promoRedirect\"]","[href=\"https://souqeshop.ro/panouri-solare-fotovoltaice/\"],\n[href^=\"https://vreaulanova.ro/\"]",".hiddenad,\n.reclama-cod,\n.reclama-inside,\n.reclama-video,\n[href=\"http://euro-instal.ro\"],\n[href=\"http://toronto-residence.ro/contact/\"],\n[href=\"https://certificatenergetictimis.ro/\"],\n[href=\"https://www.rapidauto.ro/ro/content/showroom-timisoara.html\"]",".sidebar-column-primary.sidebar-column.col-sm-4 > .sidebar,\ndiv[class^=\"ods\"]","#fpub-popup",".entry-content > div.demand-supply","div.center.well-sm.well","tr[onclick*=\"revolut\"]","div[class^=\"akcelo\"]",".height-md-250,\n.height-md-300.height-xs-400,\n.height-sm-250.height-xs-300,\n.mg-bottom-10.text-center,\n.padding-top-10.padding-bottom-10,\ndiv.height-300,\ndiv.mg-bottom-20.height-300","#tdi_195,\n.tdi_153","[src^=\"/media/publicitate/\"],\ndiv.st-clr.st-ad-region",".tdi_74","#text-6,\n[href=\"http://exploremag.ro\"],\n[href=\"http://www.inimadecopil.ro/\"]",".wp-image-179110",".in.fade.modal-backdrop,\n.in.fade.modal.subs-popup","[href*=\"?referral\"]","div[class^=\"strawberry-ad\"]","#crt-523989,\n#crt-523996,\n.height-250.mg-bottom-20,\n.height-250.mg-sm-bottom-20,\n.height-250.text-center,\n.strawberry-ad,\n.strawberry-ads-manager-container",".brandingDfp",".image[height=\"250\"][width=\"300\"]",".custom_ad_back_q","iframe[src*=\"feature=oembed\"]",".view-advertising-banner",".desktop.billboard.use-placeholder","[href=\"https://renth.ro/index.php\"]",".feededay",".mrf-adsmedia",".object-contain,\n.rounded.border-gray-200","#ONN_player",".add728x90,\n[href=\"http://www.epamedia.ro\"],\n[href=\"http://www.messages2autdoor.ro\"]","#text-28 > .textwidget","#widgetArticleControlsLeft,\n#widgetArticleControlsRight,\n.left > .widget-profitshare",".promo","[href*=\"&do=advertisement\"]","#promoClk,\n#reclame",".lvd-blog-ad",".leaderboard","#widget_text > .shadowblock,\n[href*=\"ad_click\"]","#ubm-banners-3,\n.ig_content,\narticle > div.td-post-content > p > a.td-modal-image","[href=\"mailto:publicitate@dcnews.ro\"]",".dfp-d-billboard,\n.dfp-d-branding","[href=\"https://www.welthaus.ro/\"]",".banner-image",".widget-title",".leaderboard.bstats,\ndiv[onclick]",".td-spot-id-content_bottom,\n.td-spot-id-content_inline,\n.td-spot-id-content_top",".adcontainer",".attachment-full.vc_single_image-img,\n[href*=\"tornabuoni.ro\"],\n[href*=\"virtualmag.ro\"]","#custom_html-58,\n[id^=\"wds_\"]",".ai_widget","#topBranding,\n.topBranding","[id*=\"_ads\"]","#taboola-sponsored-mid-article,\n.banner-request.news-widget-color-1.news-widget.widget,\n.bgcolor-revista-blogurilor,\n.border-revista-blogurilor,\n.giant-modal--fb-like.giant-modal,\n.giant-modal__left__text,\n.in-article-banner,\n.js-alternating-banners,\n.small.banner,\n.vertical-banner,\n[href*=\"Adv\"],\n[href*=\"Promo\"]",".lazyloaded.size-full:not([src*=\"Aqua\"]),\n.wp-block-image","[id^=\"subst-\"][style]","#ad-bilboard",".g-single,\n[href=\"https://www.facebook.com/romanadecomobili\"]",".size-full.wp-block-image",".magazin1,\n.magazin[href=\"http://camerevideoauto.ro\"],\n.smecher,\ndiv[style$=\"width:520px\"],\ndiv[style*=\"width:520px;\"]","#flashContent",".herald-header-wraper.header-middle,\n[href^=\"//www.booking.com\"]",".header_banner",".home-featured-boxes,\n.homepage-banner,\n[href^=\"https://www.skinmedspa.ro/\"]",".module-inner,\n[href=\"https://app.aqmeter.com/\"]",".wpb_content_element,\n[class^=\"widget\"] [src][width][height]",".sam_branding.hidden-xs,\ndiv[class^=\"strawberry\"]","#home_calendar > a","#background-div",".td_block_template_1.td-single-image-","#adocean\\.slots\\.box3,\n.minh-250.mb-20.mt-20,\n.minh-lg-600.sidebarBox,\n.slick-slider.slick-initialized.ws_gallery_image,\n.slick-slider.slick-initialized.ws_gallery_image > .draggable.slick-list > .slick-track","[id^=\"werad\"]","[href=\"https://www.hulber.ro/\"],\n[href^=\"http://constantinnautics.ro/index.php\"]","[href=\"https://www.pieseshop.ro/\"]",".bookingaff,\n.widget_sp_image,\n.widget_sp_image-image-link","[href=\"https://www.priboisiasociatii.ro/\"]",".banda-sticky-mini,\n.banda-sticky-vp","div.ad",".rzonvm-image","#text-3","#block-3,\n#block-4,\n#block-6,\n#block-7","#foot-ad-wrap,\n#leader-wrap,\n.lazyloaded.alignnone","[class*=\"e3lan\"]",".ziarul-ad",".afiseaza-desktop,\n.widget_links.widget","[href*=\"adclick\"]",".widget_block,\n[href*=\"raureni.ro\"]",".vc_empty_space","[href*=\"/adclick.php\"],\n[href^=\"https://www.bursa.ro\"]",".td-a-rec-id-content_bottom.td-a-rec,\n.vc_raw_html.td_block_wrap.wpb_wrapper,\n[href^=\"http://www.spitalbunavestire.ro/\"]","#mvp-leader-wrap","#optional_banner,\n[class^=\"custom_module add\"]","#pub-top-container","[href^=\"//www.techinstyle.ro/\"]",".widget_text.text-124.widget,\n[href=\"http://stefanovidiu.ro/\"],\n[href=\"https://www.ecrgroup.eu/\"],\n[href=\"https://www.expresorul.ro/\"]"];

const hostnamesMap = new Map([["*",0],["asculta-live.com",1],["sighet247.ro",1],["clubopel.com",2],["escortebucuresti.com",3],["gazetaromaneasca.com",4],["georgebutunoiu.com",5],["restocracy.ro",5],["nimfomane.com",6],["pofta-buna.com",7],["programegratuitepc.com",[8,9,10]],["bzi.ro",[8,101]],["arenavalceana.ro",[9,82]],["qreferat.com",11],["rasfoiesc.com",12],["roboxfilme4k.com",13],["romaniataramea.com",[14,15]],["timpul.md",[14,36]],["viatasisanatate.com",[16,17]],["ziarulromanesc.de",[16,22]],["vloggeri.com",18],["ziare.com",[19,20]],["poliexpert.md",19],["bursa.ro",19],["exquis.ro",19],["flashscore.ro",[19,153]],["inturda.ro",[19,172]],["mobilissimo.ro",[19,123,194]],["stiripesurse.ro",[19,130,266]],["turdainfo.ro",[19,277]],["ziartopdearges.com",21],["revistaconstructiilor.eu",23],["academiacatavencu.info",24],["gandul.info",25],["mediafax.ro",[25,188,189]],["prosport.ro",[25,231]],["zf.ro",[25,188,289]],["gazetadeagricultura.info",26],["albaiulianul.ro",26],["ph-online.ro",26],["reporteris.ro",26],["7media.md",27],["curentul.md",[28,29]],["tribuna.md",29],["hotnews.md",30],["protv.md",31],["radiochisinau.md",32],["shok.md",33],["stiri.md",34],["stirinonstop.md",[35,36]],["bacau.net",[37,38]],["presadeazi.ro",[37,225]],["timisplus.ro",37],["brasov.net",39],["buzau.net",40],["cetateanul.net",41],["coinjournal.net",42],["dexonline.net",43],["newsromania.net",44],["roforum.net",45],["romaniatv.net",[46,47]],["playtech.ro",[47,222]],["saptamana.net",48],["satmareanul.net",49],["glasul-hd.ro",[49,66,160]],["lapunkt.ro",49],["turdanews.net",50],["vestea.net",51],["filmeonlinesubtitrate.org",52],["filmeserialeonline.org",53],["1tap.ro",54],["4tuning.ro",[55,56]],["anunturi-auto.4tuning.ro",55],["pieseauto.ro",55],["7est.ro",57],["9am.ro",[58,59]],["kudika.ro",58],["wall-street.ro",[58,78,283]],["actualdecluj.ro",60],["jocuricool.ro",[60,175]],["motorclasic.ro",[60,197]],["stiriardeal.ro",[60,257]],["actualitateavranceana.ro",61],["actualmehedinti.ro",62],["adevarul.ro",63],["aerotim.ro",64],["agoramedia.ro",65],["agro-tv.ro",[66,67]],["ctnews.ro",66],["agrointel.ro",68],["aktual24.ro",69],["alba24.ro",70],["amosnews.ro",71],["ampress.ro",72],["androidu.ro",73],["animalzoo.ro",74],["capital.ro",74],["doctorulzilei.ro",74],["evz.ro",[74,149]],["infoactual.ro",74],["retetesivedete.ro",[74,147,242]],["anonimus.ro",75],["antena3.ro",[76,77]],["jurnalul.ro",[77,176]],["anunturi66.ro",[78,79]],["spynews.ro",78],["tvhappy.ro",78],["useit.ro",78],["anunturigarla.ro",80],["arenait.ro",81],["autoexpert.ro",[83,84]],["floteauto.ro",[83,154]],["autolatest.ro",[85,86]],["flux24.ro",[85,155]],["focuspress.ro",[85,156]],["mediaflux.ro",[85,190]],["mediastiri.ro",85],["monitorulexpres.ro",85],["politik24.ro",[85,223]],["refleqtmedia.ro",85],["solidnews.ro",85],["stiridepitesti.ro",[85,259]],["automobilen.ro",87],["eblogauto.ro",87],["sporttim.ro",87],["autoplay.ro",88],["g4media.ro",88],["gazetadambovitei.ro",88],["ziarul21.ro",[88,294]],["b1tv.ro",89],["bankingnews.ro",90],["bizbrasov.ro",91],["biziday.ro",92],["brasovmetropolitan.ro",93],["brasovstiri.ro",94],["bucataras.ro",95],["bugetul.ro",[96,97]],["cugetliber.ro",96],["buletindecarei.ro",98],["buzoienii.ro",99],["bzb.ro",100],["i-car.ro",[100,165]],["campinatv.ro",102],["cancan.ro",[103,104]],["impact.ro",[104,167]],["carzz.ro",105],["catchy.ro",106],["cinemagia.ro",107],["click.ro",108],["clubmercedes.ro",109],["loganclub.ro",109],["clujust.ro",110],["craiovaforum.ro",111],["crestintotal.ro",112],["crisana.ro",113],["cspower.ro",[113,120]],["hotnews.ro",[113,162]],["luju.ro",[113,183]],["cristianmargarit.ro",114],["gazetadecluj.ro",114],["sroscas.ro",114],["criterii.ro",115],["cronicadefalticeni.ro",[116,117]],["zicala.ro",116],["cronicazilei.ro",[118,119]],["editiedevrancea.ro",[119,140]],["ct100.ro",121],["curier.ro",122],["daciaclub.ro",[123,124]],["reno.ro",[123,124]],["dailybusiness.ro",125],["fanatik.ro",[125,150]],["dailyfeed.ro",126],["dc360.ro",127],["dcbusiness.ro",[128,129]],["dcnews.ro",[128,130,131]],["desteptarea.ro",132],["dez.ro",133],["diacritice.ro",134],["digi24.ro",135],["dinpopor.ro",136],["dirtbike.ro",137],["zvj.ro",137],["divahair.ro",138],["doc.ro",139],["emag.ro",141],["epitesti.ro",142],["eporno.ro",143],["filme-porno.ro",143],["estnews.ro",144],["europafm.ro",[145,146]],["virginradio.ro",[145,281]],["evenimentulistoric.ro",147],["evenimentvalcean.ro",148],["farmaciata.ro",151],["filmecrestineonline.ro",152],["forum-auto.ro",157],["gazetadinvest.ro",158],["geeki.ro",159],["horoscop.ro",161],["science.hotnews.ro",163],["hunedoaraplus.ro",164],["ilike-it.ro",166],["impactpress.ro",168],["info1tv.ro",169],["infobistrita.ro",170],["informatia-zilei.ro",171],["investigatoria.ro",173],["jamilacuisine.ro",174],["national.ro",[174,202]],["zhd.ro",174],["ziarmedical.ro",174],["kanald.ro",177],["lauralaurentiu.ro",178],["libertatea.ro",179],["libertateapentrufemei.ro",180],["libnet.ro",181],["litoraltv.ro",182],["lumeasatului.ro",184],["manafu.ro",185],["manager.ro",186],["marketingportal.ro",187],["mesagerulhunedorean.ro",191],["tomisnews.ro",[191,271]],["ziaruldevalcea.ro",[191,299]],["mesagerulneamt.ro",192],["missauto.ro",193],["moise.ro",195],["monitoruldevrancea.ro",196],["multecase.ro",198],["myradioonline.ro",199],["napocanews.ro",[200,201]],["r3media.ro",[200,235]],["ziuaconstanta.ro",[200,304]],["nationalisti.ro",203],["neamt24.ro",204],["newsbucovina.ro",205],["ziarroman.ro",[205,292]],["newsbucuresti.ro",206],["newsbv.ro",207],["nosteam.ro",208],["novatv.ro",209],["nwradu.ro",210],["obiectiv-sm.ro",211],["odat.ro",212],["onlinesport.ro",213],["opiniabuzau.ro",214],["opiniatimisoarei.ro",215],["oradesibiu.ro",216],["ortodoxinfo.ro",217],["paginademedia.ro",218],["pbinfo.ro",219],["peco-online.ro",220],["petitchef.ro",221],["portalsm.ro",224],["presagalati.ro",226],["presasm.ro",227],["pricy.ro",228],["project-e.ro",229],["promotor.ro",230],["protv.ro",232],["prwave.ro",233],["qmagazine.ro",234],["radiobrasov.ro",236],["radioimpuls.ro",237],["rangfort.ro",238],["razvanbb.ro",239],["redactia.ro",240],["republikanews.ro",241],["rnews.ro",243],["roman24.ro",244],["romanialibera.ro",245],["romedic.ro",246],["sa-mp.ro",247],["sfatulmedicului.ro",248],["sfatulparintilor.ro",249],["shtiu.ro",250],["site-anunturi.ro",251],["smlive.ro",252],["spectacola.ro",253],["sport.ro",254],["sportulsalajean.ro",255],["stiri-neamt.ro",256],["stiridecluj.ro",258],["stiridesibiu.ro",260],["stiridinromania.ro",261],["stiriest.ro",262],["stirileimobiliare.ro",263],["stirileprotv.ro",264],["stirimed.ro",265],["stirivaslui.ro",267],["substantial.ro",268],["tenisdecamp.ro",269],["timponline.ro",270],["trafictube.ro",272],["transilvaniareporter.ro",273],["tuktuk.ro",274],["turatii.ro",275],["turbomag.ro",276],["tvmneamt.ro",278],["retete.unica.ro",279],["urban.ro",280],["vremeanoua.ro",282],["weradio.ro",284],["yachtexpert.ro",[285,286]],["zero-accidente.ro",[286,288]],["zch.ro",287],["ziardecluj.ro",290],["ziarobiectiv.ro",291],["ziartarguneamt.ro",293],["ziarulargesul.ro",295],["ziarulatac.ro",296],["ziaruldebacau.ro",297],["ziaruldeiasi.ro",298],["ziaruldinmuscel.ro",300],["ziarulevenimentul.ro",301],["ziarulsanatatea.ro",302],["ziarulunirea.ro",303],["ziuanews.ro",305],["zonait.ro",306],["nasul.tv",307]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map([["patriotromania.ro",[0]]]);

self.specificImports = self.specificImports || [];
self.specificImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
