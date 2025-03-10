import { mockRoutePoints } from '../mosk/mosk.js';

export default class RoutePointsModel {
  routePoints = mockRoutePoints;

  getRoutePoints() {
    return this.routePoints;
  }
}
