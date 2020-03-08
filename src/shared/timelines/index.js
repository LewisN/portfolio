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

/**
 * Node(s) fade up from below
 * @param {Array|HTMLCollection|HTMLElement} node 
 */
export const fadeInFromBottom = node => {
  const timeline = gsap.timeline({ paused: true });
  timeline.from(node, {
    position: 'relative',
    opacity: 0,
    duration: .8,
    top: '10px',
    clearProps: 'all',
  });
  return timeline;
};
