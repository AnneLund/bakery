import React from 'react'
import {useEffect} from 'react'

const Page = (props) => {

const {children, title, description, subtitle} = props;

useEffect(() => {
document.title = title;
if (description) {
    document.querySelector('meta[name="description"]').setAttribute("content", description);
}
}, [title, description])

return(
    <>
    <h1>{title}</h1>
    <h2>{subtitle}</h2>
    <ContentWrapper>{children}</ContentWrapper>
    </>
)
}

const ContentWrapper = (props) => {
    return(
        <section className='container'>
            {props.children}
        </section>
    )
}

export {Page, ContentWrapper};
