export default function(){
    let arr =[
        {
            name:'学习',
            children:[
                {
                    name: "杂志",
                    children:[
                        {
                            name:"电脑杂志",
                            children:[

                                {name:"大众软件"}
                            ]
                        }
                    ]
                },
                {
                    name: "纸质书"
                },
                {
                    name:'电子书',
                    children:[
                        {
                            name:'文学',                                         
                            children:[
                                {
                                    name:'茶馆'                                                   
                                },
                                {
                                    name:'红与黑'
                                },
                                {
                                    name: "傅雷家书"
                                }
                            ]
                        }
                    ]
                }
                
            ]
        },
        {
            name:'电影',
            children:[
                {
                    name:'美国电影3'
                },
                {
                    name:'日本电影'
                },
                {
                    name:"23"
                }
            ]                  
        }
    ]
    return arr;
} // end function