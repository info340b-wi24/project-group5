import React from 'react';

export function TimePick () {
    return (
        <div className="picker">
                <div className="picker-window"></div>
                <div className="triangle"></div>
                <ul className="picker-hour">
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                    <li>7</li>
                    <li>8</li>
                    <li>9</li>
                    <li>10</li>
                    <li>11</li>
                    <li>12</li>
                </ul>
                <ul className="picker-minute">
                    <li>00</li>
                    <li>05</li>
                    <li>10</li>
                    <li>15</li>
                    <li>20</li>
                    <li>25</li>
                    <li>30</li>
                    <li>35</li>
                    <li>40</li>
                    <li>45</li>
                    <li>50</li>
                    <li>55</li>
                </ul>
                <ul className="picker-am">
                    <li>AM</li>
                    <li>PM</li>
                </ul>
            </div>
    )
}