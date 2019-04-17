var app = new Vue({
  el: '#app',
  data: {
    message:'',
    message1:'',
    checked: false,
    checkedNames:[],
    picked:'',
    selected:'',
    selectedall:[],
    selectedfor: 'A',
    options: [
      { text: 'One', value: 'A' },
      { text: 'Two', value: 'B' },
      { text: 'Three', value: 'C' }
    ]
  }
});