import React from 'react'

function ProjectList({ projects }) {

    return projects.map((project, i) => {
        return (
            <div className="project" key={i}>
                <img src={project.img} alt="" />
            </div>
        );
    });
}

export default ProjectList