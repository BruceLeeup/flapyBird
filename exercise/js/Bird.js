function Bird(info) {
    //定义小鸟的坐标
    this.x = info.x;
    this.y = info.y;
    //定义图片
    this.image = info.image;
    this.ctx = info.ctx;
    //定义小鸟的初始速度
    this.speed = 0;
    //定义加速度
    this.aspeed = 0.0004;
    //定义最大角度和最大速度
    this.maxAngle = 45;
    this.maxSpeed = 0.6;

    this.index = 0;
    //上一步的时间
    this.lastTime = new Date();
}

Bird.prototype = {
    constructor: Bird,
    draw: function () {
        //1 获取时间差
        //获取当前循环的时间
        var currentTime = new Date();
        //时间差
        var deltaTime = currentTime-this.lastTime;
        //把当前时间设置为下一次循环的初始时间
        this.lastTime=currentTime;
        //计算出小鸟在垂直方向上移动的距离
        this.y+=this.speed*deltaTime+this.aspeed*deltaTime*deltaTime/2;
        //算出小鸟当前循环的速度(下一次循环的起始速度)
        this.speed+=this.aspeed*deltaTime;
        //小鸟扑翅膀 循环切换图片
        this.index+=1;
        //小鸟的旋转
        var birdWidth = this.image.width/3;
        var birdHeight =this.image.height;

        //保存画笔的状态
        this.ctx.save();
        // 平移坐标系 移到小鸟的中心点
        this.ctx.translate(this.x+birdWidth/2,this.y+birdHeight/2);
        //计算小鸟旋转的角度
        var angle = this.speed/this.maxSpeed*this.maxAngle;
        //计算弧度
        var radian=angle/180*Math.PI;

        //旋转坐标系
        this.ctx.rotate(radian);

        //画小鸟
        this.ctx.drawImage(this.image,this.index%3*birdWidth,0,birdWidth,birdHeight,-birdWidth/2,-birdHeight/2,birdWidth,birdHeight);

        this.ctx.restore();

    }

}