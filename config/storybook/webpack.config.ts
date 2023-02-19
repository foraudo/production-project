import webpack, { RuleSetRule } from 'webpack';
import path from 'path';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { BuildPath } from '../build/types/config';

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPath = {
        build: '',
        entry: '',
        html: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };

    config.resolve?.modules?.push(paths.src);
    config.resolve?.extensions?.push('.ts', '.tsx');

    config.module?.rules?.push(buildCssLoader(true));

  // eslint-disable-next-line no-param-reassign
  config.module!.rules = config.module!.rules!.map((rule) => {
      if (rule !== '...' && /svg/.test(rule.test as string)) {
          return { ...rule, exclude: /\.svg$/i };
      }

      return rule;
  });
  // console.log(config.module?.rules);
  config.module?.rules?.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
  });

  return config;
};
