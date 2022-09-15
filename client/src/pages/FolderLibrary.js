
import React, { useEffect, useState } from "react";
import FolderCard from "../components/FolderCard";


function FolderLibrary({folder, folders, setFolders, document, setFolderSelect, setFolder}){

    const [errors, setErrors] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            await fetch("/folders")
            .then( (results) => {
                if (results.ok){
                    results.json()
            .then(folds => 
                setFolders(folds))
            }})}
        const timer = setTimeout(() => {
                fetchData();
              }, 200);
        return () => clearTimeout(timer)
            }, [])

    function handleRemove(fold) {

        setFolders(folders.filter(d=> d.id !== fold.id))
        }

    function handleClick(){
        setFolderSelect(true)
    }
        
    let displayed_folders = folders.map( (fold) => {
        return <FolderCard document = {document} folder = {fold} setFolder = {setFolder} 
        key={fold.id} id = {fold.id}/>
    })

    return(
        <div>
            {displayed_folders} 
            <FolderCard/>
        </div>
    )
}

export default FolderLibrary