export function initMixin (Basket) {
  Basket.prototype._init = function (options) {
    console.log('_init called: ', options)
  }
}
