class Background{
    constructor(){

    };

    update(){

    };

    draw(ctx){
        ctx.drawImage(ASSET_MANAGER.getAsset("./background1.png"), 0, 0 ,1024, 768);
    }
}