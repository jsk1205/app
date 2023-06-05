export default{
    state:{
        isCollapse:false  
    },
    mutations:{
        //修改菜单展开与否
        collaspeMenu(state){
            console.log(state,'---')
            state.isCollapse =!state.isCollapse
        }
    }
}