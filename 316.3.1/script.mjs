
var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML = "<h1>Dom Manipulation</h1>";
mainEl.classList.add("flex-ctr");

const topMenuEl = document.getElementById("top-menu");

topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");
// console.log("hi");

for (let l of menuLinks) {
  const newEl = document.createElement("a");
  newEl.setAttribute("href", l.href);
  newEl.textContent = l.text;
  topMenuEl.appendChild(newEl);
}

//part 3
// create a submenu
const subMenuEl = document.getElementById("sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";

// part 4 adding menu interaction
const topMenuLinks = document.querySelectorAll("a");

topMenuEl.addEventListener("click", (event) => {
  event.preventDefault();
  if (!event.target.matches("a")) return;
  // console.log(event.target.textContent);
  // Add an 'active' class to the <a> element that was clicked, unless it was already active, in which case it should remove it
  event.target.classList.toggle("active");

  // Remove the 'active' class from each other <a> element in topMenuLinks - whether the 'active' class exists or not
  topMenuLinks.forEach((link) => {
    if (link !== event.target) {
      link.classList.remove("active");
    }
  });

  // Part 5: Toggle the submenu between active and non-active states
  const link = menuLinks.find(
    (menuLink) => menuLink.text === event.target.textContent
  );

  if (link && link.subLinks) {
    // Cache the 'subLinks' array
    const subLinks = link.subLinks;

    // Clear the current contents of subMenuEl
    subMenuEl.innerHTML = "";

    // Iterate over the subLinks array and populate subMenuEl
    subLinks.forEach((subLink) => {
      const newEl = document.createElement("a");
      newEl.setAttribute("href", subLink.href);
      newEl.textContent = subLink.text;
      subMenuEl.appendChild(newEl);
    });

    // Set the submenu to show or hide itself depending on the menu state
    if (event.target.classList.contains("active")) {
      subMenuEl.style.top = "100%";
    } else {
      subMenuEl.style.top = "0";
    }
  } else {
    // If the clicked <a> element is 'ABOUT', hide the submenu
    subMenuEl.style.top = 0;
  }
});

// Helper function to build the submenu
const buildSubmenu = (subLinks) => {
  subMenuEl.innerHTML = "";
  subLinks.forEach((subLink) => {
    const newEl = document.createElement("a");
    newEl.setAttribute("href", subLink.href);
    newEl.textContent = subLink.text;
    subMenuEl.appendChild(newEl);
  });
};

// Pre-populate the submenu based on the initial state
buildSubmenu(menuLinks[1].subLinks);