import axios from "axios";

export default class PostService {
    static async getAll(limit = 10, page = 1) {
        // axios позволяет через params указывать параметры get-запроса в урле
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _limit: limit,
                _page: page
            }
        })
        return response
    }
}