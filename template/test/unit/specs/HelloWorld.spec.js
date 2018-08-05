import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld'
import store from '@/store'
{{#router}}
import router from '@/router'
{{/router}}

describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(HelloWorld)
    {{#router}}
    const vm = new Constructor({ router, store }).$mount()
    {{else}}
    const vm = new Constructor({ store }).$mount()
    {{/router}}
    expect(vm.$el.querySelector('.hello h1').textContent)
      {{#if_eq runner "karma"}}.to.equal('Welcome to webpack-vuex'){{/if_eq}}{{#if_eq runner "jest"}}.toEqual('Welcome to webpack-vuex'){{/if_eq}}
  })
})
