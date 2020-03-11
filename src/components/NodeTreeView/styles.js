const styles = theme => ({
    root: {
        flexGrow: 1,
        maxWidth: window.screen.width,
        maxHeight: window.screen.height / 2,
        overflowX: 'hidden',
        overflow: "auto",
    },
    isFetching: {
        backgroundColor: theme.palette.text.disabled
    }
});

export default styles;
