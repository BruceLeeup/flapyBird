//创建构造函数
function Sky(info){
    //设置天空水平方向的位置
    this.x=info.x;
    //设置画布，后面会使用到它的宽高
    this.canvas=info.canvas;
    //设置画图工具，后面会使用它的方法
    this.ctx=info.ctx;
    //设置图片资源
    this.image=info.image;
    //设置移动的速度
    this.speed=-2;
}

//将方法封装到原型中
Sky.prototype={
    constructor:Sky,
    draw:function(){
        //每一帧都确认x的坐标
        this.x+=this.speed;
        //判断图片是否出了画布
        if(this.x<=-this.canvas.width){
            this.x=this.canvas.width;
        }

        //绘图
        this.ctx.drawImage(this.image,this.x,0,this.canvas.width,this.canvas.height);
    }
}