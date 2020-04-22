function number() {
  const oDiv = document.createElement('div');
  oDiv.innerHTML = 0;
  document.body.appendChild(oDiv);
  oDiv.onclick = () => {
    this.innerHTML = this.innerHTML * 1 + 1;
  };
}

export default number;
