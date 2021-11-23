function Vanish(ID)
{
  let item = document.getElementById(`button-${ID}`);
  item.classList.replace('patrat', 'vanish');
}