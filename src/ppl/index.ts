import config from './app.json';
import i18n from './i18n';
import instances from './instances/index';
import widgets from './widgets.json';
import { allDefinitions as definitions } from './definitions';

export const app: IAppConfig  = {
    ...config,
    i18n,
    widgets,
    instances,
    definitions,
};
        