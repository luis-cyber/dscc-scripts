"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pipeStdIO = exports.invalidVizConfig = exports.invalidConnectorConfig = exports.format = exports.assertNever = void 0;
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const chalk_1 = require("chalk");
exports.assertNever = (x) => {
    throw new Error('Unexpected object: ' + x);
};
exports.format = {
    green: chalk_1.default.bold.rgb(15, 157, 88),
    blue: chalk_1.default.bold.rgb(66, 133, 244),
    yellow: chalk_1.default.bold.rgb(244, 160, 0),
    red: chalk_1.default.bold.rgb(219, 68, 55),
};
const exampleVizConfig = {
    dsccViz: {
        gcsDevBucket: 'gs://validBucketPath',
        gcsProdBucket: 'gs://validBucketPath',
        components: [
            {
                jsFile: 'index.js',
                jsonFile: 'index.json',
                cssFile: 'index.css',
            },
        ],
    },
};
const exampleConnectorConfig = {
    dsccConnector: {
        production: 'prodDeploymentId',
        latest: 'latestDeploymentId',
    },
};
// TODO - This doesn't really work if you mess up a later idx in the viz
// components than is defined.
const invalidConfig = (path, config) => {
    const colorizedPath = exports.format.green(path);
    const packageJSON = exports.format.blue.bold('package.json');
    return new Error(`Your ${packageJSON} must have a ${colorizedPath} entry:\n${JSON.stringify(config, undefined, '  ')}`);
};
exports.invalidConnectorConfig = (path) => {
    return invalidConfig(`dsccConnector.${path}`, exampleConnectorConfig);
};
exports.invalidVizConfig = (path) => {
    return invalidConfig(`dsccViz.${path}`, exampleVizConfig);
};
exports.pipeStdIO = { stdio: 'inherit' };
