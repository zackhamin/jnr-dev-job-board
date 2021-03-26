import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'


function menu() {




    return (
                <div style={{display:'flex', flexDirection:'row',alignItems:'center' ,width:'100%', height:60, backgroundColor:'white', border: '4px solid '}}>
        <Link to="/" style={{textDecoration:'none'}}>
        <Button>
         <strong style={{color:'black'}}>Home</strong>
        </Button>
        </Link>
{/* 
        <Link to="/About" style={{textDecoration:'none'}}>
        <Button>
         <strong style={{color:'black'}}>About</strong>
        </Button>
        </Link> */}

        <Link to="/Jobs" style={{textDecoration:'none'}}>
        <Button>
         <strong style={{color:'black'}}>Jobs</strong>
        </Button>
        </Link>

        <Link to="/Resources" style={{textDecoration:'none'}}>
        <Button>
         <strong style={{color:'black'}}>Resources</strong>
        </Button>
        </Link>

{/* 
        <Link to="/Contact" style={{textDecoration:'none'}}>
        <Button>
         <strong style={{color:'black'}}>Contact</strong>
        </Button>
        </Link> */}


        </div>
    )
}

export default menu
