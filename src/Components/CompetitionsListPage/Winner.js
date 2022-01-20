import React from 'react';

const Winner = (props) => {

     let  name = ''
    if (!props.winner) {
        name = "TBD"
        return(
            <div>
                {name}
            </div>
        );
    } else {

    return (
        <div>
            {props.winner.name}
            {props.winner.shortName}
            {props.winner.tla}
            <img src={props.winner.crestUrl} width={50} />
        </div>
    );
}};

export default Winner;