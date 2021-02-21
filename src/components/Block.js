import React from 'react'
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import {padLeft} from '../utils/numberFormat';
import PropTypes from 'prop-types';

export default function Block({id, data}) {
    const styles = useStyles();
    return (
        <Box className={styles.block}>
            <Box className={styles.wrapper}>
                <strong className={styles.id}>{padLeft(id)}</strong>
                <Box className={styles.content}>{data}</Box>
            </Box>
        </Box>
    )
}

Block.propTypes = {
    id: PropTypes.number.isRequired,
    data: PropTypes.string.isRequired,
};

const useStyles = makeStyles({
    block: {
        backgroundColor: 'rgba(0,0,0,0.12)',
        marginBottom: 8,
        borderRadius: 2
    },
    wrapper: {
        padding: 8,
    },
    id: {
        color: '#304FFE',
        paddingBottom: 4
    },
    content: {
        color: '#263238'
    }
});