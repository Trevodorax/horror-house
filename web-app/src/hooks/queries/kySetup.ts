import ky from "ky"

export const query = ky.create({
    
    prefixUrl: "http://localhost:3333",
    headers: {
      Authorization: "token"
    }
})