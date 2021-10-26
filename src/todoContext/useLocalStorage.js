import React from "react";

function useLocalStorage(itemName, initialValue) {
    const [error, setError] = React.useState(false)
    const [loading, setLoading] = React.useState(true)
    const [item, setItem] = React.useState(initialValue)

    React.useEffect(() => {
      setTimeout(()=>{
        try{
          const localstorageItem = localStorage.getItem(itemName);
        let parsedItem;
      
      
        if (!localstorageItem){
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedItem =initialValue;
        } else {
          parsedItem = JSON.parse(localstorageItem);
        }
        setItem(parsedItem)
        setLoading(false)
        }catch(error) {
          setError(error)
        }
      },4000)
    });

    const saveItem = (newItem) => {
      try{
        const stringsItem = JSON.stringify(newItem)
      localStorage.setItem(itemName, stringsItem)
      setItem(newItem)
      }catch(error){
        setError(error)
      }
    }
  
    return {
      item,
      saveItem,
      loading,
      error
    };
  
  }

export {useLocalStorage}