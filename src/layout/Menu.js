// in src/Menu.js
import React, { createElement } from 'react';
import { connect } from 'react-redux';
import { MenuItemLink, getResources } from 'react-admin';
import { withRouter } from 'react-router-dom';

import HomeIcon from '@material-ui/icons/Home';


const Menu = ({ resources, onMenuClick, logout }) => (
    <div>
        <MenuItemLink
            key={"home"}
            to="/Home"
            primaryText="Home"
            leftIcon={<HomeIcon />}
            onClick={onMenuClick} />

        {resources.map(resource => (
            <MenuItemLink
                key={resource.name}
                to={`/${resource.name}`}
                primaryText={resource.name}
                leftIcon={createElement(resource.icon)}
                onClick={onMenuClick}
            />
        ))}
        <MenuItemLink
            key={"custom-route"}
            to="/custom-route"
            primaryText="Miscellaneous"
            leftIcon={<HomeIcon />}
            onClick={onMenuClick} />
        
    </div>
);

const mapStateToProps = state => ({
    resources: getResources(state),
});

export default withRouter(connect(mapStateToProps)(Menu));