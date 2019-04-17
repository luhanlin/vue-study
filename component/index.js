// 定义一个名为 button-counter 的新组件 组件定义需要放在Vue实例之前
// 组件全局注册
Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    };
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
});

Vue.component('blog-post', {
  props: ['post'],
  template: `
    <div class="blog-post"> 
      <h3>{{ post.title }}</h3>
      <button @click="$emit('enlarge-text', 0.1)">
        Enlarge text
      </button>
      <div v-html="post.content"></div>
    </div>  
    `
});

// 组件使用v-model
Vue.component('custom-input', {
  props: ['value'],
  template: `
    <input
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    >
  `
});

Vue.component('alert-box', {
  template: `
    <div class="demo-alert-box">
      <strong>Error!</strong>
      <slot></slot>
    </div>
  `
});

// 组件不可继承特性
Vue.component('base-input', {
  inheritAttrs: false,
  props: ['label', 'value'],
  template: `
    <label>
      {{ label }}
      <input
        v-bind="$attrs"
        v-bind:value="value"
        v-on:input="$emit('input', $event.target.value)"
      >
    </label>
  `
});

var app = new Vue({ 
    el: '#app',
    data: {
      posts: [
        { id: 1, title: 'My journey with Vue', content: 'hahaha' },
        { id: 2, title: 'Blogging with Vue', content: 'john' },
        { id: 3, title: 'Why Vue is so fun', content: 'banala' }
      ],
      searchText: '',
      username:'',
      postFontSize: 1
    },
    methods:{
      changeFontSize: function(inc_size) {
        return this.postFontSize += inc_size;
      }
    }
});


// 动态组件示例
Vue.component('tab-home', { 
	template: '<div>Home component</div>' 
});
Vue.component('tab-posts', { 
	template: '<div>Posts component</div>' 
});
Vue.component('tab-archive', { 
	template: '<div>Archive component</div>' 
});

new Vue({
  el: '#dynamic-component-demo',
  data: {
    currentTab: 'Home',
    tabs: ['Home', 'Posts', 'Archive']
  },
  computed: {
    currentTabComponent: function () {
      return 'tab-' + this.currentTab.toLowerCase();
    }
  }
});

