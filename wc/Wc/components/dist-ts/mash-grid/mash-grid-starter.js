var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MashGrid = (function (_super) {
    __extends(MashGrid, _super);
    function MashGrid() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MashGrid;
}(HTMLElement));
window.customElements.define("mash-grid", MashGrid);
//# sourceMappingURL=mash-grid-starter.js.map