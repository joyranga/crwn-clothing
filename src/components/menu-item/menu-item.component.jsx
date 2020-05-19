import React from 'react';
import './menu-item.styles.scss';
import { withRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';

const MenuItem = ({ title, imageUrl, size, linkUrl, history }) => {
    console.log(history);
    return (
        <div className={`menu-item ${size}`} onClick={()=>{history.push(linkUrl)}}>
            <div className='background-image' style={{
                backgroundImage: `url(${imageUrl})`,
            }} ></div>
            <div className="content" >
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">SHOP MENU</span>
            </div>

            <Switch>
                <Route exact path=""/>
            </Switch>
        </div>
    );
}

export default withRouter(MenuItem);