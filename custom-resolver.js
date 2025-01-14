const path = require('path');
const fs = require('fs');

module.exports = (request, options) => {
  // Resolve the module path
  const modulePath = path.resolve(options.basedir, request);

  // Check if the module exists
  if (fs.existsSync(modulePath)) {
    return modulePath;
  }

  // Fallback to default resolver
  return options.defaultResolver(request, options);
};
