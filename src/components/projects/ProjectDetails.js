import React from 'react';

const ProjectDetails =(props) => {
    const id = props.match.params.id;
    return(
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam reiciendis distinctio aperiam, impedit perferendis nemo nostrum accusantium quasi autem placeat a, dolore doloribus alias nihil. Culpa minima ut quo excepturi?</p>
                </div>
                <div className="card-action grey lighten-5 grey-text">
                    <div>Posted by the next ninja</div>
                    <div>2nd September, 2AM</div>
                </div>
            </div>
    )
}

export default ProjectDetails;