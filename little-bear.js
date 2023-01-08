class LittleBear {
    constructor(game){
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./little-bear-walk.png"), 0, 0, 32, 32, 4, .15);
        this.x = 200;
        this.y = 450;
        this.speed = 150;
    };

    update(){
        this.x += this.game.clockTick * this.speed;
        if(this.x > 450) {
            this.animator = new Animator(ASSET_MANAGER.getAsset("./little-bear-walk.png"), 128, 0, 32, 32, 4, .15);
            this.speed = -150;
        }
        if(this.x < 200) {
            this.animator = new Animator(ASSET_MANAGER.getAsset("./little-bear-walk.png"), 0, 0, 32, 32, 4, .15);
            this.speed = 150;
        }
    };

    draw(ctx){
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
}

