import axios from "axios";
const tocken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzkxZTQ1NGNlNjgzZTQ5NTIzM2RlZTgwYjM2ODVkOCIsInN1YiI6IjYwM2I2MmQxY2I1YzhlNjQ2ZTIxZGU1MyIsInNjb3BlcyI6WyJhcGlfc"
export default axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers:{
        Authorization: `Bearer ${tocken}`
    }
})