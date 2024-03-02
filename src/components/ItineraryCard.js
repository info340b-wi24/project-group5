export function ItineraryCards(props) {
    return (
        <li>
            <span> </span>
            <div className="itin-cards">
                <img className="itin-img" src={props.imgName} alt={props.imgAlt} />
                <div className="text-content">
                    <h2>{props.activityName}</h2>
                    <p>{props.activityDescription}</p>
                </div>
            </div>
            <div className="time">
                <span>{props.timeStart}</span>
                <span>{props.timeEnd}</span>
            </div>
        </li>
    )
}