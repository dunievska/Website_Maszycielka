const section1 = document.querySelector(".section--1");
const header = document.querySelector(".header-box");
const nav = document.querySelector(".nav");
const navHeight = nav.getBoundingClientRect();

// STICKY NAV //

const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: "-100px",
});

headerObserver.observe(header);
