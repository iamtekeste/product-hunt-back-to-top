/*
* Product Hunt Back To Top Button (PHBTTB)
*/

const createButton = () => {
  const imgURL = chrome.extension.getURL("button.png");
  const buttonTemplate  = `<div class="tk-back-to-top">
                            <a href="#" title="To the Top" >
                             <img src="${imgURL}"/>
                            </a>
                          </div>`;

  let buttonEl = document.createElement('div');
      buttonEl.innerHTML = buttonTemplate;

  return buttonEl;
};

const smoothScroll = (event) => {
  //duration of the top scrolling animation (in ms)
  const scroll_top_duration = 700;
  event.preventDefault();
	$('body,html').animate({
		scrollTop: 0 ,
	 	}, scroll_top_duration
	);
};

const handleScroll = () => {
  // browser window scroll (in pixels) after which the "back to top" link is shown
  const offset = 300,
    //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
      offset_opacity = 1200,
      $back_to_top = $('.tk-back-to-top');

      ( $(window).scrollTop() > offset ) ? $back_to_top.addClass('tk-back-to-top-is-visible')
                                        : $back_to_top.removeClass('tk-back-to-top-is-visible tk-back-to-top-fade-out');
  		if( $(window).scrollTop() > offset_opacity ) {
  			$back_to_top.addClass('tk-back-to-top-fade-out');
  		}
};

const run = () => {
  const bodyEl = document.body;
  const buttonEl = createButton();
  bodyEl.appendChild(buttonEl);

  buttonEl.firstElementChild.addEventListener('click', (event) => {
    smoothScroll(event);
  });

  window.addEventListener('scroll', () => {
    handleScroll();
  });
};

window.addEventListener('load', run);
