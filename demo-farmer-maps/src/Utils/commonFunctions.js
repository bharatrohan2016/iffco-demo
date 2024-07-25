

export const quotes = [
    "Farming the future with technology.",
    "Seeds of innovation grow the future of agriculture.",
    "Tech in the soil, growth in the future.",
    "Smart farming, brighter harvests.",
    "Plants and pixels: cultivating the future.",
    "From plows to pixels: the evolution of agriculture.",
    "Sow the bytes, reap the innovation.",
    "In the fields of progress, technology is the crop.",
    "Agriculture meets innovation in every seed.",
    "Harvesting data, growing success.",
    "Smart tech, brighter agri-future.",
    "Cultivating tomorrow with today's technology.",
    "Sow the tech, reap the harvest.",
    "In the fields of agriculture, technology is the new plow.",
    "Seeds of innovation, fields of prosperity.",
    "Agriculture meets algorithms for a fruitful future.",
    "Planting progress, harvesting success.",
    "Farming the future with bytes and bales.",
    "From plows to pixels, cultivating a tech-savvy harvest.",
    "Smart farming, growing solutions.",
    "In the world of agriculture, technology is the new sunrise."
]

export function getRandomQuote() {
    let n = quotes.length-1;
    let randomIndex = Math.floor(Math.random() * (n + 1));
    return quotes[randomIndex];
}



export function adjustWidth(isSidebarOpen){
    
    const screenWidth = window.innerWidth;
    if(screenWidth>991){
        if(isSidebarOpen===true){
            
            document.getElementsByClassName('main-panel')[0].style.width = 'calc(100% - 70px - 0.55rem)';
            document.getElementsByClassName('main-panel')[0].style.marginLeft = 'calc(70px + 0.55rem)';
            document.body.classList.add('sidebar-icon-only');
            return false;
        }else{
            document.getElementsByClassName('main-panel')[0].style.width = 'calc(100% - 260px)';
            document.getElementsByClassName('main-panel')[0].style.marginLeft = 'calc(227px + 2rem)';
            document.body.classList.remove('sidebar-icon-only');
            return true;
        }
    }else{
      
        document.getElementsByClassName('main-panel')[0].style.width = '100%';
        if(isSidebarOpen===true){
            return false;
        }else{
            return true;
        }
    }
    
}