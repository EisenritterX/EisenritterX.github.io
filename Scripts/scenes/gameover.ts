module scenes{
    export class GameOverScene extends objects.Scene{
        // Variables
        private gameOverLabel: objects.Label;
        private backButton: objects.Button;
        // Constructor
        constructor(assetManager: createjs.LoadQueue){
            super(assetManager);
            this.Start();
        }
        //Method
        public Start():void {
            this.gameOverLabel = new objects.Label(
                "Game Over!", "40px", "Fantasy", "#000000", 320, 240, true);

            this.backButton = new objects.Button(this.assetManager, "NewGameButton", 320, 340);
            this.Main();
        }
        public Update():void{}
        private backButtonClick(): void{
            objects.Game.currentScene = config.Scene.START;
        }
        public Main():void{
            this.addChild(this.gameOverLabel);
            this.addChild(this.backButton);
            this.backButton.on("click", this.backButtonClick);
        }
    }
}