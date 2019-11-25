import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import useStyles from './styles';

export default function SubMenu(props) {
  const classes = useStyles();

  return props.menu.subMenu.map((subMenuCol, subMenuColIndex) => {
    return (
      <ul className={classes.subMenuCol} key={`subMenu-column-${subMenuColIndex.toString()}`}>
        {subMenuCol.map((subMenuRow, subMenuRowIndex) => {
          return (
            <li className={classes.subMenuColItem}
              key={`subMenu-item-${subMenuColIndex.toString()}-${subMenuRowIndex.toString()}`}
            >
              <ButtonBase className={classes.subMenuButton}>
                <Typography
                  variant="body2"
                  display="block"
                  className={classes.subMenuButtonLabel}
                >
                  {subMenuRow.label}
                </Typography>
              </ButtonBase>
            </li>
          );
        })}
      </ul>
    );
  });
}
