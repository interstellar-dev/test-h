import network from '@/services/network'
import compareValues from '@/services/utils/compareValues'
import types from './types'

export const albumsModule = {
  namespaced: true,

  state: () => ({
    albums: null,
    search: '',
    sortBy: 'userId',
    sortDirection: 'ASC',
    page: 1,
    shownRows: 10,
  }),

  mutations: {
    [types.SET_ALBUMS]: (state, payload) => (state.albums = payload),
    [types.SET_SEARCH]: (state, payload) => (state.search = payload),
    [types.SET_SORT_BY]: (state, payload) => (state.sortBy = payload),
    [types.SET_SORT_DIRECTION]: (state, payload) => (state.sortDirection = payload),
    [types.SET_PAGE]: (state, payload) => (state.page = payload),
  },

  actions: {
    async fetchAlbums({ commit }) {
      const response = await network.albums
      const albums = response.data
      commit(types.SET_ALBUMS, albums)
    },
    setSearch({ commit }, payload) {
      commit(types.SET_SEARCH, payload)
    },
    setSortBy({ commit }, payload) {
      commit(types.SET_SORT_BY, payload)
    },
    setSortDirection({ commit }, payload) {
      commit(types.SET_SORT_DIRECTION, payload)
    },
    setPage({ commit }, payload) {
      commit(types.SET_PAGE, payload)
    },
  },

  getters: {
    albums: (state) => state.albums,
    headers: (state) => state.headers,
    search: (state) => state.search,
    page: (state) => state.page,
    startIndex: (state, getters) => (getters.page - 1) * state.shownRows,
    endIndex: (state, getters) => getters.page * state.shownRows,
    albumsSorted: ({ sortBy, sortDirection }, { albums }) => {
      const sortedAlbums = [...albums]
      return sortedAlbums.slice().sort(compareValues(sortBy, sortDirection))
    },
    albumsFiltered: (_, { albumsSorted, search }) => {
      if (!search) {
        return albumsSorted
      }
      const filteredAlbums = albumsSorted.filter(
        (album) =>
          album.title.toLowerCase().includes(search.toLowerCase()) ||
          String(album.userId).includes(search) ||
          String(album.id).includes(search) ||
          Number(album.userId) === Number(search) ||
          Number(album.id) === Number(search)
      )

      return filteredAlbums
    },

    hasNextPage(_, { albumsFiltered, endIndex }) {
      return albumsFiltered.length > endIndex
    },

    lastPage({ shownRows }, { albums }) {
      return albums.length / shownRows
    },

    middleButtonIsShown(_, { page, lastPage }) {
      return page > 1 && page < lastPage
    },

    paginatedAlbums(_, { albumsFiltered, startIndex, endIndex }) {
      return albumsFiltered.slice(startIndex, endIndex)
    },
  },
}
