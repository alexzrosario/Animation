const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./background1.png")
ASSET_MANAGER.queueDownload("./little-bear-walk.png")

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	
	
	gameEngine.addEntity(new LittleBear(gameEngine));
    gameEngine.addEntity(new Background());

	gameEngine.init(ctx);

	gameEngine.start();
});
