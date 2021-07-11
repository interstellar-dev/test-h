import types from './types'
import network from '@/services/network'

export const photosModule = {
  namespaced: true,

  state: () => ({
    photos: null,
  }),

  mutations: {
    [types.SET_PHOTOS]: (state, payload) => (state.photos = payload),
  },

  actions: {
    async fetchPhotos({ commit }) {
      const response = await network.photos
      const photos = response.data
      commit(types.SET_PHOTOS, photos)
    },
  },

  getters: {
    getPhotoByAlbumId: (state) => (albumId) => {
      return state.photos.find((photo) => photo.id === albumId)
    },
  },
}
