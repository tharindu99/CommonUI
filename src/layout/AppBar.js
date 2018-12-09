import React from 'react';
import { AppBar, UserMenu, MenuItemLink, translate } from 'react-admin';
import SettingsIcon from '@material-ui/icons/Settings';

const CustomUserMenu = translate(({ translate, ...props }) => (
    <UserMenu {...props}>
        <MenuItemLink
            to="/Settings"
            primaryText={translate('pos.settings')}
            leftIcon={<SettingsIcon />}
        />
    </UserMenu>
));

const customAppBar = props => (
    <AppBar {...props} userMenu={<CustomUserMenu />} />
);

export default customAppBar;