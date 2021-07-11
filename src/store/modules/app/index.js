import types from './types'

export const appModule = {
  namespaced: true,

  state: () => ({
    isLoading: false,
  }),
  mutations: {
    [types.SET_APP_LOADING]: (state, payload) => (state.isLoading = payload),
  },
  actions: {
    async initialApp({ dispatch, commit }) {
      commit(types.SET_APP_LOADING, false)
      Promise.all([
        dispatch('albums/fetchAlbums', null, { root: true }),
        dispatch('photos/fetchPhotos', null, { root: true }),
      ]).finally(() => commit(types.SET_APP_LOADING, true))
    },
  },
  getters: {
    isLoading: (state) => state.isLoading,
  },
}
