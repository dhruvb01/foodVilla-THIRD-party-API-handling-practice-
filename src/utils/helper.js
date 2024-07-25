export function  filterData(search,restraunts,setFilter){
    console.log("render")
   const fil= restraunts.filter((rest)=>(
    rest.info.name.trim().toLowerCase().includes(search)
   ))
   setFilter(fil)
   }