import { useEffect } from "react";

const useTitle = (title) => {
    useEffect(()=>{
        document.title=`Toy-Monster | ${title} `
    },[title])    
};

export default useTitle;