import React from 'react';
import Button from '../button/button';
import ProjectCard from  '../card/projectCard';
import ProjectCarousel from '../carousel/projectCarousel/projectCarousel';

const CardData = [
    {
        imageSrc: 'images/project-card.png',
        alt: 'Card image',
        postLink: 'industry.html',
        title: 'Project Heading',
        text: 'Popularised in the 1960s with the release Letraset sheets containing Lorem.'

    }
];

const Project = () => {
    return (
        <section className="projects-section">
            <h3>Projects</h3>
            <div className="container projects-wrapper">
                <div className="row">
                    {
                        CardData.map((element, index) => {
                            return (
                                <ProjectCard
                                    imageSrc={element.imageSrc}
                                    alt={element.alt}
                                    postLiink={element.postLink}
                                    title={element.title}
                                    text={element.text}
                                    key={index}
                                />
                            )
                        })
                    }
                    <ProjectCarousel />
                </div>
            </div>
            <div className="text-center">
                <Button link={"industry.html"} nameClass={"button-main button-main-margin"} text={"Full Projects"} />
            </div>
        </section>
    );
};

export default Project;