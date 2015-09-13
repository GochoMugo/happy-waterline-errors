/**
 * Parsing forbidden errors
 */
export default function() {
  return {
    code: "err_forbidden",
    status: 403,
    message: "action is forbidden",
  };
}
