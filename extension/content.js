/*
* Product Hunt Back To Top Button (PHBTTB)
*/

const run = () => {
  const bodyEl = document.body;
  const buttonEl = createButton();
  bodyEl.appendChild(buttonEl);
};

const createButton = () => {
  const buttonTemplate  = `<div class="tk-back-to-top">
                            <a href="#" title="To the Top" >
                             <img src="http://i.imgur.com/4VFasrG.png"/>
                            </a>
                          </div>`;

  let buttonEl = document.createElement('div');
      buttonEl.innerHTML = buttonTemplate;

  return buttonEl;
};

window.onload = () => {
  run();
};
