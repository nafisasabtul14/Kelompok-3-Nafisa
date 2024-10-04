"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[95029],{638966:(e,a,t)=>{t.r(a),t.d(a,{default:()=>n});let s={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"AdReasonsModalContainer_pin",selections:[{alias:null,args:null,concreteType:"AdTargetingAttribution",kind:"LinkedField",name:"adTargetingAttribution",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"isCustomerListMatched",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isActalikeMatched",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isEngagementMatched",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isExpandTargetingMatched",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isFromGpsLocation",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isVisitorMatched",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isShoppingProspectingMatched",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isPlPersonaMatched",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"matchedAgeBucket",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"matchedLocale",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"matchedInterest",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"matchedGender",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"matchedDevice",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"matchedKeyword",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"geoRegion",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"geoPostalCode",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isFirstPartyAdPersonalizationEnabled",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isThirdPartyAdPersonalizationEnabled",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"promoter",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"username",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"fullName",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"promotedPartnershipAdvertiserName",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"promotedPartnershipAttributionName",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isEligibleForPromotedPartnership",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"digitalMediaSourceType",storageKey:null}],type:"Pin",abstractKey:null};s.hash="5eab0350f3762270ed657ef0c1fd85da";let n=s},654716:(e,a,t)=>{t.d(a,{Z:()=>n});var s=t(923368);let n=(e,a)=>{let{isCloseupRelatedPinsAboveTheFoldEnabled:t}=(0,s.x4)();return{isEligibleForStaticImageIdeaPin:!!a&&(!1===e||t)}}},558273:(e,a,t)=>{t.d(a,{NK:()=>u,P6:()=>o,ZE:()=>m,Zt:()=>p,_J:()=>r,_S:()=>A,cL:()=>g,jL:()=>l,oN:()=>n,rM:()=>h,sV:()=>c,sY:()=>d});var s=t(115557);let n=5e3,o=5e3/s.gJ,i=["Uploaded by user"],l=(e,a)=>!!a&&!e,r=e=>!!e&&5!==e,c=e=>["email","messages","deep_linking"].includes(e),d=e=>!!e&&"gif"===e,_=e=>"pinstory"===e,g=({embedSrc:e,embedSubtype:a,embedType:t})=>!!e&&!d(t)&&!_(a),h=({link:e,mobileLink:a,trackedLink:t})=>!a&&!t&&!e,m=e=>/pin.it/gim.test(e||""),p=({link:e,mobileLink:a,origImageUrl:t,trackedLink:s})=>a||s||e||t||"",u=(e,a)=>({deeplinkUri:{android:`pin/${e}/repin`,iOS:`repin/${e}`},mwebUri:{pathname:`/pin/${e}/repin/`,state:{trackingParams:a.state?a.state.trackingParams:""}}});function A(e){for(let a of i)if(e===a)return!1;return!0}},686769:(e,a,t)=>{t.d(a,{A:()=>i,Z:()=>l});var s=t(667294),n=t(883119),o=t(785893);let i=({fill:e})=>{let a="half"===e?(0,o.jsxs)(s.Fragment,{children:[(0,o.jsx)(n.xu,{position:"absolute",children:(0,o.jsx)(n.JO,{accessibilityLabel:"",color:"default",icon:"star-half",size:12})}),(0,o.jsx)(n.JO,{accessibilityLabel:"",color:"subtle",icon:"star",size:12})]}):(0,o.jsx)(n.JO,{accessibilityLabel:"",color:"full"===e?"default":"subtle",icon:"star",size:12});return(0,o.jsx)(n.xu,{dangerouslySetInlineStyle:{__style:{marginRight:"3px"}},"data-test-id":`rating-star-${e}`,display:"inlineBlock",children:a})};function l({max_rating:e,rating:a}){var t;let s=[],l=parseFloat(e)||5,r=5*(t=(t=parseFloat(a)||0)<=l?t:l)/l;if(Number.isNaN(r))return null;let c=Math.floor(r),d=r-c;return[...Array(c).keys()].forEach(e=>s.push((0,o.jsx)(i,{fill:"full"},e))),d>=.75?s.push((0,o.jsx)(i,{fill:"full"},s.length)):d>=.25&&s.push((0,o.jsx)(i,{fill:"half"},s.length)),[...Array(5-s.length).keys()].forEach(()=>s.push((0,o.jsx)(i,{fill:"empty"},s.length))),(0,o.jsx)(n.xu,{display:"inlineBlock",position:"relative",width:15*l,children:s})}},737244:(e,a,t)=>{function s({m:e=0,h:a=0}){let t;return t=a<=0?a:e>45?a+1:e>15?a+.5:a,{m:e,h:a,rm:a>0?0:e,rh:t}}function n(e){let a=Math.floor(e/3600);return s({m:Math.floor(e%3600/60),h:a})}t.d(a,{X:()=>s,u:()=>n})},598228:(e,a,t)=>{t.d(a,{Ag:()=>o,C0:()=>r,L1:()=>g,Vi:()=>i,YD:()=>_,kS:()=>n,oo:()=>l,p3:()=>h,vC:()=>c,vI:()=>d});var s=t(244413);let n="https://www.pinterest.com/business/hub/",o="https://www.pinterest.com/homefeed/",i="www.pinterest.com",l="https://help.pinterest.com",r=`${(0,s.Z)({site:"www"})}`,c=(0,s.Z)({site:"developers"}),d=`${(0,s.Z)({site:"sterling"})}`,_=`${(0,s.Z)({site:"analytics"})}`,g=`${(0,s.Z)({site:"trends"})}`,h=`${(0,s.Z)({site:"www",path:"/product-catalogs/data-source/?advertiserId="})}`},373543:(e,a,t)=>{t.d(a,{Z:()=>n});var s=t(623891);let n=({url:e})=>{if(e){let a=e.split("?");if(a[1])return(0,s.Z)(a[1])}return(0,s.Z)()}},194602:(e,a,t)=>{t.d(a,{Z:()=>l});var s=t(667294);let n=()=>()=>{},o=()=>!1,i=()=>!0,l=()=>(0,s.useSyncExternalStore)(n,o,i)},115557:(e,a,t)=>{t.d(a,{$f:()=>n,Cy:()=>r,DR:()=>s,Fm:()=>l,bR:()=>i,gJ:()=>o,lG:()=>c});let s=1,n=2,o=1e3,i=1e3,l=1e3,r=Object.freeze({DEFAULT:0,LOAD_START:1,LOADED_METADATA:2,LOADED_DATA:3,PLAYING:4,PAUSED:5,SEEKING:6,STALLING:7,FAILED:8,ENDED:9}),c=Object.freeze({MEDIA_ERR_ABORTED:1,MEDIA_ERR_NETWORK:2,MEDIA_ERR_DECODE:3,MEDIA_ERR_SRC_NOT_SUPPORTED:4})},198108:(e,a,t)=>{t.d(a,{Z:()=>o});var s=t(883119),n=t(785893);function o({iconAccessibilityLabel:e,icon:a,linkAccessibilityLabel:t,showNavigationIcon:o,text:i,backgroundColor:l="lightGray"}){return(0,n.jsxs)(s.kC,{alignItems:"stretch",justifyContent:"start",children:[(0,n.jsx)(s.xu,{"data-test-id":"ad-reason-icon",children:(0,n.jsx)(s.Sj,{accessibilityLabel:e,bgColor:l,icon:a,iconColor:"darkGray"})}),(0,n.jsx)(s.xu,{alignSelf:"center","data-test-id":"ad-location-targeting-reason",height:"100%",marginStart:2,children:(0,n.jsx)(s.xv,{children:i})}),o&&t&&(0,n.jsx)(s.kC,{direction:"column",justifyContent:"center",children:(0,n.jsx)(s.JO,{accessibilityLabel:t,color:"default",icon:"arrow-forward"})})]})}},179836:(e,a,t)=>{t.d(a,{ZP:()=>S,K1:()=>R,we:()=>T,nn:()=>M,zn:()=>I});var s,n=t(667294);t(167912);var o=t(214877),i=t(54977),l=t(5859),r=t(757640),c=t(149722),d=t(883119),_=t(930837),g=t(140017),h=t(339001),m=t(340523),p=t(702497),u=t(598228),A=t(198108),x=t(386008),P=t(785893);function y({brandName:e,language:a,geoRegion:t,geoPostalCode:s,ageBucketMatch:n,localeMatch:o,genderMatch:i,deviceMatch:l,isCustomerListMatched:r,isActAlikeMatched:_,isEngagementMatched:m,isFromGPSLocation:p,gender:u,isFirstPartyAdPersonalizationEnabled:y,isThirdPartyAdPersonalizationEnabled:f,keywordMatch:b}){let v=(0,g.ZP)(),{id:k}=(0,c.Z)(),j=(0,x.mN)()(k??""),w=j?.gender??"",z=""!==n||""!==i&&"unspecified"!==w||""!==l||""!==o||y&&m||y&&_||""!==t||y&&""!==s;return(0,P.jsx)(d.xu,{"data-test-id":"ad-reasons",children:(0,P.jsxs)(d.kC,{direction:"column",flex:"none",gap:{row:0,column:4},children:[!y&&(0,P.jsx)(A.Z,{icon:"pinterest",iconAccessibilityLabel:v._('Icon for ad targeting context', 'app.common.react.components.PinRep.components.AdReasons.context', 'Icon for ad targeting context'),text:(0,h.nk)(v._('Based on the context of the content you see in a session {{ onPinterest }}', 'app.common.react.components.PinRep.components.AdReasonsModal.context', 'Ad explanation for targeting context of content, onPinterest: on Pinterest Platform'),{onPinterest:(0,P.jsx)(d.xv,{inline:!0,weight:"bold",children:"on Pinterest"},"ad-reasons-platform-bucket")})}),""!==b&&(0,P.jsx)(A.Z,{icon:"search",iconAccessibilityLabel:v._('Icon for ad targeting keyword search', 'app.common.react.components.PinRep.components.AdReasons.keywordSearchIcon', 'Icon for ad targeting keyword search'),text:(0,h.nk)(v._('Because you searched for {{ keyword }}', 'app.common.react.components.PinRep.components.AdReasonsModal.keywordSearch', 'Ad explanation for targeting keyword search, keyword: Search keyword'),{keyword:(0,P.jsx)(d.xv,{inline:!0,weight:"bold",children:b},"ad-reasons-keyword-bucket")})}),(y||f)&&(0,P.jsx)(A.Z,{icon:"cog",iconAccessibilityLabel:v._('Icon for ad targeting user settings', 'app.common.react.components.PinRep.components.AdReasons.settings', 'Icon for ad targeting user settings'),text:v._('Depending on your privacy settings, because of your activities on and/or off Pinterest', 'app.common.react.components.PinRep.components.AdReasonsModal.settings', 'Ad explanation for targeting user settings')}),z&&(0,P.jsx)(A.Z,{icon:"person",iconAccessibilityLabel:v._('Icon for ad targeting advertiser name', 'app.common.react.components.PinRep.components.AdReasons.advertiserName', 'Icon for ad targeting advertiser name'),text:(0,h.nk)(v._('Because {{ advertiserName }} is trying to reach people:', 'app.common.react.components.PinRep.components.AdReasonsModal.advertiserName', 'Ad explanation for targeting advertiser name, advertiserName: advertiser name'),{advertiserName:(0,P.jsx)(d.xv,{inline:!0,weight:"bold",children:e},"ad-reasons-advertiserName-bucket")})}),(0,P.jsx)(d.xu,{marginStart:8,children:(0,P.jsxs)(d.aV,{label:(0,P.jsx)(d.xv,{children:(0,h.XB)({text:v._('Because {{ advertiserName }} is trying to reach people:', 'app.common.react.components.PinRep.components.AdReasonsModal.advertiserName', 'Ad explanation for targeting advertiser name, advertiserName: advertiser name'),markers:{advertiserName:e}})}),labelDisplay:"hidden",type:"unordered",children:[""!==n&&(0,P.jsx)(d.aV.Item,{text:(0,P.jsx)(d.xv,{children:(0,h.XB)({text:v._('Who have set their age within the <strong id="1">{{ ageBucketMatch }}</strong> age range', 'waista.modal.criteria.list.ageBucketRangeMatch', 'Ad explanation for targeting age range, ageBucketMatch: Users age range'),markers:{ageBucketMatch:n??""},jsxReplacements:{1:({innerHtmlStrings:e})=>(0,P.jsx)(d.xv,{inline:!0,weight:"bold",children:e},"ad-reasons-age-bucket")}})})}),!y&&""!==o&&(0,P.jsx)(d.aV.Item,{text:(0,P.jsx)(d.xv,{children:(0,h.XB)({text:v._('Who have set their language to <strong id="1">{{ language }}</strong>', 'app.common.react.components.PinRep.components.AdReasonsModal.languageMatch', 'Ad explanation for targeting language, language: Users language'),markers:{language:a??""},jsxReplacements:{1:({innerHtmlStrings:e})=>(0,P.jsx)(d.xv,{inline:!0,weight:"bold",children:e},"ad-reasons-language")}})})}),y&&""!==o&&(0,P.jsx)(d.aV.Item,{text:(0,P.jsx)(d.xv,{children:(0,h.XB)({text:v._('Primary language is <strong id="1">{{ language }}</strong>', 'app.common.react.components.PinRep.components.AdReasonsModal.primarylLanguageMatch', 'Ad explanation for targeting language, language: Users language'),markers:{language:a??""},jsxReplacements:{1:({innerHtmlStrings:e})=>(0,P.jsx)(d.xv,{inline:!0,weight:"bold",children:e},"ad-reasons-language")}})})}),!y&&""!==i&&"unspecified"!==w&&(0,P.jsx)(d.aV.Item,{text:(0,P.jsx)(d.xv,{children:(0,h.XB)({text:v._('Who have set their gender to <strong id="1">{{ gender }}</strong>', 'app.common.react.components.PinRep.components.AdReasonsModal.setGenderMatch', 'Ad explanation for targeting gender, gender: Users gender'),markers:{gender:u},jsxReplacements:{1:({innerHtmlStrings:e})=>(0,P.jsx)(d.xv,{inline:!0,weight:"bold",children:e},"ad-reasons-gender")}})})}),y&&""!==i&&"unspecified"!==w&&(0,P.jsx)(d.aV.Item,{text:(0,P.jsx)(d.xv,{weight:"bold",children:u})}),""!==l&&(0,P.jsx)(d.aV.Item,{text:v._('With your device type', 'app.common.react.components.PinRep.components.AdReasonsModal.deviceMatch', 'Ad explanation for targeting device')}),!y&&""!==t&&(0,P.jsx)(d.aV.Item,{text:(0,P.jsx)(d.xv,{children:(0,h.XB)({text:v._('In <strong id="1">{{ country }}</strong>', 'app.common.react.components.PinRep.components.AdReasonsModal.countryMatch', 'Ad explanation for targeting country, country: Users country'),markers:{country:t},jsxReplacements:{1:({innerHtmlStrings:e})=>(0,P.jsx)(d.xv,{inline:!0,weight:"bold",children:e},"ad-reasons-country")}})})}),y&&""!==t&&(0,P.jsx)(d.aV.Item,{text:(0,P.jsx)(d.xv,{children:(0,h.XB)({text:v._('Based in <strong id="1">{{ geoRegion }}</strong>', 'app.common.react.components.PinRep.components.AdReasonsModal.geoRegionMatch', 'Ad explanation for targeting geoRegion, geoRegion: Users geoRegion'),markers:{geoRegion:t},jsxReplacements:{1:({innerHtmlStrings:e})=>(0,P.jsx)(d.xv,{inline:!0,weight:"bold",children:e},"ad-reasons-geoRegion")}})})}),y&&""!==s&&(0,P.jsx)(d.aV.Item,{text:(0,P.jsx)(d.xv,{children:(0,h.XB)({text:v._('Based in <strong id="1">{{ geoPostalCode }}</strong>', 'app.common.react.components.PinRep.components.AdReasonsModal.geoPostalCodeMatch', 'Ad explanation for targeting geoPostalCode, geoPostalCode: Users geoPostalCode'),markers:{geoPostalCode:s},jsxReplacements:{1:({innerHtmlStrings:e})=>(0,P.jsx)(d.xv,{inline:!0,weight:"bold",children:e},"ad-reasons-geoPostalCode")}})})}),y&&m&&(0,P.jsx)(d.aV.Item,{text:v._('Who have interacted with their content on Pinterest', 'app.common.react.components.PinRep.components.AdReasonsModal.engagementMatch', 'Ad explanation for targeting engagement')}),y&&_&&(0,P.jsx)(d.aV.Item,{text:(0,P.jsx)(d.xv,{children:(0,h.XB)({text:v._('With similar demographic or interests as other <strong id="1">{{ brandName }}</strong> customers', 'app.common.react.components.PinRep.components.AdReasonsModal.actAlikeMatch', 'Ad explanation for targeting act alike, brandName: brand name'),markers:{brandName:e},jsxReplacements:{1:({innerHtmlStrings:e})=>(0,P.jsx)(d.xv,{inline:!0,weight:"bold",children:e},"ad-reasons-act-alike")}})})})]})}),y&&r&&(0,P.jsx)(A.Z,{icon:"menu",iconAccessibilityLabel:v._('Icon for ad targeting user on an audience list', 'app.common.react.components.PinRep.components.AdReasons.listIcon', 'Icon for ad targeting customer list'),text:(0,h.nk)(v._('Because you are on a list provided by {{ brandName }}', 'app.common.react.components.PinRep.components.AdReasonsModal.onCustomerListTargeting', 'Ad explanation for targeting customer list , brandName: promoter name'),{brandName:(0,P.jsx)(d.xv,{inline:!0,weight:"bold",children:e},"ad-reasons-customer-list")})}),y&&p&&(0,P.jsx)(A.Z,{icon:"location",iconAccessibilityLabel:v._('Icon for ad targeting user on GPS', 'app.common.react.components.PinRep.components.AdReasons.GPS', 'Icon for ad targeting GPS'),text:v._('Because of your GPS Location', 'app.common.react.components.PinRep.components.AdReasonsModal.GPSLocation', 'Ad explanation for targeting GPS')})]})})}var f=t(872111);function b({onDismiss:e,brandName:a,country:t,language:s,geoRegion:i,geoPostalCode:l,ageBucketMatch:r,localeMatch:c,interestMatch:x,genderMatch:b,deviceMatch:v,isCustomerListMatched:k,isActAlikeMatched:j,isEngagementMatched:w,isExpandTargetingMatched:z,isFromGPSLocation:R,isVisitorMatched:M,isShoppingProspectingMatched:T,isPlPersonaMatched:S,isFirstPartyAdPersonalizationEnabled:E,isThirdPartyAdPersonalizationEnabled:L,keywordMatch:C,thirdPartyAdAttributes:N,digitalMediaSourceType:B}){let{logContextEvent:D}=(0,o.v)(),{checkExperiment:F}=(0,m.F)(),G=F("web_waista_genai").anyEnabled,O=(0,g.ZP)(),Z=I(b,O),K=k||w||j||z||R||M||S||T||""!==r||""!==c||""!==Z||""!==i||""!==l||""!==C,U=N?.isEligibleForPromotedPartnership??!1,V={[f.s.TRAINED_ALGORITHMIC_MEDIA]:O._('This ad was made with AI', 'app.common.react.components.PinRep.components.made.with.AI.disclosure', 'Ad explanation for ad made with AI'),[f.s.COMPOSITE_WITH_TRAINED_ALGORITHMIC_MEDIA]:O._('This ad was modified with AI', 'app.common.react.components.PinRep.components.modified.with.AI.disclosure', 'Ad explanation for ad modified with AI'),[f.s.MULTI_PIN_TRAINED_ALGORITHMIC_MEDIA]:O._('Parts of this ad were made with AI', 'app.common.react.components.PinRep.components.part.made.with.AI.disclosure', 'Ad explanation for parts of ad made with AI')},W=G&&B&&V[B];return(0,n.useEffect)(()=>{W&&D({view_type:155,event_type:13,component:13756,element:15920})},[D,W]),(0,P.jsx)(_.ZP,{accessibilityModalLabel:O._('Why am I seeing this Ad?', 'app.common.react.components.PinRep.components.AdReasonsModal', 'Modal for explaining the reasons an advertiser is targeting a user'),onDismiss:e,children:(0,P.jsxs)(d.xu,{paddingX:8,paddingY:6,children:[(0,P.jsxs)(d.xu,{display:"flex",justifyContent:"center",marginBottom:6,position:"relative",children:[(0,P.jsx)(d.xu,{left:!0,position:"absolute",children:(0,P.jsx)(d.hU,{accessibilityLabel:O._('Close', 'app.common.react.components.PinRep.components.AdReasonsModal.closeModal', 'Close ad reasons modal'),icon:"cancel",iconColor:"darkGray",onClick:()=>{D({event_type:102,element:11925,component:13756}),e()},size:"sm"})}),(0,P.jsx)(d.X6,{align:"center",size:"500",children:O._('Why you\'re seeing this ad', 'Heading for promoted Pins explanation', 'Heading for promoted pins explanation, WAISTA ')})]}),(0,P.jsxs)(d.xu,{children:[(0,P.jsxs)(d.kC,{direction:"column",gap:{row:0,column:4},children:[K&&U&&(0,P.jsx)(d.xu,{"data-test-id":"waista-reason-pre-text-partnership",marginBottom:4,children:(0,P.jsx)(d.xv,{children:(0,h.nk)(O._('{{ promotedPartnershipAdvertiserName }} paid, through a partnership with {{ promotedPartnershipAttributionName }}, to have this Pin show up where you\'d be more likely to notice it. Based on what you\'ve told us or other information, we think you fit some of those groups:', 'app.common.react.components.PinRep.components.AdReasonsModal.WAISTAaudienceExplanation', 'Text informing the user about who should be the advertiser\'s target audience, for WAISTA promotedPartnershipAdvertiserName: Name of advertiser, promotedPartnershipAttributionName:Name of promoted partner'),{promotedPartnershipAdvertiserName:N?.promotedPartnershipAdvertiserName,promotedPartnershipAttributionName:N?.promotedPartnershipAttributionName})})}),K&&!U&&(0,P.jsx)(d.xu,{"data-test-id":"waista-reason-pre-text",marginBottom:4,children:(0,P.jsx)(d.xv,{children:O._('You may be seeing this ad:', 'app.common.react.components.PinRep.components.AdReasonsModal.WAISTAReasonExplanation', 'text informing below will be WAISTA explanation')})})]}),(0,P.jsx)(d.xu,{"data-test-id":"ad-reasons",children:(0,P.jsxs)(d.kC,{direction:"column",flex:"none",gap:{row:0,column:4},children:[(0,P.jsx)(y,{ageBucketMatch:r,brandName:a,country:t,deviceMatch:v,gender:Z,genderMatch:b,geoPostalCode:l,geoRegion:i,interestMatch:x,isActAlikeMatched:j,isCustomerListMatched:k,isEngagementMatched:w,isExpandTargetingMatched:z,isFirstPartyAdPersonalizationEnabled:E,isFromGPSLocation:R,isPlPersonaMatched:S,isShoppingProspectingMatched:T,isThirdPartyAdPersonalizationEnabled:L,isVisitorMatched:M,keywordMatch:C,language:s,localeMatch:c}),K&&(0,P.jsx)(d.xu,{marginBottom:1,children:(0,P.jsx)(d.xv,{children:O._('There could also be more factors not listed here.', 'app.common.react.components.PinRep.components.AdReasonsModal.moreFactorsText', 'text informing there could also be more factors')})}),K&&(0,P.jsx)(d.xu,{marginBottom:1,children:(0,P.jsx)(d.xv,{children:(0,h.nk)(O._('If this isn\'t right, {{ changeUserSettings }}', 'app.common.react.components.PinRep.components.AdReasonsModal.changeUserSettingsText', 'Text explaining how to update personal information, changeUserSettings: link to personal settings'),{changeUserSettings:(0,P.jsx)(d.xv,{inline:!0,weight:"normal",children:(0,P.jsx)(d.rU,{display:"inline",href:`${u.C0}${p.AHp}`,onClick:()=>{D({event_type:101,component:13756,element:13361})},target:"blank",children:O._('update your personal information', 'app.common.react.components.PinRep.components.AdReasonsModal.changeUserSettings', 'Link for updating personal information')})},"ad-reasons-change-user-settings")})})}),W&&(0,P.jsx)(d.xu,{children:(0,P.jsx)(A.Z,{backgroundColor:"white",icon:"sparkle",iconAccessibilityLabel:O._('Icon for genAI WAISTA disclosure', 'app.common.react.components.PinRep.components.AI.waista.disclosure', 'Icon for  genAI WAISTA disclosure'),text:V[B]})})]})}),(0,P.jsxs)(d.kC,{direction:"column",gap:{row:0,column:1},children:[(0,P.jsx)(d.xu,{"data-test-id":"pins-ads",marginBottom:1,marginTop:1,children:(0,P.jsx)(d.X6,{size:"400",children:O._('Ads on Pinterest', 'app.common.react.components.PinRep.components.AdReasonsModal.adsOnPinterestHeading', 'Text for explaining Ads on Pinterest')})}),(0,P.jsx)(d.xu,{marginBottom:4,children:(0,P.jsx)(d.xv,{children:(0,h.nk)(O._('Review your {{adPreferencesLink}} to change your ad preferences.', 'app.common.react.components.PinRep.components.AdReasonsModal.change.adPreferencesText', 'Text showing where to change your ad preferences, adPreferencesLink: link to privacy settings'),{adPreferencesLink:(0,P.jsx)(d.xu,{"data-test-id":"ad-reasons-review-ad-preferences",display:"inlineBlock",children:(0,P.jsx)(d.xv,{inline:!0,weight:"normal",children:(0,P.jsx)(d.rU,{display:"inline",href:`${u.C0}${p.Gxc}`,onClick:()=>{D({event_type:101,component:13756,element:13401})},target:"blank",children:O._('Privacy Settings', 'app.common.react.components.PinRep.components.AdReasonsModal.privacy.settings', 'Privacy settings link')})},"ad-reasons-review-ad-preferences")})})})}),(0,P.jsx)(d.xu,{"data-test-id":"privacy-link",marginBottom:4,children:(0,P.jsx)(d.xv,{children:(0,h.nk)(O._('For more about how we collect and use data, read our {{ privacyPolicyLink }}', 'app.common.react.components.PinRep.components.AdReasonsModal.readPrivacyPolicyText', 'Text explaining how we collect and use data, privacyPolicyLink: link to privacy policy Page'),{privacyPolicyLink:(0,P.jsx)(d.xu,{"data-test-id":"ad-reasons-privacy-policy",children:(0,P.jsx)(d.xv,{inline:!0,weight:"normal",children:(0,P.jsx)(d.rU,{display:"inline",href:p.R_9,onClick:()=>{D({event_type:101,component:13756,element:13402})},target:"blank",children:O._('Privacy Policy', 'app.common.react.components.PinRep.components.AdReasonsModal.privacyPolicyLinkUrl', 'Privacy policy link about how data is collected and used')})},"ad-reasons-privacy-policy")})})})}),(0,P.jsx)(d.xu,{marginBottom:4,children:(0,P.jsx)(d.xv,{children:(0,h.nk)(O._('To stop seeing content from an advertiser, {{ blockAccounts }}', 'app.common.react.components.PinRep.components.AdReasonsModal.privacyPolicyText', 'Text explaining how to block an advertiser profile, blockAccounts: link to how to block accounts'),{blockAccounts:(0,P.jsx)(d.xu,{"data-test-id":"ad-reasons-block-accounts",children:(0,P.jsx)(d.xv,{inline:!0,weight:"normal",children:(0,P.jsx)(d.rU,{display:"inline",href:p.K_Y,onClick:()=>{D({event_type:101,component:13756,element:12058})},target:"blank",children:O._('learn how to block accounts', 'app.common.react.components.PinRep.components.AdReasonsModal.blockAccountLink', 'Link for how to block accounts')})},"ad-reasons-block-accounts")})})})})]})]})]})})}let v=void 0!==s?s:s=t(638966),k=e=>e._('Female', 'waista.modal.attribute.female', 'Gender attribute for female'),j=e=>e._('Male', 'waista.modal.attribute.male', 'Gender attribute for male'),w=e=>e._('Web', 'waista.modal.attribute.web', 'device attribute for web'),z=e=>e._('Mobile Web', 'waista.modal.attribute.mWeb', 'device attribute for mobile web');function R(e,a){let{name:t=""}=e.find(e=>e.key===a)??{};return t}function I(e,a){return"FEMALE"===e?k(a):"MALE"===e?j(a):""}function M(e,a){return"AppType_WEB"===e||"AppType_WEB_DENZEL"===e?w(a):"AppType_WEB_MOBILE"===e?z(a):""}function T(e,a){let{name:t=""}=e.find(e=>e.key===a)??{};return t}function S({pinKey:e,onDismiss:a}){let{logContextEvent:t}=(0,o.v)(),{locale:s}=(0,l.B)(),{country:d=""}=(0,c.Z)(),_=(0,r.Z)({name:"CountriesResource",options:{hasEmptyState:!0}}),g=(0,r.Z)({name:"LocalesResource"}),h=(0,i.Z)(v,e);(0,n.useEffect)(()=>{t({view_type:155,event_type:120,component:13756})},[t]);let m=h?.adTargetingAttribution?.isFirstPartyAdPersonalizationEnabled??!1,p=h?.adTargetingAttribution?.isThirdPartyAdPersonalizationEnabled??!1,{promoter:u,isEligibleForPromotedPartnership:A,promotedPartnershipAttributionName:x,promotedPartnershipAdvertiserName:y}=h??{},{isCustomerListMatched:f=!1,isActalikeMatched:k=!1,isEngagementMatched:j=!1,isExpandTargetingMatched:w=!1,isFromGpsLocation:z=!1,isVisitorMatched:I=!1,isShoppingProspectingMatched:M=!1,isPlPersonaMatched:S=!1,matchedAgeBucket:E="",matchedLocale:L="",matchedInterest:C="",matchedGender:N="",matchedDevice:B="",matchedKeyword:D="",geoRegion:F="",geoPostalCode:G=""}=function(e=null,a=4){return e&&Object.keys(e).filter(a=>"boolean"==typeof e[a]||"string"==typeof e[a]).filter(a=>!1!==e[a]&&""!==e[a]).slice(0,a).reduce((a,t)=>({...a,[t]:e[t]}),{})}({isCustomerListMatched:h?.adTargetingAttribution?.isCustomerListMatched??!1,isActalikeMatched:h?.adTargetingAttribution?.isActalikeMatched??!1,isEngagementMatched:h?.adTargetingAttribution?.isEngagementMatched??!1,isExpandTargetingMatched:h?.adTargetingAttribution?.isExpandTargetingMatched??!1,isFromGpsLocation:h?.adTargetingAttribution?.isFromGpsLocation??!1,isVisitorMatched:h?.adTargetingAttribution?.isVisitorMatched??!1,isShoppingProspectingMatched:h?.adTargetingAttribution?.isShoppingProspectingMatched??!1,isPlPersonaMatched:h?.adTargetingAttribution?.isPlPersonaMatched??!1,matchedAgeBucket:h?.adTargetingAttribution?.matchedAgeBucket??"",matchedLocale:h?.adTargetingAttribution?.matchedLocale??"",matchedInterest:h?.adTargetingAttribution?.matchedInterest??"",matchedGender:h?.adTargetingAttribution?.matchedGender??"",matchedDevice:h?.adTargetingAttribution?.matchedDevice??"",matchedKeyword:h?.adTargetingAttribution?.matchedKeyword??"",geoRegion:h?.adTargetingAttribution?.geoRegion??"",geoPostalCode:h?.adTargetingAttribution?.geoPostalCode??"",digitalMediaSourceType:h?.digitalMediaSourceType??null})??{},O=u?.fullName??"",Z=R(_.data??[],d),K=T(g.data??[],s),U=u?.username??"";return(0,P.jsx)(b,{ageBucketMatch:E,brandName:O,country:Z,deviceMatch:B,digitalMediaSourceType:h?.digitalMediaSourceType,genderMatch:N,geoPostalCode:G,geoRegion:F,interestMatch:C,isActAlikeMatched:k,isCustomerListMatched:f,isEngagementMatched:j,isExpandTargetingMatched:w,isFirstPartyAdPersonalizationEnabled:m,isFromGPSLocation:z,isPlPersonaMatched:S,isShoppingProspectingMatched:M,isThirdPartyAdPersonalizationEnabled:p,isVisitorMatched:I,keywordMatch:D,language:K,localeMatch:L,onDismiss:a,thirdPartyAdAttributes:{isEligibleForPromotedPartnership:A,promotedPartnershipAttributionName:x,promotedPartnershipAdvertiserName:y},userName:U})}},872111:(e,a,t)=>{t.d(a,{Z:()=>p,s:()=>m});var s=t(667294),n=t(883119),o=t(140017),i=t(339001),l=t(5859),r=t(757640),c=t(149722),d=t(198108),_=t(179836),g=t(386008),h=t(785893);let m={DIGITAL_CAPTURE:0,NEGATIVE_FILM:1,POSITIVE_FILM:2,PRINT:3,MINOR_HUMAN_EDITS:4,COMPOSITE_CAPTURE:5,ALGORITHMICALLY_ENHANCED:6,DATA_DRIVEN_MEDIA:7,DIGITAL_ART:8,VIRTUAL_RECORDING:9,COMPOSITE_SYNTHETIC:10,TRAINED_ALGORITHMIC_MEDIA:11,COMPOSITE_WITH_TRAINED_ALGORITHMIC_MEDIA:12,ALGORITHMIC_MEDIA:13,SOFTWARE_IMAGE:14,MULTI_PIN_TRAINED_ALGORITHMIC_MEDIA:15};function p({promoterFullName:e,geoRegionAttribute:a,geoPostalCodeAttribute:t,isCustomerListMatched:m,isActalikeMatched:p,isEngagementMatched:u,isFromGPSLocation:A,matchedAgeBucket:x,matchedGender:P,matchedLocale:y,matchedDevice:f,matchedKeyword:b,isFirstPartyAdPersonalizationEnabled:v,isThirdPartyAdPersonalizationEnabled:k}){let j=(0,o.ZP)(),{id:w}=(0,c.Z)(),z=(0,g.mN)()(w??""),R=z?.gender??"",I=(0,_.zn)(P,j);I="unspecified"===R?"":I;let M=(0,_.nn)(f,j),{locale:T}=(0,l.B)(),S=(0,r.Z)({name:"LocalesResource"}),{country:E=""}=(0,c.Z)(),L=(0,r.Z)({name:"CountriesResource",options:{hasEmptyState:!0}}),C=(0,_.K1)(L.data??[],E),N=""!==x||""!==P&&"unspecified"!==R||!v&&""!==C||""!==M||""!==y||v&&u||v&&p||""!==a||v&&""!==t;return(0,h.jsx)(n.xu,{"data-test-id":"waista",children:(0,h.jsxs)(n.kC,{direction:"column",flex:"none",gap:{row:0,column:4},children:[!v&&(0,h.jsx)(d.Z,{icon:"pinterest",iconAccessibilityLabel:j._('Icon for ad targeting context', 'waista.modal.criteria.list.contexticon', 'Icon for ad targeting context'),text:(0,i.XB)({text:j._('Based on the context of the content you see in a session <strong id="1">on Pinterest</strong>', 'waista.modal.criteria.list.context', 'Ad explanation for targeting context of content, onPinterest: on Pinterest Platform'),jsxReplacements:{1:({innerHtmlStrings:e})=>(0,h.jsx)(n.xv,{inline:!0,weight:"bold",children:e},"waista-platform-bucket")}})}),""!==b&&(0,h.jsx)(d.Z,{icon:"search",iconAccessibilityLabel:j._('Icon for ad targeting keyword search', 'waista.modal.criteria.list.keywordSearchIcon', 'Icon for ad targeting keyword search'),text:(0,i.XB)({text:j._('Because you searched for <strong id="1">{{ keyword }}</strong>', 'waista.modal.criteria.list.keywordSearch', 'Ad explanation for targeting keyword search. keyword: Search keyword'),markers:{keyword:b??""},jsxReplacements:{1:({innerHtmlStrings:e})=>(0,h.jsx)(n.xv,{inline:!0,weight:"bold",children:e},"waista-keyword-bucket")}})}),(v||k)&&(0,h.jsx)(d.Z,{icon:"cog",iconAccessibilityLabel:j._('Icon for ad targeting user settings', 'waista.modal.criteria.list.settings', 'Icon for ad targeting user settings'),text:j._('Depending on your privacy settings, because of your activities on and/or off Pinterest', 'waista.modal.criteria.list.settings', 'Ad explanation for targeting user settings')}),N&&(0,h.jsx)(d.Z,{icon:"person",iconAccessibilityLabel:j._('Icon for ad targeting advertiser name', 'waista.modal.criteria.list.advertiserName', 'Icon for ad targeting advertiser name'),text:(0,i.XB)({text:j._('Because <strong id="1">{{ advertiserName }}</strong> is trying to reach people:', 'waista.modal.criteria.list.advertiserName', 'Ad explanation for targeting advertiser name, advertiserName: advertiser name'),markers:{advertiserName:e},jsxReplacements:{1:({innerHtmlStrings:e})=>(0,h.jsx)(n.xv,{inline:!0,weight:"bold",children:e},"waista-advertiserName-bucket")}})}),(0,h.jsx)(n.xu,{marginStart:8,children:(0,h.jsxs)(n.aV,{label:(0,h.jsx)(n.xv,{children:(0,i.XB)({text:j._('Because {{ advertiserName }} is trying to reach people:', 'waista.modal.criteria.list.advertiserName', 'Ad explanation for targeting advertiser name, advertiserName: advertiser name'),markers:{advertiserName:e}})}),labelDisplay:"hidden",type:"unordered",children:[""!==x&&(0,h.jsx)(n.aV.Item,{text:(0,h.jsx)(n.xv,{children:(0,i.XB)({text:j._('Who have set their age within the <strong id="1">{{ ageBucketMatch }}</strong> age range', 'waista.modal.criteria.list.ageBucketRangeMatch', 'Ad explanation for targeting age range, ageBucketMatch: Users age range'),markers:{ageBucketMatch:x??""},jsxReplacements:{1:({innerHtmlStrings:e})=>(0,h.jsx)(n.xv,{inline:!0,weight:"bold",children:e},"waista-age-bucket")}})})}),!v&&""!==y&&(0,h.jsxs)(s.Fragment,{children:[(0,h.jsx)(n.aV.Item,{text:(0,h.jsx)(n.xv,{children:(0,i.XB)({text:j._('Who have set their language to <strong id="1">{{ language }}</strong>', 'waista.modal.criteria.list.languageMatch', 'Ad explanation for targeting language, language: Users language'),markers:{language:(0,_.we)(S.data??[],T)},jsxReplacements:{1:({innerHtmlStrings:e})=>(0,h.jsx)(n.xv,{inline:!0,weight:"bold",children:e},"waista-language")}})})}),(0,h.jsx)(n.aV.Item,{text:(0,h.jsx)(n.xv,{children:(0,i.XB)({text:j._('Who have set their language to <strong id="1">{{ language }}</strong>', 'waista.modal.criteria.list.languageMatch', 'Ad explanation for targeting language, language: Users language, bulletPoint: leading bullet point'),markers:{language:(0,_.we)(S.data??[],T)},jsxReplacements:{1:({innerHtmlStrings:e})=>(0,h.jsx)(n.xv,{inline:!0,weight:"bold",children:e},"waista-language")}})})})]}),v&&""!==y&&(0,h.jsx)(n.aV.Item,{text:(0,h.jsx)(n.xv,{children:(0,i.XB)({text:j._('Primary language is <strong id="1">{{ language }}</strong>', 'waista.modal.criteria.list.primarylLanguageMatch', 'Ad explanation for targeting language, language: Users languag'),markers:{language:(0,_.we)(S.data??[],T)},jsxReplacements:{1:({innerHtmlStrings:e})=>(0,h.jsx)(n.xv,{inline:!0,weight:"bold",children:e},"waista-language")}})})}),!v&&""!==P&&""!==I&&(0,h.jsx)(n.aV.Item,{text:(0,h.jsx)(n.xv,{children:(0,i.XB)({text:j._('Who have set their gender to <strong id="1">{{ gender }}</strong>', 'waista.modal.criteria.list.setGenderMatch', 'Ad explanation for targeting gender, gender: the user\'s gender'),markers:{gender:I},jsxReplacements:{1:({innerHtmlStrings:e})=>(0,h.jsx)(n.xv,{inline:!0,weight:"bold",children:e},"waista-gender")}})})}),v&&""!==P&&""!==I&&(0,h.jsx)(n.aV.Item,{text:(0,h.jsx)(n.xv,{inline:!0,weight:"bold",children:I})}),""!==M&&(0,h.jsx)(n.aV.Item,{text:j._('With your device type', 'waista.modal.criteria.list.deviceMatch', 'Ad explanation for targeting device')}),!v&&""!==a&&(0,h.jsx)(n.aV.Item,{text:(0,h.jsx)(n.xv,{children:(0,i.XB)({text:j._('In <strong id="1">{{ country }}</strong>', 'waista.modal.criteria.list.countryMatch', 'Ad explanation for targeting country, country: the user\'s country'),markers:{country:E},jsxReplacements:{1:({innerHtmlStrings:e})=>(0,h.jsx)(n.xv,{inline:!0,weight:"bold",children:e},"waista-country")}})})}),v&&""!==a&&(0,h.jsx)(n.aV.Item,{text:(0,h.jsx)(n.xv,{children:(0,i.XB)({text:j._('Based in <strong id="1">{{ geoRegion }}</strong>', 'waista.modal.criteria.list.geoRegionMatch', 'Ad explanation for targeting geoRegion, geoRegion: Users geoRegion'),markers:{geoRegion:a??""},jsxReplacements:{1:({innerHtmlStrings:e})=>(0,h.jsx)(n.xv,{inline:!0,weight:"bold",children:e},"waista-geoRegion")}})})}),v&&""!==t&&(0,h.jsx)(n.aV.Item,{text:(0,h.jsx)(n.xv,{children:(0,i.XB)({text:j._('Based in <strong id="1">{{ geoPostalCodeAttribute }}</strong>', 'waista.modal.criteria.list.geoPostalCodeAttributeMatch', 'Ad explanation for targeting geoPostalCodeAttribute, geoPostalCodeAttribute: Users geoPostalCodeAttribute'),markers:{geoPostalCodeAttribute:t??""},jsxReplacements:{1:({innerHtmlStrings:e})=>(0,h.jsx)(n.xv,{inline:!0,weight:"bold",children:e},"waista-geoPostalCodeAttribute")}})})}),v&&u&&(0,h.jsx)(n.aV.Item,{text:j._('Who have interacted with their content on Pinterest', 'waista.modal.criteria.list.engagementMatch', 'Ad explanation for targeting engagement')}),v&&p&&(0,h.jsx)(n.aV.Item,{text:(0,h.jsx)(n.xv,{children:(0,i.XB)({text:j._('With similar demographic or interests as other <strong id="1">{{ brandName }}</strong> customers', 'waista.modal.criteria.list.actAlikeMatch', 'Ad explanation for targeting act alike, brandName: brand name'),markers:{brandName:e??""},jsxReplacements:{1:({innerHtmlStrings:e})=>(0,h.jsx)(n.xv,{inline:!0,weight:"bold",children:e},"waista-act-alike")}})})})]})}),v&&m&&(0,h.jsx)(d.Z,{icon:"menu",iconAccessibilityLabel:j._('Icon for ad targeting user on an audience list', 'waista.modal.criteria.list.listIcon', 'Icon for ad targeting customer list'),text:(0,i.XB)({text:j._('Because you are on a list provided by <strong id="1">{{ brandName }}</strong>', 'waista.modal.criteria.list.onCustomerListTargeting', 'Ad explanation for targeting customer list , brandName: promoter name'),markers:{brandName:e??""},jsxReplacements:{1:({innerHtmlStrings:e})=>(0,h.jsx)(n.xv,{inline:!0,weight:"bold",children:e},"waista-customer-list")}})}),v&&A&&(0,h.jsx)(d.Z,{icon:"location",iconAccessibilityLabel:j._('Icon for ad targeting user on GPS', 'waista.modal.criteria.list.GPS', 'Icon for ad targeting GPS'),text:j._('Because of your GPS Location', 'waista.modal.criteria.list.GPSLocation', 'Ad explanation for targeting GPS')})]})})}},638365:(e,a,t)=>{t.d(a,{Z:()=>s});function s(e,a){return e||`${a||""}~0`}},323294:(e,a,t)=>{t.d(a,{AH:()=>d,CK:()=>c,Fc:()=>l,Wj:()=>i,Xe:()=>o,kb:()=>r,wS:()=>n,zX:()=>_});var s=t(872111);let n=(e,a,t,s)=>a||(e?e.official_user:t||s);function o({hasLinkDomain:e,hasNativeCreator:a,hasOriginPinner:t,pinDomain:s,sourceUserUsername:n,sourceUserFullName:o}){return!a&&(e||t)&&n?{pinCreditLink:`/${n}/`,pinCredit:o}:{pinCreditLink:void 0,pinCredit:!a&&e?s:""}}let i=({i18n:e,hasLinkDomain:a,hasRichMetadataArticle:t,hasRichMetadataRecipeCategorizedIngredients:s,hasRichMetadataTutorial:n,richMetadataRecipeFromAggregatedData:o})=>(!a||o)&&e._('Saved by ', 'Closeup pin annotation', 'Closeup pin annotation')||n&&e._('Saved from ', 'pin annotation', 'pin annotation')||s&&e._('Recipe from ', 'pin annotation', 'pin annotation')||t&&e._('Article from ', 'pin annotation', 'pin annotation')||e._('From ', 'Closeup pin annotation', 'Closeup pin annotation');function l({i18n:e,hasRichMetadataProductOfferSummary:a,richMetadataProductName:t,richSummaryProductName:s,hasRichSummaryProductOfferSummary:n}){return a&&t||!a&&s&&n?e._('Product sold by ', 'pin annotation', 'pin annotation'):""}let r=({hasLinkDomain:e,richMetadata:a,richSummary:t})=>e&&!a?.recipe?.fromAggregatedData&&a?.products&&a.products[0]&&a.products[0].name&&a.products[0].offerSummary?a.products[0].offerSummary:t?.products&&t.products[0]&&t.products[0].name&&t.products[0].offerSummary?t.products[0].offerSummary:void 0,c=({hasRichMetadata:e,hasRichMetadataProducts:a,hasRichMetadataArticle:t,hasRichMetadataRecipe:s})=>e?a?144:t?141:s?145:139:140,d=e=>!!e&&!e.startsWith("https://i.pinimg.com"),_=e=>!!e&&[s.s.TRAINED_ALGORITHMIC_MEDIA,s.s.COMPOSITE_WITH_TRAINED_ALGORITHMIC_MEDIA].includes(e)}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/95029-6f4ec805bdc2d6d2.mjs.map