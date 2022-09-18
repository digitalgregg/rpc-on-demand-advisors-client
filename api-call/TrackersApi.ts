import api from "../api"

export const fetchTrackers = async (team_id:string)=>{
    return await api.get('/api/trackers/'+team_id)
}

export const updateTrackers = async (obj:any)=>{
    return await api.put('/api/trackers',obj)

}