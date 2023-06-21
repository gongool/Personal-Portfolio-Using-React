import React, { useEffect, useState } from 'react';
import { projectsData } from './Data';
import { projectsNav } from './Data';
import WorkItems from "./WorkItems";

const Works = () => {
    // State variables
    const [item, setItem] = useState({ name: 'all' }); // Selected item filter
    const [projects, setProjects] = useState([]); // Filtered projects to display
    const [active, setActive] = useState(0); // Active filter index

    // useEffect hook to update filtered projects when the item filter changes
    useEffect(() => {
        if (item.name === "all") {
            // If "all" is selected, set all projects to be displayed
            setProjects(projectsData);
        } else {
            // Filter projects based on the selected category
            const newProjects = projectsData.filter((project) => {
                return project.category.toLowerCase() === item.name;
            });
            setProjects(newProjects);
        }
    }, [item]);

    // Handle click event on filter items
    const handleClick = (e, index) => {
        setItem({ name: e.target.textContent.toLowerCase() }); // Update the selected item filter
        setActive(index); // Update the active filter index
    };

    return (
        <>
            <div className="work__filters">
                {/* Render the filter items */}
                {projectsNav.map((item, index) => {
                    return (
                        <span
                            onClick={(e) => {
                                handleClick(e, index);
                            }}
                            className={`work__item ${active === index ? 'work-active' : ''}`}
                            key={index}
                        >
                            {item.name}
                        </span>
                    )
                })}
            </div>

            <div className="work__container container">
                {/* Render the work items based on the filtered projects */}
                {projects.map((item) => {
                    return <WorkItems item={item} key={item.id} />
                })}
            </div>
        </>
    )
}

export default Works;
