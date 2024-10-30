export const RouterPath = {
  main: {
    path: "/",
    getPath: () => RouterPath.main.path,
  },
  login: {
    path: "/login",
    getPath: (redirect) => {
      const currentRedirect = redirect ?? window.location.href;
      return `${RouterPath.login.path}?redirect=${encodeURIComponent(
        currentRedirect
      )}`;
    },
  },
  mypage: {
    path: "/mypage",
    getPath: () => RouterPath.mypage.path,
  },
  configMyInfo: {
    path: "/config-my-info",
    getPath: () => RouterPath.configMyInfo.path,
  },
  teamBuilding: {
    path: "/team-building",
    getPath: () => RouterPath.teamBuilding.path,
  },
  teamInfo: {
    path: "/team-info",
    getPath: () => RouterPath.teamInfo.path,
  },
  notFound: {
    path: "*",
  },
};
