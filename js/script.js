window.addEventListener("scroll", () => {
  if (scrollY > 550) {
    console.log("done");
    document.querySelector(".nav-fixed").style.display = "block";
  } else {
    document.querySelector(".nav-fixed").style.display = "none";
  }
});

document.querySelectorAll(".nav-header-logo").forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    const id = document.querySelector(".nav-header-logo").getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  });
});

document.querySelectorAll(".nav-footer-logo").forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    const id = document.querySelector(".nav-footer-logo").getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  });
});

document.querySelectorAll(".nav-header-anchor-lg").forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    const id = el.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  });
});

document.querySelectorAll(".nav-footer-link").forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    const id = el.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  });
});

const navHeaderListSm = document.querySelector(".nav-header-list-sm");
document.querySelector(".icon-menu").addEventListener("click", () => {
  navHeaderListSm.style.display = "flex";
});

document.querySelector(".icon-close-menu").addEventListener("click", () => {
  navHeaderListSm.style.display = "none";
});

document.querySelectorAll(".nav-header-anchor-sm").forEach((el) => {
  el.addEventListener("click", () => {
    navHeaderListSm.style.display = "none";
  });
});

document.querySelectorAll(".card-faq").forEach((card) => {
  card.addEventListener("click", (e) => {
    const currentElement = e.currentTarget;
    const textDetailsCardFaq = e.currentTarget.querySelector(".text-faq-answer");
    const textTitleCardFaq = e.currentTarget.querySelector(".text-faq-question");

    if (
      currentElement.style.backgroundColor === "" ||
      currentElement.style.backgroundColor === "white"
    ) {
      textDetailsCardFaq.style.display = "block";
      textDetailsCardFaq.style.color = "white";
      textTitleCardFaq.style.color = "white";
      textTitleCardFaq.classList.add("mbot-30");
      card.style.backgroundColor = "var(--color-green-default)";
    } else if (currentElement.style.backgroundColor === "var(--color-green-default)") {
      textDetailsCardFaq.style.display = "none";
      textDetailsCardFaq.style.color = "white";
      textTitleCardFaq.style.color = "var(--color-blue-light)";
      textTitleCardFaq.classList.remove("mbot-30");
      card.style.backgroundColor = "white";
    }
  });
});
