
import React from 'react'

function ProjectDetails(props) {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nostrum quibusdam, vitae praesentium dolore tempora? Laborum vero numquam culpa, similique beatae soluta perferendis provident, assumenda, illum ad porro facilis ipsam.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Dip</div>
                    <div>17, Nov</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
