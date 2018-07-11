export default [
  {
    roles: ["user"],
    type: "link",
    url: "/",
    active: true,
    icon: "fa-dashboard",
    name: "Home"
  },
  {
    roles: ["user"],
    type: "link",
    url: "/about",
    active: false,
    icon: "fa-list-alt",
    name: "About"
  },
  {
    roles: ["user"],
    type: "link",
    url: "/contact",
    active: false,
    icon: "fa-list-alt",
    name: "Contact"
  },
  {
    roles: ["user"],
    type: "dropdown",
    url: "",
    active: false,
    icon: "fa-book",
    name: "Auth",
    childs: [
      {
        roles: ["user"],
        type: "link",
        url: "/signup",
        active: false,
        icon: "fa-list-alt",
        name: "Signup"
      },
      {
        roles: ["user"],
        type: "link",
        url: "/login",
        active: false,
        icon: "fa-list-alt",
        name: "Login"
      }
    ]
  }
];
