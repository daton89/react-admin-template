export default [
  {
    roles: ["user"],
    type: "link",
    url: "/#!/home",
    active: true,
    icon: "fa-dashboard",
    name: "Home"
  },
  {
    roles: ["user"],
    type: "link",
    url: "/#!/about",
    active: false,
    icon: "fa-list-alt",
    name: "About"
  },
  {
    roles: ["user"],
    type: "link",
    url: "/#!/portfolio",
    active: false,
    icon: "fa-list-alt",
    name: "Contact"
  },
  {
    roles: ["admin"],
    type: "dropdown",
    url: "",
    active: false,
    icon: "fa-book",
    name: "Pages",
    childs: [
      {
        type: "link",
        url: "/#!/page1",
        name: "Page 1"
      },
      {
        type: "link",
        url: "/#!/page2",
        name: "Page 2"
      },
      {
        type: "link",
        url: "/#!/page3",
        name: "Page 3"
      }
    ]
  }
];
