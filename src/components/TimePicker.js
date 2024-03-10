import React from 'react';

export function TimePick (props) {
    return (
        <div className="picker">
                <div className="picker-window"></div>
                <div className="triangle"></div>
                <select onChange={(event) => {props.setHour(event.target.value)}}className="picker-hour">
                    <option>01</option>
                    <option>02</option>
                    <option>03</option>
                    <option>04</option>
                    <option>05</option>
                    <option>06</option>
                    <option>07</option>
                    <option>08</option>
                    <option>09</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                </select>
                <select onChange={(event) => {props.setMin(event.target.value)}} className="picker-minute">
                    <option>00</option>
                    <option>05</option>
                    <option>10</option>
                    <option>15</option>
                    <option>20</option>
                    <option>25</option>
                    <option>30</option>
                    <option>35</option>
                    <option>40</option>
                    <option>45</option>
                    <option>50</option>
                    <option>55</option>
                </select>
                <select onChange={(event) => {props.setAMPM(event.target.value)}} className="picker-am">
                    <option>AM</option>
                    <option>PM</option>
                </select>
            </div>
    )
}