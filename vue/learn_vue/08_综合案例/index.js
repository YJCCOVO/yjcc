Vue.createApp({
    template: "#my-app",
    data() {
      return {
        books: [
          {
            id: 1,
            name: '《算法导论》',
            date: '2006-9',
            price: 85.00,
            count: 1
          },
          {
            id: 2,
            name: '《UNIX编程艺术》',
            date: '2006-2',
            price: 59.00,
            count: 1
          },
          {
            id: 3,
            name: '《编程珠玑》',
            date: '2008-10',
            price: 39.00,
            count: 1
          },
          {
            id: 4,
            name: '《代码大全》',
            date: '2006-3',
            price: 128.00,
            count: 1
          },
        ],
        Totalamount:48.00
      }
    },
    watch:{
        temp:{
            handler : function(){
                let num = 0
                for(let i = 0;  i<this.books.length;i++){
                    num += this.books[i].count * this.books[i].price
                }
                this.Totalamount = num
            },
            immediate:true
        }
    },
    // computed: {
    //     Totalamount(){
    //         let num = 0
    //         for(let i = 0;  i<this.books.length;i++){
    //             num += this.books[i].count * this.books[i].price
    //         }
    //         return num
    //     }
    // },
    methods: {
      add(index){
        this.books[index].count ++
      },
      minus(index){
        if(this.books[index].count <= 1){
            return
        }
        this.books[index].count --
      },
      remove(index){
        this.books[index].count = 0
      }
    }
  }).mount("#app");