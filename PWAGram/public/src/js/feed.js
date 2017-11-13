var shareImageButton = document.querySelector('#share-image-button');
var createPostArea = document.querySelector('#create-post');
var closeCreatePostModalButton = document.querySelector('#close-create-post-modal-btn');

function openCreatePostModal() {
  createPostArea.style.display = 'block';

  if (deferredPrompt) {
    // alert('ada deferredPrompt');
    console.log(deferredPrompt);
    deferredPrompt.prompt();

    deferredPrompt.userChoice
                  .then(function(choiceResult) {
                    console.log(choiceResult.outcome);
                    // alert(choiceResult.outcome);

                    if(choiceResult.outcome == 'dismissed') {
                      console.log('User cancelled home screen install');
                    } else {
                      console.log('User added to home screen');
                    }
                  });
    
  } else {
    // alert('no deferredPrompt');
  }
  deferredPrompt = null;
}

function closeCreatePostModal() {
  createPostArea.style.display = 'none';
}

shareImageButton.addEventListener('click', openCreatePostModal);

closeCreatePostModalButton.addEventListener('click', closeCreatePostModal);
