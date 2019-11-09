var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var GameObject = /** @class */ (function (_super) {
        __extends(GameObject, _super);
        // Constructor
        function GameObject(assetManager, imageString) {
            var _this = _super.call(this, assetManager.getResult(imageString)) || this;
            _this.name = imageString;
            _this.Init();
            return _this;
        }
        // Methods 
        GameObject.prototype.Init = function () {
            // Initialize all the properties of my object
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.halfW = this.width * 0.5;
            this.halfH = this.height * 0.5;
            // Registration Points
            this.regX = this.halfW;
            this.regY = this.halfH;
        };
        GameObject.prototype.Start = function () { };
        GameObject.prototype.Update = function () { };
        GameObject.prototype.Reset = function () { };
        GameObject.prototype.Move = function () { };
        GameObject.prototype.CheckBound = function () { };
        return GameObject;
    }(createjs.Bitmap));
    objects.GameObject = GameObject;
    var Player = /** @class */ (function (_super) {
        __extends(Player, _super);
        // Constructor
        function Player(assetManager, scene) {
            var _this = _super.call(this, assetManager, "Player") || this;
            _this._currentScene = scene;
            _this.Start();
            return _this;
        }
        // Methods
        Player.prototype.Start = function () {
            this.y = this._currentScene.sceneSize.y - this.halfH;
            this.x = this._currentScene.sceneCenter.x;
        };
        Player.prototype.Update = function () {
            this.Move();
            this.CheckBound();
        };
        Player.prototype.Reset = function () { };
        Player.prototype.Move = function () {
            // We reference the stage objects and get mouse position
            // this.x = objects.Game.stage.mouseX;
            // This is evetually replaced with keyboard input
            // Maybe xbox controller...
        };
        Player.prototype.CheckBound = function () { };
        return Player;
    }(objects.GameObject));
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=gameobject.js.map