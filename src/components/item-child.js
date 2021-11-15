export const  ItemChildComponent = (props) => {
    
    return(
        <h1>ITEM NAME: {props.match.params.name}</h1>
    )
}