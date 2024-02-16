const TOKEN = localStorage.getItem('token');
const request = async function ({ url, method = 'POST',data={} }) {
    if (!url) return Promise.reject('参数错误！')
    let headers = {}
    if (TOKEN) {
        headers.Authorization = TOKEN
    }
    return axios({
        method,
        url,
        headers,
        data
    }).then((res) => {
        if (res.data.code == -1) {
            alert(res.data.message)
            return Promise.reject(res.data)
        } else if (res.data.code == 200) {
            return Promise.resolve(res.data.data)
        } else {
            if(res.data.code==-4){
                alert('请先登陆！')
            }
            return Promise.resolve(res.data)
        }
        
    }).catch((err) => {
        return Promise.reject(err)
    })
}