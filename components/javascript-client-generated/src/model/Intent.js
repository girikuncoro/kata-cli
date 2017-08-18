/**
 * Zaun
 * Zaun service 
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/IntentAttributes', 'model/IntentClassifier'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./IntentAttributes'), require('./IntentClassifier'));
  } else {
    // Browser globals (root is window)
    if (!root.Zaun) {
      root.Zaun = {};
    }
    root.Zaun.Intent = factory(root.Zaun.ApiClient, root.Zaun.IntentAttributes, root.Zaun.IntentClassifier);
  }
}(this, function(ApiClient, IntentAttributes, IntentClassifier) {
  'use strict';




  /**
   * The Intent model module.
   * @module model/Intent
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Intent</code>.
   * @alias module:model/Intent
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>Intent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Intent} obj Optional instance to populate.
   * @return {module:model/Intent} The populated <code>Intent</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('condition')) {
        obj['condition'] = ApiClient.convertToType(data['condition'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('classifier')) {
        obj['classifier'] = IntentClassifier.constructFromObject(data['classifier']);
      }
      if (data.hasOwnProperty('initial')) {
        obj['initial'] = ApiClient.convertToType(data['initial'], 'Boolean');
      }
      if (data.hasOwnProperty('priority')) {
        obj['priority'] = ApiClient.convertToType(data['priority'], 'Number');
      }
      if (data.hasOwnProperty('fallback')) {
        obj['fallback'] = ApiClient.convertToType(data['fallback'], 'Boolean');
      }
      if (data.hasOwnProperty('attributes')) {
        obj['attributes'] = IntentAttributes.constructFromObject(data['attributes']);
      }
    }
    return obj;
  }

  /**
   * @member {String} condition
   */
  exports.prototype['condition'] = undefined;
  /**
   * @member {module:model/Intent.TypeEnum} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {module:model/IntentClassifier} classifier
   */
  exports.prototype['classifier'] = undefined;
  /**
   * @member {Boolean} initial
   */
  exports.prototype['initial'] = undefined;
  /**
   * @member {Number} priority
   */
  exports.prototype['priority'] = undefined;
  /**
   * @member {Boolean} fallback
   */
  exports.prototype['fallback'] = undefined;
  /**
   * @member {module:model/IntentAttributes} attributes
   */
  exports.prototype['attributes'] = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "data"
     * @const
     */
    "data": "data",
    /**
     * value: "text"
     * @const
     */
    "text": "text",
    /**
     * value: "command"
     * @const
     */
    "command": "command"  };


  return exports;
}));

