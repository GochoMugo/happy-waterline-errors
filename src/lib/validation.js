// npm-installed modules
import _ from "lodash";


/**
 * Parsing validation errors
 */
export default function(error, options) {
  let reports = [];

  // looping through all the invalid attributes
  for (let attr in error.invalidAttributes) {
    const key = _.isFunction(options.key) ? options.key(attr) : attr;
    const value = error.invalidAttributes[attr];
    reports.push({
      field: key,
      rules: getRules(value),
    });
  }

  // we are done
  return {
    code: "err_validation",
    status: 422,
    message: "validation failed",
    description: reports,
  };

  function getRules(values) {
    let rules = [];
    values.forEach(function(a) {
      rules.push(a.rule);
    });
    return rules;
  }
}
