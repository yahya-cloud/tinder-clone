import React from 'react';

import TinderLogo from './TinderLogo/TinderLogo';
import classes from   './Header.module.css';

import IconButton from '@material-ui/core/IconButton';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Link, useHistory } from 'react-router-dom';

const Header = (props) => {
    const history = useHistory();
    return(
        <div className= {classes.Header}>

        {props.backButton ?
        <Link onClick={() => history.replace(props.backButton)}>
        <IconButton>
        <ArrowBackIosIcon className={classes.Icon}  fontSize="large"/>
        </IconButton> 
        </Link>
        :
        <IconButton>
        <PersonIcon className={classes.Icon}  fontSize="large"/>
        </IconButton>
        }


        <TinderLogo />

        <Link to="/chat">
        <IconButton>
         <ForumIcon className={classes.Icon} fontSize="large"/>
        </IconButton>
        </Link>

        </div>
    )
}

export default Header; 
