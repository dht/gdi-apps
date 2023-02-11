import fields from './json/config.fields.json';
import filters from './json/config.filters.json';
import sorts from './json/config.sorts.json';
import viewBoard from './json/config.views.board.json';
import viewGallery from './json/config.views.gallery.json';
import viewSheets from './json/config.views.sheet.json';
import type { IMultiConfig } from '@mult/core';

export const definitions: IMultiConfig = {
    id: 'board',
    title: 'Board',
    fields,
    views: [viewBoard, viewGallery, viewSheets],
    sorts,
    filters,
};
