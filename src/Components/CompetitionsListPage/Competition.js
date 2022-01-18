import React from 'react';
import comp from './CompetitionsListPage.module.css'


const Competition = (props) => {

    return (
        <div className={comp.single_card}>
            <ul><li><h4>{props.name}</h4>
                <h5>{props.area}</h5>
                {<img src={props.flag !== null ? props.flag : 'http://www.onestopplumbersshop.co.za/images/categories/400/bar-img-unavailable.png'} width={30}/>}
                {props.id}</li></ul>

        </div>
    );
    };

export default Competition;