import React from 'react';

export function TimePick (props) {
    return (
        <div className="picker">
                <div className="picker-window"></div>
                <div className="triangle"></div>
                <select onChange={(event) => {props.setHour(event.target.value)}}className="picker-hour">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
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