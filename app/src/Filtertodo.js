import RenderedContent from "./RenderedContent"

export default function PageFilter(props) {

    let FilterDataGeneric = props.todo.filter(
        (newList) => newList.complete == props.bool)

    if(props.page === undefined) {
        return (
            <ul>
        {props.todo.map((mappedArr, i) => (
            <RenderedContent todo={props.todo} mappedArr={mappedArr} i={i} setToDo={props.setToDo}/>
       
        ))}
      </ul>
        )
    }
    
    
      
    if(props.page === true) {
        
        return (
            <ul>
        {FilterDataGeneric.map((mappedArr, i) => (
            <RenderedContent mappedArr={mappedArr} i={i}/>
        
        ))}
      </ul>
        )
}

if(props.page === false) {
    
    return (
        <ul>
    {FilterDataGeneric.map((mappedArr, i) => (
        <RenderedContent mappedArr={mappedArr} i={i}/>
    
    ))}
  </ul>
    )
  
}

}
