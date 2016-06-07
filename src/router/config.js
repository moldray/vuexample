export default function (router){
  router.map({
    '/': {
      component: require('../components/hello-world.vue')
    },
    '/DataBinding': {
      component: require('../components/data-binding.vue')
    },
    '/DataFlow': {
      component: require('../components/data-flow.vue')
    },
    // '/user/:userId': {
    //   component: require('./components/user/index.vue'),
    //   subRoutes: {
    //     'profile/:something': {
    //       component: require('./components/user/profile.vue')
    //     },
    //   }
    // },
    // '*': {
    //   component: require('./components/NotFound.vue')
    // },
  })

  // redirect
  router.redirect({
    '/info': '/about',
    '/hello/:userId': '/user/:userId'
  })

  // global before
  // 3 options:
  // 1. return a boolean
  // 2. return a Promise that resolves to a boolean
  // 3. call transition.next() or transition.abort()
  router.beforeEach((transition) => {
    if (transition.to.path === '/forbidden') {
      router.app.authenticating = true
      setTimeout(() => {
        router.app.authenticating = false
        alert('this route is forbidden by a global before hook')
        transition.abort()
      }, 3000)
    } else {
      transition.next()
    }
  })
}
