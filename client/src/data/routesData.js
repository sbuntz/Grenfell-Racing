import { lazy } from "react";

function importView(...args) {
  const path = args
    .map((arg) => {
      if (Array.isArray(arg)) {
        const nestPath = new Array(arg[1])
          .fill(0)
          .map(() => arg[0])
          .join("/");
        arg = nestPath;
      }
      return arg;
    })
    .join("/");
  return import(`../views/${path}.js`);
}

export const mainRoutes = [
  {
    path: `/dashboard`,
    component: lazy(() => importView(["Dashboard", 2])),
  },
  {
    path: `/posts`,
    component: lazy(() => importView("Posts", "Posts"))
  },

  {
    path: `/events`,
    component: lazy(() => importView("Posts", "Posts"))
  },
  {
    path: `/eventadd`,
    component: lazy(() => importView("Posts", "AddPost")),
  }, {
    path: `/gallery`,
    component: lazy(() => importView("Gallery", "Gallery"))
  },
  {
    path: `/galleryadd`,
    component: lazy(() => importView("Gallery", "Add")),
  },
  {
    path: `/users`,
    component: lazy(() => importView(["Users", 2])),
  },
  {
    path: `/login`,
    component: lazy(() => importView(["Login", 2])),
  },
  {
    path: `/signup`,
    component: lazy(() => importView(["Signup", 2])),
  },
  {
    path: `/postadd`,
    component: lazy(() => importView("Posts", "Add"))
  },
];
