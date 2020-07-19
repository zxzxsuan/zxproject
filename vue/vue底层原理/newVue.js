class NewVue{
    constructor(options){//接收所想要配置的对象就像是new Vue({data:{...}})
        this.$options=options;//先缓存一下options一会其他的类要用到
        //数据响应化
        this.$data=options.data;//拿出{data：{}}的数据
        this.observe(this.$data);//对data中的数据进行观察.
        //模拟一下watcher创建
        new Watcher();
        this.$data.test;
        new Watcher();
        this.$data.foo.bar;
    }
    observe(value){
        //为了语句健壮性，先判断是否存在这个value，不存在就返回了
        if(!value||typeof value !='object'){
            return;
        }
        //遍历该对象
        Object.keys(value).forEach(key=>{
            
            this.defineReactive(value,key,value[key])
        })
    }
    //定义数据响应式函数
    defineReactive(obj,key,val){
        this.observe(val)//为了递归实现类似{data:{foo.bar:"xxx"}}中的foo.bar这种数据嵌套的问题
        const dep=new Dep()
        Object.defineProperty(obj,key,{
            get(){
                Dep.target&&dep.addDep(Dep.target)
                return val;
            },
            set(newVal){
                if(newVal==val){
                    return;
                }
                val=newVal;
                console.log(`${key}属性更新了：${val}`)
                dep.notify();//通知所有的watcher进行更新
            }
        })
    }
}

class Dep{//订阅器
    constructor(){
        this.deps=[];//在deps中存放若干依赖，也就是watcher(订阅者).这个依赖其实就是属性值发生改变的属性
    
    }
    addDep(dep){//增加依赖
        this.deps.push(dep)
    }
    notify(){//通知所有的依赖(watcher)去做更新
        this.deps.forEach(dep=>dep.update())
    }
}

class Watcher{//订阅者其实就是用来做具体更新的那个对象
    constructor(){
        //将当前这个Watcher实例指定到Dep的静态属性target
        Dep.target=this;//这个target只有一个，当有第二个watcher出现时就会覆盖成第二个watcher
    }
    update(){
        console.log('属性更新了！！！')
    }
}