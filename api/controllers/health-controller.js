import { ControllerBase } from './controller-base.js'

export default class HealthController extends ControllerBase {
  index() {
    return this.res.send({ status: 'Healthy' })
  }
}