
const currentUrl = window.location.href;
const siteUrl = "https://joaofranciscodmsilva.github.io"; 
let updatedUrl = currentUrl.replace("https://joaofranciscodmsilva.github.io", "");
if (currentUrl.length == updatedUrl.length && currentUrl.startsWith("http://127.0.0.1")) {
  const otherSiteUrl = siteUrl.replace("localhost", "127.0.0.1");
  updatedUrl = currentUrl.replace(otherSiteUrl + "", "");
}
if ("en-us".length > 0) {
  updatedUrl = updatedUrl.replace("/en-us", "");
}
// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation menu",
    handler: () => {
      window.location.href = "/en-us/";
    },
  },{id: "nav-cv",
          title: "CV",
          description: "Curriculum vitae",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/en-us/cv/";
          },
        },{
          id: 'lang-pt-br',
          title: 'pt-br',
          section: 'Languages',
          handler: () => {
            window.location.href = "" + updatedUrl;
          },
        },];
