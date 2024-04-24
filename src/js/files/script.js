const searchIcon = document.getElementById("search-icon");
const search = document.getElementById("search");
const searchOverlay = document.getElementById("overlay");
const searchForm = document.getElementById("search-form");
const body = document.querySelector("body");


searchIcon.addEventListener("click", ()=>{
   searchForm.classList.add("_open")
   searchOverlay.style.display = "block";
})

function bodyLock() {
	const lockPaddingValue = window.innerWidth - document.querySelector('.search').offsetWidth + 'px';

	if (lockPadding.length > 0) {
		for (let index = 0; index < lockPadding.length; index++) {
			const el = lockPadding[index];
			el.style.paddingRight = lockPaddingValue;
		}
	}
	body.style.paddingRight = lockPaddingValue;
	body.classList.add('lock');

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

function bodyUnLock() {
	setTimeout(function () {
		if (lockPadding.length > 0) {
			for (let index = 0; index < lockPadding.length; index++) {
				const el = lockPadding[index];
				el.style.paddingRight = '0px';
			}
		}
		body.style.paddingRight = '0px';
		body.classList.remove('lock');
	}, timeout);

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}



// document.addEventListener("click", (e) => {
//    const isClosest = e.target.closest(searchForm);
//    if (!isClosest && searchForm.classList.contains("_open")) {
//       searchForm.classList.remove("_open");
//     }
// });
   // function bodyUnLock() {
   //    setTimeout(function () {
   //       if (lockPadding.length > 0) {
   //          for (let index = 0; index < lockPadding.length; index++) {
   //             const el = lockPadding[index];
   //             el.style.paddingRight = '0px';
   //          }
   //       }
   //       body.style.paddingRight = '0px';
   //       body.classList.remove('lock');
   //    }, timeout);
   
   //    unlock = false;
   //    setTimeout(function () {
   //       unlock = true;
   //    }, timeout);
   // }

   // function searchClose(searchForm, doUnlock = true) {
   //      searchForm.classList.remove("_open");
   //      if(doUnlock) {
   //        bodyUnlock();
   //      }
   //    }