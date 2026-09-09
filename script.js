.slider{
    position:relative;
    max-width:700px;
    margin:30px auto 0;
    display:flex;
    align-items:center;
    gap:15px;
}

.slider-window{
    overflow:hidden;
    width:100%;
    border-radius:12px;
}

.slider-track{
    display:flex;
    transition:transform 0.4s ease;
}

.slider-track img{
    width:100%;
    min-width:100%;
    height:500px;
    object-fit:cover;
    display:block;
}

.slider-btn{
    background:none;
    border:none;
    color:#d4af37;
    font-size:40px;
    cursor:pointer;
    padding:10px;
}

.slider-btn:hover{
    transform:scale(1.15);
}

@media (max-width:600px){

    .slider{
        gap:5px;
    }

    .slider-track img{
        height:400px;
    }

    .slider-btn{
        font-size:30px;
        padding:5px;
    }

}
