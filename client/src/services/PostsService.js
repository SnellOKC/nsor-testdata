/* eslint-disable */
import Api from '@/services/Api'

export default {
  fetchPosts() {
    return Api().get('posts')
  },

  addPost(params) {
    return Api().post('add_post', params)
  },

  updatePost(params) {
    return Api().put('posts/' + params.id, params)
  },

  getPost(params) {
    return Api().get('post/' + params.id)
  },

  deletePost(id) {
    return Api().delete('posts/' + id)
  },

  //Matt additions
  fetchPHDetails() {
    return Api().get('api/v1/phdetail')
  },

  getPHDetail(params) {
    return Api().get('api/v1/phdetail/' + params.id)
  },

  fetchBPSDetails() {
    return Api().get('api/v1/bpsdetail')
  },

  getBPSDetail(params) {
    return Api().get('api/v1/bpsdetail/' + params.id)
  }
}