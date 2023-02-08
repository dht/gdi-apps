import bucket from './json/d.bucket.deals.json';
import calendar from './json/d.calendar.deals.json';
import filters from './json/d.filter.deals.json';
import formNewDefault from './json/d.form.deals.default.json';
import formEdit from './json/d.form.deals.edit.json';
import formNew from './json/d.form.deals.new.json';
import gallery from './json/d.gallery.deals.json';
import overlay from './json/d.overlay.deals.json';
import sheet from './json/d.sheet.deals.json';
import table from './json/d.table.deals.json';
import multiBar from './json/d.multiBar.deals.json';
import timeline from './json/d.timeline.deals.json';
import { itemStructure } from './d.itemStructure.deals';

export const definitions: ICrudDefinitions = {
    nodeName: 'deals', // @ts-expect-error
    filters, // @ts-expect-error
    formEdit, // @ts-expect-error
    formNew,
    table,
    calendar, // @ts-expect-error
    gallery, // @ts-expect-error
    overlay, // @ts-expect-error
    sheet,
    timeline,
    formNewDefault, // @ts-expect-error
    bucket, // @ts-expect-error
    multiBar,
    itemStructure,
};
