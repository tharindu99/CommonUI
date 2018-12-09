// in src/Menu.js
import React, { createElement } from 'react';
import { connect } from 'react-redux';
import { MenuItemLink, getResources } from 'react-admin';
import { withRouter } from 'react-router-dom';

import HomeIcon from '@material-ui/icons/Home';





const Menu = ({ resources, onMenuClick, logout }) => (
    <div>
        <MenuItemLink
            to="/Home"
            primaryText="Home"
            leftIcon={<HomeIcon />}
            onClick={onMenuClick} />

        {resources.map(resource => (
            <MenuItemLink
                to={`/${resource.name}`}
                primaryText={resource.name}
                leftIcon={createElement(resource.icon)}
                onClick={onMenuClick}
            />
        ))}
        <MenuItemLink
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