import { fade, makeStyles } from '@material-ui/core/styles';

export default function useStyles() {
  const content = makeStyles(theme => ({
    grow: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block'
      }
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25)
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto'
      }
    },
    searchIcon: {
      width: theme.spacing(7),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    inputRoot: {
      color: 'inherit'
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: 200
      }
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex'
      }
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none'
      }
    },
    susonWaiba: {
      color: 'red'
    },
    sidebar: {
      backgroundColor: '#e9e9e9',
      width: '8em',
      height: '100vh'
    },
    list: {
      padding: 0
    },
    listItem: {
      padding: 0,
      margin: 0
    },
    boxedButton: {
      width: '100%',
      flexDirection: 'column',
      padding: theme.spacing(2)
    },
    boxedButtonIcon: {
      display: 'block',
      margin: 'auto'
    },
    boxedButtonIconWrapper: {
      display: 'block'
    },
    boxedButtonLabel: {
      display: 'block',
      fontSize: '0.8em'
    },
    boxedButtonLabelWrapper: {
      display: 'block',
      textAlign: 'center'
    },
    subMenuWrapper: {
      height: '100vh',
      backgroundColor: '#f1f1f1',
      position: 'absolute',
      top: 0,
      left: '8em'
    },
    subMenu: {
      backgroundColor: 'red',
      display: 'none'
    },
    subMenuActive: {
      backgroundColor: '#f1f1f1',
      display: 'block'
    },
    subMenuRow: {
      display: 'flex'
    },
    subMenuCol: {
      padding: '0',
      listStyle: 'none'
    },
    subMenuColItem: {
      minWidth: '18em',
      maxWidth: '24em'
    },
    subMenuTitle: {
      padding: '1em 1em 0 1em',
      marginBottom: '0',
      fontWeight: 'bold'
    },
    subMenuButton: {
      minWidth: '15em',
      textAlign: 'left',
      padding: theme.spacing(2),
      width: '100%'
    },
    subMenuButtonLabel: {
      width: '100%'
    }
  }));
  return content();
}
