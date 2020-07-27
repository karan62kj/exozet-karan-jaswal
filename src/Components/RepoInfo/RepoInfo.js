import React from 'react';
import Style from './RepoInfo.module.css';
import extractDate from '../../Utilities/extractFromDate';

// This is a Reusable component used to display Repo info
const RepoInfo = (props)=>{

    return (<div className={Style.RepoInfo}>
        <div className={Style.RepoHeader}>
            <div className={Style.RepoName}>{props.repo.name}</div>
            <div className={Style.RepoYear}>{extractDate(props.repo.created_at,'year')} - {extractDate(props.repo.updated_at,'year')}</div>
        </div>
        <div className={Style.LangRights}>{props.repo.language} - {props.repo.private?'Private':'Public'}</div>
        <div className={Style.desc}>{props.repo.description}</div>
        <div className={Style.info}>
            This repository has {props.repo.stargazers_count} stars and {props.repo.forks_count} forks. If you would like more information about this repository
            and my contributed code, please visit the <a href={props.repo.html_url}  className={[Style.link,Style.Highlighted].join(' ')} target="_blank" rel="noopener noreferrer">{props.repo.html_url}</a> on GitHub.
        </div>
    </div>)

}

export default RepoInfo