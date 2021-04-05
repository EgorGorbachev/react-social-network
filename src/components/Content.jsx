import Avatar from '../images/avatar.png'

function Content() {
    return (
        <section className='app-content'>
            <div className='image-wrapper'>
                <img className='app-content-image' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS56sGIQLMqsFRnaeFLaidqLvlgnWdMlYvGWw&usqp=CAU"></img>
                <div className='image-buster'>
                    <div className='app-content-info'>
                        <img className='avatar' src={Avatar} alt=""/>
                        <div className='description'>
                            <span className='name'>Egor Gorbachev</span>
                            <span className='city'>Minsk</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div>
                My posts
            <div>
                New post
            </div>
            <div>
                Post 1
            </div>
            <div>
                Post 2
            </div>
            </div>
        </section>
    );
};

export default Content;