

import React, {useState, useEffect} from 'react'


const Searchwhether = () => {
    
    const [search, setSearch] = useState("london");
    const [data, setData] = useState([]);
    const [input, setInput] = useState([]);
    
    
    
    let conmponentMounted = true;

    
    useEffect(() =>{
        const fetchWeather =   async () => {
            const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=London&appid=2602f8756a99c2a8b3c384ad72cbdc5b");
            if(conmponentMounted){
                setData(await response.json());
                console.log(data);
            
            }
            return () => {
                conmponentMounted = false;
            }
        }
        fetchWeather()
        
    },[search]);

    // Date
    let d = new Date();
    let date = d.getDate();
    let year = d. getFullYear();
    let month = d.toLocaleString("default",{month:'long'});
    let day = d.toLocaleString("default",{weekday:'long'});

    // Time
    let time = d.toLocaleString([],{
        hour : '2-digit',
        minute: '2-digit',
        second: '2-digit'

        

    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearch(input)

    }

    
    return (
        <div>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div class="card text-white text-center border-0">
                            <img src="https://source.unsplash.com/random/600×900/?$weather █" class="card-img" alt="..." />
                            <div class="card-img-overlay">
                                <form onSubmit={handleSubmit}>
                                    <div class="input-group mb-4 w-75 mx-auto">
                                        <input type="search" class="form-control" placeholder="Seacrch City" aria-label="Recipient's username" aria-describedby="basic-addon2" 
                                         name="search"  value={input} onChange={(e)=>setInput(e.target.value)} required />
                                        <button type='submit' class="input-group-text" id="basic-addon2">
                                            <i className="fas fa-search"></i>
                                        </button>
                                    </div>

                                </form>
                             <div className="bg-dark bg-opacity-50 py-3">
                                <h2 class="card-title">{data.name}</h2>
                                <p class="card-text lead">
                                    {day}, {month} {date}, {year} 
                                    <br></br>
                                    {time}
                                </p>
                        <hr />
                        <i className="fas fa-cloud fa-4x"></i>
                        <h1 className="fw-bolder mb-3 ">{data.main.temp}</h1>
                        <p className="lead fw-bolder mb-0">Cloud</p>
                        <p className="lead">33.01&deg;C | 35.01&deg;C</p>
    
            
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Searchwhether
