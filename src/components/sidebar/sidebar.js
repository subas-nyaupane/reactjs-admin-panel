import { Icon } from '@material-ui/core';
import ButtonBase from '@material-ui/core/ButtonBase';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';
import SubMenu from './sub-menu';

export default function Sidebar() {
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);

  const menuData = [
    {
      label: 'Dashboard',
      icon: 'dashboard',
      type: 'Link',
      href: '#'
    },
    {
      label: 'Users',
      icon: 'people',
      type: 'sub-menu',
      active: true,
      subMenu: [
        [
          {
            label: 'Create new User',
            href: '#'
          },
          {
            label: 'Create new User',
            href: '#'
          },
          {
            label: 'Create new User',
            href: '#'
          },
          {
            label: 'Create new User',
            href: '#'
          }
        ]
      ]
    },
    {
      label: 'Products',
      icon: 'bookmark',
      type: 'sub-menu',
      menu: [
        [
          {
            label: 'Create new User',
            href: '#'
          }
        ]
      ]
    },
    {
      label: 'Dashboard',
      icon: 'dashboard',
      type: 'Link',
      href: '#'
    },
    {
      label: 'Dashboard',
      icon: 'dashboard',
      type: 'Link',
      href: '#'
    },
    {
      label: 'Dashboard',
      icon: 'dashboard',
      type: 'Link',
      href: '#'
    },
    {
      label: 'Dashboard',
      icon: 'dashboard',
      type: 'Link',
      href: '#'
    },
    {
      label: 'Dashboard',
      icon: 'dashboard',
      type: 'Link',
      href: '#'
    },
    {
      label: 'Dashboard',
      icon: 'dashboard',
      type: 'Link',
      href: '#'
    },
    {
      label: 'Dashboard',
      icon: 'dashboard',
      type: 'Link',
      href: '#'
    }
  ];

  return (
    <div className={classes.sidebar}>
      <List dense={dense} className={classes.list}>
        {menuData.map((item, index) => {
          return (
            <ListItem
              className={classes.listItem}
              key={`mainMenu-${index.toString()}`}
            >
              <ButtonBase className={classes.boxedButton}>
                <div className={classes.boxedButtonIconWrapper}>
                  <Icon className={classes.boxedButtonIcon}>{item.icon}</Icon>
                </div>
                <div className={classes.boxedButtonLabelWrapper}>
                  <Typography
                    variant="button"
                    display="block"
                    className={classes.boxedButtonLabel}
                  >
                    {item.label}
                  </Typography>
                </div>
              </ButtonBase>
            </ListItem>
          );
        })}
      </List>
      <div className={classes.subMenuWrapper}>
        {menuData.map((menu, menuIndex) => {
          return (
            <div
              className={menu.active ? classes.subMenuActive : classes.subMenu}
              key={`subMenu-${menuIndex.toString()}`}
            >
              <Typography
                variant="h6"
                className={classes.subMenuTitle}
                gutterBottom
              >
                {menu.label}
              </Typography>
              <div className={classes.subMenuRow}>
                {menu.subMenu && menu.subMenu.length ? (
                  <SubMenu menu={menu} />
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
