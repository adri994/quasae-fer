import { useStore } from 'vuex'

import { ref, computed } from 'vue'
const useUI = () => {
  const store = useStore()

  const leftDrawerOpen = ref(false)
  return {
    sideMenuOpen: computed(() => store.getters['ui/isSideMenuOpen']),
    toggleSideMenu () {
      store.commit('ui/toggleSideMenu')
    },

    leftDrawerOpen,
    toggleLeftDrawer () {
      leftDrawerOpen.value = !leftDrawerOpen.value
    }
  }
}

export default useUI
