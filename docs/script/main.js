$(function() {setUpAccordion();const referrer = document.referrer; $('#js-hamburger').click(function() {$('#js-hamburger').toggleClass('active')&&$('#js-hamburger').attr('aria-label', (_, attr) => attr == 'HamburgerMenu' ? 'ClosedHamburgerMenu' : 'HamburgerMenu');($('#js-nav').toggleClass('active'))});let pagetop= $("#page_top");pagetop.hide(),$(document).scroll(function(){75<=$(this).scrollTop()?pagetop.fadeIn():pagetop.fadeOut()}),pagetop.click(function(){return $("html,body").animate({scrollTop:0},10),!1;});/*function isSmartPhone() { return !!navigator.userAgent.match(/iPhone|Android.+Mobile/);}*/});const setUpAccordion = () => { const c = document.querySelectorAll(".js-details"), e = "is-opened"; c.forEach(b => { const a = b.querySelector(".js-details-summary"), f = b.querySelector(".js-content"); a.addEventListener("click", a => { a.preventDefault(), b.classList.contains(e) ? (b.classList.toggle(e), closingAnim(f, b).restart()) : (b.classList.toggle(e), b.setAttribute("open", "true"), openingAnim(f).restart()) });});}, closingAnim = (c, a) => gsap.to(c, { height: 0, opacity: 0, duration: .4, ease: "power3.out", overwrite: !0, onComplete: () => {a.removeAttribute("open");}}), openingAnim = b => gsap.fromTo(b, { height: 0, opacity: 0 }, { height: "auto", opacity: 1, duration: .4, ease: "power3.out", overwrite: !0 });
