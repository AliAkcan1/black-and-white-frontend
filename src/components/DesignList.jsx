import designs from '../assets/data.json'
import DesignCard from './DesignCard'

export default function DesignList(){
    const listDesigns = designs.map(design => {
        return(
            <li className='design-li' key={design.id}>
                <DesignCard 
                    img={design.imgPath}
                    like={design.like}
                    view={design.view}
                    nickname={design.nickname}
                    name={design.name}
                    key={design.id}
                />
            </li>
        )
    })
    return(
        <ul className='design-list-ul'>
            {listDesigns}
        </ul>
    )
}