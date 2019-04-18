/* jshint esversion: 6 */

// 具名插槽
Vue.component('current-user', {
  data: function () {
    return {
      user: {
        firstName: "hanlin",
        lastName: "lu"
      }
    };
  },
  template: `
    <span>
      <slot v-bind:user = "user">{{ user.lastName }}</slot>
    </span>
  `
});

// 作用域插槽 -- 使用需要待验证
Vue.component('base-layout', {
  data: function () {
    return {
      dynamicSlotName: "header"
    };
  },
  template: `
    <div class="container">
      <header>
        <slot name="header"></slot>
      </header>
      <main>
        <slot></slot>
      </main>
      <footer>
        <slot name="footer"></slot>
      </footer>
    </div>
  `
});

var app = new Vue({ 
    el: '#app',
    data: {
      
    }
});