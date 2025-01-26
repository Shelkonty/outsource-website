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
  },
  {
    path: "/software-policy",
    exact: true,
    component: "SoftwarePolicy",
  }
];

export default routes;
