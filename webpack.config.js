const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");

const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, 'tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "portalAleloAuto",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false,
    splitChunks: false
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  plugins: [
    new ModuleFederationPlugin({

        name: "minhaFrotaWebAngularPocUnitTest",
        filename: "pocUnitTestRemoteEntry.js",
        exposes: {
            './PocUnitTestModule': 'src/app/poc-unit-test/poc-unit-test.module.ts',
        },

        shared: share({
          "@angular/core": { singleton: true, strictVersion: true, requiredVersion: '^12.0.0' },
          "@angular/common": { singleton: true, strictVersion: true, requiredVersion: '^12.0.0' },
          "@angular/forms": { singleton: true, strictVersion: true, requiredVersion: '^12.0.0' },
          "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: '^12.0.0' },
          "@angular/animations": { singleton: true, strictVersion: true, requiredVersion: '^12.0.0' },
          "@angular/platform-browser": { singleton: true, strictVersion: true, requiredVersion: '^12.0.0' },
          "@angular/platform-browser-dynamic": { singleton: true, strictVersion: true, requiredVersion: '^12.0.0' },
          "@angular/compiler": { singleton: true, strictVersion: true, requiredVersion: '^12.0.0' },
          "@angular/router": { singleton: true, strictVersion: true, requiredVersion: '^12.0.0' },

          ...sharedMappings.getDescriptors()
        })

    }),
    sharedMappings.getPlugin()
  ],
};
