import './App.css'
import {Component} from 'react' 

class APP extends Component{ 
  
  state={status:true} 

  change=()=>{
    
    this.setState((prev)=>({status:!prev.status})) 
    
  }

  render(){  
    const{status}=this.state 
    console.log(status)
    return( 
    <div className='welcomeBackground'> 
        <h1 className='textColor'>Welcome</h1>  
        <p className='paraColor'>Thank you ! Happy Learning!</p> 
        
        <br/>
        <button  onClick={this.change}>{status?"Subscribe":"subscribed"}</button>
          
    </div>
      
    )
  }
}
export default APP