const Developpers = ( { link, image, name } ) =>{
    return(
        <div className="Developpers">
            <span>{name}</span>
            <a href={link}>
                <img data-toggle={name} src={"src/developpers/"+image} alt={name}></img>
            </a>
        </div>
    )
}

export { Developpers };
export default Developpers;