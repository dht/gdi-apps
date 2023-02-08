import config from './app.json';
import i18n from './i18n';
import instances from './instances/index';
import widgets from './widgets.json';

export const app = {
    ...config,
    i18n,
    widgets,
    instances,
};
