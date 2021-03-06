/*  This script generates mock data for local development.
    This way you don't have to point to an actual api,
    but you can enjoy realistic, but randomized data,
    and rapid page load due to local, static data.
*/

/* eslint-disable no-console*/

import jsf from 'json-schema-faker';
import {scheme} from './mockDataScheme';
import fs from 'fs';
import chalk from 'chalk';

const json = JSON.stringify(jsf(scheme));

fs.writeFile("./src/api/db.json", json, function (err) {
    if (err) {
        return console.log(chalk.red(err));
    } else {
        console.log(chalk.green("Mock data generated."));
    }
});
