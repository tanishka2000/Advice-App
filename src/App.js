import React from 'react';
//using axios to make a get req to the API we will be using 
//npm install --save axios
import axios from 'axios';
import './App.css';

class App extends React.Component{
    //state is like a global object
    //that contains all the important things of the
    //component, App in this case
    state = {
        advice: ' '
    };
    //every component goes through a life cycle
    //first we have render, then this componentdidmount
    //the componentdidunmount

    //this executes exactly at the render of our components
    componentDidMount(){
        //check this if true, then now we 
        //fetch advice on render
        //console.log('COMPONENT DID MOUNT');
        
        //wrtie the fetch function

        //since we want the data initially on the class render, we do it in this componentDidMount
        this.fetchAdvice();
    }

    //we will need to call fetch twice so we make our custom function 
    fetchAdvice = () => {
        //Advice Slip JSON API(api.adviceslip.com)
        //out of all others, we use the get advice
        //to get random advice
        axios.get('https://api.adviceslip.com/advice')
        //let's get the response
        .then((response)=>{
            //here, first check only response
            //then response.data
            //then response.data.slip
            //then response.data.slip.advice
            //basically we jsut want that string
            //so instead of typing the below one,
            //console.log(response.data.slip.advice);

            //we create a short note
            const {advice} = response.data.slip;
            //console.log(advice);

            //but this advice has a local scope
            //hence we use the state above

            this.setState({advice});
            //this sets the advice value to the advice property of the state
        })
        .catch((error)=>{
            console.log(error);
        });
        /*
            This works in the console but if we write 
            https://api.adviceslip.com/adviceee
            then we get and error in the console
        */
    }

    render(){
        const{advice} = this.state;
        return(
            //since the property name in state is 
            //same as the variable name advice
            //we can skip long one and instead
            //create the above const and below
            //<h1>{this.state.advice}</h1>
            //<h1>{advice}</h1>, but now we structure

            <div className="app">
                <div className="card">
                    <h1 className="heading">{advice}</h1>
                    <button className="button" onClick={this.fetchAdvice}>
                        <span><img src="https://fontmeme.com/permalink/210412/85a3ecbad4ee61e21dbe6721c579fcea.png" alt="minions-font" border="0"/></span>
                    </button>
                </div>
            </div>
        );
    }
}

export default App;