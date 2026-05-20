import "../styles/custom.scss";
//=====================================================================================================================

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const backgroudDecor = document.querySelector(".rich-text__background-decor-image");
const productImage = document.querySelector(".rich-text__animation-product");
const slot = document.querySelector(".image-animation-target");
const slotImage = slot?.querySelector("img");

if (!backgroudDecor || !productImage || !slot || !slotImage) {
    console.warn("Animation elements not found");
} else {
    function calcDeltaToSlot() {
        const b = productImage.getBoundingClientRect();
        const s = slotImage.getBoundingClientRect();

        const productImageCx = b.left + b.width / 2;
        const productImageCy = b.top + b.height / 2;

        const slotCx = s.left + s.width / 2;
        const slotCy = s.top + s.height / 2;

        return { dx: slotCx - productImageCx, dy: slotCy - productImageCy };
    }

    function calcDeltaDecorToSlot() {
        const d = backgroudDecor.getBoundingClientRect();
        const s = slot.getBoundingClientRect();

        const decorCx = d.left + d.width / 2;
        const decorCy = d.top + d.height / 2;

        const slotCx = s.left + s.width / 2;
        const slotCy = s.top + s.height / 2;

        return { dx: slotCx - decorCx, dy: slotCy - decorCy };
    }

    const decorTween = gsap.to(backgroudDecor, {
        x: 0,
        y: 0,
        rotation: 90,
        scale: 0.8,
        ease: "none",
        paused: true,
        force3D: true,
    });

    const tween = gsap.to(productImage, {
        x: 0,
        y: 0,
        rotation: 0,
        transformOrigin: "50% 50%",
        ease: "none",
        paused: true,
        force3D: true,
    });

    const st = ScrollTrigger.create({
        trigger: ".rich-text",
        start: "top 20%",
        endTrigger: slot,
        end: "top 30%",
        scrub: 1,

        onRefresh: () => {
        gsap.set(productImage, {
            x: 0,
            y: 0,
            rotation: 16,
            xPercent: 0,
            yPercent: 0,
            transformOrigin: "50% 50%",
            display: "block",
            opacity: 1,
        });

        gsap.set(backgroudDecor, { x: 0, y: 0 });
        gsap.set(slot, { opacity: 0 });

        const { dx, dy } = calcDeltaToSlot();
        tween.vars.x = dx;
        tween.vars.y = dy;
        tween.invalidate();

        const decor = calcDeltaDecorToSlot();
        decorTween.vars.x = decor.dx;
        decorTween.vars.y = decor.dy;
        decorTween.invalidate();
        },

        onUpdate: (self) => {
        tween.progress(self.progress);
        decorTween.progress(self.progress);

        if (self.progress >= 0.999) {
            gsap.set(slot, { opacity: 1 });
            gsap.set(productImage, { display: "none" });
            st.disable();
        }
        },
    });
}