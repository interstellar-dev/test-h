import { createStore } from 'vuex'

import { appModule } from './modules/app/index'
import { albumsModule } from './modules/albums/index'
import { photosModule } from './modules/photos/index'

export default createStore({
  modules: {
    app: appModule,
    albums: albumsModule,
    photos: photosModule,
  },
})
