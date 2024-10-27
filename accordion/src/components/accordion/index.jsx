import { useState } from "react"
import data from "./data";
export default function Accordion (){
const [selected, setSelected] = useState(null);

const [enableMultiselection, setEnableMultiselection] = useState(false);
const [multiple, setMultible] = useState([]);


function handleSingleSelection(getcurrentId){
console.log(getcurrentId)
setSelected(getcurrentId === selected? null : getcurrentId)
}

function handleMultiselection(getcurrentId){
let cpyMultiple = [...multiple];
const findIndexOfCurrentId = cpyMultiple.indexOf(getcurrentId);
console.log(findIndexOfCurrentId)
if (findIndexOfCurrentId === -1) cpyMultiple.push(getcurrentId)
    else cpyMultiple.splice(findIndexOfCurrentId, 1);
setMultible(cpyMultiple)
}
console.log(selected, multiple)



    return (
        <div className="wrapper">
            <button onClick = {()=> setEnableMultiselection(!enableMultiselection)}>
            ENABLE MULTISELECTION
            </button>
<div className="accordion">

{
data&&data.length>0 ?

data.map((dataItem) => 
(<div className="item">
<div onClick={enableMultiselection?
     ()=> handleMultiselection(dataItem.id)
    :()=>handleSingleSelection(dataItem.id)} className="title">
<h3>{dataItem.question}</h3>
<span>✅</span>
</div>
{
    selected=== dataItem.id || 
    multiple.indexOf(dataItem.id) !== -1?
    <div className="content"> 
        {dataItem.answer}
    </div>
      :null
}

</div>)) : ( <div> data not found!  </div>)}


</div>
 </div>
    )}

