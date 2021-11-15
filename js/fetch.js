const getData=async ()=>{
    try{
        const response=await fetch('https://rickandmortyapi.com/api/character');
        const data = await response.json();
        return console.log(data.info)
    }
    catch(error){
        console.log(error)
    }
}