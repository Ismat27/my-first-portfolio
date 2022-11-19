import React from 'react'
import styled from 'styled-components'

import works from '../data/works'

const LatestWork = () => {
  return (
    <Wrapper>
        <h1 className='h1-pink section-title'>Projects</h1>
        {/* <p className='project-intro'>Some of my projects are as below</p> */}
        <div className='works'>
            {
                works.map((work, index) => {
                    const {title, url, image, description} = work
                    return (
                        <div key={index} className='work'>
                            <article>
                                <img src={image} alt={title} />
                            </article>
                            <div className='overlay'>
                                <article>
                                    <p className='title'>{title}</p>
                                    <p className='desc'>{description}</p>
                                    <a className='btn' href={url} rel="noreferrer" target={'_blank'}>view</a>
                                </article>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
width: 90%;
margin: auto;
padding-block: 3rem;
h1 {
    font-size: 30px;
    font-weight: 500;
    opacity: .7;
    color: #FF3E78;
}
.project-intro {
    font-size: 20px;
}
img {
    width: 300px;
    height: 300px;
}
.works {
    display: grid;
    justify-content: center;
    margin-top: 20px;
}
.work {
    cursor: pointer;
    position: relative;
}
.overlay {
    display: grid;
    padding: 10px;
    text-align: center;
    place-items: center;
    position: absolute;
    width: 100%;
    height: 100%;
    box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.2);
    background-color: #FFFFFF;
    left: 0;
    top: 0;
    opacity: 0;
}
.work:hover {
    .overlay {
        opacity: 1;
    }
}
.title {
    color: var(--title-color);
    text-transform: capitalize;
    font-weight: 600;
}
.btn {
    font-size: 20px;
    margin: 1rem auto 0 auto;
    width: 150px;
}

@media (min-width: 576px) {
    h1 {
    font-size: 40px;
    font-weight: 600;
}
    .works {
        grid-template-columns: repeat(2, auto);
        justify-content: start;
    }
}
@media (min-width: 768px) {
    .works {
        grid-template-columns: repeat(3, auto);
        justify-content: start;
    }
}
@media (min-width: 992px) {
    .works {
        display: grid;
        grid-template-columns: repeat(4, auto)
    }
}
`

export default LatestWork