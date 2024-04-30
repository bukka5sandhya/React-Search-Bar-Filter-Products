import './App.css'
import React,{useState} from 'react'

const data = [
  {
    image:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSIDHMdvY7DlT7omNejRJczK4ZT5B9nt_AgTHD0vQ8KMXXOC2XThSodUqa_LD-NLS6sk0E90y7BpfCALoXNmh4SQBOc0D9hibibCW_BMsAzVIEyGDFsxRrcrIKywLGj4pfxr6X2y6DQuA&usqp=CAc",
    title:"Kids Lehanga Choli",
    price:"400"
  },
  {
    image:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRPk2UgQlsA_FG1gNWqgKco62Zmfn4S_rqmuF-GCvPq5VmkERSCnbi4GGcsMseiHhUvPSd1ps7Es_4qT0eEFzH0YTk7MRHQ_N8RV_gfyPaYF5SIyI4DzrihSnTXUAhlIxd9R7H09Q&usqp=CAc",
    title:"Kids Top and Jeans",
    price:"250"
  },
  {
    image:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR3DwjTuj2G9naFfIKEBc_Kc5dO2Ftu3zhhlJRGkoTKI4TF8G3wMavRWs-wq-0ap-3vIX-XiCPL6JevRRrbs0w5PjnGYI_owxCQYv6yTU7DWxpPW3jtrO0Y",
    title:"Kids Knee Dress",
    price:"300"
  }
]

function App() {
  const [searchItem,setSearchItem] = useState('');

  return(
    <>
    <div className="template-container">
      <div className="searchInput_container">
        <input 
        type="text"
         id="searchInput" 
         placeholder="Search Here ..." 
         onChange={(event) =>{
          setSearchItem(event.target.value);
        }}
        />
      </div>
      <div className="template_container">
        {/* eslint-disable-next-line */ }
        {data.filter((eachItem) => {

          if(searchItem === ""){
            return eachItem;
          }else if(eachItem.title.toLowerCase().includes(searchItem.toLowerCase())){
            return eachItem;
          }
          })
          .map((eachItem) => {
            return(
              <div className="template"  
               key={eachItem.id}>
                <img src={eachItem.image} alt="some thing"/>
                <h3 className="heading">{eachItem.title}</h3>
                <p className="price"> Rs {eachItem.price}</p>
               </div>
            )
           })
        }

      </div>
    </div>

    </>
  )
}
export default App;
