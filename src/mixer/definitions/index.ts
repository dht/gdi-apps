import { definitions as definitionsImages } from './images';
import { definitions as definitionsPageInstances } from './pageInstances';
import { definitions as definitionsPages } from './pages';
import { definitions as definitionsWidgets } from './widgets';

export const allDefinitions: Partial<ICrudDefinitionsPerItemType> = {
    image: definitionsImages,
    pageInstance: definitionsPageInstances,
    page: definitionsPages,
    widget: definitionsWidgets,
};
