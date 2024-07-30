import { formatNumber, formatNumberWithDecimal } from './utilities.js';
class Coin {
  constructor(
    name,
    symbol,
    img,
    price,
    price24Change,
    id,
    marketCap,
    rank,
    volume,
    curSupply,
    ath,
  ) {
    this.name = name;
    this.symbol = symbol;
    this.img = img;
    this.price = price;
    this.price24Change = price24Change;
    this.id = id;
    this.initialMarketCap = marketCap; // Save initial marketCap value
    this.initialCurSupply = curSupply; // Save initial curSupply value
    this.initialVolume = volume; // Save initial volume value
    this.marketCap = marketCap;
    this.rank = rank;
    this.volume = volume;
    this.curSupply = curSupply;
    this.ath = ath;
  }

  render(useFormattedValues) {
    const coinElement = document.createElement('tr');
    coinElement.classList.add('coin');
    coinElement.innerHTML = `
      <td>${this.rank}</td>
      <td>
        <div class="wrapper">
          <div>
            <img src="${this.img}" alt="${this.name} logo" />
          </div>
          <div class="name">
            <span>${this.name}</span>
            <span class="symbol">${this.symbol.toUpperCase()}</span>
          </div>
        </div>
      </td>
      <td class="align">$${formatNumberWithDecimal(this.price)}</td>
      <td class="align format">$${useFormattedValues
        ? formatNumber(this.marketCap)
        : formatNumberWithDecimal(this.initialMarketCap)
      }</td>
      <td class="align format">$${useFormattedValues
        ? formatNumber(this.curSupply)
        : formatNumberWithDecimal(this.initialCurSupply)
      }</td>
      <td class="align format">$${useFormattedValues
        ? formatNumber(this.volume)
        : formatNumberWithDecimal(this.initialVolume)
      }</td>
      <td class="align ${this.price24Change > 0 ? 'positive' : 'negative'
      }">${this.price24Change.toFixed(2)}%</td>
    `;
    coinElement.addEventListener('click', () => {
      window.location.href = `/pages/crypto-details.html?coin=${this.id}`;
    });
    return coinElement;
  }
}

class CoinList {
  constructor() {
    this.coins = [];
    this.coinsListElement = document.querySelector('.coins-list');
    this.useFormattedValues = window.innerWidth <= 800; // Check initial window width
  }

  addCoin(coin) {
    this.coins.push(coin);
    this.render();
  }

  render() {
    this.coinsListElement.innerHTML = `
      <thead>
        <tr>
          <th class="align-left">#</th>
          <th class="align-left">Name</th>
          <th>Price</th>
          <th>Market Price</th>
          <th>Circulating Supply</th>
          <th>Volume</th>
          <th>% 24h</th>
        </tr>
      </thead>
    `;
    for (let i = 0; i < this.coins.length; i++) {
      const coinElement = this.coins[i].render(this.useFormattedValues);
      this.coinsListElement.appendChild(coinElement);
    }
  }
}

const coinList = new CoinList();

window.onload = function() {
  fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd')
    .then((res) => res.json())
    .then((data) => {
      for (let i = 0; i < 25; i++) {
        const coin = new Coin(
          data[i].name,
          data[i].symbol,
          data[i].image,
          data[i].current_price,
          data[i].price_change_percentage_24h,
          data[i].id,
          data[i].market_cap,
          data[i].market_cap_rank,
          data[i].total_volume,
          data[i].circulating_supply,
          data[i].ath,
        );
        coinList.addCoin(coin);
      }
    });
};

if (!localStorage.getItem('accountBalance')) {
  localStorage.setItem('accountBalance', 0);
}

window.addEventListener('resize', function() {
  const screenWidth = window.innerWidth;
  const useFormattedValues = screenWidth <= 800;

  if (coinList.useFormattedValues !== useFormattedValues) {
    coinList.useFormattedValues = useFormattedValues;
    coinList.render();
  }
});
