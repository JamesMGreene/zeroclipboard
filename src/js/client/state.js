/**
 * Keep track of the ZeroClipboard client instance counter.
 */
var _clientIdCounter = 0;


/**
 * Keep track of the state of the client instances.
 *
 * Entry structure:
 *   _clientMeta[client.id] = {
 *     instance: client,
 *     elements: [],
 *     handlers: {}
 *   };
 */
var _clientMeta = {};


/**
 * Keep track of the ZeroClipboard clipped elements counter.
 */
var _elementIdCounter = 0;


/**
 * Keep track of the state of the clipped element relationships to clients.
 *
 * Entry structure:
 *   _elementMeta[element.zcClippingId] = [client1.id, client2.id];
 */
var _elementMeta = {};


/**
 * Keep track of the previously activated clipped element for some special situations.
 */
var _lastActivatedTarget;

/**
 * Extending the ZeroClipboard configuration defaults for the Client module.
 */
_extend(_globalConfig, {

  // Setting this to `false` would allow users to handle calling
  // `ZeroClipboard.focus(...);` themselves instead of relying on our
  // per-element `mouseover` handler.
  autoActivate: true

});
