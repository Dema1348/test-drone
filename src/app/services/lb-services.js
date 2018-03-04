// CommonJS package manager support
if (typeof module !== 'undefined' && typeof exports !== 'undefined' &&
  module.exports === exports) {
  // Export the *name* of this Angular module
  // Sample usage:
  //
  //   import lbServices from './lb-services';
  //   angular.module('app', [lbServices]);
  //
  module.exports = "lbServices";
}

(function(window, angular, undefined) {
  'use strict';

  var urlBase = "/api/v2";
  var authHeader = 'authorization';

  function getHost(url) {
    var m = url.match(/^(?:https?:)?\/\/([^\/]+)/);
    return m ? m[1] : null;
  }
  // need to use the urlBase as the base to handle multiple
  // loopback servers behind a proxy/gateway where the host
  // would be the same.
  var urlBaseHost = getHost(urlBase) ? urlBase : location.host;

/**
 * @ngdoc overview
 * @name lbServices
 * @module
 * @description
 *
 * The `lbServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
  var module = angular.module("lbServices", ['ngResource']);

/**
 * @ngdoc object
 * @name lbServices.Event
 * @header lbServices.Event
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Event` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Event",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/events/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.Event#find
             * @methodOf lbServices.Event
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Event` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/events",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Event#count
             * @methodOf lbServices.Event
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/events/count",
              method: "GET",
            },

            // INTERNAL. Use Device.events.findById() instead.
            "::findById::Device::events": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Devices/:id/events/:fk",
              method: "GET",
            },

            // INTERNAL. Use Device.events.destroyById() instead.
            "::destroyById::Device::events": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Devices/:id/events/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Device.events.updateById() instead.
            "::updateById::Device::events": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Devices/:id/events/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Device.events() instead.
            "::get::Device::events": {
              isArray: true,
              url: urlBase + "/Devices/:id/events",
              method: "GET",
            },

            // INTERNAL. Use Device.events.create() instead.
            "::create::Device::events": {
              url: urlBase + "/Devices/:id/events",
              method: "POST",
            },

            // INTERNAL. Use Device.events.createMany() instead.
            "::createMany::Device::events": {
              isArray: true,
              url: urlBase + "/Devices/:id/events",
              method: "POST",
            },

            // INTERNAL. Use Device.events.destroyAll() instead.
            "::delete::Device::events": {
              url: urlBase + "/Devices/:id/events",
              method: "DELETE",
            },

            // INTERNAL. Use Device.events.count() instead.
            "::count::Device::events": {
              url: urlBase + "/Devices/:id/events/count",
              method: "GET",
            },
          }
        );




        /**
        * @ngdoc property
        * @name lbServices.Event#modelName
        * @propertyOf lbServices.Event
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Event`.
        */
        R.modelName = "Event";



        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.ApiUser
 * @header lbServices.ApiUser
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `ApiUser` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "ApiUser",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/users/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.ApiUser#prototype$__findById__roles
             * @methodOf lbServices.ApiUser
             *
             * @description
             *
             * Find a related item by id for roles.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ApiUser id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for roles
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ApiUser` object.)
             * </em>
             */
            "prototype$__findById__roles": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/roles/:fk",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ApiUser#prototype$__destroyById__roles
             * @methodOf lbServices.ApiUser
             *
             * @description
             *
             * Delete a related item by id for roles.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ApiUser id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for roles
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__destroyById__roles": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/roles/:fk",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.ApiUser#prototype$__updateById__roles
             * @methodOf lbServices.ApiUser
             *
             * @description
             *
             * Update a related item by id for roles.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ApiUser id
             *
             *  - `fk` – `{*}` - Foreign key for roles
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ApiUser` object.)
             * </em>
             */
            "prototype$__updateById__roles": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/roles/:fk",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.ApiUser#prototype$__link__roles
             * @methodOf lbServices.ApiUser
             *
             * @description
             *
             * Add a related item by id for roles.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ApiUser id
             *
             *  - `fk` – `{*}` - Foreign key for roles
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ApiUser` object.)
             * </em>
             */
            "prototype$__link__roles": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/roles/rel/:fk",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.ApiUser#prototype$__unlink__roles
             * @methodOf lbServices.ApiUser
             *
             * @description
             *
             * Remove the roles relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ApiUser id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for roles
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__unlink__roles": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/roles/rel/:fk",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.ApiUser#prototype$__exists__roles
             * @methodOf lbServices.ApiUser
             *
             * @description
             *
             * Check the existence of roles relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ApiUser id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for roles
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ApiUser` object.)
             * </em>
             */
            "prototype$__exists__roles": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/roles/rel/:fk",
              method: "HEAD",
            },

            /**
             * @ngdoc method
             * @name lbServices.ApiUser#prototype$__findById__accessTokens
             * @methodOf lbServices.ApiUser
             *
             * @description
             *
             * Find a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ApiUser id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ApiUser` object.)
             * </em>
             */
            "prototype$__findById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/accessTokens/:fk",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ApiUser#prototype$__destroyById__accessTokens
             * @methodOf lbServices.ApiUser
             *
             * @description
             *
             * Delete a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ApiUser id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__destroyById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/accessTokens/:fk",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.ApiUser#prototype$__updateById__accessTokens
             * @methodOf lbServices.ApiUser
             *
             * @description
             *
             * Update a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ApiUser id
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ApiUser` object.)
             * </em>
             */
            "prototype$__updateById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/accessTokens/:fk",
              method: "PUT",
            },

            // INTERNAL. Use ApiUser.devices.findById() instead.
            "prototype$__findById__devices": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/devices/:fk",
              method: "GET",
            },

            // INTERNAL. Use ApiUser.devices.destroyById() instead.
            "prototype$__destroyById__devices": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/devices/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use ApiUser.rules.findById() instead.
            "prototype$__findById__rules": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/rules/:fk",
              method: "GET",
            },

            // INTERNAL. Use ApiUser.rules.destroyById() instead.
            "prototype$__destroyById__rules": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/rules/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use ApiUser.rules.updateById() instead.
            "prototype$__updateById__rules": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/rules/:fk",
              method: "PUT",
            },

            // INTERNAL. Use ApiUser.alerts.findById() instead.
            "prototype$__findById__alerts": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/alerts/:fk",
              method: "GET",
            },

            // INTERNAL. Use ApiUser.alerts.destroyById() instead.
            "prototype$__destroyById__alerts": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/alerts/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use ApiUser.alerts.updateById() instead.
            "prototype$__updateById__alerts": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/alerts/:fk",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.ApiUser#prototype$__get__roles
             * @methodOf lbServices.ApiUser
             *
             * @description
             *
             * Queries roles of ApiUser.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ApiUser id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ApiUser` object.)
             * </em>
             */
            "prototype$__get__roles": {
              isArray: true,
              url: urlBase + "/users/:id/roles",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ApiUser#prototype$__create__roles
             * @methodOf lbServices.ApiUser
             *
             * @description
             *
             * Creates a new instance in roles of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ApiUser id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ApiUser` object.)
             * </em>
             */
            "prototype$__create__roles": {
              url: urlBase + "/users/:id/roles",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ApiUser#prototype$__delete__roles
             * @methodOf lbServices.ApiUser
             *
             * @description
             *
             * Deletes all roles of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ApiUser id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__delete__roles": {
              url: urlBase + "/users/:id/roles",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.ApiUser#prototype$__count__roles
             * @methodOf lbServices.ApiUser
             *
             * @description
             *
             * Counts roles of ApiUser.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ApiUser id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "prototype$__count__roles": {
              url: urlBase + "/users/:id/roles/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ApiUser#prototype$__get__accessTokens
             * @methodOf lbServices.ApiUser
             *
             * @description
             *
             * Queries accessTokens of ApiUser.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ApiUser id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ApiUser` object.)
             * </em>
             */
            "prototype$__get__accessTokens": {
              isArray: true,
              url: urlBase + "/users/:id/accessTokens",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ApiUser#prototype$__create__accessTokens
             * @methodOf lbServices.ApiUser
             *
             * @description
             *
             * Creates a new instance in accessTokens of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ApiUser id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ApiUser` object.)
             * </em>
             */
            "prototype$__create__accessTokens": {
              url: urlBase + "/users/:id/accessTokens",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ApiUser#prototype$__delete__accessTokens
             * @methodOf lbServices.ApiUser
             *
             * @description
             *
             * Deletes all accessTokens of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ApiUser id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__delete__accessTokens": {
              url: urlBase + "/users/:id/accessTokens",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.ApiUser#prototype$__count__accessTokens
             * @methodOf lbServices.ApiUser
             *
             * @description
             *
             * Counts accessTokens of ApiUser.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ApiUser id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "prototype$__count__accessTokens": {
              url: urlBase + "/users/:id/accessTokens/count",
              method: "GET",
            },

            // INTERNAL. Use ApiUser.devices() instead.
            "prototype$__get__devices": {
              isArray: true,
              url: urlBase + "/users/:id/devices",
              method: "GET",
            },

            // INTERNAL. Use ApiUser.devices.create() instead.
            "prototype$__create__devices": {
              url: urlBase + "/users/:id/devices",
              method: "POST",
            },

            // INTERNAL. Use ApiUser.devices.destroyAll() instead.
            "prototype$__delete__devices": {
              url: urlBase + "/users/:id/devices",
              method: "DELETE",
            },

            // INTERNAL. Use ApiUser.devices.count() instead.
            "prototype$__count__devices": {
              url: urlBase + "/users/:id/devices/count",
              method: "GET",
            },

            // INTERNAL. Use ApiUser.rules() instead.
            "prototype$__get__rules": {
              isArray: true,
              url: urlBase + "/users/:id/rules",
              method: "GET",
            },

            // INTERNAL. Use ApiUser.rules.create() instead.
            "prototype$__create__rules": {
              url: urlBase + "/users/:id/rules",
              method: "POST",
            },

            // INTERNAL. Use ApiUser.rules.destroyAll() instead.
            "prototype$__delete__rules": {
              url: urlBase + "/users/:id/rules",
              method: "DELETE",
            },

            // INTERNAL. Use ApiUser.rules.count() instead.
            "prototype$__count__rules": {
              url: urlBase + "/users/:id/rules/count",
              method: "GET",
            },

            // INTERNAL. Use ApiUser.alerts() instead.
            "prototype$__get__alerts": {
              isArray: true,
              url: urlBase + "/users/:id/alerts",
              method: "GET",
            },

            // INTERNAL. Use ApiUser.alerts.create() instead.
            "prototype$__create__alerts": {
              url: urlBase + "/users/:id/alerts",
              method: "POST",
            },

            // INTERNAL. Use ApiUser.alerts.destroyAll() instead.
            "prototype$__delete__alerts": {
              url: urlBase + "/users/:id/alerts",
              method: "DELETE",
            },

            // INTERNAL. Use ApiUser.alerts.count() instead.
            "prototype$__count__alerts": {
              url: urlBase + "/users/:id/alerts/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ApiUser#create
             * @methodOf lbServices.ApiUser
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ApiUser` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/users",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ApiUser#createMany
             * @methodOf lbServices.ApiUser
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ApiUser` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/users",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ApiUser#patchOrCreate
             * @methodOf lbServices.ApiUser
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ApiUser` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/users",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.ApiUser#replaceOrCreate
             * @methodOf lbServices.ApiUser
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ApiUser` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/users/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ApiUser#exists
             * @methodOf lbServices.ApiUser
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/users/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ApiUser#findById
             * @methodOf lbServices.ApiUser
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ApiUser` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/users/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ApiUser#replaceById
             * @methodOf lbServices.ApiUser
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ApiUser` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/users/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ApiUser#find
             * @methodOf lbServices.ApiUser
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ApiUser` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/users",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ApiUser#deleteById
             * @methodOf lbServices.ApiUser
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ApiUser` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/users/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.ApiUser#count
             * @methodOf lbServices.ApiUser
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/users/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ApiUser#prototype$patchAttributes
             * @methodOf lbServices.ApiUser
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ApiUser id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ApiUser` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/users/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.ApiUser#login
             * @methodOf lbServices.ApiUser
             *
             * @description
             *
             * Login a user with username/email and password.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
             *   Default value: `user`.
             *
             *  - `rememberMe` - `boolean` - Whether the authentication credentials
             *     should be remembered in localStorage across app/browser restarts.
             *     Default: `true`.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The response body contains properties of the AccessToken created on login.
             * Depending on the value of `include` parameter, the body may contain additional properties:
             *   - `user` - `U+007BUserU+007D` - Data of the currently logged in user. (`include=user`)
             *
             */
            "login": {
              params: {
                include: 'user',
              },
              interceptor: {
                response: function(response) {
                  var accessToken = response.data;
                  LoopBackAuth.setUser(
                    accessToken.id, accessToken.userId, accessToken.user);
                  LoopBackAuth.rememberMe =
                    response.config.params.rememberMe !== false;
                  LoopBackAuth.save();
                  return response.resource;
                },
              },
              url: urlBase + "/users/login",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ApiUser#logout
             * @methodOf lbServices.ApiUser
             *
             * @description
             *
             * Logout a user with access token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `access_token` – `{string=}` - Do not supply this argument, it is automatically extracted from request headers.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "logout": {
              interceptor: {
                response: function(response) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return response.resource;
                },
                responseError: function(responseError) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return responseError.resource;
                },
              },
              url: urlBase + "/users/logout",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ApiUser#prototype$verify
             * @methodOf lbServices.ApiUser
             *
             * @description
             *
             * Trigger user's identity verification with configured verifyOptions
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ApiUser id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `verifyOptions` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$verify": {
              url: urlBase + "/users/:id/verify",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ApiUser#resetPassword
             * @methodOf lbServices.ApiUser
             *
             * @description
             *
             * Reset password for a user with email.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "resetPassword": {
              url: urlBase + "/users/reset",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ApiUser#changePassword
             * @methodOf lbServices.ApiUser
             *
             * @description
             *
             * Change a user's password.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `id` – `{*=}` -
             *
             *  - `oldPassword` – `{string}` -
             *
             *  - `newPassword` – `{string}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "changePassword": {
              url: urlBase + "/users/change-password",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ApiUser#setPassword
             * @methodOf lbServices.ApiUser
             *
             * @description
             *
             * Reset user's password via a password-reset token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `id` – `{*=}` -
             *
             *  - `newPassword` – `{string}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "setPassword": {
              url: urlBase + "/users/reset-password",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ApiUser#prototype$addRole
             * @methodOf lbServices.ApiUser
             *
             * @description
             *
             * Add a role to this user.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ApiUser id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `roleName` – `{String}` - The name of the role to add.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ApiUser` object.)
             * </em>
             */
            "prototype$addRole": {
              url: urlBase + "/users/:id/addRole",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ApiUser#prototype$removeRole
             * @methodOf lbServices.ApiUser
             *
             * @description
             *
             * Remove a role from this user.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ApiUser id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `roleName` – `{String}` - The name of the role to remove.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ApiUser` object.)
             * </em>
             */
            "prototype$removeRole": {
              url: urlBase + "/users/:id/removeRole",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ApiUser#prototype$banUser
             * @methodOf lbServices.ApiUser
             *
             * @description
             *
             * Block a user from the system.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ApiUser id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ApiUser` object.)
             * </em>
             */
            "prototype$banUser": {
              url: urlBase + "/users/:id/banUser",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ApiUser#prototype$unlockUser
             * @methodOf lbServices.ApiUser
             *
             * @description
             *
             * UnlockUser a user from the system.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method does not accept any data. Supply an empty object.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ApiUser` object.)
             * </em>
             */
            "prototype$unlockUser": {
              url: urlBase + "/users/:id/unlockUser",
              method: "POST",
            },

            // INTERNAL. Use Device.users() instead.
            "::get::Device::users": {
              url: urlBase + "/Devices/:id/users",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ApiUser#getCurrent
             * @methodOf lbServices.ApiUser
             *
             * @description
             *
             * Get data of the currently logged user. Fail with HTTP result 401
             * when there is no user logged in.
             *
             * @param {function(Object,Object)=} successCb
             *    Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *    `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             */
            'getCurrent': {
              url: urlBase + "/users" + '/:id',
              method: 'GET',
              params: {
                id: function() {
                  var id = LoopBackAuth.currentUserId;
                  if (id == null) id = '__anonymous__';
                  return id;
                },
              },
              interceptor: {
                response: function(response) {
                  LoopBackAuth.currentUserData = response.data;
                  return response.resource;
                },
                responseError: function(responseError) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return $q.reject(responseError);
                },
              },
              __isGetCurrentUser__: true,
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.ApiUser#upsert
             * @methodOf lbServices.ApiUser
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ApiUser` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.ApiUser#updateOrCreate
             * @methodOf lbServices.ApiUser
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ApiUser` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.ApiUser#destroyById
             * @methodOf lbServices.ApiUser
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ApiUser` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.ApiUser#removeById
             * @methodOf lbServices.ApiUser
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ApiUser` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.ApiUser#prototype$updateAttributes
             * @methodOf lbServices.ApiUser
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ApiUser id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ApiUser` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];

        /**
         * @ngdoc method
         * @name lbServices.ApiUser#getCachedCurrent
         * @methodOf lbServices.ApiUser
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.ApiUser#login} or
         * {@link lbServices.ApiUser#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A ApiUser instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.ApiUser#isAuthenticated
         * @methodOf lbServices.ApiUser
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.ApiUser#getCurrentId
         * @methodOf lbServices.ApiUser
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

        /**
        * @ngdoc property
        * @name lbServices.ApiUser#modelName
        * @propertyOf lbServices.ApiUser
        * @description
        * The name of the model represented by this $resource,
        * i.e. `ApiUser`.
        */
        R.modelName = "ApiUser";

    /**
     * @ngdoc object
     * @name lbServices.ApiUser.devices
     * @header lbServices.ApiUser.devices
     * @object
     * @description
     *
     * The object `ApiUser.devices` groups methods
     * manipulating `Device` instances related to `ApiUser`.
     *
     * Call {@link lbServices.ApiUser#devices ApiUser.devices()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.ApiUser#devices
             * @methodOf lbServices.ApiUser
             *
             * @description
             *
             * Queries devices of ApiUser.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ApiUser id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Device` object.)
             * </em>
             */
        R.devices = function() {
          var TargetResource = $injector.get("Device");
          var action = TargetResource["::get::ApiUser::devices"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.ApiUser.devices#count
             * @methodOf lbServices.ApiUser.devices
             *
             * @description
             *
             * Counts devices of ApiUser.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ApiUser id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.devices.count = function() {
          var TargetResource = $injector.get("Device");
          var action = TargetResource["::count::ApiUser::devices"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.ApiUser.devices#create
             * @methodOf lbServices.ApiUser.devices
             *
             * @description
             *
             * Creates a new instance in devices of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ApiUser id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Device` object.)
             * </em>
             */
        R.devices.create = function() {
          var TargetResource = $injector.get("Device");
          var action = TargetResource["::create::ApiUser::devices"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.ApiUser.devices#createMany
             * @methodOf lbServices.ApiUser.devices
             *
             * @description
             *
             * Creates a new instance in devices of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ApiUser id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Device` object.)
             * </em>
             */
        R.devices.createMany = function() {
          var TargetResource = $injector.get("Device");
          var action = TargetResource["::createMany::ApiUser::devices"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.ApiUser.devices#destroyAll
             * @methodOf lbServices.ApiUser.devices
             *
             * @description
             *
             * Deletes all devices of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ApiUser id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.devices.destroyAll = function() {
          var TargetResource = $injector.get("Device");
          var action = TargetResource["::delete::ApiUser::devices"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.ApiUser.devices#destroyById
             * @methodOf lbServices.ApiUser.devices
             *
             * @description
             *
             * Delete a related item by id for devices.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ApiUser id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for devices
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.devices.destroyById = function() {
          var TargetResource = $injector.get("Device");
          var action = TargetResource["::destroyById::ApiUser::devices"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.ApiUser.devices#findById
             * @methodOf lbServices.ApiUser.devices
             *
             * @description
             *
             * Find a related item by id for devices.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ApiUser id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for devices
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Device` object.)
             * </em>
             */
        R.devices.findById = function() {
          var TargetResource = $injector.get("Device");
          var action = TargetResource["::findById::ApiUser::devices"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.ApiUser.rules
     * @header lbServices.ApiUser.rules
     * @object
     * @description
     *
     * The object `ApiUser.rules` groups methods
     * manipulating `Ruler` instances related to `ApiUser`.
     *
     * Call {@link lbServices.ApiUser#rules ApiUser.rules()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.ApiUser#rules
             * @methodOf lbServices.ApiUser
             *
             * @description
             *
             * Queries rules of ApiUser.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ApiUser id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Ruler` object.)
             * </em>
             */
        R.rules = function() {
          var TargetResource = $injector.get("Ruler");
          var action = TargetResource["::get::ApiUser::rules"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.ApiUser.rules#count
             * @methodOf lbServices.ApiUser.rules
             *
             * @description
             *
             * Counts rules of ApiUser.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ApiUser id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.rules.count = function() {
          var TargetResource = $injector.get("Ruler");
          var action = TargetResource["::count::ApiUser::rules"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.ApiUser.rules#create
             * @methodOf lbServices.ApiUser.rules
             *
             * @description
             *
             * Creates a new instance in rules of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ApiUser id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Ruler` object.)
             * </em>
             */
        R.rules.create = function() {
          var TargetResource = $injector.get("Ruler");
          var action = TargetResource["::create::ApiUser::rules"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.ApiUser.rules#createMany
             * @methodOf lbServices.ApiUser.rules
             *
             * @description
             *
             * Creates a new instance in rules of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ApiUser id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Ruler` object.)
             * </em>
             */
        R.rules.createMany = function() {
          var TargetResource = $injector.get("Ruler");
          var action = TargetResource["::createMany::ApiUser::rules"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.ApiUser.rules#destroyAll
             * @methodOf lbServices.ApiUser.rules
             *
             * @description
             *
             * Deletes all rules of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ApiUser id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.rules.destroyAll = function() {
          var TargetResource = $injector.get("Ruler");
          var action = TargetResource["::delete::ApiUser::rules"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.ApiUser.rules#destroyById
             * @methodOf lbServices.ApiUser.rules
             *
             * @description
             *
             * Delete a related item by id for rules.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ApiUser id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for rules
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.rules.destroyById = function() {
          var TargetResource = $injector.get("Ruler");
          var action = TargetResource["::destroyById::ApiUser::rules"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.ApiUser.rules#findById
             * @methodOf lbServices.ApiUser.rules
             *
             * @description
             *
             * Find a related item by id for rules.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ApiUser id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for rules
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Ruler` object.)
             * </em>
             */
        R.rules.findById = function() {
          var TargetResource = $injector.get("Ruler");
          var action = TargetResource["::findById::ApiUser::rules"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.ApiUser.rules#updateById
             * @methodOf lbServices.ApiUser.rules
             *
             * @description
             *
             * Update a related item by id for rules.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ApiUser id
             *
             *  - `fk` – `{*}` - Foreign key for rules
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Ruler` object.)
             * </em>
             */
        R.rules.updateById = function() {
          var TargetResource = $injector.get("Ruler");
          var action = TargetResource["::updateById::ApiUser::rules"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.ApiUser.alerts
     * @header lbServices.ApiUser.alerts
     * @object
     * @description
     *
     * The object `ApiUser.alerts` groups methods
     * manipulating `Alert` instances related to `ApiUser`.
     *
     * Call {@link lbServices.ApiUser#alerts ApiUser.alerts()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.ApiUser#alerts
             * @methodOf lbServices.ApiUser
             *
             * @description
             *
             * Queries alerts of ApiUser.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ApiUser id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Alert` object.)
             * </em>
             */
        R.alerts = function() {
          var TargetResource = $injector.get("Alert");
          var action = TargetResource["::get::ApiUser::alerts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.ApiUser.alerts#count
             * @methodOf lbServices.ApiUser.alerts
             *
             * @description
             *
             * Counts alerts of ApiUser.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ApiUser id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.alerts.count = function() {
          var TargetResource = $injector.get("Alert");
          var action = TargetResource["::count::ApiUser::alerts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.ApiUser.alerts#create
             * @methodOf lbServices.ApiUser.alerts
             *
             * @description
             *
             * Creates a new instance in alerts of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ApiUser id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Alert` object.)
             * </em>
             */
        R.alerts.create = function() {
          var TargetResource = $injector.get("Alert");
          var action = TargetResource["::create::ApiUser::alerts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.ApiUser.alerts#createMany
             * @methodOf lbServices.ApiUser.alerts
             *
             * @description
             *
             * Creates a new instance in alerts of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ApiUser id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Alert` object.)
             * </em>
             */
        R.alerts.createMany = function() {
          var TargetResource = $injector.get("Alert");
          var action = TargetResource["::createMany::ApiUser::alerts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.ApiUser.alerts#destroyAll
             * @methodOf lbServices.ApiUser.alerts
             *
             * @description
             *
             * Deletes all alerts of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ApiUser id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.alerts.destroyAll = function() {
          var TargetResource = $injector.get("Alert");
          var action = TargetResource["::delete::ApiUser::alerts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.ApiUser.alerts#destroyById
             * @methodOf lbServices.ApiUser.alerts
             *
             * @description
             *
             * Delete a related item by id for alerts.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ApiUser id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for alerts
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.alerts.destroyById = function() {
          var TargetResource = $injector.get("Alert");
          var action = TargetResource["::destroyById::ApiUser::alerts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.ApiUser.alerts#findById
             * @methodOf lbServices.ApiUser.alerts
             *
             * @description
             *
             * Find a related item by id for alerts.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ApiUser id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for alerts
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Alert` object.)
             * </em>
             */
        R.alerts.findById = function() {
          var TargetResource = $injector.get("Alert");
          var action = TargetResource["::findById::ApiUser::alerts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.ApiUser.alerts#updateById
             * @methodOf lbServices.ApiUser.alerts
             *
             * @description
             *
             * Update a related item by id for alerts.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ApiUser id
             *
             *  - `fk` – `{*}` - Foreign key for alerts
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Alert` object.)
             * </em>
             */
        R.alerts.updateById = function() {
          var TargetResource = $injector.get("Alert");
          var action = TargetResource["::updateById::ApiUser::alerts"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Threshold
 * @header lbServices.Threshold
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Threshold` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Threshold",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/thresholds/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.Threshold#create
             * @methodOf lbServices.Threshold
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Threshold` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/thresholds",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Threshold#createMany
             * @methodOf lbServices.Threshold
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Threshold` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/thresholds",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Threshold#replaceOrCreate
             * @methodOf lbServices.Threshold
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Threshold` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/thresholds/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Threshold#exists
             * @methodOf lbServices.Threshold
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/thresholds/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Threshold#findById
             * @methodOf lbServices.Threshold
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Threshold` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/thresholds/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Threshold#replaceById
             * @methodOf lbServices.Threshold
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Threshold` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/thresholds/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Threshold#find
             * @methodOf lbServices.Threshold
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Threshold` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/thresholds",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Threshold#deleteById
             * @methodOf lbServices.Threshold
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Threshold` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/thresholds/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Threshold#count
             * @methodOf lbServices.Threshold
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/thresholds/count",
              method: "GET",
            },

            // INTERNAL. Use Device.thresholds.findById() instead.
            "::findById::Device::thresholds": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Devices/:id/thresholds/:fk",
              method: "GET",
            },

            // INTERNAL. Use Device.thresholds.destroyById() instead.
            "::destroyById::Device::thresholds": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Devices/:id/thresholds/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Device.thresholds.updateById() instead.
            "::updateById::Device::thresholds": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Devices/:id/thresholds/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Device.thresholds() instead.
            "::get::Device::thresholds": {
              isArray: true,
              url: urlBase + "/Devices/:id/thresholds",
              method: "GET",
            },

            // INTERNAL. Use Device.thresholds.create() instead.
            "::create::Device::thresholds": {
              url: urlBase + "/Devices/:id/thresholds",
              method: "POST",
            },

            // INTERNAL. Use Device.thresholds.createMany() instead.
            "::createMany::Device::thresholds": {
              isArray: true,
              url: urlBase + "/Devices/:id/thresholds",
              method: "POST",
            },

            // INTERNAL. Use Device.thresholds.destroyAll() instead.
            "::delete::Device::thresholds": {
              url: urlBase + "/Devices/:id/thresholds",
              method: "DELETE",
            },

            // INTERNAL. Use Device.thresholds.count() instead.
            "::count::Device::thresholds": {
              url: urlBase + "/Devices/:id/thresholds/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Threshold#destroyById
             * @methodOf lbServices.Threshold
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Threshold` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Threshold#removeById
             * @methodOf lbServices.Threshold
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Threshold` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];


        /**
        * @ngdoc property
        * @name lbServices.Threshold#modelName
        * @propertyOf lbServices.Threshold
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Threshold`.
        */
        R.modelName = "Threshold";



        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Device
 * @header lbServices.Device
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Device` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Device",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Devices/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Device.users() instead.
            "prototype$__get__users": {
              url: urlBase + "/Devices/:id/users",
              method: "GET",
            },

            // INTERNAL. Use Device.thresholds.findById() instead.
            "prototype$__findById__thresholds": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Devices/:id/thresholds/:fk",
              method: "GET",
            },

            // INTERNAL. Use Device.thresholds.destroyById() instead.
            "prototype$__destroyById__thresholds": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Devices/:id/thresholds/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Device.thresholds.updateById() instead.
            "prototype$__updateById__thresholds": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Devices/:id/thresholds/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Device.events.findById() instead.
            "prototype$__findById__events": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Devices/:id/events/:fk",
              method: "GET",
            },

            // INTERNAL. Use Device.events.destroyById() instead.
            "prototype$__destroyById__events": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Devices/:id/events/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Device.events.updateById() instead.
            "prototype$__updateById__events": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Devices/:id/events/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Device.rulers.findById() instead.
            "prototype$__findById__rulers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Devices/:id/rulers/:fk",
              method: "GET",
            },

            // INTERNAL. Use Device.rulers.destroyById() instead.
            "prototype$__destroyById__rulers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Devices/:id/rulers/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Device.rulers.updateById() instead.
            "prototype$__updateById__rulers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Devices/:id/rulers/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Device.alerts.findById() instead.
            "prototype$__findById__alerts": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Devices/:id/alerts/:fk",
              method: "GET",
            },

            // INTERNAL. Use Device.alerts.destroyById() instead.
            "prototype$__destroyById__alerts": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Devices/:id/alerts/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Device.alerts.updateById() instead.
            "prototype$__updateById__alerts": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Devices/:id/alerts/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Device.cage() instead.
            "prototype$__get__cage": {
              url: urlBase + "/Devices/:id/cage",
              method: "GET",
            },

            // INTERNAL. Use Device.thresholds() instead.
            "prototype$__get__thresholds": {
              isArray: true,
              url: urlBase + "/Devices/:id/thresholds",
              method: "GET",
            },

            // INTERNAL. Use Device.thresholds.create() instead.
            "prototype$__create__thresholds": {
              url: urlBase + "/Devices/:id/thresholds",
              method: "POST",
            },

            // INTERNAL. Use Device.thresholds.destroyAll() instead.
            "prototype$__delete__thresholds": {
              url: urlBase + "/Devices/:id/thresholds",
              method: "DELETE",
            },

            // INTERNAL. Use Device.thresholds.count() instead.
            "prototype$__count__thresholds": {
              url: urlBase + "/Devices/:id/thresholds/count",
              method: "GET",
            },

            // INTERNAL. Use Device.events() instead.
            "prototype$__get__events": {
              isArray: true,
              url: urlBase + "/Devices/:id/events",
              method: "GET",
            },

            // INTERNAL. Use Device.events.create() instead.
            "prototype$__create__events": {
              url: urlBase + "/Devices/:id/events",
              method: "POST",
            },

            // INTERNAL. Use Device.events.destroyAll() instead.
            "prototype$__delete__events": {
              url: urlBase + "/Devices/:id/events",
              method: "DELETE",
            },

            // INTERNAL. Use Device.events.count() instead.
            "prototype$__count__events": {
              url: urlBase + "/Devices/:id/events/count",
              method: "GET",
            },

            // INTERNAL. Use Device.rulers() instead.
            "prototype$__get__rulers": {
              isArray: true,
              url: urlBase + "/Devices/:id/rulers",
              method: "GET",
            },

            // INTERNAL. Use Device.rulers.create() instead.
            "prototype$__create__rulers": {
              url: urlBase + "/Devices/:id/rulers",
              method: "POST",
            },

            // INTERNAL. Use Device.rulers.destroyAll() instead.
            "prototype$__delete__rulers": {
              url: urlBase + "/Devices/:id/rulers",
              method: "DELETE",
            },

            // INTERNAL. Use Device.rulers.count() instead.
            "prototype$__count__rulers": {
              url: urlBase + "/Devices/:id/rulers/count",
              method: "GET",
            },

            // INTERNAL. Use Device.alerts() instead.
            "prototype$__get__alerts": {
              isArray: true,
              url: urlBase + "/Devices/:id/alerts",
              method: "GET",
            },

            // INTERNAL. Use Device.alerts.create() instead.
            "prototype$__create__alerts": {
              url: urlBase + "/Devices/:id/alerts",
              method: "POST",
            },

            // INTERNAL. Use Device.alerts.destroyAll() instead.
            "prototype$__delete__alerts": {
              url: urlBase + "/Devices/:id/alerts",
              method: "DELETE",
            },

            // INTERNAL. Use Device.alerts.count() instead.
            "prototype$__count__alerts": {
              url: urlBase + "/Devices/:id/alerts/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Device#create
             * @methodOf lbServices.Device
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Device` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Devices",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Device#createMany
             * @methodOf lbServices.Device
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Device` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Devices",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Device#exists
             * @methodOf lbServices.Device
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Devices/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Device#findById
             * @methodOf lbServices.Device
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Device` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Devices/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Device#find
             * @methodOf lbServices.Device
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Device` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Devices",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Device#deleteById
             * @methodOf lbServices.Device
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Device` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Devices/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Device#count
             * @methodOf lbServices.Device
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Devices/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Device#info
             * @methodOf lbServices.Device
             *
             * @description
             *
             * Get full info from device iot Watson.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Device` object.)
             * </em>
             */
            "info": {
              url: urlBase + "/Devices/info",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Device#register
             * @methodOf lbServices.Device
             *
             * @description
             *
             * Register device in iot Watson.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `req` – `{object=}` -
             *
             *  - `device` – `{Device}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Device` object.)
             * </em>
             */
            "register": {
              url: urlBase + "/Devices/register",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Device#update
             * @methodOf lbServices.Device
             *
             * @description
             *
             * Update device in iot Watson.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `req` – `{object=}` -
             *
             *  - `device` – `{Device}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Device` object.)
             * </em>
             */
            "update": {
              url: urlBase + "/Devices/update",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Device#unregister
             * @methodOf lbServices.Device
             *
             * @description
             *
             * Unregister device in iot Watson.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `req` – `{object=}` -
             *
             *  - `device` – `{Device}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Device` object.)
             * </em>
             */
            "unregister": {
              url: urlBase + "/Devices/unregister",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Device#location
             * @methodOf lbServices.Device
             *
             * @description
             *
             * Get the location information of a device.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Device` object.)
             * </em>
             */
            "location": {
              url: urlBase + "/Devices/location",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Device#updatelocation
             * @methodOf lbServices.Device
             *
             * @description
             *
             * Modify the location information for a device.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Device` object.)
             * </em>
             */
            "updatelocation": {
              url: urlBase + "/Devices/location",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Device#cache
             * @methodOf lbServices.Device
             *
             * @description
             *
             * Get last event from device.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Device` object.)
             * </em>
             */
            "cache": {
              url: urlBase + "/Devices/cache",
              method: "POST",
            },

            // INTERNAL. Use ApiUser.devices.findById() instead.
            "::findById::ApiUser::devices": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/devices/:fk",
              method: "GET",
            },

            // INTERNAL. Use ApiUser.devices.destroyById() instead.
            "::destroyById::ApiUser::devices": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/devices/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use ApiUser.devices() instead.
            "::get::ApiUser::devices": {
              isArray: true,
              url: urlBase + "/users/:id/devices",
              method: "GET",
            },

            // INTERNAL. Use ApiUser.devices.create() instead.
            "::create::ApiUser::devices": {
              url: urlBase + "/users/:id/devices",
              method: "POST",
            },

            // INTERNAL. Use ApiUser.devices.createMany() instead.
            "::createMany::ApiUser::devices": {
              isArray: true,
              url: urlBase + "/users/:id/devices",
              method: "POST",
            },

            // INTERNAL. Use ApiUser.devices.destroyAll() instead.
            "::delete::ApiUser::devices": {
              url: urlBase + "/users/:id/devices",
              method: "DELETE",
            },

            // INTERNAL. Use ApiUser.devices.count() instead.
            "::count::ApiUser::devices": {
              url: urlBase + "/users/:id/devices/count",
              method: "GET",
            },

            // INTERNAL. Use Ruler.device() instead.
            "::get::Ruler::device": {
              url: urlBase + "/rules/:id/device",
              method: "GET",
            },

            // INTERNAL. Use Alert.device() instead.
            "::get::Alert::device": {
              url: urlBase + "/alerts/:id/device",
              method: "GET",
            },

            // INTERNAL. Use Cage.devices.findById() instead.
            "::findById::Cage::devices": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/cages/:id/devices/:fk",
              method: "GET",
            },

            // INTERNAL. Use Cage.devices.destroyById() instead.
            "::destroyById::Cage::devices": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/cages/:id/devices/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Cage.devices.updateById() instead.
            "::updateById::Cage::devices": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/cages/:id/devices/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Cage.devices() instead.
            "::get::Cage::devices": {
              isArray: true,
              url: urlBase + "/cages/:id/devices",
              method: "GET",
            },

            // INTERNAL. Use Cage.devices.create() instead.
            "::create::Cage::devices": {
              url: urlBase + "/cages/:id/devices",
              method: "POST",
            },

            // INTERNAL. Use Cage.devices.createMany() instead.
            "::createMany::Cage::devices": {
              isArray: true,
              url: urlBase + "/cages/:id/devices",
              method: "POST",
            },

            // INTERNAL. Use Cage.devices.destroyAll() instead.
            "::delete::Cage::devices": {
              url: urlBase + "/cages/:id/devices",
              method: "DELETE",
            },

            // INTERNAL. Use Cage.devices.count() instead.
            "::count::Cage::devices": {
              url: urlBase + "/cages/:id/devices/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Device#destroyById
             * @methodOf lbServices.Device
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Device` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Device#removeById
             * @methodOf lbServices.Device
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Device` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];


        /**
        * @ngdoc property
        * @name lbServices.Device#modelName
        * @propertyOf lbServices.Device
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Device`.
        */
        R.modelName = "Device";


            /**
             * @ngdoc method
             * @name lbServices.Device#users
             * @methodOf lbServices.Device
             *
             * @description
             *
             * Fetches belongsTo relation users.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Device id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ApiUser` object.)
             * </em>
             */
        R.users = function() {
          var TargetResource = $injector.get("ApiUser");
          var action = TargetResource["::get::Device::users"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Device.thresholds
     * @header lbServices.Device.thresholds
     * @object
     * @description
     *
     * The object `Device.thresholds` groups methods
     * manipulating `Threshold` instances related to `Device`.
     *
     * Call {@link lbServices.Device#thresholds Device.thresholds()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Device#thresholds
             * @methodOf lbServices.Device
             *
             * @description
             *
             * Queries thresholds of Device.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Device id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Threshold` object.)
             * </em>
             */
        R.thresholds = function() {
          var TargetResource = $injector.get("Threshold");
          var action = TargetResource["::get::Device::thresholds"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Device.thresholds#count
             * @methodOf lbServices.Device.thresholds
             *
             * @description
             *
             * Counts thresholds of Device.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Device id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.thresholds.count = function() {
          var TargetResource = $injector.get("Threshold");
          var action = TargetResource["::count::Device::thresholds"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Device.thresholds#create
             * @methodOf lbServices.Device.thresholds
             *
             * @description
             *
             * Creates a new instance in thresholds of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Device id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Threshold` object.)
             * </em>
             */
        R.thresholds.create = function() {
          var TargetResource = $injector.get("Threshold");
          var action = TargetResource["::create::Device::thresholds"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Device.thresholds#createMany
             * @methodOf lbServices.Device.thresholds
             *
             * @description
             *
             * Creates a new instance in thresholds of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Device id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Threshold` object.)
             * </em>
             */
        R.thresholds.createMany = function() {
          var TargetResource = $injector.get("Threshold");
          var action = TargetResource["::createMany::Device::thresholds"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Device.thresholds#destroyAll
             * @methodOf lbServices.Device.thresholds
             *
             * @description
             *
             * Deletes all thresholds of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Device id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.thresholds.destroyAll = function() {
          var TargetResource = $injector.get("Threshold");
          var action = TargetResource["::delete::Device::thresholds"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Device.thresholds#destroyById
             * @methodOf lbServices.Device.thresholds
             *
             * @description
             *
             * Delete a related item by id for thresholds.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Device id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for thresholds
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.thresholds.destroyById = function() {
          var TargetResource = $injector.get("Threshold");
          var action = TargetResource["::destroyById::Device::thresholds"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Device.thresholds#findById
             * @methodOf lbServices.Device.thresholds
             *
             * @description
             *
             * Find a related item by id for thresholds.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Device id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for thresholds
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Threshold` object.)
             * </em>
             */
        R.thresholds.findById = function() {
          var TargetResource = $injector.get("Threshold");
          var action = TargetResource["::findById::Device::thresholds"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Device.thresholds#updateById
             * @methodOf lbServices.Device.thresholds
             *
             * @description
             *
             * Update a related item by id for thresholds.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Device id
             *
             *  - `fk` – `{*}` - Foreign key for thresholds
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Threshold` object.)
             * </em>
             */
        R.thresholds.updateById = function() {
          var TargetResource = $injector.get("Threshold");
          var action = TargetResource["::updateById::Device::thresholds"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Device.events
     * @header lbServices.Device.events
     * @object
     * @description
     *
     * The object `Device.events` groups methods
     * manipulating `Event` instances related to `Device`.
     *
     * Call {@link lbServices.Device#events Device.events()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Device#events
             * @methodOf lbServices.Device
             *
             * @description
             *
             * Queries events of Device.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Device id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Event` object.)
             * </em>
             */
        R.events = function() {
          var TargetResource = $injector.get("Event");
          var action = TargetResource["::get::Device::events"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Device.events#count
             * @methodOf lbServices.Device.events
             *
             * @description
             *
             * Counts events of Device.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Device id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.events.count = function() {
          var TargetResource = $injector.get("Event");
          var action = TargetResource["::count::Device::events"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Device.events#create
             * @methodOf lbServices.Device.events
             *
             * @description
             *
             * Creates a new instance in events of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Device id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Event` object.)
             * </em>
             */
        R.events.create = function() {
          var TargetResource = $injector.get("Event");
          var action = TargetResource["::create::Device::events"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Device.events#createMany
             * @methodOf lbServices.Device.events
             *
             * @description
             *
             * Creates a new instance in events of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Device id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Event` object.)
             * </em>
             */
        R.events.createMany = function() {
          var TargetResource = $injector.get("Event");
          var action = TargetResource["::createMany::Device::events"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Device.events#destroyAll
             * @methodOf lbServices.Device.events
             *
             * @description
             *
             * Deletes all events of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Device id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.events.destroyAll = function() {
          var TargetResource = $injector.get("Event");
          var action = TargetResource["::delete::Device::events"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Device.events#destroyById
             * @methodOf lbServices.Device.events
             *
             * @description
             *
             * Delete a related item by id for events.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Device id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for events
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.events.destroyById = function() {
          var TargetResource = $injector.get("Event");
          var action = TargetResource["::destroyById::Device::events"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Device.events#findById
             * @methodOf lbServices.Device.events
             *
             * @description
             *
             * Find a related item by id for events.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Device id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for events
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Event` object.)
             * </em>
             */
        R.events.findById = function() {
          var TargetResource = $injector.get("Event");
          var action = TargetResource["::findById::Device::events"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Device.events#updateById
             * @methodOf lbServices.Device.events
             *
             * @description
             *
             * Update a related item by id for events.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Device id
             *
             *  - `fk` – `{*}` - Foreign key for events
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Event` object.)
             * </em>
             */
        R.events.updateById = function() {
          var TargetResource = $injector.get("Event");
          var action = TargetResource["::updateById::Device::events"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Device.rulers
     * @header lbServices.Device.rulers
     * @object
     * @description
     *
     * The object `Device.rulers` groups methods
     * manipulating `Ruler` instances related to `Device`.
     *
     * Call {@link lbServices.Device#rulers Device.rulers()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Device#rulers
             * @methodOf lbServices.Device
             *
             * @description
             *
             * Queries rulers of Device.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Device id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Ruler` object.)
             * </em>
             */
        R.rulers = function() {
          var TargetResource = $injector.get("Ruler");
          var action = TargetResource["::get::Device::rulers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Device.rulers#count
             * @methodOf lbServices.Device.rulers
             *
             * @description
             *
             * Counts rulers of Device.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Device id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.rulers.count = function() {
          var TargetResource = $injector.get("Ruler");
          var action = TargetResource["::count::Device::rulers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Device.rulers#create
             * @methodOf lbServices.Device.rulers
             *
             * @description
             *
             * Creates a new instance in rulers of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Device id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Ruler` object.)
             * </em>
             */
        R.rulers.create = function() {
          var TargetResource = $injector.get("Ruler");
          var action = TargetResource["::create::Device::rulers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Device.rulers#createMany
             * @methodOf lbServices.Device.rulers
             *
             * @description
             *
             * Creates a new instance in rulers of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Device id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Ruler` object.)
             * </em>
             */
        R.rulers.createMany = function() {
          var TargetResource = $injector.get("Ruler");
          var action = TargetResource["::createMany::Device::rulers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Device.rulers#destroyAll
             * @methodOf lbServices.Device.rulers
             *
             * @description
             *
             * Deletes all rulers of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Device id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.rulers.destroyAll = function() {
          var TargetResource = $injector.get("Ruler");
          var action = TargetResource["::delete::Device::rulers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Device.rulers#destroyById
             * @methodOf lbServices.Device.rulers
             *
             * @description
             *
             * Delete a related item by id for rulers.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Device id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for rulers
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.rulers.destroyById = function() {
          var TargetResource = $injector.get("Ruler");
          var action = TargetResource["::destroyById::Device::rulers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Device.rulers#findById
             * @methodOf lbServices.Device.rulers
             *
             * @description
             *
             * Find a related item by id for rulers.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Device id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for rulers
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Ruler` object.)
             * </em>
             */
        R.rulers.findById = function() {
          var TargetResource = $injector.get("Ruler");
          var action = TargetResource["::findById::Device::rulers"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Device.rulers#updateById
             * @methodOf lbServices.Device.rulers
             *
             * @description
             *
             * Update a related item by id for rulers.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Device id
             *
             *  - `fk` – `{*}` - Foreign key for rulers
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Ruler` object.)
             * </em>
             */
        R.rulers.updateById = function() {
          var TargetResource = $injector.get("Ruler");
          var action = TargetResource["::updateById::Device::rulers"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Device.alerts
     * @header lbServices.Device.alerts
     * @object
     * @description
     *
     * The object `Device.alerts` groups methods
     * manipulating `Alert` instances related to `Device`.
     *
     * Call {@link lbServices.Device#alerts Device.alerts()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Device#alerts
             * @methodOf lbServices.Device
             *
             * @description
             *
             * Queries alerts of Device.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Device id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Alert` object.)
             * </em>
             */
        R.alerts = function() {
          var TargetResource = $injector.get("Alert");
          var action = TargetResource["::get::Device::alerts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Device.alerts#count
             * @methodOf lbServices.Device.alerts
             *
             * @description
             *
             * Counts alerts of Device.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Device id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.alerts.count = function() {
          var TargetResource = $injector.get("Alert");
          var action = TargetResource["::count::Device::alerts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Device.alerts#create
             * @methodOf lbServices.Device.alerts
             *
             * @description
             *
             * Creates a new instance in alerts of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Device id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Alert` object.)
             * </em>
             */
        R.alerts.create = function() {
          var TargetResource = $injector.get("Alert");
          var action = TargetResource["::create::Device::alerts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Device.alerts#createMany
             * @methodOf lbServices.Device.alerts
             *
             * @description
             *
             * Creates a new instance in alerts of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Device id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Alert` object.)
             * </em>
             */
        R.alerts.createMany = function() {
          var TargetResource = $injector.get("Alert");
          var action = TargetResource["::createMany::Device::alerts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Device.alerts#destroyAll
             * @methodOf lbServices.Device.alerts
             *
             * @description
             *
             * Deletes all alerts of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Device id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.alerts.destroyAll = function() {
          var TargetResource = $injector.get("Alert");
          var action = TargetResource["::delete::Device::alerts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Device.alerts#destroyById
             * @methodOf lbServices.Device.alerts
             *
             * @description
             *
             * Delete a related item by id for alerts.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Device id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for alerts
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.alerts.destroyById = function() {
          var TargetResource = $injector.get("Alert");
          var action = TargetResource["::destroyById::Device::alerts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Device.alerts#findById
             * @methodOf lbServices.Device.alerts
             *
             * @description
             *
             * Find a related item by id for alerts.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Device id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for alerts
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Alert` object.)
             * </em>
             */
        R.alerts.findById = function() {
          var TargetResource = $injector.get("Alert");
          var action = TargetResource["::findById::Device::alerts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Device.alerts#updateById
             * @methodOf lbServices.Device.alerts
             *
             * @description
             *
             * Update a related item by id for alerts.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Device id
             *
             *  - `fk` – `{*}` - Foreign key for alerts
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Alert` object.)
             * </em>
             */
        R.alerts.updateById = function() {
          var TargetResource = $injector.get("Alert");
          var action = TargetResource["::updateById::Device::alerts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Device#cage
             * @methodOf lbServices.Device
             *
             * @description
             *
             * Fetches belongsTo relation cage.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Device id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Cage` object.)
             * </em>
             */
        R.cage = function() {
          var TargetResource = $injector.get("Cage");
          var action = TargetResource["::get::Device::cage"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Email
 * @header lbServices.Email
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Email` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Email",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Emails/:id",
          { 'id': '@id' },
          {
          }
        );




        /**
        * @ngdoc property
        * @name lbServices.Email#modelName
        * @propertyOf lbServices.Email
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Email`.
        */
        R.modelName = "Email";



        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Weather
 * @header lbServices.Weather
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Weather` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Weather",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/weather/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.Weather#today
             * @methodOf lbServices.Weather
             *
             * @description
             *
             * Forecast by Geocode
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `latitude` – `{string}` -
             *
             *  - `longitude` – `{string}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Weather` object.)
             * </em>
             */
            "today": {
              url: urlBase + "/weather/:latitude/:longitude/today",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Weather#daily
             * @methodOf lbServices.Weather
             *
             * @description
             *
             * Forecast by Geocode
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `latitude` – `{string}` -
             *
             *  - `longitude` – `{string}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Weather` object.)
             * </em>
             */
            "daily": {
              url: urlBase + "/weather/:latitude/:longitude/daily",
              method: "GET",
            },
          }
        );




        /**
        * @ngdoc property
        * @name lbServices.Weather#modelName
        * @propertyOf lbServices.Weather
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Weather`.
        */
        R.modelName = "Weather";



        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Ruler
 * @header lbServices.Ruler
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Ruler` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Ruler",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/rules/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Ruler.device() instead.
            "prototype$__get__device": {
              url: urlBase + "/rules/:id/device",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Ruler#create
             * @methodOf lbServices.Ruler
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Ruler` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/rules",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Ruler#createMany
             * @methodOf lbServices.Ruler
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Ruler` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/rules",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Ruler#replaceOrCreate
             * @methodOf lbServices.Ruler
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Ruler` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/rules/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Ruler#exists
             * @methodOf lbServices.Ruler
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/rules/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Ruler#findById
             * @methodOf lbServices.Ruler
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Ruler` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/rules/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Ruler#replaceById
             * @methodOf lbServices.Ruler
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Ruler` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/rules/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Ruler#find
             * @methodOf lbServices.Ruler
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Ruler` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/rules",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Ruler#deleteById
             * @methodOf lbServices.Ruler
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Ruler` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/rules/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Ruler#count
             * @methodOf lbServices.Ruler
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/rules/count",
              method: "GET",
            },

            // INTERNAL. Use ApiUser.rules.findById() instead.
            "::findById::ApiUser::rules": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/rules/:fk",
              method: "GET",
            },

            // INTERNAL. Use ApiUser.rules.destroyById() instead.
            "::destroyById::ApiUser::rules": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/rules/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use ApiUser.rules.updateById() instead.
            "::updateById::ApiUser::rules": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/rules/:fk",
              method: "PUT",
            },

            // INTERNAL. Use ApiUser.rules() instead.
            "::get::ApiUser::rules": {
              isArray: true,
              url: urlBase + "/users/:id/rules",
              method: "GET",
            },

            // INTERNAL. Use ApiUser.rules.create() instead.
            "::create::ApiUser::rules": {
              url: urlBase + "/users/:id/rules",
              method: "POST",
            },

            // INTERNAL. Use ApiUser.rules.createMany() instead.
            "::createMany::ApiUser::rules": {
              isArray: true,
              url: urlBase + "/users/:id/rules",
              method: "POST",
            },

            // INTERNAL. Use ApiUser.rules.destroyAll() instead.
            "::delete::ApiUser::rules": {
              url: urlBase + "/users/:id/rules",
              method: "DELETE",
            },

            // INTERNAL. Use ApiUser.rules.count() instead.
            "::count::ApiUser::rules": {
              url: urlBase + "/users/:id/rules/count",
              method: "GET",
            },

            // INTERNAL. Use Device.rulers.findById() instead.
            "::findById::Device::rulers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Devices/:id/rulers/:fk",
              method: "GET",
            },

            // INTERNAL. Use Device.rulers.destroyById() instead.
            "::destroyById::Device::rulers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Devices/:id/rulers/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Device.rulers.updateById() instead.
            "::updateById::Device::rulers": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Devices/:id/rulers/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Device.rulers() instead.
            "::get::Device::rulers": {
              isArray: true,
              url: urlBase + "/Devices/:id/rulers",
              method: "GET",
            },

            // INTERNAL. Use Device.rulers.create() instead.
            "::create::Device::rulers": {
              url: urlBase + "/Devices/:id/rulers",
              method: "POST",
            },

            // INTERNAL. Use Device.rulers.createMany() instead.
            "::createMany::Device::rulers": {
              isArray: true,
              url: urlBase + "/Devices/:id/rulers",
              method: "POST",
            },

            // INTERNAL. Use Device.rulers.destroyAll() instead.
            "::delete::Device::rulers": {
              url: urlBase + "/Devices/:id/rulers",
              method: "DELETE",
            },

            // INTERNAL. Use Device.rulers.count() instead.
            "::count::Device::rulers": {
              url: urlBase + "/Devices/:id/rulers/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Ruler#destroyById
             * @methodOf lbServices.Ruler
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Ruler` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Ruler#removeById
             * @methodOf lbServices.Ruler
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Ruler` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];


        /**
        * @ngdoc property
        * @name lbServices.Ruler#modelName
        * @propertyOf lbServices.Ruler
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Ruler`.
        */
        R.modelName = "Ruler";


            /**
             * @ngdoc method
             * @name lbServices.Ruler#device
             * @methodOf lbServices.Ruler
             *
             * @description
             *
             * Fetches belongsTo relation device.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Ruler id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Device` object.)
             * </em>
             */
        R.device = function() {
          var TargetResource = $injector.get("Device");
          var action = TargetResource["::get::Ruler::device"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Alert
 * @header lbServices.Alert
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Alert` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Alert",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/alerts/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Alert.device() instead.
            "prototype$__get__device": {
              url: urlBase + "/alerts/:id/device",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Alert#create
             * @methodOf lbServices.Alert
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Alert` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/alerts",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Alert#createMany
             * @methodOf lbServices.Alert
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Alert` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/alerts",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Alert#patchOrCreate
             * @methodOf lbServices.Alert
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Alert` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/alerts",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Alert#replaceOrCreate
             * @methodOf lbServices.Alert
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Alert` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/alerts/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Alert#upsertWithWhere
             * @methodOf lbServices.Alert
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Alert` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/alerts/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Alert#exists
             * @methodOf lbServices.Alert
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/alerts/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Alert#findById
             * @methodOf lbServices.Alert
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Alert` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/alerts/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Alert#replaceById
             * @methodOf lbServices.Alert
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Alert` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/alerts/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Alert#find
             * @methodOf lbServices.Alert
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Alert` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/alerts",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Alert#findOne
             * @methodOf lbServices.Alert
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Alert` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/alerts/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Alert#updateAll
             * @methodOf lbServices.Alert
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/alerts/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Alert#deleteById
             * @methodOf lbServices.Alert
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Alert` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/alerts/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Alert#count
             * @methodOf lbServices.Alert
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/alerts/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Alert#prototype$patchAttributes
             * @methodOf lbServices.Alert
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Alert id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Alert` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/alerts/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Alert#createChangeStream
             * @methodOf lbServices.Alert
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/alerts/change-stream",
              method: "POST",
            },

            // INTERNAL. Use ApiUser.alerts.findById() instead.
            "::findById::ApiUser::alerts": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/alerts/:fk",
              method: "GET",
            },

            // INTERNAL. Use ApiUser.alerts.destroyById() instead.
            "::destroyById::ApiUser::alerts": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/alerts/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use ApiUser.alerts.updateById() instead.
            "::updateById::ApiUser::alerts": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/alerts/:fk",
              method: "PUT",
            },

            // INTERNAL. Use ApiUser.alerts() instead.
            "::get::ApiUser::alerts": {
              isArray: true,
              url: urlBase + "/users/:id/alerts",
              method: "GET",
            },

            // INTERNAL. Use ApiUser.alerts.create() instead.
            "::create::ApiUser::alerts": {
              url: urlBase + "/users/:id/alerts",
              method: "POST",
            },

            // INTERNAL. Use ApiUser.alerts.createMany() instead.
            "::createMany::ApiUser::alerts": {
              isArray: true,
              url: urlBase + "/users/:id/alerts",
              method: "POST",
            },

            // INTERNAL. Use ApiUser.alerts.destroyAll() instead.
            "::delete::ApiUser::alerts": {
              url: urlBase + "/users/:id/alerts",
              method: "DELETE",
            },

            // INTERNAL. Use ApiUser.alerts.count() instead.
            "::count::ApiUser::alerts": {
              url: urlBase + "/users/:id/alerts/count",
              method: "GET",
            },

            // INTERNAL. Use Device.alerts.findById() instead.
            "::findById::Device::alerts": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Devices/:id/alerts/:fk",
              method: "GET",
            },

            // INTERNAL. Use Device.alerts.destroyById() instead.
            "::destroyById::Device::alerts": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Devices/:id/alerts/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Device.alerts.updateById() instead.
            "::updateById::Device::alerts": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Devices/:id/alerts/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Device.alerts() instead.
            "::get::Device::alerts": {
              isArray: true,
              url: urlBase + "/Devices/:id/alerts",
              method: "GET",
            },

            // INTERNAL. Use Device.alerts.create() instead.
            "::create::Device::alerts": {
              url: urlBase + "/Devices/:id/alerts",
              method: "POST",
            },

            // INTERNAL. Use Device.alerts.createMany() instead.
            "::createMany::Device::alerts": {
              isArray: true,
              url: urlBase + "/Devices/:id/alerts",
              method: "POST",
            },

            // INTERNAL. Use Device.alerts.destroyAll() instead.
            "::delete::Device::alerts": {
              url: urlBase + "/Devices/:id/alerts",
              method: "DELETE",
            },

            // INTERNAL. Use Device.alerts.count() instead.
            "::count::Device::alerts": {
              url: urlBase + "/Devices/:id/alerts/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Alert#upsert
             * @methodOf lbServices.Alert
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Alert` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Alert#updateOrCreate
             * @methodOf lbServices.Alert
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Alert` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Alert#patchOrCreateWithWhere
             * @methodOf lbServices.Alert
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Alert` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Alert#update
             * @methodOf lbServices.Alert
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Alert#destroyById
             * @methodOf lbServices.Alert
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Alert` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Alert#removeById
             * @methodOf lbServices.Alert
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Alert` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Alert#prototype$updateAttributes
             * @methodOf lbServices.Alert
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Alert id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Alert` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Alert#modelName
        * @propertyOf lbServices.Alert
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Alert`.
        */
        R.modelName = "Alert";


            /**
             * @ngdoc method
             * @name lbServices.Alert#device
             * @methodOf lbServices.Alert
             *
             * @description
             *
             * Fetches belongsTo relation device.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Alert id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Device` object.)
             * </em>
             */
        R.device = function() {
          var TargetResource = $injector.get("Device");
          var action = TargetResource["::get::Alert::device"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Center
 * @header lbServices.Center
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Center` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Center",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/centers/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Center.cages.findById() instead.
            "prototype$__findById__cages": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/centers/:id/cages/:fk",
              method: "GET",
            },

            // INTERNAL. Use Center.cages.destroyById() instead.
            "prototype$__destroyById__cages": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/centers/:id/cages/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Center.cages.updateById() instead.
            "prototype$__updateById__cages": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/centers/:id/cages/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Center.cages() instead.
            "prototype$__get__cages": {
              isArray: true,
              url: urlBase + "/centers/:id/cages",
              method: "GET",
            },

            // INTERNAL. Use Center.cages.create() instead.
            "prototype$__create__cages": {
              url: urlBase + "/centers/:id/cages",
              method: "POST",
            },

            // INTERNAL. Use Center.cages.destroyAll() instead.
            "prototype$__delete__cages": {
              url: urlBase + "/centers/:id/cages",
              method: "DELETE",
            },

            // INTERNAL. Use Center.cages.count() instead.
            "prototype$__count__cages": {
              url: urlBase + "/centers/:id/cages/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Center#create
             * @methodOf lbServices.Center
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Center` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/centers",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Center#createMany
             * @methodOf lbServices.Center
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Center` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/centers",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Center#patchOrCreate
             * @methodOf lbServices.Center
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Center` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/centers",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Center#replaceOrCreate
             * @methodOf lbServices.Center
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Center` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/centers/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Center#upsertWithWhere
             * @methodOf lbServices.Center
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Center` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/centers/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Center#exists
             * @methodOf lbServices.Center
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/centers/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Center#findById
             * @methodOf lbServices.Center
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Center` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/centers/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Center#replaceById
             * @methodOf lbServices.Center
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Center` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/centers/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Center#find
             * @methodOf lbServices.Center
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Center` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/centers",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Center#findOne
             * @methodOf lbServices.Center
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Center` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/centers/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Center#updateAll
             * @methodOf lbServices.Center
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/centers/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Center#deleteById
             * @methodOf lbServices.Center
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Center` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/centers/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Center#count
             * @methodOf lbServices.Center
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/centers/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Center#prototype$patchAttributes
             * @methodOf lbServices.Center
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Center id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Center` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/centers/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Center#createChangeStream
             * @methodOf lbServices.Center
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/centers/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Cage.center() instead.
            "::get::Cage::center": {
              url: urlBase + "/cages/:id/center",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Center#upsert
             * @methodOf lbServices.Center
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Center` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Center#updateOrCreate
             * @methodOf lbServices.Center
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Center` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Center#patchOrCreateWithWhere
             * @methodOf lbServices.Center
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Center` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Center#update
             * @methodOf lbServices.Center
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Center#destroyById
             * @methodOf lbServices.Center
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Center` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Center#removeById
             * @methodOf lbServices.Center
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Center` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Center#prototype$updateAttributes
             * @methodOf lbServices.Center
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Center id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Center` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Center#modelName
        * @propertyOf lbServices.Center
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Center`.
        */
        R.modelName = "Center";

    /**
     * @ngdoc object
     * @name lbServices.Center.cages
     * @header lbServices.Center.cages
     * @object
     * @description
     *
     * The object `Center.cages` groups methods
     * manipulating `Cage` instances related to `Center`.
     *
     * Call {@link lbServices.Center#cages Center.cages()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Center#cages
             * @methodOf lbServices.Center
             *
             * @description
             *
             * Queries cages of Center.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Center id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Cage` object.)
             * </em>
             */
        R.cages = function() {
          var TargetResource = $injector.get("Cage");
          var action = TargetResource["::get::Center::cages"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Center.cages#count
             * @methodOf lbServices.Center.cages
             *
             * @description
             *
             * Counts cages of Center.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Center id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.cages.count = function() {
          var TargetResource = $injector.get("Cage");
          var action = TargetResource["::count::Center::cages"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Center.cages#create
             * @methodOf lbServices.Center.cages
             *
             * @description
             *
             * Creates a new instance in cages of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Center id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Cage` object.)
             * </em>
             */
        R.cages.create = function() {
          var TargetResource = $injector.get("Cage");
          var action = TargetResource["::create::Center::cages"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Center.cages#createMany
             * @methodOf lbServices.Center.cages
             *
             * @description
             *
             * Creates a new instance in cages of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Center id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Cage` object.)
             * </em>
             */
        R.cages.createMany = function() {
          var TargetResource = $injector.get("Cage");
          var action = TargetResource["::createMany::Center::cages"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Center.cages#destroyAll
             * @methodOf lbServices.Center.cages
             *
             * @description
             *
             * Deletes all cages of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Center id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.cages.destroyAll = function() {
          var TargetResource = $injector.get("Cage");
          var action = TargetResource["::delete::Center::cages"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Center.cages#destroyById
             * @methodOf lbServices.Center.cages
             *
             * @description
             *
             * Delete a related item by id for cages.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Center id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for cages
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.cages.destroyById = function() {
          var TargetResource = $injector.get("Cage");
          var action = TargetResource["::destroyById::Center::cages"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Center.cages#findById
             * @methodOf lbServices.Center.cages
             *
             * @description
             *
             * Find a related item by id for cages.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Center id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for cages
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Cage` object.)
             * </em>
             */
        R.cages.findById = function() {
          var TargetResource = $injector.get("Cage");
          var action = TargetResource["::findById::Center::cages"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Center.cages#updateById
             * @methodOf lbServices.Center.cages
             *
             * @description
             *
             * Update a related item by id for cages.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Center id
             *
             *  - `fk` – `{*}` - Foreign key for cages
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Cage` object.)
             * </em>
             */
        R.cages.updateById = function() {
          var TargetResource = $injector.get("Cage");
          var action = TargetResource["::updateById::Center::cages"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Cage
 * @header lbServices.Cage
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Cage` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Cage",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/cages/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Cage.devices.findById() instead.
            "prototype$__findById__devices": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/cages/:id/devices/:fk",
              method: "GET",
            },

            // INTERNAL. Use Cage.devices.destroyById() instead.
            "prototype$__destroyById__devices": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/cages/:id/devices/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Cage.devices.updateById() instead.
            "prototype$__updateById__devices": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/cages/:id/devices/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Cage.center() instead.
            "prototype$__get__center": {
              url: urlBase + "/cages/:id/center",
              method: "GET",
            },

            // INTERNAL. Use Cage.devices() instead.
            "prototype$__get__devices": {
              isArray: true,
              url: urlBase + "/cages/:id/devices",
              method: "GET",
            },

            // INTERNAL. Use Cage.devices.create() instead.
            "prototype$__create__devices": {
              url: urlBase + "/cages/:id/devices",
              method: "POST",
            },

            // INTERNAL. Use Cage.devices.destroyAll() instead.
            "prototype$__delete__devices": {
              url: urlBase + "/cages/:id/devices",
              method: "DELETE",
            },

            // INTERNAL. Use Cage.devices.count() instead.
            "prototype$__count__devices": {
              url: urlBase + "/cages/:id/devices/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Cage#create
             * @methodOf lbServices.Cage
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Cage` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/cages",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Cage#createMany
             * @methodOf lbServices.Cage
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Cage` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/cages",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Cage#patchOrCreate
             * @methodOf lbServices.Cage
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Cage` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/cages",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Cage#replaceOrCreate
             * @methodOf lbServices.Cage
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Cage` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/cages/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Cage#upsertWithWhere
             * @methodOf lbServices.Cage
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Cage` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/cages/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Cage#exists
             * @methodOf lbServices.Cage
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/cages/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Cage#findById
             * @methodOf lbServices.Cage
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Cage` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/cages/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Cage#replaceById
             * @methodOf lbServices.Cage
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Cage` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/cages/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Cage#find
             * @methodOf lbServices.Cage
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Cage` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/cages",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Cage#findOne
             * @methodOf lbServices.Cage
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Cage` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/cages/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Cage#updateAll
             * @methodOf lbServices.Cage
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/cages/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Cage#deleteById
             * @methodOf lbServices.Cage
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Cage` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/cages/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Cage#count
             * @methodOf lbServices.Cage
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/cages/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Cage#prototype$patchAttributes
             * @methodOf lbServices.Cage
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Cage id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Cage` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/cages/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Cage#createChangeStream
             * @methodOf lbServices.Cage
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/cages/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Device.cage() instead.
            "::get::Device::cage": {
              url: urlBase + "/Devices/:id/cage",
              method: "GET",
            },

            // INTERNAL. Use Center.cages.findById() instead.
            "::findById::Center::cages": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/centers/:id/cages/:fk",
              method: "GET",
            },

            // INTERNAL. Use Center.cages.destroyById() instead.
            "::destroyById::Center::cages": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/centers/:id/cages/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Center.cages.updateById() instead.
            "::updateById::Center::cages": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/centers/:id/cages/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Center.cages() instead.
            "::get::Center::cages": {
              isArray: true,
              url: urlBase + "/centers/:id/cages",
              method: "GET",
            },

            // INTERNAL. Use Center.cages.create() instead.
            "::create::Center::cages": {
              url: urlBase + "/centers/:id/cages",
              method: "POST",
            },

            // INTERNAL. Use Center.cages.createMany() instead.
            "::createMany::Center::cages": {
              isArray: true,
              url: urlBase + "/centers/:id/cages",
              method: "POST",
            },

            // INTERNAL. Use Center.cages.destroyAll() instead.
            "::delete::Center::cages": {
              url: urlBase + "/centers/:id/cages",
              method: "DELETE",
            },

            // INTERNAL. Use Center.cages.count() instead.
            "::count::Center::cages": {
              url: urlBase + "/centers/:id/cages/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Cage#upsert
             * @methodOf lbServices.Cage
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Cage` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Cage#updateOrCreate
             * @methodOf lbServices.Cage
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Cage` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Cage#patchOrCreateWithWhere
             * @methodOf lbServices.Cage
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Cage` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Cage#update
             * @methodOf lbServices.Cage
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Cage#destroyById
             * @methodOf lbServices.Cage
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Cage` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Cage#removeById
             * @methodOf lbServices.Cage
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Cage` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Cage#prototype$updateAttributes
             * @methodOf lbServices.Cage
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Cage id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Cage` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Cage#modelName
        * @propertyOf lbServices.Cage
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Cage`.
        */
        R.modelName = "Cage";

    /**
     * @ngdoc object
     * @name lbServices.Cage.devices
     * @header lbServices.Cage.devices
     * @object
     * @description
     *
     * The object `Cage.devices` groups methods
     * manipulating `Device` instances related to `Cage`.
     *
     * Call {@link lbServices.Cage#devices Cage.devices()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Cage#devices
             * @methodOf lbServices.Cage
             *
             * @description
             *
             * Queries devices of Cage.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Cage id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Device` object.)
             * </em>
             */
        R.devices = function() {
          var TargetResource = $injector.get("Device");
          var action = TargetResource["::get::Cage::devices"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Cage.devices#count
             * @methodOf lbServices.Cage.devices
             *
             * @description
             *
             * Counts devices of Cage.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Cage id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.devices.count = function() {
          var TargetResource = $injector.get("Device");
          var action = TargetResource["::count::Cage::devices"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Cage.devices#create
             * @methodOf lbServices.Cage.devices
             *
             * @description
             *
             * Creates a new instance in devices of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Cage id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Device` object.)
             * </em>
             */
        R.devices.create = function() {
          var TargetResource = $injector.get("Device");
          var action = TargetResource["::create::Cage::devices"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Cage.devices#createMany
             * @methodOf lbServices.Cage.devices
             *
             * @description
             *
             * Creates a new instance in devices of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Cage id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Device` object.)
             * </em>
             */
        R.devices.createMany = function() {
          var TargetResource = $injector.get("Device");
          var action = TargetResource["::createMany::Cage::devices"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Cage.devices#destroyAll
             * @methodOf lbServices.Cage.devices
             *
             * @description
             *
             * Deletes all devices of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Cage id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.devices.destroyAll = function() {
          var TargetResource = $injector.get("Device");
          var action = TargetResource["::delete::Cage::devices"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Cage.devices#destroyById
             * @methodOf lbServices.Cage.devices
             *
             * @description
             *
             * Delete a related item by id for devices.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Cage id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for devices
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.devices.destroyById = function() {
          var TargetResource = $injector.get("Device");
          var action = TargetResource["::destroyById::Cage::devices"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Cage.devices#findById
             * @methodOf lbServices.Cage.devices
             *
             * @description
             *
             * Find a related item by id for devices.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Cage id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for devices
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Device` object.)
             * </em>
             */
        R.devices.findById = function() {
          var TargetResource = $injector.get("Device");
          var action = TargetResource["::findById::Cage::devices"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Cage.devices#updateById
             * @methodOf lbServices.Cage.devices
             *
             * @description
             *
             * Update a related item by id for devices.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Cage id
             *
             *  - `fk` – `{*}` - Foreign key for devices
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Device` object.)
             * </em>
             */
        R.devices.updateById = function() {
          var TargetResource = $injector.get("Device");
          var action = TargetResource["::updateById::Cage::devices"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Cage#center
             * @methodOf lbServices.Cage
             *
             * @description
             *
             * Fetches belongsTo relation center.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Cage id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Center` object.)
             * </em>
             */
        R.center = function() {
          var TargetResource = $injector.get("Center");
          var action = TargetResource["::get::Cage::center"];
          return action.apply(R, arguments);
        };


        return R;
      }]);


  module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId', 'rememberMe'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    };

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    };

    LoopBackAuth.prototype.clearStorage = function() {
      props.forEach(function(name) {
        save(sessionStorage, name, null);
        save(localStorage, name, null);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      try {
        var key = propsPrefix + name;
        if (value == null) value = '';
        storage[key] = value;
      } catch (err) {
        console.log('Cannot access local/session storage:', err);
      }
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', ['$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {
          // filter out external requests
          var host = getHost(config.url);
          if (host && config.url.indexOf(urlBaseHost) === -1) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 }},
              status: 401,
              config: config,
              headers: function() { return undefined; },
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        },
      };
    }])

  /**
   * @ngdoc object
   * @name lbServices.LoopBackResourceProvider
   * @header lbServices.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the header name that is used for sending the authentication token.
     */
    this.getAuthHeader = function() {
      return authHeader;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
      urlBaseHost = getHost(urlBase) || location.host;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the URL of the REST API server. The URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.getUrlBase = function() {
      return urlBase;
    };

    this.$get = ['$resource', function($resource) {
      var LoopBackResource = function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };

      LoopBackResource.getUrlBase = function() {
        return urlBase;
      };

      LoopBackResource.getAuthHeader = function() {
        return authHeader;
      };

      return LoopBackResource;
    }];
  });
})(window, window.angular);
