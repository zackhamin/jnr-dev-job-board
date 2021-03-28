import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'

function Footer() {
    return (
        <div style={{display:'flex', flexDirection:'row',alignItems:'center', justifyContent:'center' ,width:'100%', height:60,marginBottom:25}}>
        <Link to="/" style={{textDecoration:'none'}}>
        <Button>
         <strong style={{color:'black'}}>Home</strong>
        </Button>
        </Link>

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

        </div>
    )
}

export default Footer
