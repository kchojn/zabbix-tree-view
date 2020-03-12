const styles = theme => ({
    root: {
        flexGrow: 1,
        maxWidth: window.screen.width,
        maxHeight: window.screen.height / 2,
        overflowX: 'hidden',
        overflow: "auto",
        alignItems: "center"
    },
    isFetching: {
        backgroundColor: theme.palette.text.disabled
    },
    spinner: {
        display: 'flex',
    }
});

export default styles;
