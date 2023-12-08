import React from 'react'

type designProps = {
    img: string,
    like: number,
    view: number,
    nickname: string,
    thumbnail: string,
    name: string
}

export default function DesignCard(props:designProps){
    return(
        <div className="design-card">
            <div className="d-c-image">
                <img  className="d-c-img" src={props.img} alt="images" />
                <div className="img-description">
                    <p>
                        {props.name}
                    </p>
                </div>
            </div>
            <div className="d-c-footer">
                <div className="d-c-author">
                    {/* <img src={thumbnail} alt="" /> */}
                    <i className="fa-solid fa-circle"></i>
                    {props.nickname}
                </div>
                <div className="like-count">
                    <i className="fa-regular fa-heart"></i> {props.like}
                </div>
                <div className="view-count">
                    <i className="fa-regular fa-eye"></i> {props.view}
                </div>
            </div>
        </div>
    )
}