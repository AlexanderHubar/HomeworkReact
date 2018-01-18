import React from 'react';
import PostCard from '../card/postCard';
import Button from '../button/button';

const listCardData = [
    {
        link: 'blog-post.html',
        image: 'images/our-blog-slide-img.png',
        alt: 'post1',
        date: 'February 22, 2016',
        title: 'Blog Heading here',
        text: 'Established fact that a reader will be distracted by the readable of a page when looking at its layout...'
    },
    {
        link: 'blog-post.html',
        image: 'images/our-blog-slide-img.png',
        alt: 'post2',
        date: 'February 22, 2016',
        title: 'Blog Heading here',
        text: 'Established fact that a reader will be distracted by the readable of a page when looking at its layout...'
    }
];

const Blog = () => {
    return (
        <section className="our-blog-section">
            <h3>Our Blog</h3>
            <div className="container">
                <div className="row justify-content-center">

                    {
                        listCardData.map((element, index) => {
                            return (
                                <PostCard link={element.link} image={element.image} alt={element.alt} date={element.date} title={element.title} text={element.text} key={index} />
                            )
                        })
                    }

                </div>
            </div>
            <div className="text-center">
                <Button link={"blog.html"} nameClass={"button-main button-main-margin"} text={"Full blog"} />
            </div>
        </section>
    );
};

export default Blog;