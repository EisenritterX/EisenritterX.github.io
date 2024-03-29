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
    // Scene Super Class
    var Scene = /** @class */ (function (_super) {
        __extends(Scene, _super);
        // Constructior
        function Scene(assetManager) {
            var _this = _super.call(this) || this;
            _this.sceneSize = new math.Vector2(800, 640);
            _this.sceneCenter = new math.Vector2(400, 320);
            _this.assetManager = assetManager;
            return _this;
        }
        // Methods
        Scene.prototype.Start = function () {
        };
        Scene.prototype.Update = function () { };
        Scene.prototype.Main = function () { };
        return Scene;
    }(createjs.Container));
    objects.Scene = Scene;
})(objects || (objects = {}));
//# sourceMappingURL=scene.js.map