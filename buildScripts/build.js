/*eslint-disable no-console */
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';

process.env.NODE_ENV = 'production'; //env variable for bubble or other libraries

console.log(chalk.blue(
    'Getting minified bundle for production. This will take a moment...'));

webpack(webpackConfig).run((err,stats)=>{
    if (err) { //so a fatal error occured. Stop here.
        console.log(chalk.red(err));
        return 1;
    }

    const jsonStats = stats.toJson();

    if (jsonStats.hasErrors) {
        return jsonStats.errors.map(error => console.log(chalk.red(err)));
    }

    if (jsonStats.hasWarnings) {
         console.log(chalk.yellow('Webpack generated the following warnings: '));
         jsonStats.warnings.map(warning =>console.log( chalk.yellow(warning) ));

    }

    console.log(`Webpack stats: ${stats}`);

    // if we got this far, the build succeeded.
    console.log(chalk.green(
        'Your app has been built for production and written to ./dist!'));

    return 0;
});
