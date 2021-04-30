"use strict";

exports.main_handler = async (event, context) => {
    const body = JSON.parse(event.body);
    const Ajv = require("ajv");
    const addFormats = require("ajv-formats");

    const ajv = new Ajv();
    addFormats(ajv);

    const validate = ajv.compile({
        type: "object",
        properties: {
            ip: {type: "string", format: "ipv4"},
        },
        required: ["ip"],
        additionalProperties: false,
    });

    const valid = validate(body);
    if (!valid) {
        return response(validate.errors);
    }

    const searcher = require("node-ip2region").create();
    const info = searcher.btreeSearchSync(body.ip);
    const detail = info.region.split("|");

    return response({
        cityId: info.city,
        country: detail[0],
        region: detail[1],
        province: detail[2],
        city: detail[3],
        isp: detail[4],
    });
};

function response(value) {
    return {
        isBase64Encoded: false,
        statusCode: 200,
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(value),
    };
}
