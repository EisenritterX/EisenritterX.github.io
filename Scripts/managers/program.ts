module managers{
    export class Game {
        public static stage: createjs.Stage;
        public static assetManager: createjs.LoadQueue;
        public static currentScene: number;
        public static keyboardManager: managers.Keyboard;
        public static canavas: HTMLCanvasElement;
        public static currentSceneObject: objects.Scene;
        public static laserManager:managers.Laser;
    }
}