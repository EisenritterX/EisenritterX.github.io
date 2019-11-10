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
    // Game Object Super Class
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
    // Player Game Objects
    var Player = /** @class */ (function (_super) {
        __extends(Player, _super);
        // Variables
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
            if (objects.Game.keyboardManager.moveLeft) {
                this.x -= 1.5;
            }
            if (objects.Game.keyboardManager.moveRight) {
                this.x += 1.5;
            }
            if (objects.Game.keyboardManager.moveUp) {
                this.y -= 1.5;
            }
            if (objects.Game.keyboardManager.moveDown) {
                this.y += 1.5;
            }
        };
        Player.prototype.CheckBound = function () {
            // Right boundary
            if (this.x >= this._currentScene.sceneSize.x - this.halfW) {
                this.x = this._currentScene.sceneSize.x - this.halfW;
            }
            // Left boundary
            if (this.x <= this.halfW) {
                this.x = this.halfW;
            }
            // Bottom boundary
            if (this.y >= this._currentScene.sceneSize.y - this.halfH) {
                this.y = this._currentScene.sceneSize.y - this.halfH;
            }
            // Top boundary
            if (this.y <= this.halfH) {
                this.y = this.halfH;
            }
        };
        return Player;
    }(objects.GameObject));
    objects.Player = Player;
    // Enemy Game Object
    var Enemy = /** @class */ (function (_super) {
        __extends(Enemy, _super);
        // Constructor
        function Enemy(assetManager, scene) {
            var _this = _super.call(this, assetManager, "Enemy") || this;
            // Variables
            _this.isDead = false;
            _this._currentScene = scene;
            _this.Start();
            return _this;
        }
        // Methods
        Enemy.prototype.Start = function () {
            this.x = Math.floor(Math.random() * this._currentScene.sceneSize.x) + 50;
            this.y = Math.floor(Math.random() * -this._currentScene.sceneSize.y) - 50;
        };
        Enemy.prototype.Update = function () {
            this.Move();
            this.CheckBounds();
        };
        Enemy.prototype.Reset = function () {
            this.isDead = true;
            this.x = this._currentScene.sceneCenter.x - 500;
            this.y = this._currentScene.sceneCenter.y - 500;
        };
        Enemy.prototype.Move = function () {
            this.y += 2.5;
        };
        Enemy.prototype.CheckBounds = function () {
            if (this.y >= this._currentScene.sceneSize.y + this.halfH + 5) {
                this.y = -50;
            }
        };
        return Enemy;
    }(objects.GameObject));
    objects.Enemy = Enemy;
})(objects || (objects = {}));
//# sourceMappingURL=gameobject.js.map