var app = new Vue({
	el:"#app",
	data:{
		todolist:[],
		donelist:[],
		inputValue:""
	},
	methods:{
		// 添加todo
		add:function(){
			this.todolist.push(this.inputValue);
			this.inputValue="";
		},
		// 删除正在进行的todo
		todoremove:function(index){
			this.todolist.splice(index,1);
		},
		//完成的todo
		finish:function(index){
			this.donelist.push(this.todolist[index]);
			this.todolist.splice(index,1);
		},
		// 删除已经完成的todo
		doneremove:function(index){
			this.donelist.splice(index,1);
		},
		//清除所有
		clear:function(){
			this.donelist=[];
			this.todolist=[];
		}
	}
});