import React from 'react';
import Style from './App.module.css';
import UserSearchBox from '../Components/userSearchBox/userSearchBox';
import GeneratedResume from '../Components/GeneratedResume/GeneratedResume';
import Axios from 'axios';
import ResultBox from '../Components/ResultBox/ResultBox';
import Spinner from '../Components/UI/Spinner/Spinner';

class App extends React.Component
{
  // state of the Application
  state={
    user:'',
    userdata:null,
    repos:[],
    languages:{},
    error:null,
    loading:false
  }

  // Function invoked when generate is clicked
  onGenerateClickHandler=()=>{
    this.setState({
      loading:true,
      error:null,
      userdata:null,
      repos:[]
    })
    // Promise.All to request all the api's in a go
    Promise.all([Axios.get(`https://api.github.com/users/${this.state.user}`),Axios.get(`https://api.github.com/users/${this.state.user}/repos?per_page=100`)]).then(res=>{
      let updatedlanguages={};
      res[1].data.forEach(el=>{
        updatedlanguages[el.language] = (updatedlanguages[el.language] || 0)+1;
      })
      this.setState({
        userdata:res[0].data,
        repos:res[1].data.sort((a,b)=>b.stargazers_count - a.stargazers_count).filter(el=>{
          return el.stargazers_count >500
        }),
        languages:updatedlanguages
      })

    }).catch(err=>{
      this.setState({
        user:'',
        loading:false,
        error:err.message
      })
    })

  }

  // Updating input state on the change of input element - controlled component
  onInputChangeHandler=(evt)=>{
    this.setState({
      user:evt.target.value
    })
  }


  render()
  {
    let resultcomponent = null;

    // while waiting for response "showing loader"
    if(this.state.loading)
    {
       resultcomponent = <ResultBox>
                           <Spinner/>
                         </ResultBox>
    }
    // while the data is fetch successfully
    if(this.state.userdata)
    {
      resultcomponent=<ResultBox>
                        <GeneratedResume langs={this.state.languages} repos={this.state.repos} 
                        userdata={this.state.userdata}/>
                      </ResultBox>
    }

    // while we received the error
    if(this.state.error)
    {
      resultcomponent=<ResultBox>
                        <h1>{this.state.error} - Page not found</h1>
                      </ResultBox>
    }

    return (<div className={Style.App}>
      <h1 className={Style.AppLogo}>{"E❱❰OZET"}</h1>
      <h1 className={Style.Header}>My Github Resumé</h1>
      <UserSearchBox onGenerateClick={this.onGenerateClickHandler} value={this.state.user} onInputChange={(evt)=>this.onInputChangeHandler(evt)}/>
     {resultcomponent}
    </div>)
  }

}

export default App;