$(function() {setUpAccordion();const referrer = document.referrer;$("a[href^=\"#\"]").click(function(){var a=$(this).attr("href"),b=$("#"==a||""==a?"html":a),c=b.offset().top;return $("html, body").animate({scrollTop:c},10,"swing"),!1});$('#js-hamburger').click(function() {$('#js-hamburger').toggleClass('active')&&$('#js-hamburger').attr('aria-label', (_, attr) => attr == 'HamburgerMenu' ? 'ClosedHamburgerMenu' : 'HamburgerMenu');($('#js-nav').toggleClass('active'))});const pagetopEle = $("#page_top");pagetopEle.hide();$(document).scroll(function(){80<$(document).scrollTop()?pagetopEle.fadeIn():pagetopEle.fadeOut()});/*function isSmartPhone() { return !!navigator.userAgent.match(/iPhone|Android.+Mobile/);}*/});const setUpAccordion = () => {const c = document.querySelectorAll(".js-details"), e = "is-opened"; c.forEach(b => {const a = b.querySelector(".js-details-summary"), f = b.querySelector(".js-content"); a.addEventListener("click", a => { a.preventDefault(), b.classList.contains(e) ? (b.classList.toggle(e), closingAnim(f, b).restart()) : (b.classList.toggle(e), b.setAttribute("open", "true"), openingAnim(f).restart()) });});}, closingAnim = (c, a) => gsap.to(c, { height: 0, opacity: 0, duration: .4, ease: "power3.out", overwrite: !0, onComplete: () => {a.removeAttribute("open");}}), openingAnim = b => gsap.fromTo(b, { height: 0, opacity: 0 }, { height: "auto", opacity: 1, duration: .4, ease: "power3.out", overwrite: !0 });
createImageBitmap(toBlob(dataURL)).then(bitmap => {
    canvas.width = bitmap.width;
    canvas.height = bitmap.height;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(bitmap, 0, 0);
    // add copyright
    ctx.font = "22px MS Gothic";
    ctx.fillStyle = '#ff0000';
    ctx.fillText("© potproject.net", canvas.width - 200, canvas.height - 10);
});