// 4 kyu | Objectify a URL Query String
// https://www.codewars.com/kata/objectify-a-url-query-string/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Converts a URL Query String into an object map
/**
 * @param {string} query
 */
const convertQueryToMap = query => {
  if (0 === query.length) return '';
  const result = new Object(null);
  for (let param of query.split('&')) {
    let [name, value] = param.split('=');
    const stk = name.split('.');
    let o = result;
    while (1 < stk.length) {
      name = stk.shift();
      if ('undefined' === typeof o[name]) o[name] = new Object(null);
      o = o[name];
    }
    o[stk[0]] = decodeURIComponent(value);
  }
  return result;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

console.log(
  convertQueryToMap(
    'user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue',
  ),
);

console.log(convertQueryToMap(''));
