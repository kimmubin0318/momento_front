export const RouterPath = {
    teamBuilding: {
        path: '/team-building',
        getPath: () => RouterPath.teamBuilding.path,
    },
    loading: {
        path: '/loading',
        getPath: () => RouterPath.loading.path,
    },
    home: {
        path: '/home',
        getPath: () => RouterPath.home.path,
    },
    login: {
        path: '/login',
        getPath: (redirect) => {
            const currentRedirect = redirect ?? window.location.href;
            return `${RouterPath.login.path}?redirect=${encodeURIComponent(
                currentRedirect
            )}`;
        },
    },
    mypage: {
        path: '/mypage',
        getPath: () => RouterPath.mypage.path,
    },
    mypageEdit: {
        path: '/mypage-edit',
        getPath: () => RouterPath.mypageedit.path,
    },
    configMyInfo: {
        path: '/config-my-info',
        getPath: () => RouterPath.configMyInfo.path,
    },
    start: {
        path: '/',
        getPath: () => RouterPath.start.path,
    },
    teamInfo: {
        path: '/team-info',
        getPath: () => RouterPath.teamInfo.path,
    },
    notFound: {
        path: '*',
    },
};
