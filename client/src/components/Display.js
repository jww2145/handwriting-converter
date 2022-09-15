import React, {useState, useEffect} from "react";
import DocumentLibrary from "../pages/DocumentLibrary";
import FolderLibrary from "../pages/FolderLibrary"
import SearchBar from "../components/SearchBar";


function Display({documents, setDocuments, document, setDocument, folder, setFolder, focus, setFocus}){
    const [search, setSearch] = useState("")
    const [folderSelect, setFolderSelect] = useState(false)
    const [folders, setFolders] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            await fetch("/documents")
            .then( (results) => {
                if (results.ok){
                    results.json()
            .then(docs => 
                setDocuments(docs))
            }})}
        const timer = setTimeout(() => {
                fetchData();
              }, 200);
        return () => clearTimeout(timer)
            }, [])

        const filtered_documents = documents.filter(doc => {
            return(
                doc.folder_id ? false : true
            )
        })

        
    return(
        <div>
            <SearchBar search= {search} setSearch={setSearch}/>
            {folderSelect ? null : <FolderLibrary folders = {folders} setFolders = {setFolders} document = {document} setFolderSelect = {setFolderSelect} search = {search} folder = {folder} setFolder = {setFolder}/>}
            {folderSelect ? null : <DocumentLibrary folders = {folders} folder = {folder} documents = {filtered_documents} setDocuments = {setDocuments} search = {search} document = {document} setDocument = {setDocument} focus={focus} setFocus = {setFocus}/>}
        </div>
    )
}

export default Display