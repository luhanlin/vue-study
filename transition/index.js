var app = new Vue({ 
    el: '#demo',
    data: {
        show: true,
        docState: "saved",
        statelist:["saved", "edited", "editing"]
    },
    methods: {
        beforeEnter: function (el) {
          el.style.opacity = 0;
          el.style.transformOrigin = 'left';
        },
        enter: function (el, done) {
          Velocity(el, { opacity: 1, fontSize: '1.4em' }, { duration: 300 });
          Velocity(el, { fontSize: '1em' }, { complete: done });
        },
        leave: function (el, done) {
          Velocity(el, { translateX: '15px', rotateZ: '50deg' }, { duration: 600 });
          Velocity(el, { rotateZ: '100deg' }, { loop: 2 });
          Velocity(el, {
            rotateZ: '45deg',
            translateY: '30px',
            translateX: '30px',
            opacity: 0
          }, { complete: done });
        },
        change:function() {
            this.docState = this.statelist[Math.floor(Math.random()*3)];
        }
      },
      computed: {
        buttonMessage: function () {
          switch (this.docState) {
            case 'saved': return 'Edit';
            case 'edited': return 'Save';
            case 'editing': return 'Cancel';
          }
        }
      }
});

new Vue({
    el: '#list-demo',
    data: {
      items: [1,2,3,4,5,6,7,8,9],
      nextNum: 10
    },
    methods: {
      randomIndex: function () {
        return Math.floor(Math.random() * this.items.length);
      },
      add: function () {
        this.items.splice(this.randomIndex(), 0, this.nextNum++);
      },
      remove: function () {
        this.items.splice(this.randomIndex(), 1);
      },
    }
});
