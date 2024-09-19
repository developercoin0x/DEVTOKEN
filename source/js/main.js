const LISTS = {
    "devcoinswap-eth": {
        "name": "DevcoinSwap Ethereum",
        "keywords": ["devcoinswap", "default", "ethereum"],
        "logoURI": "https://devcoinx.top/logo.png",
        "sort": false
    },
    "devcoinswap-extended": {
        "name": "DevcoinSwap Extended",
        "keywords": ["devcoinswap", "extended"],
        "logoURI": "https://devcoinx.top/logo.png",
        "sort": true
    },
    "devcoinswap-top-270": {
        "name": "DevcoinSwap Top 270",
        "keywords": ["devcoinswap", "top 270"],
        "logoURI": "https://devcoinx.top/logo.png",
        "sort": true
    },
     "devcoinswap-bnb": {
        "name": "DevcoinSwap Bnb",
        "keywords": ["devcoinswap", "bnb"],
        "logoURI": "https://devcoinx.top/logo.png",
        "sort": true
    }
};
   
   const lis = Object.keys(LISTS).map((list) => {
      return `
        <li>
          <a href="/token/${list}.json">${list}</a>
        </li>
        <br />
      `
    });
    const ul = document.createElement('ul');
    ul.innerHTML = lis.join('');
    document.body.appendChild(ul);
