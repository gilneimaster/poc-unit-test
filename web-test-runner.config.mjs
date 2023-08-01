import { playwrightLauncher } from '@web/test-runner-playwright';
import { esbuildPlugin } from '@web/dev-server-esbuild';
import { importMapsPlugin } from '@web/dev-server-import-maps';
import { fileURLToPath } from 'url';

export default {
  files: ['src/**/*.test.ts', 'src/**/*.spec.ts'],
  plugins: [
    importMapsPlugin({
      inject: {
        importMap: {
          imports: {
            'zone.js/zone': './node_modules/zone.js/dist/zone.js',
            'zone.js/testing': './node_modules/zone.js/dist/zone-testing-bundle.js',
          },
        },
      },
    }),
    esbuildPlugin({
      ts: true,
      tsconfig: fileURLToPath(new URL('./tsconfig.json', import.meta.url)),
    })
  ],
  nodeResolve: true,
  testFramework: {
    config: {
      timeout: '5000'
    }
  },
  browsers: [
    playwrightLauncher({ product: 'chromium' }),
    // playwrightLauncher({ product: 'firefox' }),
    // playwrightLauncher({ product: 'webkit' }),
  ]
}
