// ajax 加载（请求和响应） css
getCSS.onclick = () => { // 在点击事件里面，做请求
    const request = new XMLHttpRequest() // readyState = 0
        // 第一步：创建 XMLHttpRequest 对象
    request.open('GET', '/style.css') // readyState = 1
        // 第二步：调用对象的 open 方法：request.open(method,url)
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            console.log('下载完成');
            if (request.status >= 200 && request.status < 300) // 如果 readyState 在200到300之间，说明路径正确
            {
                const style = document.createElement('style')
                    // 创建一个新的 css 标签
                style.innerHTML = request.response
                    // 将获取到的 css 内容写入到新的 css 标签里面
                document.head.appendChild(style)
                    // 最后将写入了内容的 css 标签插入到 html 的 head 里面
            } else {
                alert('加载 css 失败')
            }
        }
    }
    request.send(); // readyState = 2
    // 调用对象的 send 方法（发送请求）
}

getJS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/2.js')
    request.onload = () => {
        console.log(request.response);
        const script = document.createElement('script')
        script.innerHTML = request.response
        document.body.appendChild(script)
    }
    request.onerror = () => {
        console.log('失败了');
    }
    request.send()
}
getHTML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/3.html')
    request.onload = () => {
        console.log(request.response);
        const div = document.createElement('div')
        div.innerHTML = request.response
        document.body.appendChild(div)
    }
    request.onerror = () => {}
    request.send()
}

getXML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/4.xml')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const dom = request.responseXML
                const text = dom.getElementsByTagName('warning')[0].textContent
                console.log(text.trim());
            }
        }
    }
    request.send()
}

getJSON.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/5.json')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const object = JSON.parse(request.response)
                myName.textContent = object.name
            }
        }
    }
    request.send()
}


let n = 1
getPage.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', `/page${n+1}`)
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const array = JSON.parse(request.response)
                array.forEach(item => {
                    const li = document.createElement('li')
                    li.textContent = item.id
                    xxx.appendChild(li)
                })
                n += 1
            }
        }
    }
    request.send()
}