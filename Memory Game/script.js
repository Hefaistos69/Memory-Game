let objects = [];
let currentObject = undefined;


function win()
{
  for(let i = 0; i < objects.length; i ++)
  {
    if(objects[i].show == false)
    {
      return;
    }
  }
  document.getElementById('win').innerHTML = "You win!";
}

function Search(ID)
{
  for(let i = 0; i < objects.length; i ++)
  {
    if(ID == objects[i].id)
    {
      return objects[i];
    }
  }
}

function Step(ID)
{
  if(currentObject === undefined)
  {
    currentObject = Search(ID);
    Vanish(ID);
  }
  else
  {
    let x = Search(ID);
    Vanish(ID);
    if(currentObject.class == x.class)
    {
      alert('Nice');
    }
    else
    {
      alert('Not so nice');
      Unvanish(ID);
      Unvanish(currentObject.id);
    }
    currentObject = undefined;
  }
  win();
}

function Unvanish(ID)
{
  Search(ID).show = false;
  Post();
}

function Vanish(ID)
{
  Search(ID).show = true;
  Post();
}

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
}

function AddItem(ID, className)
{
  let item = {
    id: ID,
    class: className,
    show: false
  }
  objects.push(item);
  localStorage.setItem("storage", JSON.stringify(item));
}

function Post()
{
  let d = document.getElementById('post');
  d.innerHTML = "";
  for(let i = 0; i < objects.length; i ++)
  {
    let x = objects[i];
    d.innerHTML += `
    <div class="overlap">
      <div class="box img ${x.class}"></div>
      <button class="box stack-top ${x.show ? "vanish" : "patrat"} grid-item" id="button-${x.id}" type="button" ${!x.show ? `onclick="Step(${x.id})"` : ``}></button>
    </div>
    `
  }
  console.log("hei");
}


AddItem(1, "monkey");
AddItem(2, "monkey");
AddItem(3, "hand");
AddItem(4, "hand");
AddItem(5, "whatsapp");
AddItem(6, "whatsapp");
AddItem(7, "lightning");
AddItem(8, "lightning");
AddItem(9, "like");
AddItem(10, "like");
AddItem(11, "steam");
AddItem(12, "steam");

shuffleArray(objects);

Post();