document.getElementById('exploreChaptersBtn').addEventListener('click', function() {
  console.log("Botão 'Explorar os Capítulos' clicado"); 
  document.getElementById('finalScreen').style.display = 'none';
  document.getElementById('explorationScreen').style.display = 'block'; 
});


document.querySelectorAll('.window').forEach(windowElement => {
  windowElement.addEventListener('click', function() {
    const chapter = this.getAttribute('data-chapter');
    console.log(`Janela de capítulo clicada: ${chapter}`); 
    
    if (chapter === 'restart') {
      console.log('Recomeçar tudo');
      window.location.href = '../../../index.html';
    } else if (chapter === 'chapter1') {
      console.log('Indo para Capítulo 1');
      window.location.href = '../01/index.html';
    } else if (chapter === 'chapter2') {
      console.log('Indo para Capítulo 2');
      window.location.href = '../02/index.html';
    } else if (chapter === 'chapter3') {
      console.log('Indo para Capítulo 3');
      window.location.href = '../03G/index.html';
    } else if (chapter === 'chapter4') {
      console.log('Indo para Capítulo 4');
      window.location.href = '../04/index.html';
    } else if (chapter === 'quiz') {
      console.log('Indo para Quiz');
      window.location.href = '../05/index.html';
    } else if (chapter === 'chapter5') {
      console.log('Indo para Capítulo 5');
      window.location.href = '../06/index.html';
    } else {
      console.log('Capítulo desconhecido, indo para o Capítulo 1');
      window.location.href = '../01/index.html';
    }
  });
});
