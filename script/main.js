$(function() { setUpAccordion(); $('#js-hamburger').click(function() { $('#js-hamburger').toggleClass('active');$('#js-nav').toggleClass('active'); });var b = $("#page_top");b.hide(), $(window).scroll(function () { 80 < $(this).scrollTop() ? b.fadeIn() : b.fadeOut() }), b.click(function () { return $("body,html").animate({ scrollTop: 0 }, 10), !1 });function isSmartPhone() { return !!navigator.userAgent.match(/iPhone|Android.+Mobile/);}});const setUpAccordion = () => { const c = document.querySelectorAll(".js-details"), e = "is-opened"; c.forEach(b => { const a = b.querySelector(".js-summary"), f = b.querySelector(".js-content"); a.addEventListener("click", a => { a.preventDefault(), b.classList.contains(e) ? (b.classList.toggle(e), closingAnim(f, b).restart()) : (b.classList.toggle(e), b.setAttribute("open", "true"), openingAnim(f).restart()) });});}, closingAnim = (c, a) => gsap.to(c, { height: 0, opacity: 0, duration: .4, ease: "power3.out", overwrite: !0, onComplete: () => {a.removeAttribute("open");}}), openingAnim = b => gsap.fromTo(b, { height: 0, opacity: 0 }, { height: "auto", opacity: 1, duration: .4, ease: "power3.out", overwrite: !0 });
