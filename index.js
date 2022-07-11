/*! loadCSS. [c]2017 Filament Group, Inc. MIT License */
!function(a){"use strict";var b=function(b,c,d){function e(a){return h.body?a():void setTimeout(function(){e(a)})}function f(){i.addEventListener&&i.removeEventListener("load",f);if(!Shopify.designMode)i.media=d||"all"}var g,h=a.document,i=h.createElement("link");if(c)g=c;else{var j=(h.body||h.getElementsByTagName("head")[0]).childNodes;g=j[j.length-1]}var k=h.styleSheets;i.rel="stylesheet",i.href=b,i.media=Shopify.designMode?d||"all":"only x",e(function(){g.parentNode.insertBefore(i,c?g:g.nextSibling)});var l=function(a){for(var b=i.href,c=k.length;c--;)if(k[c].href===b)return a();setTimeout(function(){l(a)})};return i.addEventListener&&i.addEventListener("load",f),i.onloadcssdefined=l,l(f),i};"undefined"!=typeof exports?exports.loadCSS=b:a.loadCSS=b}("undefined"!=typeof global?global:this);
/*! onloadCSS. (onload callback for loadCSS) [c]2017 Filament Group, Inc. MIT License */
function onloadCSS(a,b){function c(){!d&&b&&(d=!0,b.call(a))}var d;a.addEventListener&&a.addEventListener("load",c),a.attachEvent&&a.attachEvent("onload",c),"isApplicationInstalled"in navigator&&"onloadcssdefined"in a&&a.onloadcssdefined(c)}

// Insert our stylesheet before our preload <link> tag
var preload = document.querySelector('link[href="//cdn.shopify.com/s/files/1/0495/4865/6803/t/3/assets/theme.scss.css?v=6526546575995164981621989165"]');
var stylesheet = loadCSS('//cdn.shopify.com/s/files/1/0495/4865/6803/t/3/assets/theme.scss.css?v=6526546575995164981621989165', preload);
// Create a property to easily detect if the stylesheet is done loading
onloadCSS(stylesheet, function() { stylesheet.loaded = true; });

var theme = {
              stylesheet: "//cdn.shopify.com/s/files/1/0495/4865/6803/t/3/assets/theme.scss.css?v=6526546575995164981621989165",
              modelViewerUiSprite: "//cdn.shopify.com/s/files/1/0495/4865/6803/t/3/assets/model-viewer-ui-sprite.svg?v=51012726060321609211602870177",
              plyrSprite: "//cdn.shopify.com/s/files/1/0495/4865/6803/t/3/assets/plyr-sprite.svg?v=50389300931231853141602870177",
              strings: {
                addToCart: "Add to Cart",
                soldOut: "Sold Out",
                unavailable: "Unavailable",
                addItemSuccess: "Item added to cart!",
                viewCart: "View cart",
                cartError: "There was an error while updating your cart. Please try again.",
                cartQuantityError: "You can only add [quantity] [title] to your cart.",
                regularPrice: "Regular price",
                salePrice: "Sale price",
                unitPrice: "Unit price",
                unitPriceSeparator: "per",
                newsletter: {
                  blankError: "Email can\u0026#39;t be blank.",
                  invalidError: "Please enter a valid email address."
                },
                map: {
                  zeroResults: "No results for that address",
                  overQueryLimit: "You have exceeded the Google API usage limit. Consider upgrading to a \u003ca href=\"https:\/\/developers.google.com\/maps\/premium\/usage-limits\"\u003ePremium Plan\u003c\/a\u003e.",
                  authError: "There was a problem authenticating your Google Maps API Key.",
                  addressError: "Error looking up that address"
                },
                slideshow: {
                  loadSlideA11yString: "Load slide [slide_number]",
                  activeSlideA11yString: "Slide [slide_number], current"
                }
              },
              isOnline: true,
              moneyFormat: "${{amount}}",
              mediaQuerySmall: 750,
              mediaQueryMedium: 990
            };
        
document.documentElement.className = document.documentElement.className.replace('supports-no-js', '');

const html = document.documentElement;
const canvas = document.getElementById("title");
// const context = canvas.getContext("2d");
const context3d = canvas.getContext("3d");