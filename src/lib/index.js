/**
 * Format waterline errors nicely
 */


// own modules
import forbidden from "./forbidden";
import unkown from "./unknown";
import validation from "./validation";


/**
 * @param {Error} error
 * @param {Object} [options]
 * @param {Object} [options.key] - function called on each key
 * @return {Object} parsed error object
 */
export default function(error, options={}) {
  // if no error is passed, quit immediately
  if (!error) {
    return error;
  }

  // make it traversable
  // consider that the user may have already called .toJSON
  error = error.toJSON ? error.toJSON() : error;

  // handling errors differently
  switch (error.error) {
  case "E_VALIDATION":
    return validation(error, options);
  case "E_UNKNOWN":
    return unkown(error, options);
  case "E_FORBIDDEN":
    return forbidden(error, options);
  // we can't handle the error, so just return it as it is
  default:
    return error;
  }
}
