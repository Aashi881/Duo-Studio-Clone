gsap.registerPlugin(ScrollTrigger);

// Ensure main container and footer are properly positioned
window.addEventListener("load", () => {
    setTimeout(() => {
        const main = document.querySelector(".main");
        const footer = document.querySelector("#footer");
        main.style.minHeight = "100vh";
        main.style.height = "auto";
        footer.style.position = "relative";
        footer.style.zIndex = "10";
        console.log("Footer bounding rect:", footer.getBoundingClientRect());
        ScrollTrigger.refresh();
    }, 2000);
});

// Custom cursor follow effect
/**
 * Description placeholder
 *
 * @type {*}
 */
const crsr = document.querySelector(".cursor");
document.addEventListener("mousemove", function (e) {
    crsr.style.left = e.x + 20 + "px";
    crsr.style.top = e.y + 20 + "px";
});

// GSAP animations for page1
gsap.from(".page1 h1, .page1 h2", {
    y: 10,
    rotate: 10,
    opacity: 0,
    delay: 0.3,
    duration: 0.7
});

// Page 1 scroll animations (h1, h2, video)
/**
 * Description placeholder
 *
 * @type {*}
 */
const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: "body",
        start: "top 27%",
        end: "top 0",
        scrub: 3
    }
});
tl.to(".page1 h1", { x: -100 }, "anim");
tl.to(".page1 h2", { x: 100 }, "anim");
tl.to(".page1 video", { width: "90%" }, "anim");

// Background color transition for page 1 to page 2
/**
 * Description placeholder
 *
 * @type {*}
 */
const tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: "body",
        start: "top -115%",
        end: "top -120%",
        scrub: 3
    }
});
tl2.to(".main", { backgroundColor: "#fff" });

// Background color transition for page 3 onwards
/**
 * Description placeholder
 *
 * @type {*}
 */
const tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: "body",
        start: "top -280%",
        end: "top -300%",
        scrub: 3
    }
});
tl3.to(".main", { backgroundColor: "#0F0D0D" });

// Image preview on hover over .box
document.querySelectorAll(".box").forEach((elem) => {
    elem.addEventListener("mouseenter", () => {
        const att = elem.getAttribute("data-image");
        crsr.style.width = "470px";
        crsr.style.height = "370px";
        crsr.style.borderRadius = "0";
        crsr.style.backgroundImage = `url(${att})`;
    });

    elem.addEventListener("mouseleave", () => {
        crsr.style.width = "20px";
        crsr.style.height = "20px";
        crsr.style.borderRadius = "50%";
        crsr.style.backgroundImage = "none";
    });
});

// Nav hover purple background + marquee
/**
 * Description placeholder
 *
 * @type {*}
 */
const h4s = document.querySelectorAll("#nav h4");
/**
 * Description placeholder
 *
 * @type {*}
 */
const purple = document.querySelector("#purple");
/**
 * Description placeholder
 *
 * @type {*}
 */
const marquee = document.querySelector("#nav-marquee");
/**
 * Description placeholder
 *
 * @type {*}
 */
const marqueeContent = document.querySelector("#marquee-content");

h4s.forEach((elem) => {
    elem.addEventListener("mouseenter", () => {
        purple.style.display = "block";
        purple.style.opacity = "1";
        if (elem.id !== "home-nav") {
            marquee.style.opacity = "1";
            marqueeContent.innerText = `${elem.innerText} `.repeat(20);
        }
    });

    elem.addEventListener("mouseleave", () => {
        purple.style.opacity = "0";
        setTimeout(() => {
            purple.style.display = "none";
            marquee.style.opacity = "0";
        }, 500);
    });

    elem.addEventListener("click", () => {
        if (elem.id !== "home-nav") {
            purple.style.display = "block";
            purple.style.opacity = "1";
            marquee.style.opacity = "1";
            marqueeContent.innerText = `${elem.innerText} `.repeat(20);
            setTimeout(() => {
                purple.style.opacity = "0";
                setTimeout(() => {
                    purple.style.display = "none";
                    marquee.style.opacity = "0";
                }, 500);
            }, 2000);
        }
    });
});

// Handle resize to refresh ScrollTrigger
window.addEventListener("resize", () => {
    ScrollTrigger.refresh();
});