export const scrollToSection = (
  sectionId: string,
  options?: { onBeforeScroll?: () => void }
) => {
  const navbar = document.getElementById("navigation");
  const rect = navbar?.getBoundingClientRect();
  const { top: navbarTop, height: navbarHeight } = rect
    ? rect
    : { top: 0, height: 0 };
  
  const section = document.getElementById(sectionId);
  if (!section) return;

  if (options?.onBeforeScroll) options.onBeforeScroll();

  const sectionTop = section.getBoundingClientRect().top + window.scrollY;
  window.scrollTo({
    top: sectionTop - navbarHeight - navbarTop,
    behavior: "smooth",
  });
};
