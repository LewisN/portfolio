import { TimelineLite as Timeline, Power1 } from 'gsap';

/**
 * Fly in node(s) from right
 * If there are multiple nodes they will be staggered
 * @param {Array|HTMLCollection|HTMLElement} node 
 */
export const flyInStaggerFromRight = (node, stagger) => {
  const timeline = new Timeline({ paused: true });
  const staggerDuration = stagger || 0.15;
  timeline.staggerFromTo(node, .6, {
    left: '140%',
    opacity: 0.3,
  }, {
    left: '0%',
    opacity: 1,
    ease: Power1.easeOut,
  }, staggerDuration);
  return timeline;
};
