<template>
  <div class="hello">
    <h1>\{{ msg }}</h1><small>Grid size: \{{ gridSize }}</small>
    <p>
      You already have <code>vuex</code>, <code>lodash</code>, decorators
      and auto component discover out of the box!
    </p>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://www.npmjs.com/package/lodash"
          target="_blank"
        >
          Lodash
        </a>
      </li>
      <li>
        <a
          href="https://www.npmjs.com/package/vuex-class"
          target="_blank"
        >
          Vuex-class
        </a>
      </li>
      <li>
        <a
          href="https://www.npmjs.com/package/vuex"
          target="_blank"
        >
          Vuex
        </a>
      </li>
      <li>
        <a
          href="https://www.npmjs.com/package/vue-property-decorator"
          target="_blank"
        >
          Vue-property-decorator
        </a>
      </li>
      <li>
        <a
          href="https://www.npmjs.com/package/vue-class-component"
          target="_blank"
        >
          Vue-class-component
        </a>
      </li>
      <li>
        <a
          href="https://www.npmjs.com/package/vue-property-decorator"
          target="_blank"
        >
          Vue-property-decorator
        </a>
      </li>
      <br>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <br>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

const lifeStore = namespace('life')

@Component
export default class HelloWorld extends Vue {
  @lifeStore.Getter gridSize
  msg = 'Welcome to webpack-vuex'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  display: inline-block;
}

h1, h2 {
  font-weight: normal;
}

small {
  display: inline-block;
  color: #aaa;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
