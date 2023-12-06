import DesignList from "./DesignList.jsx"

export default function Main(){
    return(
        <main className="main">
            <div className="main-1">
            <div className="main-column-1">
                <h1>
                    Let&apos;s see <br /> what my clients <br /> say about me
                </h1>
            </div>
            <div className="main-column-2">
                <div className="main-column-2-row-1">
                    <div className="main-article-1 article">
                        <p>&quot; I had the pleasure of working with Ali on a recent project that my company was
                        running. We are amazed by his creativity and productivity. I and my company
                        absolutely recommend working with Ali on the next projects. &quot;</p>
                    </div>
                    <div className="main-client-1 client">   
                        <div className="client-info">
                            <img 
                                src="https://randomuser.me/api/portraits/med/men/67.jpg" 
                                alt="" 
                            />
                            <div>
                                <p>Avery Vollero</p>
                                <p> <span className="ceo-of">CEO of</span> Roasty</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-column-2-row-1">
                    <div className="main-article-1 article">
                        <p>&quot; Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam magni, pariatur veniam architecto voluptates vitae. Magni doloribus adipisci quos quisquam est necessitatibus assumenda? In quo error eveniet animi nihil ipsa? &quot;</p>
                    </div>
                    <div className="main-client-1 client">   
                        <div className="client-info">
                            <img 
                                src="https://randomuser.me/api/portraits/med/men/69.jpg" 
                                alt="" 
                            />
                            <div>
                                <p>Mikey Carini</p>
                                <p> <span className="ceo-of">CTO of</span> Swafty Tech Industries</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className="main-2">
                <DesignList />
            </div>
        </main>
    )
}