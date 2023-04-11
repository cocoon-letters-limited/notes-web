const scrollToTop = () => {
  document.querySelector("body")?.scrollIntoView({
    behavior: "smooth",
  });
};

export default scrollToTop;
