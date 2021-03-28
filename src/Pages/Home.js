import React from 'react'
import Jobs from './Jobs';
import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';
import laptopMan from '../images/laptopMan.png';
import iconRight from '../images/rightArrow.png';
import womanCoding from '../images/woman-coding.png';
import jobSearch from '../images/job-search.png';
import interview from '../images/interview.png';
import Paper from '@material-ui/core/Paper'



function Home() {
    return (
        <div style={{display:'flex', height:'100%vh',width:'100%', justifyContent:'center',flexDirection:'column',  
            alignItems:'center'}}>
                <Paper elevation={3} style={{display:'flex', minHeight:200,width:'90%', backgroundColor:'#46a7d5', flexDirection:'column',
                    borderRadius:15,marginBottom:40,marginTop:30,justifyContent:'center', alignItems:'center', color:'white'}}>
                <h1 style={{padding:15}}>You learn to code, we post the jobs.</h1>
                <strong style={{color:'whitesmoke', padding:15}}>The largest collection of Junior Developer roles on the web</strong>
                </Paper>

                
            <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'space-around', alignItems:'center',borderRadius:15, minHeight:400,width:'90%',backgroundColor:'whitesmoke'}} >
            <Paper style={{display: 'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',width:250, minHeight:200,margin:20,padding:10}}>
                <div style={{display:'flex',width:100, height:150,fontSize:50, alignItems:'center', justifyContent:'center'}}><img height='120' width='100' src={womanCoding} /> </div>
                <div style={{display:'flex',width:200, height:150,fontSize:20, alignItems:'center', justifyContent:'left'}}>You learn how to code</div>
             </Paper>

            <Paper style={{display: 'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',width:250, minHeight:200,margin:20,padding:10}}> 
                <div style={{display:'flex',width:100, height:150,fontSize:50, alignItems:'center', justifyContent:'center'}}><img height='110' width='100' src={jobSearch} /></div>
                <div style={{display:'flex',width:200, height:150,fontSize:20, alignItems:'center', justifyContent:'left'}}>We collect jobs from API
                feeds of all the top job boards</div>
             </Paper>
            
            <Paper style={{display: 'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',width:250, minHeight:200,margin:20,padding:10}}>
                <div style={{display:'flex',width:100, minHeight:150,fontSize:50, alignItems:'center', justifyContent:'center'}}><img height='110' width='100' src={interview} /></div>
                <div style={{display:'flex',width:200, minHeight:150,fontSize:20,alignItems:'center', justifyContent:'center'}}>Apply and land your dream role</div>
             </Paper>
            </div>



        </div>
    )
}

export default Home
