const CardColor = ( props ) => {

    console.log(props)
    const styleMain = {
        backgroundColor: props.colorCode,
        width: '150px',
        height: '250px',
        margin: '2rem',
        boxShadow: '2px 3px 5px 0px grey,0px -2px 5px 0px grey'
    }

    const styleChildDiv = {
        backgroundColor: 'white',
        padding:'1rem'
    }

    const styleH6 = {
        color: props.colorCode,
        padding: '0px',
        margin:'0px'
    }

    const styleH2 = {
        padding: '0px',
        margin:'0px'
    }

    return (
        <div style={styleMain}>
            <div style={ styleChildDiv }>
                <h2 style={styleH2}>{props.colorCode}</h2>
                <h6 style={styleH6}>{ props.colorName}</h6>
            </div>
        </div>
    )
};

export default CardColor;