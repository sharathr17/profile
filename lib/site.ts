export const SITE = {
  url: "https://sharathrmaravanthe.vercel.app",
  title: "Sharath R | Web Developer",
  description:
    "Web developer based in Bangalore, India. MCA student at RV Institute of Technology and Management with a BCA background — building practical web applications with Python, React, CSS and SQL.",
  name: "Sharath R",
  role: "Web Developer",
};

/** Inline script written before hydration so the saved theme is applied
 *  before first paint. Defaults to dark to match the brand direction. */
export const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t="dark"}document.documentElement.setAttribute("data-theme",t);}catch(e){document.documentElement.setAttribute("data-theme","dark");}})();`;