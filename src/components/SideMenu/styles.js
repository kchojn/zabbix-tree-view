export const drawerWidth = 240;

const styles = theme => ({
  root: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  list: {
    "& a": {
      color: 'inherit',
      textDecoration: 'none'
    }
  },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
  },
});

export default styles;
