function Pipe(info){
    //水平方向的坐标
    this.x=info.x;
    this.bottomy=info.bottomy;
    this.canvas=info.canvas;
    this.ctx=info.ctx;
    //上管道
    this.topImage=info.topImage;
    //下管道
    this.bottomImage =info.bottomImage;
    //管道之间的间隙
    this.gap=info.gap;
    //设置上下管道的默认高度
    this.topHeight=0;
    this.bottomHeight=0;
    this.speed=-2;

    //在对象创建时，就计算管道的随机高度
    this.initHeight();
}

Pipe.prototype={
    constructor:Pipe,
    draw:function(){
        //移动x的位置
        this.x+=this.speed;
        //判断是否已经移除边界
        if(this.x<=-this.topImage.width){
            this.x=this.canvas.width-this.topImage.width+this.gap;
        }

        //绘制管道
        //在绘制管道的时候将其路径画出来，但是不执行stroke()方法，以便后面判断使用
        ctx.rect(this.x,0,this.topImage.width,this.topHeight);
        ctx.rect(this.x,this.topHeight+100,this.bottomImage.width,this.bottomHeight);
        //绘制上面的管道
        this.ctx.drawImage(this.topImage,this.x,0,this.topImage.width,this.topHeight);
        //绘制下面的管道
        this.ctx.drawImage(this.bottomImage,this.x,this.topHeight+100,this.bottomImage.width,this.bottomHeight);

    },
    //计算随机的管道高度
    initHeight:function(){
        //随机算出上面的管道高度
        this.topHeight=Math.random()*150+100;
        //算出下面管道的高度
        this.bottomHeight=this.canvas.height-this.topHeight-100-this.bottomy;
    }
}