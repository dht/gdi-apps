export const itemStructure = `export type IDeal = {
    id: string;
    title: string;
    startDate: string;
    dealType: IDealType;
    status: IDealStatus;
    statusDate: string;
    endDate?: string;
    description: string;
    personId: string;
    nextVisitDate: string;
    items: IDealJournal[];
    worth?: number;
    percent?: number;
    isArchived?: boolean;
    isSuccessful?: boolean;
    isLost?: boolean;
    tags: string[];
    dataTags: string[];
};
`;
