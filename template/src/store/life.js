import _ from 'lodash'

const initialState = {
  gridSize: 30,
  offset: 0,
}

const getters = {
  gridSize: state => state.gridSize
}

const actions = {
  setGridSize({ commit, state: { gridSize: gridSizeBefore } }, gridSize) {
    const gridSizeAfter = _.clamp(gridSize, 3, 150)
    const offset = gridSizeBefore - gridSize
    commit('setGridSize', gridSizeAfter)
    commit('setOffset', offset)
  },
}

const mutations = {
  setGridSize(state, gridSize) {
    state.gridSize = gridSize
  },

  setOffset(state, offset) {
    state.offset = offset
  },
}

export default {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations,
}