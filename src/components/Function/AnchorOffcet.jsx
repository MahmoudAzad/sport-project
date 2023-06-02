export const AnchorOffcet = (event) => {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute("href");
  const element = document.querySelector(targetId);
  const offset = 60;
  const bodyRect = document.body.getBoundingClientRect().top;
  const elementRect = element.getBoundingClientRect().top;
  const elementPosition = elementRect - bodyRect;
  const offsetPosition = elementPosition - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
};
