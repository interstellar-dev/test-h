import http from './axios'

export default {
  albums: http.get('albums'),
  photos: http.get('photos'),
}
