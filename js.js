const lookFor = /\<div jscontroller=.*data-view-file-link="\/\/drive\.google\.com\/u\/0\/open\?id=(.*)&amp;usp=forms_web">.*/

function retrieveImages() {
                jQuery('div[data-view-file-link]').each( (i, val) => {
                                jQuery(val).replaceWith(jQuery(val).prop('outerHTML').replace(lookFor, '<a target="_blank" href="//drive.google.com/u/0/open?id=$1"><img class="rx_drivelink_preview_image" src="//drive.google.com/uc?export=download&id=$1" /></a>'));
                } )
}

retrieveImages()
setTimeout( retrieveImages, 1000);
setInterval( retrieveImages, 3000 );
