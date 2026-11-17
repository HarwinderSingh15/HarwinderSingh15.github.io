import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches || location.search.includes('still');
const SLAM = 'expo.out';

/* ?still freezes the page for screenshots */
if (location.search.includes('still')) {
  const hero = document.querySelector<HTMLElement>('.hero');
  if (hero && innerWidth > 992) hero.style.minHeight = '900px';
}

/* rail: mark the section in view */
const links = [...document.querySelectorAll<HTMLAnchorElement>('.rail__nav a')];
const targets = links
  .map((a) => document.querySelector<HTMLElement>(a.getAttribute('href')!))
  .filter((el): el is HTMLElement => !!el);
const spy = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      links.forEach((a) => a.classList.toggle('is-here', a.getAttribute('href') === `#${e.target.id}`));
    }
  },
  { rootMargin: '-45% 0px -50% 0px' },
);
targets.forEach((t) => spy.observe(t));

if (!calm) {
  document.fonts.ready.then(() => {
    /* opening: the poster is slapped on the wall in one beat */
    const open = gsap.timeline({ defaults: { ease: SLAM } });
    open
      .from('.hero .line__in', { yPercent: 115, duration: 0.9, stagger: 0.09 })
      .from('.hero__band', { scaleX: 0, duration: 0.7 }, 0.35)
      .from('.hero__band span', { xPercent: -30, autoAlpha: 0, duration: 0.6 }, 0.55)
      .from('.hero__tag', { y: -40, rotation: -6, autoAlpha: 0, duration: 0.6 }, 0.6)
      .from('.hero__side', { clipPath: 'inset(0 0 100% 0)', duration: 0.7 }, 0.7)
      .from('.bill li', { x: 24, autoAlpha: 0, duration: 0.5, stagger: 0.06 }, 0.85);

    /* hero name drifts along its diagonal as the page leaves */
    gsap.to('.hero .shout', {
      xPercent: -6,
      ease: 'none',
      scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 0.4 },
    });

    /* the tape is pulled sideways by the scroll, never on its own */
    gsap.to('.tape__run', {
      xPercent: -35,
      ease: 'none',
      scrollTrigger: { trigger: '.tape', start: 'top bottom', end: 'bottom top', scrub: 0.6 },
    });

    /* wall titles: stretch in width and slide along the baseline */
    gsap.utils.toArray<HTMLElement>('.wall__title').forEach((title) => {
      const shout = title.querySelector<HTMLElement>('.shout')!;
      const band = title.querySelector<HTMLElement>('.band');
      const flip = title.parentElement!.classList.contains('wall--flip');
      gsap.fromTo(
        shout,
        { '--wdth': 75, xPercent: flip ? -10 : 10 },
        {
          '--wdth': 100,
          xPercent: flip ? 4 : -4,
          ease: 'none',
          scrollTrigger: { trigger: title, start: 'top bottom', end: 'bottom top', scrub: 0.5 },
        },
      );
      if (band) {
        gsap.from(band, {
          scaleX: 0,
          transformOrigin: flip ? 'right center' : 'left center',
          duration: 0.8,
          ease: SLAM,
          scrollTrigger: { trigger: title, start: 'top 62%' },
        });
      }
    });

    /* screens are pasted up one after another */
    gsap.utils.toArray<HTMLElement>('.shots').forEach((group) => {
      const items = group.querySelectorAll('.phone').length ? group.querySelectorAll('.phone') : [group];
      gsap.from(items, {
        y: 90,
        rotation: '+=7',
        autoAlpha: 0,
        duration: 0.8,
        ease: SLAM,
        stagger: 0.08,
        scrollTrigger: { trigger: group, start: 'top 82%' },
      });
    });

    /* counts and section heads are unrolled */
    gsap.utils.toArray<HTMLElement>('.count, .head').forEach((el) => {
      gsap.from(el, {
        clipPath: 'inset(0 100% 0 0)',
        duration: 0.9,
        ease: SLAM,
        scrollTrigger: { trigger: el, start: 'top 85%' },
      });
    });

    gsap.utils.toArray<HTMLElement>('.rows, .run, .stack').forEach((list) => {
      gsap.from(list.children, {
        y: 36,
        autoAlpha: 0,
        duration: 0.6,
        ease: SLAM,
        stagger: 0.07,
        scrollTrigger: { trigger: list, start: 'top 80%' },
      });
    });

    ScrollTrigger.refresh();
  });
}
