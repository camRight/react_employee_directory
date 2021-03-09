import axios from "axios";


// axios is probably unnecessary. 

function App() {
    const [state, setState] = useState([])
    useEffect(() => {
        const BASEURL = "https://randomuser.me/api/";

        fetch(BASEURL,
            {
                "method": "GET",
                "headers": {
                    "content-type": "application/json",
                    "accept": "application/json"
                }
            }) .then(
                res => setState(res.data)
            )

    }, [])

    return (
        <>
        {state.map( d => <div>{d}</div>)}
        </>
    )

    console.log()
}

export default Api;