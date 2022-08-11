document.getElementById('form').addEventListener('submit', search);

function search(event) {
  event.preventDefault();
  console.log("go");
  let el = document.getElementById('form');
  let adr = el.adress.value;
  var fail = "";
  if (adr == "")
  fail = "Enter adress";
  else if (adr.length != 42)
  fail = "Enter correct adress";
  if(fail != "")
    document.getElementById("error").innerHTML = fail;
  else {
      let linketh = "https://etherscan.io/address/" + adr;
      let linkbsc = "https://bscscan.com/address/" + adr;
      let linkpol = "https://polygonscan.com/address/" + adr;
      let linkavl = "https://avascan.info/blockchain/c/address/" + adr;
      let linkarb = "https://arbiscan.io/address/" + adr;
      let linkevm = "https://evm.evmos.org/address/" + adr;
      let linkcub = "https://www.cubescan.network/ru-ru/address/" + adr;
      let ch = "Check assets on "
      document.getElementById("eth").innerHTML = ch;
      document.getElementById("bsc").innerHTML = ch;
      document.getElementById("pol").innerHTML = ch;
      document.getElementById("avl").innerHTML = ch;
      document.getElementById("arb").innerHTML = ch;
      document.getElementById("evm").innerHTML = ch;
      document.getElementById("cub").innerHTML = ch;

      let a = document.querySelectorAll('a');
      a[0].href = linketh;
      a[0].textContent = "Etherium";
      a[1].href = linkbsc;
      a[1].textContent = "Binance Smart chain";
      a[2].href = linkpol;
      a[2].textContent = "Polygon";
      a[3].href = linkavl;
      a[3].textContent = "Avalanche";
      a[4].href = linkarb;
      a[4].textContent = "Arbitrum One";
      a[5].href = linkevm;
      a[5].textContent = "Evmos";
      a[6].href = linkcub;
      a[6].textContent = "Cube";

  }

}
