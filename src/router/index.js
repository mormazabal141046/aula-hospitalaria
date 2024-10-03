import { route } from 'quasar/wrappers'
import { createRouter, createMemoryHistory, createWebHistory, createWebHashHistory } from 'vue-router'
import routes from './routes'
import { getCurrentUser } from "src/services/auth/index";
import { errorAlert, successAlert, infoAlert } from "src/utils/notify";

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory)

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE)
  })

  Router.beforeResolve(async (to, from, next) => {
    const currentUser = await getCurrentUser();

    if (to.matched.some(record => record.meta.authorize)) {
      if (!currentUser) {
        errorAlert("Debes Iniciar Sesión para Acceder")
        next({ name: "login" });
      } else {
        next();
      }
    }else {
      if (currentUser) {
        if (to.name == 'login' && currentUser) {
          next({ name: "app" });
        }else{
          next()
        }
      }else{
        next()
      }
    }
  });

  return Router
})
