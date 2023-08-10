import lume from "lume/mod.ts";
import pug from "lume/plugins/pug.ts";

const site = lume();

// optimize svgs
// site.use(svgo());

site.use(pug());

site.copy("favicon.ico");

export default site;