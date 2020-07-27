import React from 'react';
import Style from './GeneratedResume.module.css';
import RatingBar from '../UI/ratingBar/RatingBar';
import RepoInfo from '../RepoInfo/RepoInfo';
import extractFromDate from '../../Utilities/extractFromDate'

// This is a component used to render generated resume
const GeneratedBox = (props)=>{

    let languages = [];
    let location = null;
    let level = 'A Noob';

    if(props.userdata.location)
    {
    location=<span>based in {props.userdata.location}</span>
    }

    for(let key in props.langs)
    {
        if(key==='null')
        continue;
        else{
            languages.push(<RatingBar label={key} key={key} rating={Math.min(100,(parseInt(props.langs[key])*10)).toString()}/>)
        }
    }
    
    if(props.userdata.public_repos>100)
    {
        level = 'A Passionate Github User'
    }
    else if(props.userdata.public_repos>50)
    {
        level = 'An Experienced Github User'
    }




return (<div className={Style.GeneratedBox}>
     <h1 className={Style.username}>{props.userdata.login}</h1>
     <h2 className={Style.level}>{level}</h2>
     <a className={[Style.link,Style.highlighted,Style.gitlink].join(' ')} href={props.userdata.html_url} target="_blank" rel="noopener noreferrer">{props.userdata.html_url}</a>
<div className={Style.information}>On Github Since {extractFromDate(props.userdata.created_at,'year')}, {props.userdata.login} is a developer {location} with <span className={Style.highlighted}>{props.userdata.public_repos} public repositories</span> and <span className={Style.highlighted}>{props.userdata.followers} followers</span></div>
   
     <h2 className={Style.headings}>Languages</h2>
     <div className={Style.languages}>
         {languages.length?languages:<div className={Style.information}>Languages not Found</div>}
     </div>
     <h2 className={Style.headings}>Popular Repositories</h2>
     {props.repos.length?props.repos.map(el=>{
         return  <RepoInfo key={el.name} repo={el}/>
     }):<div className={Style.information}>No Popular Repos Found (note: There are no repos with stars greater than 500)</div>}
    </div>)
}

export default GeneratedBox;