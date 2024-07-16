export enum FilterTitles {
   Search = 'Search',
   Providers = 'Providers',
   Groups = 'Game Groups',
   Sort = 'Sorting',
   Columns = 'Columns'
}

export enum FilterStates {
    RESET = 'reset'
}

export const SortVariants = [{
    id: 1,
    name: 'A-Z'
},
{
    id: 2,
    name: 'Z-A'
},
{
    id: 3,
    name: 'Newest'
}];