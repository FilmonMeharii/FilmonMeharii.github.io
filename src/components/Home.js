import React from 'react';

const Home = () =>{
    return(
        <div className='home'>
            <header>
                <h1>Welcome Filmon Mehari</h1>
            </header>
            <section>
                <h2>About Me</h2>
            </section>
            <section>
                <h2>Projects</h2>
                <div className="projects"></div>
            </section>
            <footer>
                <p>@Copyright Filmon Mehari</p>
            </footer>
        </div>
    );
}


export default Home;