var app = new Vue({ 
    el: '#app',
    data: {
        message: 'Hello Vue!',
        seen: false,
        todos: [
            { text: '学习 JavaScript' },
            { text: '学习 Vue' },
            { text: '整个牛项目' }
          ]
    }
});

var app2 = new Vue({
    el: '#app-2',
    data: {
      message: 'Hello Vue.js!'
    },
    methods: {
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('')
      }
    }
  });

var app3 = new Vue({
    el: '#app-3',
    data: {
      message: 'Hello Vue!'
    }
});

Vue.component('todo-item', {
    // todo-item 组件现在接受一个
    // "prop"，类似于一个自定义特性。
    // 这个 prop 名为 todo。
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
    // template: '<li>这是个待办项</li>'
})
var app4 = new Vue({
    el: '#app-4',
    data: {
        groceryList: [
          { id: 0, text: '蔬菜' },
          { id: 1, text: '奶酪' },
          { id: 2, text: '随便其它什么人吃的东西' }
        ]
    }
});

// app.todos.push({ text: '新项目' })