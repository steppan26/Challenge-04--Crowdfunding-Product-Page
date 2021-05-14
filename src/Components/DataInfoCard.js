import React from 'react';
import './DataInfoCard.css'

const DataInfoCard = (props) =>{

    const dollarsBacked = "$" + formatNumber(props.dollarsBacked);
    const projectTarget = "$" + formatNumber(props.projectTargetValue);
    const totalBackers = formatNumber(props.totalBackers)

    function formatNumber(n) {
        return (Math.round(n * 100) / 100).toLocaleString();
    }

    return(
        <div className="card DataInfoCardWrapper">
            <div>
                <h1>{dollarsBacked}</h1>
                    <p>of {projectTarget} backed</p>
            </div>
            <hr className="divider" />
            <div>
                <h1>{totalBackers}</h1>
                <p>total backers</p>
            </div>
            <hr className="divider" />
            <div>
                <h1>{props.daysLeft}</h1>
                <p>days left</p>
            </div>
            <div id="projectProgressBar">
                <div id="progressBar"
                style={{
                    width: `${props.progressBarFill}%`
                }}></div>
            </div>
        </div>
    );
}

export default DataInfoCard;