import './Item.css'

export const Item = ({item ,isEven}) => {
    return (
        <div>
            <h2 className={isEven? "even": "odd"}>{item.name}{' '}{item.id}</h2>
            <p style={{"color": item.bcColor ? item.bcColor : "red"}}>{item.description}</p>
            <img src={"../hola.png"} alt="Logo"/>
        </div>
    )
}