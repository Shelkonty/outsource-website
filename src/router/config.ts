const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
  },
  {
    path: "/about",
    exact: true,
    component: "About",
  },
  {
    path: "/privacy-policy",
    exact: true,
    component: "Policy",
  }
];

export default routes;
