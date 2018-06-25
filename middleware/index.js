const path = require('path');
const express = require('express');

module.exports = {
  assets: opts => {
    opts = Object.assign({ path: '/govuk' }, opts);
    const govukpath = path.resolve(require.resolve('govuk_template_mustache/package.json'), '../assets');
    const router = express.Router();
    router.use(opts.path, express.static(govukpath, opts.cache));
    router.use(opts.path, express.static(path.resolve(__dirname, '../assets'), opts.cache));
    return router;
  }
};
