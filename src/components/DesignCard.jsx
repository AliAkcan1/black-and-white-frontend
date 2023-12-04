export default function DesignCard({img, like, view, nickname, thumbnail, name}){
    return(
        <div className="design-card">
            <div className="d-c-image">
                <img  className="d-c-img" src={img} alt="images" />
                <div className="img-description">
                    <p>
                        {name}
                    </p>
                </div>
            </div>
            <div className="d-c-footer">
                <div className="d-c-author">
                    {/* <img src={thumbnail} alt="" /> */}
                    <i className="fa-solid fa-circle"></i>
                    {nickname}
                </div>
                <div className="like-count">
                    <i className="fa-regular fa-heart"></i> {like}
                </div>
                <div className="view-count">
                    <i className="fa-regular fa-eye"></i> {view}
                </div>
            </div>
        </div>
    )
}