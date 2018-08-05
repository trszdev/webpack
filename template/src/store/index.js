import Vue from 'vue'
import Vuex from 'vuex'
import camelCase from 'lodash/camelCase'

const requireComponent = require.context('.', true, /\w+\.(vue|js)$/)

const modules = requireComponent.keys().reduce((acc, fileName) => {
  const component = requireComponent(fileName)
  const componentName = camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1'))
  acc[componentName] = component.default || component

  return acc
}, {})

Vue.use(Vuex)

export default new Vuex.Store({ modules })
