import React, {useRef} from 'react'
import { CircularProgress } from '@material-ui/core';
import {useFetch} from '../hooks/useFetch';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import Box  from '@material-ui/core/Box'
import Block from '../components/Block';
function List({nodeUrl}) {
    const isMounted = useRef(true);
    const {response, loading, error} = useFetch(`${nodeUrl}/api/v1/blocks`, isMounted, []);
    const styles = useStyles();

    if(loading) return <CircularProgress />;
    if(error) return `¯|_(ツ)_|¯ Something happened. ${error.toString()}`
    return (
        <Box className={styles.blockList}>
            { response.data.map(({ attributes }) => <Block key={attributes.hash} data={attributes.data} id={attributes.index } />)}
        </Box>
    )
}

List.propTypes = {
    nodeUrl: PropTypes.string
}

const useStyles = makeStyles({
    blockList: {
        display: 'flex',
        width: '100%',
        flexDirection: 'column'
    }
})

const BlockList = React.memo(List);
export default BlockList;
