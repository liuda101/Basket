import { initMixin } from './init'

function Basket (options) {
  this._init(options)
}

initMixin(Basket)

export default Basket
