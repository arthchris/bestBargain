import { environment } from './../../../environments/environment';
export class Endpoint {
  baseEndpoint = environment.baseEndpoint;

  LOGIN_ENDPOINT = this.baseEndpoint + 'auth/login';
  REGISTRATION_ENDPOINT = this.baseEndpoint + 'users';
  ALL_PRODUCT_ENDPOINT = this.baseEndpoint + 'products';
  SINGLE_PRODUCT_ENDPOINT = this.baseEndpoint + 'products/1';
  CARTS_ENDPOINT = this.baseEndpoint + 'carts';
}
