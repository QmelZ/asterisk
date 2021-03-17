let load = require("loader");
let content = JSON.parse(
    readString(
        this.modName + "/scripts/content.json"
    )
);

load(content);
