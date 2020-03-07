import gsap from 'gsap';

/**
 * Fly in node(s) from right
 * If there are multiple nodes they will be staggered
 * @param {Array|HTMLCollection|HTMLElement} node 
 */
export const flyInStaggerFromRight = (node, stagger) => {
  const timeline = gsap.timeline({ paused: true });
  timeline.fromTo(node, {
    left: '140%',
    opacity: 0.3,
  }, {
    left: '0%',
    opacity: 1,
    ease: 'power1.out',
    duration: .6,
    stagger: stagger || 0.15,
  });
  return timeline;
};
