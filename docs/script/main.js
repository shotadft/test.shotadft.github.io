$(function() {setUpAccordion();headerFunc();loadingImg();pagetopFunc();$("a[href^=\"#\"]").click(function(){var a=$(this).attr("href"),b=$("#"==a||""==a?"html":a),c=b.offset().top;return $("html, body").animate({scrollTop:c},10,"swing"),!1});});function pagetopFunc() {const pagetopEle = $("#page_top");pagetopEle.hide();$(document).scroll(function(){80<$(document).scrollTop()?pagetopEle.fadeIn():pagetopEle.fadeOut()});}function headerFunc() {$('#js-hamburger').click(function() {$('#js-hamburger').toggleClass('active')&&$('#js-hamburger').attr('aria-label', (_, attr) => attr == 'HamburgerMenu' ? 'ClosedHamburgerMenu' : 'HamburgerMenu');($('#js-nav').toggleClass('active'))});}function loadingImg(){$img = $('img');$img.originSrc = $img.src;$img.src = "";$img.bind('load', function() {$(this).attr("style","background-image:none;");});$img.src = $img.originSrc;}const setUpAccordion = () => {const c = document.querySelectorAll(".js-details"), e = "is-opened"; c.forEach(b => {const a = b.querySelector(".js-details-summary"), f = b.querySelector(".js-content"); a.addEventListener("click", a => { a.preventDefault(), b.classList.contains(e) ? (b.classList.toggle(e), closingAnim(f, b).restart()) : (b.classList.toggle(e), b.setAttribute("open", "true"), openingAnim(f).restart()) });});}, closingAnim = (c, a) => gsap.to(c, { height: 0, opacity: 0, duration: .4, ease: "power3.out", overwrite: !0, onComplete: () => {a.removeAttribute("open");}}), openingAnim = b => gsap.fromTo(b, { height: 0, opacity: 0 }, { height: "auto", opacity: 1, duration: .4, ease: "power3.out", overwrite: !0 });/*const ua=navigator.userAgent,referrer=document.referrer;function isPhone() {return!!(ua.indexOf("iPhone")||(ua.indexOf("iPhone")&&ua.lastIndexOf("CriOS/19.0.1084.60")))}function is3DS() {return!!(ua.matchAll(/Mozilla\/5\.0 (Nintendo 3DS; U; ; ja) Version\/1\.7567\.JP/))}function isNew3DS() {return!!(ua.matchAll(/Mozilla\/5.0 (New Nintendo 3DS like iPhone) AppleWebKit\/536\.30 (KHTML, like Gecko) NX\/3\.0\.0\.5\.10 Mobile NintendoBrowser\/1\.1\.9996\.JP/))}function isPS() {return!!(ua.indexOf("PlayStation")&&ua.indexOf("(KHTML, like Gecko)"))}function isNSW() {return!!(ua.matchAll(/Mozilla\/5\.0 (Nintendo Switch; ShareApplet) AppleWebKit\/601\.6 (KHTML, like Gecko) NF\/4\.0\.0\.5\.9 NintendoBrowser\/5\.1\.0\.13341/))}*/
