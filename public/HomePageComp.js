function HomeComp(){
    return (
        <div>
            <h1 style={{textAlign:"center"}}>THIS IS HOME PAGE</h1>
            <h2 style={{textAlign:"center"}}>Discover Amazing Things</h2>
            <p style={{textAlign:"center"}}>Explore our wide range of products and services that will leave you impressed.</p>
        </div>
    )
}

function ServiceComp (){
    return(
        <div>
        <p>Sorry ! No service Available RightNow </p>
        <p>Try after few Months</p>
        </div>
        
    )
}

function AboutComp(){
    return(
        <div>
            <p>I will tell Your Later , please wait.......</p>
        </div>
    )
}

function Contact(){
    return(
        <div>
            <a href="#">Gmail id : mahendrakumar27697@gmail.com</a>
            <p>Mobile no: 7665770360</p>
        </div>
    )
}

export {HomeComp,ServiceComp,AboutComp,Contact}