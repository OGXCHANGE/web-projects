window.onload = function() {
    showAlert('Clamp is deployed on the Polygon mainnet but still undergoing testing. There is a risk of losing your funds and cryptocurrency. To go back to Clamp`s main page click here.');
  }
  function showAlert(message) {
    var alertBox = document.getElementById('alert');
    alertBox.innerHTML = '<span>' + message + '</span><button onclick="hideAlert()">X</button>';
    alertBox.style.display = 'block';
  }

  function hideAlert() {
    document.getElementById('alert').style.display = 'none';
  }

  function closeAlert() {
    document.getElementById('alert').style.display = 'none';
  }