//Why in dfferent folder ?
    //any functional component can use this makes code--
        //modular, more readable, reusable,more testable (seprate test cases-- individually, maintainable(eay to debug))


export function filterData(searchText, restaurants)  {
    return restaurants.filter((e)=>e.info?.name.toLowerCase()?.includes(searchText.toLowerCase()));
 }