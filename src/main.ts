import './style.css'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="body">
        <h2>There was an error connecting to YT music, please check your internet connection</h2>
  </div>

`


postMessage({ payload: 'removeLoading' }, '*')
